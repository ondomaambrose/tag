import { QuoteSection } from "../components/QuotesSection";
import { LevelSection } from "../components/LevelSection";
import { Header } from "../components/Header";

export function LandingPage() {
  return (
    <>
      <Header />
      <main className="bg-black min-h-screen px-4 py-12 space-y-16">
        <QuoteSection />
        <LevelSection />
      </main>
    </>
  );
}
