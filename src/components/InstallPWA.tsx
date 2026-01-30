import { useEffect, useState } from "react";
import { Download as InstallIcon, X } from "lucide-react";

export const InstallPWA = () => {
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState<any>(null);

  useEffect(() => {
    const handler = (e: any) => {
      e.preventDefault();
      setPromptInstall(e);
      setSupportsPWA(true);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const onClick = (evt: any) => {
    evt.preventDefault();
    if (!promptInstall) return;

    promptInstall.prompt();

    promptInstall.userChoice.then((choiceResult: any) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the install prompt");

        // --- THE MAGIC LINE ---
        // This tells the OfflineManager (which is listening) to start downloading
        window.dispatchEvent(new Event("trigger-offline-download"));

        setSupportsPWA(false);
      } else {
        console.log("User dismissed the install prompt");
      }
      setPromptInstall(null);
    });
  };

  if (!supportsPWA) return null;

  return (
    <div className="fixed bottom-20 right-4 z-50 animate-in fade-in slide-in-from-bottom-5 duration-500">
      <div className="bg-white text-black p-4 rounded-xl shadow-2xl border border-gray-200 flex flex-col gap-3 max-w-62.5">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-lg">Get the App</h3>
          <button
            onClick={() => setSupportsPWA(false)}
            className="text-gray-400 hover:text-black"
          >
            <X size={18} />
          </button>
        </div>
        <p className="text-xs text-gray-600">
          Install TAG and download all questions for offline use.
        </p>
        <button
          onClick={onClick}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg flex items-center justify-center gap-2 transition"
        >
          <InstallIcon size={16} />
          Install & Sync
        </button>
      </div>
    </div>
  );
};
