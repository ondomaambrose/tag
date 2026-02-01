import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Header() {
  const [installPrompt, setInstallPrompt] = useState<any>(null);

  useEffect(() => {
    // Listen for the browser's install event
    const handler = (e: any) => {
      e.preventDefault();
      setInstallPrompt(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    // If the app can be installed, STOP the link and show the prompt
    if (installPrompt) {
      e.preventDefault();
      installPrompt.prompt();
      installPrompt.userChoice.then((res: any) => {
        if (res.outcome === "accepted") {
          setInstallPrompt(null);
        }
      });
    }
  };

  return (
    <header className="bg-white text-orange-500 p-7 flex items-center flex-col">
      <Link to="/" onClick={handleLogoClick}>
        <h1>
          <motion.img
            id="header-logo"
            src="/tag.webp"
            alt="Tag logo"
            className="h-20 w-auto"
            fetchPriority="high"
            whileHover={{ scale: 1.1 }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          />
        </h1>
      </Link>
      <motion.h6
        className="font-semibold font-sans"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
      >
        Teslas Academic Group
      </motion.h6>
    </header>
  );
}
