"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { CheckCircle, XCircle } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

function SuccessContent() {
  const searchParams = useSearchParams();
  const [status, setStatus] = useState<"success" | "failed" | "loading">("loading");

  useEffect(() => {
    const paymentStatus = searchParams.get("redirect_status");
    if (paymentStatus === "succeeded") {
      setStatus("success");
    } else if (paymentStatus === "failed" || paymentStatus === "canceled") {
      setStatus("failed");
    } else {
      // Fallback: si la page est atteinte sans paramètre, assume succès
      setStatus("success");
    }
  }, [searchParams]);

  return (
    <div className="text-center max-w-md mx-auto">
      {status === "loading" && (
        <div className="flex justify-center py-20">
          <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
        </div>
      )}

      {status === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-green-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Paiement réussi ! 🎉</h1>
          <p className="text-gray-400 mb-8 leading-relaxed">
            Félicitations ! Votre accès à la formation a bien été enregistré.
            Vous allez recevoir un email de confirmation sous peu.
          </p>
          <Link
            href="/"
            className="inline-block py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
          >
            Retour à l'accueil
          </Link>
        </motion.div>
      )}

      {status === "failed" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "spring", duration: 0.6 }}
        >
          <div className="w-24 h-24 rounded-full bg-red-500/10 flex items-center justify-center mx-auto mb-8">
            <XCircle className="w-12 h-12 text-red-400" />
          </div>
          <h1 className="text-4xl font-bold mb-4">Paiement annulé</h1>
          <p className="text-gray-400 mb-8">
            Votre paiement n'a pas abouti. Vous pouvez réessayer à tout moment.
          </p>
          <Link
            href="/checkout"
            className="inline-block py-3 px-8 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all hover:scale-105"
          >
            Réessayer
          </Link>
        </motion.div>
      )}
    </div>
  );
}

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-green-900/10 pointer-events-none" />
      <Suspense>
        <SuccessContent />
      </Suspense>
    </main>
  );
}
