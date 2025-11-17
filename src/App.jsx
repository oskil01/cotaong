import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// === COMPONENTS (accueil) ===
import NavMenu from "./components/NavMenu";
import Hero from "./components/Hero";
import PopupInfo from "./components/PopupInfo";
import About from "./components/About";
import WhyCota from "./components/WhyCota";
import Domaines from "./components/Domaines";
import Ressources from "./components/Ressources";
import Contact from "./components/Contact";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

// === PAGES ===
import Apropos from "./pages/Apropos"; 
import DomainesDetails from "./pages/DomainesDetails";
import RessourcesDetails from "./pages/RessourcesDetails"; 
import OffresDetails from "./pages/OffresDetails";
// === Page d'accueil combinée ===
const Home = () => {
  return (
    <div className="pt-17 md:pt-30">
      <PopupInfo />
      <NavMenu />
      <Hero />
      <About />
      <WhyCota />
      <Domaines />
      <Ressources />
      <Contact />
      <NewsLetter />
      <Footer />
    </div>
  );
};

// === Application principale ===
const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<Apropos />} />
        <Route path="/domaines" element={<DomainesDetails />} />
        <Route path="/ressources" element={<RessourcesDetails />} />
        <Route path="/offres/:id" element={<OffresDetails />} /> 
      </Routes>
    </Router>
  );
};

export default App;
