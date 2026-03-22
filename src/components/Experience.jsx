import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Trayectoria</p>
          <h2 className="text-4xl font-extrabold text-white">
            Experiencia <span className="text-cyan">Laboral</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/40 via-cyan/20 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex gap-6 md:gap-0 ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-cyan border-2 border-navy shadow-glow transform -translate-x-1/2 mt-6" />

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[45%] rounded-2xl border border-cyan/10 bg-white/[0.03] p-6 hover:border-cyan/30 transition-all duration-300 ${
                    idx % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                >
                  {/* Period badge */}
                  <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-semibold mb-3">
                    {exp.period}
                  </span>
                  <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                  <p className="text-cyan/80 text-sm font-semibold">{exp.company}</p>
                  <p className="text-white/40 text-xs mb-3">
                    <i className="fa-solid fa-location-dot mr-1" />{exp.location}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                  <ul className="space-y-1.5">
                    {exp.achievements.map((a) => (
                      <li key={a} className="flex items-start gap-2 text-xs text-white/50">
                        <i className="fa-solid fa-check text-cyan mt-0.5 flex-shrink-0" />
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
