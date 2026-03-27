"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Quote } from "lucide-react";

// ============================================================
// AJOUTEZ VOS PHOTOS ICI
// Placez vos images dans le dossier /public/results/
// Exemple : /public/results/result1.jpg
// Puis modifiez les champs "image", "name", "gain", "comment"
// ============================================================
const results = [
  {
    image: null, // Remplacer par : "/results/result1.jpg"
    name: "Thomas M.",
    gain: "+2 800 € en 3 semaines",
    comment: "J'avais aucune expérience avant la D.O.C. Aujourd'hui j'ai mes premières ventes automatisées.",
    initials: "TM",
  },
  {
    image: null, // Remplacer par : "/results/result2.jpg"
    name: "Sarah L.",
    gain: "+1 500 € dès le 1er mois",
    comment: "La méthode est claire, simple et vraiment efficace. Je recommande à 100%.",
    initials: "SL",
  },
  {
    image: null, // Remplacer par : "/results/result3.jpg"
    name: "Karim B.",
    gain: "+5 000 € en moins de 2 mois",
    comment: "Les produits PLR fournis m'ont permis de commencer à vendre immédiatement sans rien créer.",
    initials: "KB",
  },
  {
    image: null, // Remplacer par : "/results/result4.jpg"
    name: "Inès R.",
    gain: "+900 € la 1ère semaine",
    comment: "Je ne montre même pas mon visage. Tout est fait via du contenu IA. Incroyable.",
    initials: "IR",
  },
  {
    image: null, // Remplacer par : "/results/result5.jpg"
    name: "Marc D.",
    gain: "+3 200 € ce mois-ci",
    comment: "Le coaching en live 3x par semaine fait toute la différence. On n'est jamais seul.",
    initials: "MD",
  },
  {
    image: null, // Remplacer par : "/results/result6.jpg"
    name: "Léa P.",
    gain: "+1 100 € en 10 jours",
    comment: "Le plan d'action 7 jours est redoutable. J'ai eu ma première vente au jour 4.",
    initials: "LP",
  },
];

export default function Results() {
  return (
    <section className="relative w-full py-24 px-4">
      {/* Glow */}
      <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[700px] h-[300px] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block py-1 px-4 mb-4 bg-blue-500/10 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300">
            🏆 Ils ont changé leur vie
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
            Les résultats de nos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
              membres
            </span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Des centaines de personnes ont déjà transformé leur vie financière grâce à la D.O.C.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {results.map((result, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ y: -5 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-blue-500/30 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-blue-400/50" />

              {/* Comment */}
              <p className="text-gray-300 text-sm leading-relaxed flex-1">
                "{result.comment}"
              </p>

              {/* Gain badge */}
              <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 rounded-lg px-3 py-1.5 w-fit">
                <span className="text-blue-300 font-bold text-sm">{result.gain}</span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/5">
                {result.image ? (
                  <Image
                    src={result.image}
                    alt={result.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                ) : (
                  // Placeholder avatar — remplace par une vraie photo
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {result.initials}
                  </div>
                )}
                <div>
                  <p className="text-white font-semibold text-sm">{result.name}</p>
                  <p className="text-gray-500 text-xs">Membre D.O.C</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
