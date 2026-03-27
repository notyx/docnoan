"use client";

import { motion } from "framer-motion";
import { BookOpen, Calendar, Users, Package, BarChart2, Gift, CheckCircle, ShieldCheck } from "lucide-react";

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

export default function WhatYouGet() {
  return (
    <section className="relative w-full py-24 px-4 bg-black/40 border-y border-white/5">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Voici ce que tu obtiens dans la D.O.C
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-2xl bg-white/[0.03] border border-white/10 p-6 md:p-8 divide-y divide-white/5"
        >
          {included.map((item, i) => (
            <div key={i} className="flex items-center gap-4 py-4 first:pt-0 last:pb-0">
              <div className="w-9 h-9 rounded-full bg-purple-600/80 flex items-center justify-center shrink-0">
                <item.icon className="w-4 h-4 text-white" />
              </div>
              <span className="text-gray-200 font-medium">{item.text}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
