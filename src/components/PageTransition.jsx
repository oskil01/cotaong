"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader({ children }) {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Quand la route change, active le loader
    setLoading(true);

    // On simule le temps de chargement (ou tu peux attendre fetch, API, etc.)
    const timer = setTimeout(() => setLoading(false), 600); 
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="relative w-full h-full">
      {/* Loader overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-50 flex items-center justify-center bg-white"
          >
            <motion.div
              className="w-16 h-16 border-4 border-t-[#00AB9A] border-gray-200 rounded-full"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenu de la page */}
      <div className={`transition-opacity duration-500 ${loading ? "opacity-0" : "opacity-100"}`}>
        {children}
      </div>
    </div>
  );
}