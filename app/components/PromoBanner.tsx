"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import Link from "next/link";

export default function PromoBanner() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 23,
    minutes: 57,
    seconds: 40,
  });

  // Simple countdown logic
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="sticky top-0 z-[100] w-full bg-[#0d0d2b] border-b border-blue-500/20 shadow-lg backdrop-blur-md">
      <div className="max-w-7xl mx-auto py-3 px-4 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        {/* Label & Price */}
        <div className="flex items-center gap-4 text-sm font-medium">
          <span className="flex items-center gap-1.5 text-blue-400">
            <Clock className="w-4 h-4" />
            PROMO LIMITÉE
          </span>
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <div className="flex items-center gap-2">
            <span className="text-gray-500 line-through">197€</span>
            <span className="text-white font-bold text-lg">97€</span>
            <span className="bg-blue-600/20 text-blue-400 px-2 py-0.5 rounded text-xs border border-blue-500/20">
              -50%
            </span>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-center gap-4 text-sm">
          <span className="h-4 w-px bg-white/10 hidden md:block" />
          <span className="text-gray-400">Expire dans</span>
          <div className="flex gap-2">
            {[
              { label: "j", value: timeLeft.days },
              { label: "h", value: timeLeft.hours },
              { label: "m", value: timeLeft.minutes },
              { label: "s", value: timeLeft.seconds },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded px-2 py-1 min-w-[32px] text-center font-mono text-white"
              >
                {item.value.toString().padStart(2, "0")}
                <span className="text-[10px] text-gray-500 ml-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Link
          href="/checkout"
          className="bg-white text-blue-950 hover:bg-blue-50 px-5 py-1.5 rounded-lg font-bold text-sm transition-all transform hover:scale-105 active:scale-95 shadow-md ml-0 md:ml-4"
        >
          Rejoindre
        </Link>
      </div>
    </div>
  );
}
