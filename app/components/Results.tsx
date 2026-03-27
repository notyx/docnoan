"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// ============================================================
// Pour ajouter vos screenshots :
// 1. Copiez vos images dans le dossier /public/results/
//    Exemple : result1.jpg, result2.jpg, etc.
// 2. Mettez à jour le tableau "screenshots" ci-dessous
// ============================================================
const screenshots = [
  "/results/result1.jpg",
  "/results/result2.jpg",
  "/results/result3.jpg",
  "/results/result4.jpg",
  "/results/result5.jpg",
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

        {/* Grid de screenshots */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {screenshots.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              whileHover={{ scale: 1.02 }}
              className="break-inside-avoid rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 shadow-lg"
            >
              <Image
                src={src}
                alt={`Résultat membre ${index + 1}`}
                width={400}
                height={600}
                className="w-full h-auto object-cover"
                unoptimized
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
