import PromoBanner from "./components/PromoBanner";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import WhatYouGet from "./components/WhatYouGet";
import AfterJoining from "./components/AfterJoining";
import WhatYouLearn from "./components/WhatYouLearn";
import Results from "./components/Results";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#05050a] text-white overflow-x-hidden">
      <PromoBanner />
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/15 to-transparent pointer-events-none" />

      <Hero />
      <Benefits />
      <WhatYouGet />
      <AfterJoining />
      <WhatYouLearn />
      <Results />
      <PricingSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Digital Origin Community — D.O.C. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
