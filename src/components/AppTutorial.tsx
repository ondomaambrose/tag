import { useEffect } from "react";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
// IMPORT YOUR ICON HERE
import installIcon from "../assets/install.png";

export const AppTutorial = () => {
  useEffect(() => {
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)",
    ).matches;
    if (isStandalone) return;

    const hasSeenTutorial = localStorage.getItem("tag_seen_install_tutorial");
    if (hasSeenTutorial) return;

    const driverObj = driver({
      showProgress: false,
      allowClose: true,
      steps: [
        {
          element: "#header-logo",
          popover: {
            title: "Get the App",
            description: `
              Click the header image or the download icon at the right side of your search bar and get FULL OFFLINE FUNCTIONALITY!
              <img src="${installIcon}" style="height: 16px; width: auto; vertical-align: middle; display: inline-block; margin: 0 2px;" alt="download icon" /> 
              to download the website for offline use!
            `,
            side: "bottom",
            align: "center",
          },
        },
      ],
      onDestroyed: () => {
        localStorage.setItem("tag_seen_install_tutorial", "true");
      },
    });

    setTimeout(() => {
      driverObj.drive();
    }, 1500);
  }, []);

  return null;
};
