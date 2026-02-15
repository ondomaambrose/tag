import { useEffect, useRef } from "react";
import { doc, updateDoc, increment, setDoc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

export const PwaTracker = () => {
  const loggedRef = useRef(false);

  useEffect(() => {
    // 1. Function to log stats to Firebase
    const logPwaUsage = async (type: "new_install" | "existing_user") => {
      // Prevent double logging in one session
      if (loggedRef.current) return;

      // Check if we already logged this SPECIFIC user device
      // (Using localStorage to avoid counting the same person 50 times)
      const hasLogged = localStorage.getItem(`pwa_logged_${type}`);
      if (hasLogged) return;

      console.log(`📱 Tracking PWA: ${type}`);
      loggedRef.current = true;

      try {
        // We use different counters for "New Installs" vs "Active Users"
        const statsRef = doc(db, "stats", "pwa_analytics");
        const docSnap = await getDoc(statsRef);

        const updateData =
          type === "new_install"
            ? {
                new_installs: increment(1),
                last_install: new Date().toISOString(),
              }
            : {
                active_installed_users: increment(1),
                last_active: new Date().toISOString(),
              };

        if (docSnap.exists()) {
          await updateDoc(statsRef, updateData);
        } else {
          await setDoc(statsRef, {
            new_installs: type === "new_install" ? 1 : 0,
            active_installed_users: type === "existing_user" ? 1 : 0,
            first_created: new Date().toISOString(),
          });
        }

        // Mark this device as counted so we don't spam the database
        localStorage.setItem(`pwa_logged_${type}`, "true");
      } catch (error) {
        console.error("Error tracking PWA:", error);
      }
    };

    // 2. Listener for NEW installations (The code I gave you before)
    const handleAppInstalled = () => logPwaUsage("new_install");
    window.addEventListener("appinstalled", handleAppInstalled);

    // 3. CHECK FOR EXISTING USERS (The new part)
    // If the app is running in "standalone" mode, it means it's installed & open.
    const isStandalone =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isStandalone) {
      logPwaUsage("existing_user");
    }

    return () => {
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  return null;
};
