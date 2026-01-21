import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { LevelPage } from "./pages/LevelPage";
import { QuizPage } from "./components/QuizPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:level" element={<LevelPage />} />
        <Route path="/courses/:courseCode/quiz" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  );
}
