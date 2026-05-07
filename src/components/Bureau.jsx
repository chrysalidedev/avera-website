import presidentPhoto from '../assets/pravera.jpg'
import { HandsIcon } from './Icons'

const members = [
  {
    name: "N'Guessan Amadou OUATTARA",
    role: 'Président Exécutif',
    photo: presidentPhoto,
    initials: null,
    avatarBg: null,
    quote: "Ensemble, faisons d'Aboisso un vivier d'excellence et de solidarité.",
    color: '#F77F00',
    badge: 'linear-gradient(135deg, #F77F00, #e65c00)',
  },
  {
    name: 'Kouamé Brice YAPI',
    role: 'Vice-Président',
    photo: null,
    initials: 'KBY',
    avatarBg: 'linear-gradient(135deg, #009A44, #006B3F)',
    quote: "Notre force réside dans l'unité et l'entraide entre ressortissants.",
    color: '#009A44',
    badge: 'linear-gradient(135deg, #009A44, #006B3F)',
  },
  {
    name: 'Assi Marie-Claire ADJOUA',
    role: 'Secrétaire Générale',
    photo: null,
    initials: 'AMA',
    avatarBg: 'linear-gradient(135deg, #1d6fa4, #0e4f7a)',
    quote: "L'organisation et la communication sont les piliers de notre dynamisme.",
    color: '#1d6fa4',
    badge: 'linear-gradient(135deg, #1d6fa4, #0e4f7a)',
  },
]

export default function Bureau() {
  return (
    <section id="bureau" className="py-24" style={{ background: '#1a2340' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#F77F00' }}
          >
            Notre équipe dirigeante
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4 text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Le Bureau Exécutif
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Le bureau exécutif de l'A.V.E.R.A est composé de membres élus, dédiés au service
            de la communauté estudiantine d'Aboisso.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-6" style={{ background: '#F77F00' }} />
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {members.map((m, i) => (
            <div
              key={m.name}
              className="group relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.10)',
              }}
            >
              {/* Photo zone */}
              <div className="relative h-64 overflow-hidden">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{ background: m.avatarBg }}
                  >
                    <span
                      className="text-5xl font-black text-white/80 select-none"
                      style={{ fontFamily: 'Playfair Display, serif', letterSpacing: '0.1em' }}
                    >
                      {m.initials}
                    </span>
                    <div
                      className="absolute bottom-4 right-4 text-xs text-white/40 font-medium italic"
                    >
                      Photo à venir
                    </div>
                  </div>
                )}

                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'linear-gradient(to top, rgba(26,35,64,0.95) 0%, rgba(26,35,64,0.2) 60%, transparent 100%)' }}
                />

                {/* Role badge */}
                <div className="absolute bottom-4 left-4">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-xs font-bold text-white shadow-lg"
                    style={{ background: m.badge }}
                  >
                    {m.role}
                  </span>
                </div>

                {/* Number */}
                <div
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-black text-white/60"
                  style={{ background: 'rgba(255,255,255,0.10)', fontFamily: 'Playfair Display, serif' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
              </div>

              {/* Info */}
              <div className="p-6">
                <h3
                  className="text-lg font-black text-white mb-1 leading-tight"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  {m.name}
                </h3>

                <blockquote className="text-sm text-gray-400 leading-relaxed mt-3 italic border-l-2 pl-3" style={{ borderColor: m.color }}>
                  "{m.quote}"
                </blockquote>
              </div>

              {/* Bottom glow on hover */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: m.badge }}
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="rounded-3xl p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(0,154,68,0.15), rgba(247,127,0,0.10))',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div className="flex justify-center mb-4">
            <HandsIcon className="w-10 h-10 text-orange-400" />
          </div>
          <h3
            className="text-2xl font-bold text-white mb-3"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Rejoins l'A.V.E.R.A
          </h3>
          <p className="text-gray-400 mb-6 max-w-md mx-auto">
            Tu es étudiant(e) et ressortissant(e) d'Aboisso ? Intègre notre association et
            bénéficie de notre réseau et de notre soutien.
          </p>
          <button
            onClick={() => {
              const el = document.querySelector('#contact')
              if (el) el.scrollIntoView({ behavior: 'smooth' })
            }}
            className="px-8 py-3 rounded-full font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #F77F00, #e65c00)' }}
          >
            Nous contacter
          </button>
        </div>

      </div>
    </section>
  )
}
