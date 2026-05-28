import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

import { useState } from "react";
import {
  NavLink,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom";

const navItems = [
  {
    name: "ACCUEIL",
    to: "/",
  },

  {
    name: "A PROPOS",
    dropdown: [
      { name: "QUI SOMMES-NOUS", to: "/a-propos" },
      { name: "DOMAINES", to: "/domaines" },
      { name: "STRATEGIES", to: "/strategies" },
      { name: "SOLUTIONS", to: "/solutions" },
      { name: "PROJETS", to: "/projets" },
      { name: "INITIATIVE CAV", to: "/initiative-cav" },
      { name: "RESSOURCES", to: "/ressources" },
      { name: "PARTENAIRES", to: "/partenaires" },
    ],
  },

  {
    name: "OPPORTUNITES",
    dropdown: [
      { name: "OFFRES D'EMPLOI", to: "/opportunités/#offres" },
      { name: "APPELS D'OFFRE", to: "/opportunités/#appels" },
      { name: "DEPOSER UN CV", to: "/opportunités" },
      { name: "OFFRES DE FORMATION", to: "/opportunités/#formation" },
      { name: "DEVENIR VOLONTAIRE", to: "/opportunités/#volontaires" },
      { name: "STAGES", to: "/opportunités/#stages" },
    ],
  },

  {
    name: "ACTUALITES",
    dropdown: [
      { name: "A LA HUNE", to: "/actualites/#hune" },
      { name: "TOUTES", to: "/actualites/#toutes" },
      { name: "NOUS SUIVRE", to: "/reseaux" },
      { name: "NEWSLETTER", to: "/#newsletter" },
    ],
  },

  {
    name: "CONTACT",
    dropdown: [
      { name: "MESSAGE", to: "/contact#message" },
      { name: "PLAINTE", to: "/contact#plainte" },
      { name: "WHATSAPP", to: "/contact#whatsapp" },
    ],
  },
];

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const linkBase =
    "relative transition-all duration-300 hover:text-[#CA451B]";

  const scrollToSection = (hash) => {
    if (!hash) return;

    const id = hash.replace("#", "");

    const el = document.getElementById(id);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleNavigation = (to) => {
    const [path, hash] = to.split("#");

    navigate(`${path}${hash ? `#${hash}` : ""}`);

    if (location.pathname !== path) {
      navigate(path);

      if (hash) {
        setTimeout(() => {
          scrollToSection(`#${hash}`);
        }, 300);
      }
    } else {
      if (hash) {
        scrollToSection(`#${hash}`);
      }
    }

    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm border-b border-gray-100">

      {/* CONTAINER */}
      <div className="max-w-6xl mx-auto h-24 px-4 sm:px-6 lg:px-10 flex items-center justify-between">

        {/* LOGO */}
        <Link to="/" className="flex items-center">
          <img
            src="/images/Logo.png"
            alt="Logo"
            className="w-32 md:w-40 h-auto"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-gray-700">

          {navItems.map((item) => {

            // SIMPLE LINK
            if (!item.dropdown) {
              return (
                <li key={item.name}>
                  <NavLink
                    to={item.to}
                    className={({ isActive }) =>
                      `${linkBase} ${
                        isActive
                          ? "text-[#03337F]"
                          : ""
                      }`
                    }
                  >
                    {item.name}
                  </NavLink>
                </li>
              );
            }

            // DROPDOWN
            return (
              <li
                key={item.name}
                className="relative group"
              >
                <button
                  className={`${linkBase} flex items-center gap-1`}
                >
                  {item.name}

                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>

                {/* DROPDOWN MENU */}
                <div className="absolute left-0 top-full pt-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">

                  <div className="w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">

                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() =>
                          handleNavigation(subItem.to)
                        }
                        className="w-full text-left px-5 py-4 text-sm text-gray-700 hover:bg-[#FFF4F0] hover:text-[#CA451B] transition flex items-center justify-between border-b border-gray-50 last:border-none"
                      >
                        {subItem.name}

                        <ChevronRight className="w-4 h-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </li>
            );
          })}

          {/* CTA */}
          <li>
            <Link
              to="/partenaires"
              className="ml-2 px-5 py-3 bg-[#CA451B] text-white rounded-xl font-semibold hover:bg-[#A83716] transition-all shadow-md"
            >
              DEVENIR PARTENAIRE
            </Link>
          </li>
        </ul>

        {/* MOBILE BUTTON */}
        <button
          onClick={toggleMenu}
          className="lg:hidden p-2 rounded-lg border border-gray-200"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          isMenuOpen
            ? "max-h-screen border-t border-gray-100"
            : "max-h-0"
        }`}
      >
        <div className="bg-white px-4 py-5 space-y-2">

          {navItems.map((item) => {

            // SIMPLE LINK
            if (!item.dropdown) {
              return (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-4 py-3 rounded-xl hover:bg-[#FFF4F0]"
                >
                  {item.name}
                </NavLink>
              );
            }

            // MOBILE DROPDOWN
            return (
              <div
                key={item.name}
                className="border border-gray-100 rounded-2xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setMobileDropdown(
                      mobileDropdown === item.name
                        ? null
                        : item.name
                    )
                  }
                  className="w-full px-4 py-4 bg-gray-50 flex items-center justify-between font-medium"
                >
                  {item.name}

                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      mobileDropdown === item.name
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    mobileDropdown === item.name
                      ? "max-h-96"
                      : "max-h-0"
                  }`}
                >
                  <div className="bg-white">

                    {item.dropdown.map((subItem) => (
                      <button
                        key={subItem.name}
                        onClick={() =>
                          handleNavigation(subItem.to)
                        }
                        className="w-full text-left px-5 py-4 text-sm border-t border-gray-50 hover:bg-[#FFF4F0] hover:text-[#CA451B]"
                      >
                        {subItem.name}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}

          {/* CTA MOBILE */}
          <Link
            to="/partenaires"
            onClick={() => setIsMenuOpen(false)}
            className="block text-center mt-5 px-5 py-4 bg-[#CA451B] text-white rounded-2xl font-semibold"
          >
            DEVENIR PARTENAIRE
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMenu;