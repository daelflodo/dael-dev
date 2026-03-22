import avatar2 from '../assets/dael-avatar-2.png';
import { personal, skills } from '../data/portfolioData';

const techTags = [
  'NestJS','TypeScript','Node.js','Express.js','JavaScript',
  'React','Java','MySQL','PostgreSQL','Docker','Prisma','Redis','RabbitMQ',
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-grid">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-16">
          <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Acerca de mí</p>
          <h2 className="text-4xl font-extrabold text-white">
            Un poco sobre <span className="text-cyan">Dael</span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mt-4" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Avatar */}
          <div className="flex justify-center">
            <div className="relative w-[400px] md:w-[550px] h-[350px] rounded-2xl overflow-hidden border-2 border-cyan shadow-[0_0_20px_rgba(0,200,255,0.4)]">
              <img
                src={avatar2}
                alt="Dael"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-1">{personal.name}</h3>
            <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-4">
              Full Stack Developer
            </p>
            <div className="w-16 h-0.5 bg-gradient-to-r from-cyan to-transparent mb-6" />
            <p className="text-white/70 leading-relaxed mb-6 text-sm md:text-base">
              {personal.bio}
            </p>

            <div className="grid grid-cols-2 gap-3 text-sm text-white/60 mb-6">
              <span><i className="fa-solid fa-location-dot text-cyan mr-2" />{personal.location}</span>
              <span><i className="fa-solid fa-envelope text-cyan mr-2" />{personal.email}</span>
            </div>

            {/* Tech tags */}
            <div className="flex flex-wrap gap-2">
              {techTags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-semibold text-cyan border border-cyan/30 bg-cyan/5"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
