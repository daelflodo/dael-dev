import logo from '../assets/logo.png';
import { personal, socialLinks } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-cyan/10 bg-navy/50 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo + name */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="Dael" className="h-8 w-auto" />
          <span className="text-white/50 text-sm">David Elias Flores</span>
        </div>

        {/* Copyright */}
        <p className="text-white/30 text-xs text-center">
          © {new Date().getFullYear()} Dael · Todos los derechos reservados
        </p>

        {/* Social */}
        <div className="flex gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="text-white/40 hover:text-cyan transition-colors text-sm"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
