import { useState } from 'react';
import { frontendProjects, backendProjects } from '../data/portfolioData';

function FrontendCard({ project }) {
  return (
    <div className="group rounded-2xl border border-cyan/10 bg-white/[0.02] overflow-hidden hover:border-cyan/40 hover:shadow-card transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden h-48 bg-navy/50">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-70 group-hover:opacity-90"
          loading="lazy"
          onError={(e) => {
            e.target.style.display = 'none';
            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center');
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
        {project.url && project.url !== '#' && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-cyan/20 backdrop-blur-sm border border-cyan/30 flex items-center justify-center text-white hover:bg-cyan hover:text-navy transition-all duration-200"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
        <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((t) => (
            <span key={t} className="px-2 py-0.5 rounded-full bg-cyan/5 border border-cyan/20 text-cyan text-[11px] font-medium">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function BackendCard({ project }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="rounded-2xl border border-cyan/10 bg-white/[0.02] p-6 hover:border-cyan/30 transition-all duration-300">
      <div className="flex items-start justify-between gap-4 mb-3">
        <div>
          <h3 className="text-lg font-bold text-white">{project.title}</h3>
          <p className="text-cyan/80 text-xs font-semibold">{project.company} · {project.period}</p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-8 h-8 rounded-full border border-cyan/30 flex items-center justify-center text-white/60 hover:border-cyan hover:text-cyan transition-all duration-200"
          >
            <i className="fa-solid fa-arrow-up-right-from-square text-xs" />
          </a>
        )}
      </div>

      <p className="text-white/60 text-sm leading-relaxed mb-4">{project.description}</p>

      {/* Activities */}
      <ul className={`space-y-1.5 mb-4 overflow-hidden transition-all duration-300 ${expanded ? 'max-h-96' : 'max-h-20'}`}>
        {project.activities.map((a) => (
          <li key={a} className="flex items-start gap-2 text-xs text-white/50">
            <i className="fa-solid fa-terminal text-cyan mt-0.5 flex-shrink-0 text-[10px]" />
            <span>{a}</span>
          </li>
        ))}
      </ul>

      {project.activities.length > 3 && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-cyan/70 hover:text-cyan transition-colors mb-4"
        >
          {expanded ? 'Ver menos ↑' : `Ver ${project.activities.length - 3} más actividades ↓`}
        </button>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.technologies.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded-full bg-cyan/5 border border-cyan/20 text-cyan text-[11px] font-medium">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  const [tab, setTab] = useState('frontend');

  return (
    <section id="projects" className="py-24 bg-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Portfolio</p>
          <h2 className="text-4xl font-extrabold text-white">
            Mis <span className="text-cyan">Proyectos</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 mb-10">
          <button
            onClick={() => setTab('frontend')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              tab === 'frontend'
                ? 'bg-cyan text-navy'
                : 'border border-cyan/30 text-white/60 hover:border-cyan hover:text-cyan'
            }`}
          >
            <i className="fa-solid fa-display mr-2" />
            Frontend / Full Stack
          </button>
          <button
            onClick={() => setTab('backend')}
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
              tab === 'backend'
                ? 'bg-cyan text-navy'
                : 'border border-cyan/30 text-white/60 hover:border-cyan hover:text-cyan'
            }`}
          >
            <i className="fa-solid fa-server mr-2" />
            Backend / APIs
          </button>
        </div>

        {/* Frontend grid */}
        {tab === 'frontend' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {frontendProjects.map((p) => (
              <FrontendCard key={p.id} project={p} />
            ))}
          </div>
        )}

        {/* Backend grid */}
        {tab === 'backend' && (
          <div className="grid md:grid-cols-2 gap-6">
            {backendProjects.map((p) => (
              <BackendCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
