"use client";

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

export default function PageTransition({
  children,
  fallbackDelay = 500,
  loadPromise = null,
  primaryColor = "#00AB9A",
  secondaryColor = "#E2E8F0",
}) {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const loaderVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.8 },
  };

  useEffect(() => {
    let isMounted = true;
    let delayTimeout;
    let minDisplayTimeout;

    const startLoading = async () => {
      setLoading(true);

      const minDisplayPromise = new Promise((resolve) => {
        minDisplayTimeout = setTimeout(resolve, 300);
      });

      if (loadPromise) {
        await Promise.all([loadPromise, minDisplayPromise]);
      } else {
        delayTimeout = setTimeout(() => {}, fallbackDelay);
        await Promise.all([delayTimeout, minDisplayPromise]);
      }

      if (isMounted) setLoading(false);
    };

    startLoading();

    return () => {
      isMounted = false;
      clearTimeout(delayTimeout);
      clearTimeout(minDisplayTimeout);
    };
  }, [location, fallbackDelay, loadPromise]);

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden">
      <AnimatePresence mode="wait">
        {loading ? (
          <motion.div
            key="loader"
            variants={loaderVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm"
          >
            <div className="relative w-20 h-20">
              <motion.div
                className="absolute inset-0 rounded-full border-4"
                style={{ borderColor: `${secondaryColor} transparent ${secondaryColor} ${secondaryColor}` }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-2 rounded-full border-4 border-t-transparent border-r-transparent"
                style={{ borderLeftColor: primaryColor, borderBottomColor: primaryColor }}
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-0 m-auto w-2 h-2 rounded-full"
                style={{ backgroundColor: primaryColor }}
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key={location.pathname}
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.4, ease: "anticipate" }}
            className="w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}