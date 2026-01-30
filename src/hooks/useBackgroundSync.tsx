import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { track } from "@vercel/analytics/react";

export const useBackgroundSync = () => {
  useEffect(() => {
    const syncData = async () => {
      // 1. Check if we are online
      if (!navigator.onLine) return;

      console.log("Silent Sync: Checking for data updates...");

      try {
        // 2. Fetch all Courses
        const coursesSnap = await getDocs(collection(db, "courses"));
        const courseIds = coursesSnap.docs.map((doc) => doc.id);

        // 3. Fetch Questions for each Course
        // We run these in parallel for speed
        await Promise.all(
          courseIds.map(async (courseId) => {
            await getDocs(collection(db, "courses", courseId, "questions"));
          }),
        );

        // 4. Mark success in storage
        const today = new Date().toLocaleDateString(undefined, {
          month: "numeric",
          day: "numeric",
          year: "2-digit",
        });

        localStorage.setItem("tag_offline_ready", "true");
        localStorage.setItem("tag_last_sync", today);

        console.log(
          `Silent Sync: Success. Updated data for ${courseIds.length} courses.`,
        );
        track("Silent_Sync_Success");
      } catch (error) {
        // If it fails silently, we just log it. The user doesn't need to know.
        console.warn("Silent Sync: Failed (Network might be unstable)", error);
      }
    };

    // Run immediately on app mount
    syncData();
  }, []); // Empty dependency array = runs once every time the app opens/reloads
};
