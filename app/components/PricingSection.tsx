"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Users, Package, BarChart2, Gift, CheckCircle, ShieldCheck } from "lucide-react";
import Link from "next/link";

const included = [
  { icon: BookOpen, text: "Accès à la formation complète (+ toutes les futures mises à jour)" },
  { icon: Calendar, text: "3 coachings par semaine" },
  { icon: Users, text: "Accès à une communauté privée active (+950 membres)" },
  { icon: Package, text: "12 produits PLR à revendre" },
  { icon: BarChart2, text: "2 produits MRR à revendre" },
  { icon: Gift, text: "Exclusive Bonuses" },
  { icon: CheckCircle, text: "Plan d'action première vente en 7 jours" },
  { icon: ShieldCheck, text: "Garantie / remboursement" },
];

export default function PricingSection() {
  return (
    <section className="relative w-full py-32 px-4 flex flex-col items-center justify-center">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-purple-700/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-2xl w-full">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Prêt à vous lancer ?</h2>
          <p className="text-gray-400">Un seul paiement, un accès à vie.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 md:p-8 divide-y divide-white/5 relative overflow-hidden"
        >
          {/* Accent top border */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-violet-400" />

          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-4 first:pt-2 last:pb-4">
              <div className="w-9 h-9 rounded-full bg-purple-600/80 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-200 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6"
        >
          <Link
            href="/checkout"
            className="block w-full py-5 rounded-xl text-white font-bold text-lg text-center transition-all transform hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r from-purple-600 to-violet-500 hover:shadow-[0_0_30px_rgba(147,51,234,0.4)]"
          >
            Rejoindre la D.O.C maintenant
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
