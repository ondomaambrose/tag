import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { LandingPage } from "./pages/LandingPage";
import { LevelPage } from "./pages/LevelPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/:level" element={<LevelPage />} />
      </Routes>
    </BrowserRouter>
  );
}
