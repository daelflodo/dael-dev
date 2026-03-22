import { useEffect, useState } from 'react';
import avatar from '../assets/dael-avatar.png';
import { personal, socialLinks, stats } from '../data/portfolioData';

const ROLES = [
  'Backend Developer',
  'NestJS Expert',
  'Microservices Architect',
  'Event-Driven Architecture',
  'API Designer',
  'TypeScript Developer',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx + 1));
        setCharIdx((c) => c + 1);
      }, 80);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIdx - 1));
        setCharIdx((c) => c - 1);
      }, 40);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setRoleIndex((r) => (r + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [charIdx, deleting, roleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-grid overflow-hidden"
    >
      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-cyan opacity-10 blur-[120px] orb-1 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-blue-600 opacity-10 blur-[100px] orb-2 pointer-events-none" />
      <div className="absolute top-3/4 left-1/2 w-64 h-64 rounded-full bg-cyan opacity-5 blur-[80px] orb-3 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">

        {/* Left – text */}
        <div className="fade-in-up">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-3">
            👋 Hola, soy
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-3">
            David Elias<br />
            <span className="text-cyan glow-text">Flores</span>
          </h1>

          {/* Typewriter */}
          <div className="h-8 mb-6">
            <span className="text-xl font-semibold text-white/80">
              {displayed}
              <span className="animate-pulse text-cyan">|</span>
            </span>
          </div>

          {/* <p className="text-white/60 leading-relaxed mb-8 max-w-lg text-sm md:text-base">
            {personal.bio.slice(0, 200)}...
          </p> */}

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap gap-3 mb-10">
            <a
              href="#projects"
              className="px-6 py-3 rounded-full bg-cyan text-navy font-bold text-sm hover:shadow-glow hover:scale-105 transition-all duration-200"
            >
              <i className="fa-solid fa-code mr-2" />
              Ver Proyectos
            </a>
            <a
              href="#contact"
              className="px-6 py-3 rounded-full border border-cyan/40 text-white font-semibold text-sm hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              <i className="fa-solid fa-envelope mr-2" />
              Contáctame
            </a>
            <a
              href={personal.cvLandingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full border border-white/20 text-white/70 font-semibold text-sm hover:border-white/50 hover:text-white transition-all duration-200"
            >
              <i className="fa-solid fa-arrow-up-right-from-square mr-2" />
              Ver CV
            </a>
            <a
              href={personal.cvPath}
              download
              className="px-6 py-3 rounded-full border border-cyan/30 text-cyan/80 font-semibold text-sm hover:border-cyan hover:text-cyan transition-all duration-200"
            >
              <i className="fa-solid fa-download mr-2" />
              Descargar CV
            </a>
          </div> */}

          {/* Social links */}
          <div className="flex gap-4">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.name}
                className="w-10 h-10 rounded-full border border-cyan/20 flex items-center justify-center text-white/60 hover:border-cyan hover:text-cyan transition-all duration-200"
              >
                <i className={`${s.icon} text-sm`} />
              </a>
            ))}
          </div>
        </div>

        {/* Right – avatar with spinning ring */}
        <div className="flex justify-center items-center">
          {/* <div className="relative w-72 h-72 md:w-80 md:h-80"> */}
            {/* Spinning ring */}
            <div className="relative w-96 h-96 md:w-[400px] md:h-[400px]">
            <div
              className="absolute inset-[-6px] rounded-full"
              style={{
                background: 'conic-gradient(#00c8ff 0%, #0a0f1e 50%, #00c8ff 100%)',
                animation: 'spinRing 4s linear infinite',
              }}
            />
            <div className="absolute inset-[2px] rounded-full bg-navy" />
            <img
              src={avatar}
              alt="David Elias Flores"
              className="absolute inset-[6px] rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] object-fillcover object-topcnbjc z-10"
                            // className="absolute inset-[6px] rounded-full w-[calc(100%-12px)] h-[calc(100%-12px)] object-contain z-10"

              
            />
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 border-t border-cyan/10 bg-navy/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <i className={`${s.icon} text-cyan text-lg`} />
              <div>
                <p className="text-xl font-extrabold text-white leading-none">{s.number}</p>
                <p className="text-xs text-white/50">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
