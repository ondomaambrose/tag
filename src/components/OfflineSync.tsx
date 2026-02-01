import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { WifiOff, CheckCircle, Loader2 } from "lucide-react";

export const OfflineSync = () => {
  const [status, setStatus] = useState<"idle" | "syncing" | "done" | "error">(
    "idle",
  );
  const [count, setCount] = useState(0);

  useEffect(() => {
    const syncData = async () => {
      // 1. Only run this if we are ONLINE
      if (!navigator.onLine) {
        setStatus("idle");
        return;
      }

      // 2. Prevent running twice
      if (sessionStorage.getItem("tag_data_synced")) {
        setStatus("done");
        return;
      }

      try {
        setStatus("syncing");
        console.log("🔄 Starting Background Sync...");

        // 3. Get list of ALL courses
        // (Assuming you have a parent collection named "courses")
        const coursesSnapshot = await getDocs(collection(db, "courses"));

        if (coursesSnapshot.empty) {
          console.log("No courses found in root collection.");
          setStatus("error");
          return;
        }

        // 4. For every course, download its questions
        let questionCount = 0;
        const syncPromises = coursesSnapshot.docs.map(async (courseDoc) => {
          const qRef = collection(db, "courses", courseDoc.id, "questions");
          const qSnap = await getDocs(qRef);
          questionCount += qSnap.size;
        });

        await Promise.all(syncPromises);

        // 5. Success!
        console.log(`✅ Cached ${questionCount} questions for offline use.`);
        setCount(questionCount);
        setStatus("done");
        sessionStorage.setItem("tag_data_synced", "true");
      } catch (err) {
        console.error("Sync failed:", err);
        setStatus("error");
      }
    };

    syncData();
  }, []);

  // --- UI INDICATOR (Optional: Shows in bottom left) ---
  if (status === "idle") return null;

  return (
    <div className="fixed bottom-4 left-4 z-50 bg-white border border-gray-200 shadow-xl rounded-full px-4 py-2 flex items-center gap-3 text-xs font-semibold animate-in slide-in-from-bottom-5">
      {status === "syncing" && (
        <>
          <Loader2 className="animate-spin text-orange-600" size={16} />
          <span className="text-gray-600">Downloading Content...</span>
        </>
      )}
      {status === "done" && (
        <>
          <CheckCircle className="text-green-600" size={16} />
          <span className="text-gray-600">Ready for Offline ({count} Qs)</span>
        </>
      )}
      {status === "error" && (
        <>
          <WifiOff className="text-red-500" size={16} />
          <span className="text-gray-500">Sync Failed</span>
        </>
      )}
    </div>
  );
};
