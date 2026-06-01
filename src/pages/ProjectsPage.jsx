import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Calendar, MapPin, Target, CheckCircle, Clock, Users, Heart,
  X, ExternalLink, TrendingUp, Globe, Award, Sparkles, ArrowRight,
  Percent, DollarSign, Filter, List, Grid3x3, Share2, Download,
  Eye, ChevronLeft, ChevronRight, Zap,
} from 'lucide-react';

// --- Importer vos composants existants (chemins à ajuster) ---
import NavMenu from '../components/NavMenu';
import Footer from '../components/Footer';

// ---------- DONNÉES PROJETS (uniquement RDC) ----------
const projectsData = [
  {
    id: 1,
    title: "Accès à l'eau potable - Kinshasa",
    shortDesc: "Forages et purification d'eau dans les quartiers défavorisés.",
    longDesc: "Installation de 12 forages équipés de pompes solaires et de stations de purification. Formation de comités locaux pour la maintenance. Objectif : réduire de 70% les maladies hydriques.",
    images: [
      "https://images.unsplash.com/photo-1542739674-b4492e1a3b56?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1543253687-c931c8e018d1?w=800&h=500&fit=crop",
    ],
    status: "ongoing",
    progress: 68,
    startDate: "Mars 2025",
    endDate: "Décembre 2025",
    location: "Kinshasa, RDC",
    beneficiaries: "8 500",
    budget: 95000,
    raised: 64600,
    goal: "Réduction de 70% des maladies hydriques",
    sdg: "ODD 6 - Eau propre",
    region: "Kinshasa",
  },
  {
    id: 2,
    title: "Éducation numérique - Goma",
    shortDesc: "Équipement de 15 écoles en tablettes et formation.",
    longDesc: "Distribution de 500 tablettes préchargées avec cours hors ligne. Formation de 150 enseignants aux outils numériques. Suivi des performances scolaires.",
    images: [
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&h=500&fit=crop",
    ],
    status: "ongoing",
    progress: 45,
    startDate: "Janvier 2025",
    endDate: "Août 2025",
    location: "Goma, RDC",
    beneficiaries: "3 200",
    budget: 110000,
    raised: 49500,
    goal: "Améliorer les compétences numériques",
    sdg: "ODD 4 - Éducation de qualité",
    region: "Nord-Kivu",
  },
  {
    id: 3,
    title: "Reforestation - Sud-Kivu",
    shortDesc: "Plantation de 20 000 arbres et agroforesterie.",
    longDesc: "Projet participatif avec 12 villages pour lutter contre l'érosion. Création de pépinières communautaires.",
    images: [
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&h=500&fit=crop",
    ],
    status: "completed",
    progress: 100,
    startDate: "Juin 2023",
    endDate: "Mai 2024",
    location: "Bukavu, RDC",
    beneficiaries: "6 000",
    budget: 72000,
    raised: 72000,
    goal: "Restauration de 80 hectares",
    results: "21 500 arbres plantés, 4 pépinières",
    sdg: "ODD 15 - Vie terrestre",
    region: "Sud-Kivu",
  },
  {
    id: 4,
    title: "Micro-crédits femmes - Lubumbashi",
    shortDesc: "Autonomisation économique de 500 femmes.",
    longDesc: "Prêts à faible taux et accompagnement en gestion d'entreprise. Création d'une coopérative.",
    images: [
      "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=500&fit=crop",
    ],
    status: "completed",
    progress: 100,
    startDate: "Février 2022",
    endDate: "Janvier 2024",
    location: "Lubumbashi, RDC",
    beneficiaries: "2 000",
    budget: 180000,
    raised: 180000,
    goal: "Autonomisation économique",
    results: "98% remboursement, +45% revenus",
    sdg: "ODD 5 - Égalité des sexes",
    region: "Haut-Katanga",
  },
  {
    id: 5,
    title: "Énergie solaire - Tshopo",
    shortDesc: "Électrification de 20 centres de santé ruraux.",
    longDesc: "Installation de panneaux solaires et batteries pour la conservation des vaccins et l'éclairage.",
    images: [
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&h=500&fit=crop",
    ],
    status: "future",
    progress: 0,
    startDate: "Septembre 2025",
    endDate: "Juin 2026",
    location: "Kisangani, RDC",
    beneficiaries: "40 000",
    budget: 250000,
    raised: 0,
    goal: "Autonomie énergétique des centres de santé",
    sdg: "ODD 7 - Énergie propre",
    region: "Tshopo",
  },
  {
    id: 6,
    title: "Agroécologie - Kongo Central",
    shortDesc: "Formation de 800 agriculteurs aux techniques durables.",
    longDesc: "Programme de 18 mois : permaculture, irrigation goutte-à-goutte, commercialisation groupée.",
    images: [
      "https://images.unsplash.com/photo-1592982537447-7440770cbfc9?w=800&h=500&fit=crop",
      "https://images.unsplash.com/photo-1589923188900-85dae523342b?w=800&h=500&fit=crop",
    ],
    status: "future",
    progress: 0,
    startDate: "Octobre 2025",
    endDate: "Mars 2027",
    location: "Matadi, RDC",
    beneficiaries: "3 500",
    budget: 350000,
    raised: 0,
    goal: "+50% rendements durables",
    sdg: "ODD 2 - Faim zéro",
    region: "Kongo Central",
  },
];

