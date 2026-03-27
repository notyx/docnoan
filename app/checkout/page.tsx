"use client";

import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  PaymentElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { motion } from "framer-motion";
import { ShieldCheck, Lock } from "lucide-react";
import PromoBanner from "../components/PromoBanner";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
);

// --- Formulaire de paiement interne ---
function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setErrorMsg(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      setErrorMsg(error.message ?? "Une erreur est survenue.");
      setLoading(false);
    }
    // En cas de succès, Stripe redirige automatiquement vers /success
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <PaymentElement
        options={{
          layout: "tabs",
        }}
      />

      {errorMsg && (
        <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={!stripe || loading}
        className={`w-full py-4 rounded-xl font-semibold text-lg text-white transition-all transform hover:scale-[1.02] active:scale-[0.98] ${
          loading || !stripe
            ? "bg-blue-600/40 cursor-not-allowed"
            : "bg-gradient-to-r from-blue-600 to-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]"
        }`}
      >
        {loading ? "Traitement en cours..." : "Payer 97 €"}
      </button>

      <div className="flex items-center justify-center gap-2 text-gray-500 text-xs">
        <Lock className="w-3 h-3" />
        <span>Paiement 100% sécurisé par Stripe</span>
      </div>
    </form>
  );
}

// --- Page principale ---
export default function CheckoutPage() {
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("/api/payment-intent", { method: "POST" })
      .then((res) => res.json())
      .then((data) => {
        if (data.clientSecret) {
          setClientSecret(data.clientSecret);
        } else {
          setError(data.error || "Impossible de charger la page de paiement.");
        }
      })
      .catch(() =>
        setError("Erreur réseau. Veuillez réessayer plus tard.")
      );
  }, []);

  return (
    <main className="min-h-screen bg-black text-white px-0 overflow-x-hidden relative">
      <PromoBanner />
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-blue-700/15 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full flex flex-col items-center justify-center py-16 px-4">
        <div className="w-full max-w-lg">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <a href="/" className="text-gray-500 text-sm hover:text-white transition mb-6 inline-block">
            ← Retour à l'accueil
          </a>
          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            Finaliser votre achat
          </h1>
          <p className="text-gray-400">Formation Vente de Produits Digitaux</p>
        </motion.div>

        {/* Récap commande */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 p-5 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-between"
        >
          <div>
            <p className="font-semibold text-white">Formation Complète</p>
            <p className="text-gray-400 text-sm mt-1">Accès à vie · Paiement unique</p>
          </div>
          <span className="text-2xl font-bold text-white">97 €</span>
        </motion.div>

        {/* Card de paiement */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
          className="p-7 rounded-3xl bg-white/[0.025] border border-white/10 backdrop-blur-xl relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400" />

          {error ? (
            <div className="text-center py-10">
              <div className="text-red-400 mb-2">⚠️ Erreur</div>
              <p className="text-gray-400 text-sm">{error}</p>
              <p className="text-gray-500 text-xs mt-3">
                Vérifiez que vos clés Stripe sont configurées dans les variables d'environnement.
              </p>
            </div>
          ) : clientSecret ? (
            <Elements
              stripe={stripePromise}
              options={{
                clientSecret,
                appearance: {
                  theme: "night",
                  variables: {
                    colorPrimary: "#3b82f6",
                    colorBackground: "#0d0d1a",
                    colorText: "#f8fafc",
                    colorDanger: "#ef4444",
                    fontFamily: "system-ui, sans-serif",
                    borderRadius: "12px",
                  },
                },
              }}
            >
              <CheckoutForm />
            </Elements>
          ) : (
            <div className="flex items-center justify-center py-16">
              <div className="flex gap-2 items-center text-gray-400 text-sm">
                <div className="w-5 h-5 rounded-full border-2 border-blue-500 border-t-transparent animate-spin" />
                Chargement du formulaire...
              </div>
            </div>
          )}
        </motion.div>

        {/* Garantie / Reassurance */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 p-4 rounded-2xl bg-blue-500/5 border border-blue-500/20 flex items-start gap-4"
        >
          <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center shrink-0">
            <ShieldCheck className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <p className="text-white font-bold text-sm">Garantie Satisfait ou Remboursé</p>
            <p className="text-gray-400 text-xs mt-1 leading-relaxed">
              Si vous n'avez pas généré de vente après 30 jours de mise en pratique sérieuse de la D.O.C, nous vous remboursons l'intégralité de votre investissement.
            </p>
          </div>
        </motion.div>

        {/* Badges sécurité */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex items-center justify-center gap-6 mt-6 text-gray-600 text-xs"
        >
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-green-500/70" />
            <span>SSL Sécurisé</span>
          </div>
        </motion.div>
      </div>
    </div>
  </main>
  );
}
