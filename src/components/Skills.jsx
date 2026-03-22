import { skills } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-grid">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Expertise</p>
          <h2 className="text-4xl font-extrabold text-white">
            Habilidades &amp; <span className="text-cyan">Conocimientos</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.category}
              className="rounded-2xl border border-cyan/10 bg-white/[0.03] p-6 hover:border-cyan/30 hover:shadow-card transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-cyan/10 flex items-center justify-center flex-shrink-0">
                  <i className={`${skill.icon} text-cyan text-lg`} />
                </div>
                <h3 className="font-bold text-white text-sm leading-tight">{skill.category}</h3>
              </div>
              <ul className="space-y-2">
                {skill.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-white/60">
                    <i className="fa-solid fa-angle-right text-cyan mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
