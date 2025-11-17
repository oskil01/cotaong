import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "Accueil", to: "/" },
  { name: "A propos", to: "/a-propos" },
  { name: "Domaines", to: "/domaines" }, // <-- maintenant va vers /domaines (page détaillée)
  { name: "Ressources", to: "/#ressources" },
  { name: "Actualités", to: "/#actualites" },
  { name: "Contact", to: "/#contact" },
];

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const location = useLocation();
  const navigate = useNavigate();

  const linkBase = "hover:text-[#CA451B] hover:font-bold cursor-pointer transition-colors";

  // utilitaire si on veut scroller vers une ancre (depuis home)
  const scrollToSection = (hash) => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 flex items-center justify-between">
        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/images/Logo.png" alt="Logo du site" className="w-30 md:w-42 h-auto" />
          </Link>
        </div>

        {/* MENU PC */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">
          {navItems.map(({ name, to }) => {
            // si c'est une ancre (ex: /#domaines ou #contact) -> lien interne
            const isAnchor = to.startsWith("/#") || to.startsWith("#");

            if (isAnchor) {
              return (
                <li key={name}>
                  <a
                    href={to.replace("/", "")}
                    onClick={(e) => {
                      e.preventDefault();
                      // si on n'est pas sur la home, navigue d'abord puis scrolle
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => scrollToSection(to.replace("/", "")), 300);
                      } else {
                        scrollToSection(to.replace("/", ""));
                      }
                    }}
                    className={`${linkBase} text-gray-700`}
                  >
                    {name}
                  </a>
                </li>
              );
            }

            return (
              <li key={name}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `${linkBase} ${isActive ? "text-[#03337F] font-semibold" : "text-gray-700"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* BOUTON MENU MOBILE */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0069BD]">
            {isMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>
      </div>

      {/* MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-3 space-y-3">
            {navItems.map(({ name, to }) => {
              const isAnchor = to.startsWith("/#") || to.startsWith("#");
              if (isAnchor) {
                return (
                  <a
                    key={name}
                    href={to.replace("/", "")}
                    className="block py-2 px-4 rounded-lg text-gray-700 hover:bg-[#FFF4F0] hover:text-[#CA451B]"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => {
                          const id = to.replace("/", "").replace("#", "");
                          const el = document.getElementById(id);
                          if (el) el.scrollIntoView({ behavior: "smooth" });
                        }, 300);
                      } else {
                        const id = to.replace("/", "").replace("#", "");
                        const el = document.getElementById(id);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    {name}
                  </a>
                );
              }

              return (
                <NavLink
                  key={name}
                  to={to}
                  className={({ isActive }) => `block py-2 px-4 rounded-lg ${isActive ? "bg-[#03337F] text-white" : "text-gray-700 hover:bg-[#FFF4F0] hover:text-[#CA451B]"}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;