// ---------- FOND PARTICULES (optionnel mais classe) ----------
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    const createParticles = () => {
      particles = [];
      for (let i = 0; i < 150; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.2,
          opacity: Math.random() * 0.3 + 0.1,
        });
      }
    };
    createParticles();

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
        ctx.fill();
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });
      animationId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />;
};

// ---------- TILT 3D POUR CARTES ----------
const useMouseTilt = (ref, intensity = 12) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const handleMouseMove = (e) => {
      const rect = element.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      element.style.transform = `perspective(1000px) rotateX(${y * intensity}deg) rotateY(${-x * intensity}deg) translateZ(8px)`;
    };
    const handleMouseLeave = () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)';
    };
    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [ref, intensity]);
};

// ---------- COMPTEUR ANIMÉ ----------
const AnimatedCounter = ({ value, suffix = '', duration = 1500 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value, duration]);
  return <span>{count.toLocaleString()}{suffix}</span>;
};

// ---------- CARTE PROJET ----------
const TiltCard = ({ project, onClick }) => {
  const cardRef = useRef(null);
  useMouseTilt(cardRef, 12);
  const statusConfig = {
    ongoing: { label: "ACTIF", icon: <Zap className="w-3 h-3" />, color: "emerald" },
    completed: { label: "ACCOMPLI", icon: <CheckCircle className="w-3 h-3" />, color: "gray" },
    future: { label: "PROCHAIN", icon: <Sparkles className="w-3 h-3" />, color: "amber" },
  };
  const cfg = statusConfig[project.status];

  return (
    <div
      ref={cardRef}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl overflow-hidden border border-white/10 transition-all duration-500 hover:shadow-2xl hover:border-emerald-500/50 cursor-pointer will-change-transform"
      onClick={() => onClick(project)}
    >
      <div className="relative h-52 overflow-hidden">
        <img src={project.images[0]} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <div className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider border backdrop-blur-sm bg-${cfg.color}-500/20 text-${cfg.color}-400 border-${cfg.color}-500/50`}>
            {cfg.icon} {cfg.label}
          </div>
        </div>
        <div className="absolute bottom-3 left-3 text-[9px] font-mono text-white/70 bg-black/50 px-2 py-0.5 rounded-full">
          {project.sdg}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
          <MapPin className="w-3 h-3" /> {project.location}
        </div>
        <p className="text-gray-300 text-sm mb-3 line-clamp-2">{project.shortDesc}</p>
        <div className="flex justify-between text-xs text-gray-300 mb-2">
          <span><Users className="w-3 h-3 inline mr-1" />{project.beneficiaries}</span>
          <span><DollarSign className="w-3 h-3 inline mr-1" />{project.budget.toLocaleString()} €</span>
        </div>
        {project.status !== 'future' && (
          <div className="mt-2">
            <div className="flex justify-between text-xs text-gray-400 mb-1">
              <span>Progression</span>
              <span>{project.progress}%</span>
            </div>
            <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
              <div className={`bg-gradient-to-r from-${cfg.color}-500 to-teal-400 h-1.5 rounded-full transition-all duration-700`} style={{ width: `${project.progress}%` }} />
            </div>
          </div>
        )}
        <button className="mt-4 w-full py-2 rounded-lg bg-white/10 hover:bg-emerald-500/20 text-emerald-300 text-sm font-medium flex items-center justify-center gap-2 transition-all group-hover:gap-3">
          Explorer <Eye className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

// ---------- FILTRES ----------
const ProjectFilters = ({ projects, onFilter, activeFilters }) => {
  const regions = [...new Set(projects.map(p => p.region))];
  const sdgs = [...new Set(projects.map(p => p.sdg))];
  const statuses = ["ongoing", "completed", "future"];
  const statusLabels = { ongoing: "En cours", completed: "Clôturés", future: "Futurs" };

  const toggleFilter = (type, value) => {
    const current = activeFilters[type] || [];
    const newFilters = current.includes(value)
      ? current.filter(v => v !== value)
      : [...current, value];
    onFilter({ ...activeFilters, [type]: newFilters });
  };

  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-5 border border-white/10 mb-10">
      <div className="flex items-center gap-2 mb-4">
        <Filter className="w-5 h-5 text-emerald-400" />
        <h3 className="font-semibold text-white">Filtrer les projets</h3>
      </div>
      <div className="flex flex-wrap gap-6">
        <div>
          <p className="text-xs text-gray-400 mb-2">Statut</p>
          <div className="flex gap-2 flex-wrap">
            {statuses.map(s => (
              <button key={s} onClick={() => toggleFilter('status', s)} className={`px-3 py-1 rounded-full text-xs font-medium transition ${activeFilters.status?.includes(s) ? 'bg-emerald-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {statusLabels[s]}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-2">Province / Ville</p>
          <div className="flex flex-wrap gap-2">
            {regions.map(r => (
              <button key={r} onClick={() => toggleFilter('region', r)} className={`px-3 py-1 rounded-full text-xs transition ${activeFilters.region?.includes(r) ? 'bg-emerald-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {r}
              </button>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xs text-gray-400 mb-2">ODD</p>
          <div className="flex flex-wrap gap-2">
            {sdgs.map(s => (
              <button key={s} onClick={() => toggleFilter('sdg', s)} className={`px-3 py-1 rounded-full text-xs transition ${activeFilters.sdg?.includes(s) ? 'bg-emerald-500 text-white' : 'bg-white/10 text-gray-300 hover:bg-white/20'}`}>
                {s.split(' - ')[0]}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- MODALE LATÉRALE AVEC GALERIE (max-w-4xl) ----------
const ProjectModal = ({ project, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsOpen(true), 10);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };

  if (!project) return null;

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);

  return (
    <div className="fixed inset-0 z-50 flex justify-end" onClick={handleClose}>
      <div className={`absolute inset-0 bg-black/70 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`} onClick={handleClose} />
      <div className={`relative w-full max-w-4xl h-full bg-[#0a0f1c] shadow-2xl border-l border-white/10 overflow-y-auto transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'}`} onClick={(e) => e.stopPropagation()}>
        {/* En-tête avec bouton retour */}
        <div className="sticky top-0 z-20 bg-[#0a0f1c]/90 backdrop-blur-sm p-4 border-b border-white/10 flex justify-between items-center">
          <button onClick={handleClose} className="flex items-center gap-2 text-gray-300 hover:text-white transition">
            <ArrowRight className="w-5 h-5 rotate-180" /> Retour
          </button>
          <button onClick={handleClose} className="p-1 rounded-full hover:bg-white/10">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Galerie d'images */}
          <div className="relative mb-6 rounded-xl overflow-hidden bg-black/40">
            <img src={project.images[currentImageIndex]} alt={project.title} className="w-full h-96 object-contain md:object-cover" />
            {project.images.length > 1 && (
              <>
                <button onClick={prevImage} className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition">
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button onClick={nextImage} className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-black/50 rounded-full hover:bg-black/70 transition">
                  <ChevronRight className="w-6 h-6" />
                </button>
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-black/60 text-xs px-3 py-1 rounded-full">
                  {currentImageIndex + 1} / {project.images.length}
                </div>
              </>
            )}
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
          <div className="flex flex-wrap gap-3 text-sm text-gray-300 border-b border-white/10 pb-4 mb-4">
            <span className="flex items-center gap-1"><Calendar className="w-4 h-4 text-emerald-400" /> {project.startDate} – {project.endDate}</span>
            <span className="flex items-center gap-1"><MapPin className="w-4 h-4 text-emerald-400" /> {project.location}</span>
            <span className="flex items-center gap-1"><Users className="w-4 h-4 text-emerald-400" /> {project.beneficiaries} bénéficiaires</span>
          </div>

          <p className="text-gray-200 leading-relaxed mb-6">{project.longDesc}</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <DollarSign className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-2xl font-bold text-white">{project.budget.toLocaleString()} €</div>
              <div className="text-sm text-gray-400">Budget total</div>
              {project.raised > 0 && <div className="text-xs text-emerald-400 mt-1">Collecté : {project.raised.toLocaleString()} €</div>}
            </div>
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <Target className="w-5 h-5 text-emerald-400 mb-2" />
              <div className="text-sm font-medium text-white">Objectif</div>
              <div className="text-sm text-gray-300">{project.goal}</div>
            </div>
            {project.results && (
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 md:col-span-2">
                <Award className="w-5 h-5 text-emerald-400 mb-2" />
                <div className="text-sm font-medium text-white">Résultats obtenus</div>
                <div className="text-sm text-gray-300">{project.results}</div>
              </div>
            )}
          </div>

          <div className="bg-gradient-to-r from-emerald-900/30 to-blue-900/30 rounded-xl p-5 border border-white/10">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-emerald-400" />
              <h4 className="font-semibold text-white">Soutenir ce projet</h4>
            </div>
            <button className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-xl transition py-2 rounded-full font-medium flex items-center justify-center gap-2">
              Faire un don <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10 text-xs text-gray-500">
            <span>Partager :</span>
            <div className="flex gap-3">
              <Share2 className="w-4 h-4 cursor-pointer hover:text-emerald-400" />
              <Download className="w-4 h-4 cursor-pointer hover:text-emerald-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ---------- PAGE PRINCIPALE ----------
const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState('grid');
  const [filters, setFilters] = useState({ status: [], region: [], sdg: [] });
  const [filteredProjects, setFilteredProjects] = useState(projectsData);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic', offset: 50 });
  }, []);

  useEffect(() => {
    let filtered = projectsData;
    if (filters.status.length) filtered = filtered.filter(p => filters.status.includes(p.status));
    if (filters.region.length) filtered = filtered.filter(p => filters.region.includes(p.region));
    if (filters.sdg.length) filtered = filtered.filter(p => filters.sdg.includes(p.sdg));
    setFilteredProjects(filtered);
  }, [filters]);

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const totalBenef = projectsData.reduce((acc, p) => acc + parseInt(p.beneficiaries), 0);
  const totalBudget = projectsData.reduce((acc, p) => acc + p.budget, 0);
  const totalRaised = projectsData.reduce((acc, p) => acc + p.raised, 0);

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#050a14] via-[#0a1020] to-[#0f1528] text-white overflow-x-hidden">
      <ParticleBackground />
      <NavMenu />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Hero */}
        <div className="pt-28 pb-16 text-center" data-aos="fade-down">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 backdrop-blur-sm rounded-full px-4 py-1.5 border border-emerald-500/30 mb-6">
            <Heart className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono tracking-wider">IMPACT EN RDC</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent mb-6">
            Découvrez nos projets pour <br /> un développement durable, inclusif <br /> et participatif en RDC.
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Découvrez nos actions en cours, réalisées et à venir en RDC. Chaque projet est une promesse d'avenir.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 min-w-[130px]">
              <div className="text-2xl font-bold text-emerald-400"><AnimatedCounter value={totalBenef} />+</div>
              <div className="text-xs text-gray-400">Bénéficiaires</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 min-w-[130px]">
              <div className="text-2xl font-bold text-emerald-400"><AnimatedCounter value={Math.round(totalBudget / 1000)} />k€</div>
              <div className="text-xs text-gray-400">Budget total</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl px-5 py-3 min-w-[130px]">
              <div className="text-2xl font-bold text-emerald-400"><AnimatedCounter value={Math.round((totalRaised / totalBudget) * 100)} />%</div>
              <div className="text-xs text-gray-400">Collecté</div>
            </div>
          </div>
        </div>

        <ProjectFilters projects={projectsData} onFilter={setFilters} activeFilters={filters} />

        <div className="flex justify-end mb-6 gap-2">
          <button onClick={() => setViewMode('grid')} className={`p-2 rounded-lg transition ${viewMode === 'grid' ? 'bg-emerald-500' : 'bg-white/10 hover:bg-white/20'}`}><Grid3x3 className="w-5 h-5" /></button>
          <button onClick={() => setViewMode('timeline')} className={`p-2 rounded-lg transition ${viewMode === 'timeline' ? 'bg-emerald-500' : 'bg-white/10 hover:bg-white/20'}`}><List className="w-5 h-5" /></button>
        </div>

        {viewMode === 'grid' ? (
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredProjects.map((project) => (
              <div key={project.id} className="break-inside-avoid" data-aos="fade-up">
                <TiltCard project={project} onClick={openModal} />
              </div>
            ))}
          </div>
        ) : (
          <div className="relative pl-6 border-l-2 border-white/20 mt-4 mb-12">
            {filteredProjects.map((p) => (
              <div key={p.id} className="mb-10 relative group cursor-pointer" onClick={() => openModal(p)}>
                <div className="absolute -left-9 top-1 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white shadow-lg" />
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:border-emerald-500/50 transition">
                  <div className="flex flex-wrap justify-between items-start gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-white">{p.title}</h4>
                      <p className="text-sm text-gray-300">{p.location}</p>
                    </div>
                    <span className="text-xs text-emerald-400">{p.startDate} → {p.endDate}</span>
                  </div>
                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">{p.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="text-center py-12 mt-8 border-t border-white/10">
          <h3 className="text-2xl font-bold mb-3">Vous voulez agir concrètement ?</h3>
          <p className="text-gray-300 mb-6">Rejoignez notre réseau de donateurs et suivez l'impact de vos dons en RDC.</p>
          <button className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:shadow-2xl transition px-8 py-3 rounded-full font-semibold flex items-center gap-2 mx-auto">
            Devenir acteur du changement <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <Footer />
      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </div>
  );
};

export default ProjectsPage;