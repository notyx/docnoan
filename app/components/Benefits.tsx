"use client";

import { motion } from "framer-motion";
import { Sparkles, UserX, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: Sparkles,
    title: "Vous n'avez pas besoin d'être un expert",
    description:
      "Trouver des produits gagnants ne dépend pas de votre expertise ou d'une vie entière passée à pratiquer quelque chose. Il s'agit d'identifier un problème et de créer un produit de qualité avec l'aide de vos nouveaux outils d'IA.",
    quote:
      "Dans la D.O.C, nous fournissons même des produits prêts à revendre, qui m'ont généré des milliers d'euros, et vous gardez 100 % des bénéfices.",
  },
  {
    icon: UserX,
    title: "Vous n'avez pas besoin de montrer votre visage",
    description:
      "La D.O.C vous apprend à vendre vos produits digitaux sans jamais montrer votre visage, si vous le souhaitez, en utilisant l'IA et de nombreuses autres méthodes.",
    quote: null,
  },
  {
    icon: TrendingUp,
    title: "Vous n'avez pas besoin d'avoir vendu en ligne auparavant",
    description:
      "La formation complète comprise dans la D.O.C offre aux débutants un chemin clair :",
    bullets: [
      "Du premier produit à la première vente",
      "Jusqu'au scaling vers des dizaines de milliers par mois",
    ],
    quote:
      "Un système étape par étape vous guide sur chaque action, chaque raccourci et chaque stratégie. C'est pour cela que nos membres obtiennent de tels résultats dès leurs premiers mois.",
  },
];

export default function Benefits() {
  return (
    <section className="relative w-full py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4 leading-tight">
            Arrêtez de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              regarder
            </span>{" "}
            les autres gagner de l'argent en ligne.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-5">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 md:p-8 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center shrink-0">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg md:text-xl font-bold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-3">{benefit.description}</p>
                  {benefit.bullets && (
                    <ul className="text-gray-400 mb-3 space-y-1">
                      {benefit.bullets.map((b, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="text-blue-400">•</span> {b}
                        </li>
                      ))}
                    </ul>
                  )}
                  {benefit.quote && (
                    <blockquote className="border-l-4 border-blue-500 pl-4 mt-4 text-white font-semibold text-sm md:text-base">
                      {benefit.quote}
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
