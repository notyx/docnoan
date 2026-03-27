"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";

// Make sure to set NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY in your .env.local
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

export default function PricingSection() {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    try {
      setLoading(true);
      const res = await fetch("/api/checkout", {
        method: "POST",
      });
      const data = await res.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error("No URL returned from checkout");
      }
    } catch (error) {
      console.error("Error creating checkout session", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-lg w-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
        >
          {/* Accent top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-cyan-400" />
          
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-2">Accès Complet</h2>
            <p className="text-gray-400 text-sm">Paiement unique pour un accès à vie</p>
          </div>

          <div className="flex justify-center items-end gap-1 mb-8">
            <span className="text-5xl font-extrabold">97</span>
            <span className="text-2xl font-semibold text-gray-400">€</span>
          </div>

          <ul className="space-y-4 mb-10">
            {["Toutes les vidéos de la formation", "Accès au groupe privé Discord", "Ressources & templates téléchargeables", "Mises à jour incluses à vie"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
                <Check className="w-5 h-5 text-blue-400 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={handleCheckout}
            disabled={loading}
            className={`w-full py-4 px-6 rounded-xl text-white font-semibold text-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
              loading ? "bg-blue-600/50 cursor-not-allowed" : "bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
            }`}
          >
            {loading ? "Chargement..." : "Rejoindre la formation"}
          </button>
        </motion.div>
      </div>
    </section>
  );
}
