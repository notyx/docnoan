"use client";

import { motion } from "framer-motion";
import { Cpu, ShoppingCart, TrendingUp, Rocket } from "lucide-react";

const steps = [
  {
    number: 1,
    icon: Cpu,
    title: "Créez votre produit digital avec l'IA ou récupérez un produit clé en main",
    description:
      "Nos outils IA vous permettent de créer votre produit digital de A à Z, depuis la sélection du produit le plus rentable jusqu'à la rédaction et la création complète du produit.",
    quote:
      "Ou, plus simplement, récupérez les produits rentables fournis dans la D.O.C et commencez à vendre immédiatement.",
  },
  {
    number: 2,
    icon: ShoppingCart,
    title: "Mettez votre produit en vente",
    description:
      "Vous disposez d'une méthode complète de A à Z, avec des tutoriels pour mettre votre produit en ligne en quelques minutes.",
    quote:
      "Si vous utilisez les produits disponibles dans la D.O.C, vous pourrez les mettre en ligne dans un système de vente ultra-optimisé en seulement quelques clics.",
  },
  {
    number: 3,
    icon: TrendingUp,
    title: "Attirez du trafic et des clients",
    description:
      "Nous vous partageons toutes nos stratégies pour créer du contenu et générer du trafic sur votre boutique en ligne, afin que vous puissiez faire vos premières ventes sans dépenser un euro en publicité et sans avoir à vous montrer.",
    quote: null,
  },
  {
    number: 4,
    icon: Rocket,
    title: "Votre business est lancé",
    description:
      "Une fois votre produit en ligne et votre trafic actif, il ne vous restera plus qu'à participer aux sessions de live coaching pour optimiser vos ventes et scaler votre business.",
    quote: null,
  },
];

export default function AfterJoining() {
  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Voici ce qui se passe après avoir rejoint la{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
              D.O.C
            </span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="relative w-12 h-12 rounded-xl bg-purple-600/90 flex items-center justify-center shrink-0">
                  <step.icon className="w-6 h-6 text-white" />
                  <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-purple-400 text-xs font-bold text-white flex items-center justify-center">
                    {step.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-gray-400 leading-relaxed mb-2">{step.description}</p>
                  {step.quote && (
                    <blockquote className="border-l-4 border-purple-500 pl-4 mt-4 text-white font-semibold text-sm">
                      {step.quote}
                    </blockquote>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
