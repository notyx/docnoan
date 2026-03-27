"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-purple-700/20 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-4 mb-6 bg-purple-500/10 border border-purple-500/30 rounded-full text-sm font-medium text-purple-300 backdrop-blur-sm">
            🚀 Digital Origin Community — D.O.C
          </span>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
            Arrêtez de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-violet-300">
              regarder
            </span>{" "}
            les autres gagner de l'argent en ligne.
          </h1>

          <p className="text-gray-400 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
            Jusqu'à il y a quelques mois, créer des produits digitaux à succès était réservé à ceux
            qui avaient déjà des années d'expertise dans un domaine précis.
          </p>

          <p className="text-purple-400 font-semibold text-base md:text-lg mb-12 max-w-2xl mx-auto">
            Aujourd'hui, avec la Digital Origin Community (D.O.C) tu peux te lancer sans expériences
            et sans connaissances !
          </p>
        </motion.div>

        {/* Video Wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden border border-purple-500/20 shadow-[0_0_60px_rgba(147,51,234,0.15)] bg-black/60 backdrop-blur-md"
        >
          {/* Replace dQw4w9WgXcQ with your actual YouTube video ID */}
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&showinfo=0"
            title="Présentation de la D.O.C — Digital Origin Community"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
