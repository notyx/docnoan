import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import WhatYouGet from "./components/WhatYouGet";
import AfterJoining from "./components/AfterJoining";
import WhatYouLearn from "./components/WhatYouLearn";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d0b14] text-white">
      {/* Decorative top gradient */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-purple-900/20 to-transparent pointer-events-none" />

      <Hero />
      <Benefits />
      <WhatYouGet />
      <AfterJoining />
      <WhatYouLearn />
      <PricingSection />

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Digital Origin Community — D.O.C. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
