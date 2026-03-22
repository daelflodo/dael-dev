import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';
import { personal } from '../data/portfolioData';

const navLinks = [
  { label: 'Inicio',       href: '#hero' },
  { label: 'Sobre mí',     href: '#about' },
  { label: 'Tecnologías',  href: '#technologies' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Experiencia',  href: '#experience' },
  { label: 'Proyectos',    href: '#projects' },
  { label: 'Contacto',     href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-navy/95 backdrop-blur-md border-b border-cyan/10 shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img src={logo} alt="Dael Logo" className="h-9 w-auto" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-cyan transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CV button + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={personal.cvLandingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-cyan text-cyan text-sm font-semibold hover:bg-cyan/10 transition-all duration-200"
          >
            <i className="fa-solid fa-download text-xs" />
            CV
          </a>

          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'} text-xl`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy/98 border-t border-cyan/10 px-6 pb-6">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-white/80 hover:text-cyan transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={personal.cvLandingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan text-cyan text-sm font-semibold hover:bg-cyan/10 transition-all"
              >
                <i className="fa-solid fa-download text-xs" />
                Descargar CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
