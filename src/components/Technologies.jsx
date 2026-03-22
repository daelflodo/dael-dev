import { useState } from 'react';
import { technologies } from '../data/portfolioData';

const categories = ['Todos', 'Backend', 'Frontend', 'Lenguajes', 'Bases de Datos', 'ORM', 'DevOps'];

// Map technology names to Font Awesome / Devicon class strings (fallback to badge image)
const techIconMap = {
  'NestJS':          { icon: null,                         color: 'text-red-500',   badge: true },
  'Node.js':         { icon: 'fa-brands fa-node-js',       color: 'text-green-500', badge: false },
  'Express':         { icon: null,                         color: 'text-white',     badge: false },
  'RabbitMQ':        { icon: null,                         color: 'text-orange-400',badge: false },
  'Spring Boot':     { icon: null,                         color: 'text-green-500', badge: true },
  'Spring Security': { icon: null,                         color: 'text-green-600', badge: true },
  'TypeScript':      { icon: null,                         color: 'text-blue-400',  badge: false },
  'JavaScript':      { icon: 'fa-brands fa-js',            color: 'text-yellow-400',badge: false },
  'Java':            { icon: 'fa-brands fa-java',          color: 'text-red-400',  badge: false },
  'React':           { icon: 'fa-brands fa-react',         color: 'text-sky-400',  badge: false },
  'Angular':         { icon: null,                         color: 'text-red-600',  badge: false },
  'Redux':           { icon: null,                         color: 'text-purple-400',badge: false },
  'HTML':            { icon: 'fa-brands fa-html5',         color: 'text-orange-500',badge: false },
  'CSS':             { icon: 'fa-brands fa-css3-alt',      color: 'text-blue-500', badge: false },
  'Tailwind CSS':    { icon: null,                         color: 'text-cyan-400', badge: true },
  'PostgreSQL':  { icon: null,                         color: 'text-blue-400', badge: false },
  'MySQL':       { icon: null,                         color: 'text-blue-300', badge: false },
  'MongoDB':     { icon: null,                         color: 'text-green-400',badge: false },
  'Redis':       { icon: null,                         color: 'text-red-400',  badge: false },
  'TypeORM':     { icon: null,                         color: 'text-red-500',  badge: false },
  'Prisma':      { icon: null,                         color: 'text-slate-300',badge: false },
  'Sequelize':   { icon: null,                         color: 'text-sky-400',  badge: false },
  'Docker':      { icon: 'fa-brands fa-docker',        color: 'text-blue-400', badge: false },
  'Azure':       { icon: null,                         color: 'text-blue-500', badge: false },
  'AWS':         { icon: 'fa-brands fa-aws',           color: 'text-orange-400',badge: false },
};

export default function Technologies() {
  const [active, setActive] = useState('Todos');

  const filtered =
    active === 'Todos'
      ? technologies
      : technologies.filter((t) => t.category === active);

  return (
    <section id="technologies" className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Stack</p>
          <h2 className="text-4xl font-extrabold text-white">
            Tecnologías &amp; <span className="text-cyan">Herramientas</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                active === cat
                  ? 'bg-cyan text-navy'
                  : 'border border-cyan/30 text-white/60 hover:border-cyan hover:text-cyan'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filtered.map((tech) => {
            const meta = techIconMap[tech.name] || { icon: null, color: 'text-cyan', badge: false };
            return (
              <div
                key={tech.name}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-cyan/10 bg-white/[0.02] hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-200 cursor-default"
              >
                {meta.icon ? (
                  <i className={`${meta.icon} text-3xl ${meta.color}`} />
                ) : (
                  <img
                    src={tech.icon}
                    alt={tech.name}
                    className="h-8 object-contain"
                    loading="lazy"
                  />
                )}
                <span className="text-xs text-white/70 text-center group-hover:text-white transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] text-cyan/60">{tech.category}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
