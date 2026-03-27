import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import PricingSection from "./components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      {/* Decorative top blur */}
      <div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      
      <Hero />
      <Benefits />
      <PricingSection />
      
      {/* Simple Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-sm text-gray-500">
        <p>© {new Date().getFullYear()} Votre Marque. Tous droits réservés.</p>
      </footer>
    </main>
  );
}
