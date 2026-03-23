"use client";

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from "framer-motion";

// === COMPONENTS ===
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import PageTransition from "./components/PageTransition";
import JobOffers from "./components/Job";
import Cav from "./components/Cav"
import Actualites from "./components/Actualites";
import About from "./components/About";
import WhyCota from "./components/WhyCota";
import Domaines from "./components/Domaines";
import Ressources from "./components/Ressources";
import Contact from "./components/Contact";
import ProductsSection from "./components/ProductsSection";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

// === PAGES ===
import Apropos from "./pages/Apropos"; 
import DomainesDetails from "./pages/DomainesDetails";
import RessourcesDetails from "./pages/RessourcesDetails"; 
import OffresDetails from "./pages/OffresDetails";
import ActualiteDetails from "./pages/ActualitesDetails";
import ActualitesPage from "./pages/Actualites";
import DepotCvIndisponible from "./pages/DepotCvIndisponible";
import CavPage from "./pages/CavPage"
import Partenaires from "./pages/Partenaire"
import Solutions from "./pages/Solutions";

// === Page d'accueil combinée ===
const Home = () => (
  <div className="pt-17 md:pt-30">
    <NavMenu />
    <Hero />
    <JobOffers />
    <Cav />
    <Actualites />
    <About />
    <WhyCota />
    <ProductsSection />
    <Domaines />
    {/* <Ressources /> */}
    <Contact />
    <NewsLetter />
    <Footer />
  </div>
);

// === Loader simple avec un seul cercle vert ===
const Loader = () => (
  <motion.div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      className="w-16 h-16 border-4 border-t-[#00AB9A] border-gray-200 rounded-full"
      animate={{ rotate: 360 }}
      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
    />
  </motion.div>
);

// === Routes avec loader ===
const AppRoutes = () => {
  const location = useLocation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  useEffect(() => {
    // Active le loader à chaque changement de route
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 700); // durée du loader
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Loader */}
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {/* Contenu de la page */}
      {!loading && (
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageTransition>
                  <Home />
                </PageTransition>
              }
            />
            <Route
              path="/a-propos"
              element={
                <PageTransition>
                  <Apropos />
                </PageTransition>
              }
            />
            <Route
              path="/domaines"
              element={
                <PageTransition>
                  <DomainesDetails />
                </PageTransition>
              }
            />
            <Route
              path="/opportunités"
              element={
                <PageTransition>
                  <RessourcesDetails />
                </PageTransition>
              }
            />
            <Route
              path="/offres/:id"
              element={
                <PageTransition>
                  <OffresDetails />
                </PageTransition>
              }
            />
            <Route
              path="/actualites"
              element={
                <PageTransition>
                  <ActualitesPage />
                </PageTransition>
              }
            />
            <Route
              path="/actualites/:id"
              element={
                <PageTransition>
                  <ActualiteDetails />
                </PageTransition>
              }
            />
            <Route
              path="/depot-cv-indisponible"
              element={
                <PageTransition>
                  <DepotCvIndisponible />
                </PageTransition>
              }
            />
            <Route
              path="/initiative-cav"
              element={
                <PageTransition>
                  <CavPage />
                </PageTransition>
              }
            />
            <Route
              path="/partenaires"
              element={
                <PageTransition>
                  <Partenaires />
                </PageTransition>
              }
            />
            <Route
              path="/solutions"
              element={
                <PageTransition>
                  <Solutions />
                </PageTransition>
              }
            />
          </Routes>
        </AnimatePresence>
      )}
    </>
  );
};

// === App wrapper ===
const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;