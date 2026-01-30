import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { Download, Check, Loader2, RefreshCw } from "lucide-react";
import { track } from "@vercel/analytics/react";

export const OfflineManager = () => {
  const [status, setStatus] = useState<"idle" | "downloading" | "done">("idle");
  const [lastSyncDate, setLastSyncDate] = useState<string | null>(null);

  useEffect(() => {
    // 1. Check Local Storage on load
    const savedStatus = localStorage.getItem("tag_offline_ready");
    const savedDate = localStorage.getItem("tag_last_sync");
    if (savedStatus === "true") {
      setStatus("done");
      if (savedDate) setLastSyncDate(savedDate);
    }

    // 2. LISTEN FOR INSTALL TRIGGER
    // This allows the InstallPWA component to remotely start the download
    const handleRemoteTrigger = () => {
      console.log("Install completed, starting auto-download...");
      downloadAllData();
    };

    window.addEventListener("trigger-offline-download", handleRemoteTrigger);

    // Cleanup listener
    return () =>
      window.removeEventListener(
        "trigger-offline-download",
        handleRemoteTrigger,
      );
  }, []);

  const downloadAllData = async () => {
    // Prevent double downloading
    if (status === "downloading") return;

    track("OfflineDownload_Started");
    setStatus("downloading");

    try {
      const coursesSnap = await getDocs(collection(db, "courses"));
      const courseIds = coursesSnap.docs.map((doc) => doc.id);

      for (const courseId of courseIds) {
        await getDocs(collection(db, "courses", courseId, "questions"));
      }

      const today = new Date().toLocaleDateString();
      localStorage.setItem("tag_offline_ready", "true");
      localStorage.setItem("tag_last_sync", today);

      setStatus("done");
      setLastSyncDate(today);

      track("OfflineDownload_Success", { courseCount: courseIds.length });
      // Optional: Don't alert if it was auto-triggered, but keeping it is fine
      alert("App Installed & Content Saved to Device!");
    } catch (error) {
      console.error("Download failed", error);
      alert("Download failed. Check your internet.");
      setStatus("idle");
      track("OfflineDownload_Failed", { error: String(error) });
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50 font-sans">
      {status === "idle" && (
        <button
          onClick={downloadAllData}
          className="bg-gray-800/90 backdrop-blur text-white p-3 pr-5 rounded-full shadow-2xl flex items-center gap-3 hover:bg-gray-700 transition transform hover:scale-105 active:scale-95 border border-white/10"
        >
          <div className="bg-orange-500 p-2 rounded-full">
            <Download size={18} className="text-white" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold leading-tight">Download</p>
          </div>
        </button>
      )}

      {status === "downloading" && (
        <div className="bg-orange-600 text-white p-3 pr-5 rounded-full shadow-2xl flex items-center gap-3 animate-pulse">
          <Loader2 size={20} className="animate-spin" />
          <span className="text-sm font-bold">Syncing DB ...</span>
        </div>
      )}

      {status === "done" && (
        <button
          onClick={downloadAllData}
          className="group bg-green-600/90 backdrop-blur text-white p-2 pr-4 rounded-full shadow-xl flex items-center gap-3 hover:bg-green-700 transition border border-white/10"
        >
          <div className="bg-white/20 p-2 rounded-full group-hover:bg-white/30 transition">
            <Check size={18} className="group-hover:hidden" />
            <RefreshCw size={18} className="hidden group-hover:block" />
          </div>
          <div className="text-left">
            <p className="text-sm font-bold leading-tight">Offline Ready</p>
            <p className="text-[10px] text-green-200">
              {lastSyncDate ? `Synced: ${lastSyncDate}` : "Saved"}
            </p>
          </div>
        </button>
      )}
    </div>
  );
};
