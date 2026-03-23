import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NavLink, Link, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { name: "ACCEUIL", to: "/" },
  { name: "A PROPOS", to: "/a-propos" },
  { name: "DOMAINES", to: "/domaines" },
  { name: "OPPORTUNITES", to: "/opportunités" },
  { name: "ACTUALITES", to: "/actualites" },
  { name: "CONTACT", to: "/#contact" },
];

const NavMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const location = useLocation();
  const navigate = useNavigate();

  const linkBase =
    "relative hover:text-[#CA451B] cursor-pointer transition-colors";

  const scrollToSection = (hash) => {
    if (!hash) return;
    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed w-full bg-gray-50 top-0 left-0 right-0 z-50 shadow-sm">

      {/* CONTENEUR PRINCIPAL */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 h-25 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center">
          <Link to="/">
            <img
              src="/images/Logo.png"
              alt="Logo du site"
              className="w-35 md:w-45 h-auto"
            />
          </Link>
        </div>

        {/* MENU PC */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-8 text-gray-700 font-medium">

          {navItems.map(({ name, to }) => {
            const isAnchor = to.startsWith("/#") || to.startsWith("#");

            if (isAnchor) {
              return (
                <li key={name}>
                  <a
                    href={to.replace("/", "")}
                    onClick={(e) => {
                      e.preventDefault();

                      if (location.pathname !== "/") {
                        navigate("/");
                        setTimeout(() => scrollToSection(to.replace("/", "")), 300);
                      } else {
                        scrollToSection(to.replace("/", ""));
                      }
                    }}
                    className={`${linkBase} pb-1`}
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
                  className={({ isActive }) =>
                    `${linkBase} pb-1 ${
                      isActive
                        ? "text-[#03337F] font-semibold after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-[#CA451B]"
                        : "text-gray-700"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}

          {/* BOUTON PARTENAIRE */}
          <li>
            <a
              href="/partenaires"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-4 px-4 py-4 bg-[#CA451B] text-white sm:text-lg rounded-sm font-semibold hover:bg-[#a83716] transition"
            >
              DEVENIR PARTENAIRE
            </a>
          </li>

        </ul>

        {/* MENU MOBILE BUTTON */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="p-1 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0069BD]"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
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
                  className={({ isActive }) =>
                    `block py-2 px-4 rounded-lg ${
                      isActive
                        ? "bg-[#03337F] text-white"
                        : "text-gray-700 hover:bg-[#FFF4F0] hover:text-[#CA451B]"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {name}
                </NavLink>
              );
            })}

            {/* PARTENAIRE MOBILE */}
            <a
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-3 px-4 py-3 bg-[#CA451B] text-white rounded-lg font-semibold hover:bg-[#a83716] transition"
            >
              Devenir partenaire
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default NavMenu;