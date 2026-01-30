import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LevelPage } from "./pages/LevelPage";
import { QuizPage } from "./components/QuizPage";
import { FlashcardPage } from "./components/FlashCardPage";
import { Analytics } from "@vercel/analytics/react";
import { PageNotFound } from "./pages/404Page";
import { InstallPWA } from "./components/InstallPWA";
import { OfflineManager } from "./components/OfflineManager";

export default function App() {
  return (
    <BrowserRouter>
      <Analytics />
      <InstallPWA />
      <OfflineManager />
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="/:level" element={<LevelPage />} />
        <Route path="/courses/:courseCode/quiz" element={<QuizPage />} />
        <Route
          path="/courses/:courseCode/flashcards"
          element={<FlashcardPage />}
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
