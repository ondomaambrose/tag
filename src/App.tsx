import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LevelPage } from "./pages/LevelPage";
import { QuizPage } from "./components/QuizPage";
import { FlashcardPage } from "./components/FlashCardPage";
import { Analytics } from "@vercel/analytics/react";
import { PageNotFound } from "./pages/404Page";
import { AppTutorial } from "./components/AppTutorial";
import { useBackgroundSync } from "./hooks/useBackgroundSync";
import { OfflineSync } from "./components/OfflineSync";
import { PwaTracker } from "./components/PwaTracker";

export default function App() {
  useBackgroundSync();
  return (
    <BrowserRouter>
      <AppTutorial />
      <OfflineSync />
      <PwaTracker />
      <Analytics />
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
