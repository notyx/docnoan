"use client";

import { motion } from "framer-motion";
import { TrendingUp, Target, Rocket, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Méthode Complète",
    description: "Un plan d'action de A à Z : de la recherche d'idée jusqu'à l'automatisation de vos ventes.",
    icon: Target,
  },
  {
    title: "Croissance Accélérée",
    description: "Apprenez les stratégies utilisées par les meilleurs pour faire décoller votre produit sans perdre de temps.",
    icon: TrendingUp,
  },
  {
    title: "Liberté Financière",
    description: "Générez des revenus passifs 24/7 en vendant vos connaissances et créations digitales.",
    icon: Rocket,
  },
  {
    title: "Investissement Sécurisé",
    description: "Appliquez notre stratégie éprouvée pour minimiser les risques et maximiser votre ROI rapidement.",
    icon: ShieldCheck,
  },
];

export default function Benefits() {
  return (
    <section className="relative w-full py-24 px-4 bg-black/40 border-y border-white/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Pourquoi rejoindre cette formation ?</h2>
          <p className="text-gray-400 text-lg">Découvrez comment nous transformons votre approche de la vente d'influence digitale.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/50 hover:bg-white/[0.05] transition-all duration-300 group"
            >
              <div className="w-12 h-12 mb-6 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:scale-110 group-hover:bg-blue-500/20 transition-all duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">{benefit.title}</h3>
              <p className="text-gray-400 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
