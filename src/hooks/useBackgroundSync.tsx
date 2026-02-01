import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { track } from "@vercel/analytics/react";

export const useBackgroundSync = () => {
  useEffect(() => {
    const syncEverything = async () => {
      // 1. If Offline, stop immediately
      if (!navigator.onLine) return;

      console.log("🔄 Silent Sync: Starting comprehensive download...");
      let downloadCount = 0;

      try {
        // --- PART A: SYNC 'COURSES' ---
        // 1. Get all courses
        const coursesSnap = await getDocs(collection(db, "courses"));
        downloadCount += coursesSnap.size;

        // 2. Get sub-collections for each course (Questions AND Flashcards)
        await Promise.all(
          coursesSnap.docs.map(async (doc) => {
            // Fetch Questions
            const qSnap = await getDocs(
              collection(db, "courses", doc.id, "questions"),
            );
            downloadCount += qSnap.size;

            // Fetch Flashcards (if they exist as a separate sub-collection)
            const fSnap = await getDocs(
              collection(db, "courses", doc.id, "flashcards"),
            );
            downloadCount += fSnap.size;
          }),
        );

        // --- PART B: SYNC 'LEVELS' (Critical if you use LevelPage) ---
        // We try this safely just in case 'levels' doesn't exist
        try {
          const levelsSnap = await getDocs(collection(db, "levels"));
          downloadCount += levelsSnap.size;

          for (const doc of levelsSnap.docs) {
            const levelQSnap = await getDocs(
              collection(db, "levels", doc.id, "questions"),
            );
            downloadCount += levelQSnap.size;
          }
        } catch (e) {
          // Ignore if levels don't exist
        }

        // --- PART C: SUCCESS ---
        console.log(`✅ Silent Sync Finished! Cached ${downloadCount} items.`);

        const today = new Date().toLocaleDateString();
        localStorage.setItem("tag_offline_ready", "true");
        localStorage.setItem("tag_last_sync", today);
        track("Silent_Sync_Success");
      } catch (error) {
        console.error("❌ Silent Sync Failed:", error);
      }
    };

    syncEverything();
  }, []); // Runs once on app load
};
