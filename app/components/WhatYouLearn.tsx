"use client";

import { motion } from "framer-motion";
import { Package, ShoppingCart, Users, Settings, TrendingUp, Rocket } from "lucide-react";

const skills = [
  {
    icon: Package,
    title: "Créer des produits digitaux",
    description: "Maîtriser la création de formations, guides, et produits numériques rentables",
  },
  {
    icon: ShoppingCart,
    title: "Vendre sans produit à créer",
    description: "Produits fournis et prêts à être vendus",
  },
  {
    icon: Users,
    title: "Trouver des clients sans audience",
    description: "Techniques éprouvées pour générer des ventes",
  },
  {
    icon: Settings,
    title: "Automatiser tes ventes",
    description: "Systèmes pour vendre pendant que tu dors",
  },
  {
    icon: TrendingUp,
    title: "Scaler ton business digital",
    description: "Passer de 0 à plusieurs milliers d'euros par mois",
  },
  {
    icon: Rocket,
    title: "Te lancer rapidement",
    description: "Même en partant de zéro",
  },
];

export default function WhatYouLearn() {
  return (
    <section className="relative w-full py-24 px-4 bg-black/40 border-t border-white/5">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Ce que tu vas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
              apprendre
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07 }}
              whileHover={{ y: -4, borderColor: "rgba(147,51,234,0.4)" }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-purple-600/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <skill.icon className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-white mb-2">{skill.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
