import { useEffect, useState } from "react";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import type { Unsubscribe } from "firebase/firestore";
import { db } from "../firebase";

export const OfflineSync = () => {
  const [status, setStatus] = useState<
    "idle" | "syncing" | "listening" | "error"
  >("idle");

  useEffect(() => {
    // Array to hold unsubscribe functions to stop listening when component unmounts
    const unsubscribers: Unsubscribe[] = [];

    const startSync = async () => {
      if (!navigator.onLine) {
        setStatus("idle");
        return;
      }

      try {
        setStatus("syncing");
        console.log("📡 Establishing Real-time Sync...");

        // 1. Get the list of courses first
        const coursesRef = collection(db, "courses");
        const coursesSnapshot = await getDocs(coursesRef);

        if (coursesSnapshot.empty) {
          console.log("No courses found.");
          setStatus("idle");
          return;
        }

        // 2. Set up a listener for EVERY course's questions
        // This puts a "ear" on the database. If data changes,
        // Firebase automatically downloads the difference and updates the cache.
        coursesSnapshot.docs.forEach((courseDoc) => {
          const questionsRef = collection(
            db,
            "courses",
            courseDoc.id,
            "questions",
          );

          // onSnapshot handles the download and caching automatically
          const unsubscribe = onSnapshot(
            questionsRef,
            (snapshot) => {
              // Optional: Log when an update happens
              if (!snapshot.metadata.fromCache) {
                console.log(
                  `⬇️ Received update for course: ${courseDoc.id} (${snapshot.docChanges().length} changes)`,
                );
              }
            },
            (error) => {
              console.error(`Sync error for ${courseDoc.id}:`, error);
            },
          );

          unsubscribers.push(unsubscribe);
        });

        setStatus("listening");
      } catch (err) {
        console.error("Master Sync failed:", err);
        setStatus("error");
      }
    };

    startSync();

    // CLEANUP: Stop listening when the user leaves the app/component
    return () => {
      console.log("🛑 Stopping Sync listeners");
      unsubscribers.forEach((unsub) => unsub());
    };
  }, []);

  // UI is invisible
  return null;
};
