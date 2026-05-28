import presidentPhoto from '../assets/pravera.jpg'
import { HandsIcon } from './Icons'

const members = [
  {
    name: "N'Guessan Amadou OUATTARA",
    role: 'PRÉSIDENT',
    photo: presidentPhoto,
    initials: null,
    avatarBg: null,
    quote:
      "Ensemble, faisons rayonner les élèves ressortissants d’Aboisso à travers l’excellence, la fraternité et la solidarité.",
    color: '#F77F00',
    badge: 'linear-gradient(135deg, #F77F00, #D95D00)',
  },

  {
    name: 'BAKARE ABDUL MOUIZE',
    role: 'SECRÉTAIRE GÉNÉRAL',
    photo: null,
    initials: 'BM',
    avatarBg: 'linear-gradient(135deg, #00B894, #00695C)',
    quote:
      "Chaque action administrative contribue à renforcer les liens entre les membres de notre communauté.",
    color: '#00B894',
    badge: 'linear-gradient(135deg, #00B894, #00695C)',
  },

  {
    name: 'KADJANE AMOUCHIA ET DANQUAH K. DIDIER',
    role: 'SERVICE DE LA COMMUNICATION',
    photo: null,
    initials: 'KD',
    avatarBg: 'linear-gradient(135deg, #6C5CE7, #4834D4)',
    quote:
      "Informer, valoriser et faire entendre la voix des élèves ressortissants d’Aboisso partout où nous sommes.",
    color: '#6C5CE7',
    badge: 'linear-gradient(135deg, #6C5CE7, #4834D4)',
  },

  {
    name: 'DIAKITÉ MOUSSA ET SANOGO ADAMA',
    role: 'SERVICE DE LA MOBILISATION',
    photo: null,
    initials: 'DS',
    avatarBg: 'linear-gradient(135deg, #E17055, #C44536)',
    quote:
      "La mobilisation est le moteur qui transforme notre union en véritable force collective.",
    color: '#E17055',
    badge: 'linear-gradient(135deg, #E17055, #C44536)',
  },

  {
    name: 'SIA HAMID ET KABORE RAMA',
    role: 'SERVICE CHARGÉ DES AFFAIRES EXTÉRIEURES',
    photo: null,
    initials: 'SK',
    avatarBg: 'linear-gradient(135deg, #0984E3, #0652DD)',
    quote:
      "Créer des partenariats solides pour ouvrir de nouvelles opportunités aux élèves d’Aboisso.",
    color: '#0984E3',
    badge: 'linear-gradient(135deg, #0984E3, #0652DD)',
  },

  {
    name: 'ATOUBOU HERMANN ET TRAORE FATIM',
    role: 'SERVICE DES FINANCES',
    photo: null,
    initials: 'AT',
    avatarBg: 'linear-gradient(135deg, #FDCB6E, #E1A32A)',
    quote:
      "Une gestion transparente et responsable pour soutenir durablement les projets de l’association.",
    color: '#FDCB6E',
    badge: 'linear-gradient(135deg, #FDCB6E, #E1A32A)',
  },
];

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
