import { personal, socialLinks } from '../data/portfolioData';

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-cyan text-sm font-semibold tracking-widest uppercase mb-2">Contacto</p>
        <h2 className="text-4xl font-extrabold text-white mb-4">
          Hablemos <span className="text-cyan">juntos</span>
        </h2>
        <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-cyan to-transparent mx-auto mb-6" />
        <p className="text-white/60 leading-relaxed mb-12">
          ¿Tienes un proyecto en mente, una oportunidad laboral o simplemente quieres conectar?
          Estoy disponible para trabajo remoto y colaboraciones.
        </p>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-4 mb-12">
          <a
            href={`mailto:${personal.email}`}
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-cyan/10 bg-white/[0.02] hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <i className="fa-solid fa-envelope text-cyan text-xl" />
            </div>
            <span className="text-xs text-white/50">Email</span>
            <span className="text-sm text-white font-medium break-all">{personal.email}</span>
          </a>

          <a
            href={personal.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-cyan/10 bg-white/[0.02] hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <i className="fa-brands fa-whatsapp text-cyan text-xl" />
            </div>
            <span className="text-xs text-white/50">WhatsApp</span>
            <span className="text-sm text-white font-medium">{personal.phone}</span>
          </a>

          <a
            href={personal.cvLandingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 p-6 rounded-2xl border border-cyan/10 bg-white/[0.02] hover:border-cyan/40 hover:bg-cyan/5 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center group-hover:bg-cyan/20 transition-colors">
              <i className="fa-solid fa-file-lines text-cyan text-xl" />
            </div>
            <span className="text-xs text-white/50">Curriculum Vitae</span>
            <span className="text-sm text-white font-medium">Ver CV online</span>
          </a>
        </div>

        {/* Social links */}
        <div className="flex justify-center gap-4">
          {socialLinks.map((s) => (
            <a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.name}
              className="w-12 h-12 rounded-full border border-cyan/20 flex items-center justify-center text-white/60 hover:border-cyan hover:text-cyan transition-all duration-200 text-lg"
            >
              <i className={s.icon} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
