import { UsersIcon, BuildingIcon, StarIcon, HeartIcon, BookOpenIcon, ScaleIcon } from './Icons'

const objectives = [
  {
    number: '01',
    Icon: UsersIcon,
    title: 'Rassemblement',
    text: "Créer le rassemblement de tous les étudiants ressortissants d'Aboisso et ses environs autour d'une même table avec une vision commune de la réussite.",
    color: '#009A44',
    bg: '#f0fdf4',
    border: '#bbf7d0',
  },
  {
    number: '02',
    Icon: BuildingIcon,
    title: 'Insertion professionnelle',
    text: "Favoriser l'insertion dans l'administration avec l'appui des cadres de notre chère commune.",
    color: '#1d6fa4',
    bg: '#eff6ff',
    border: '#bfdbfe',
  },
  {
    number: '03',
    Icon: StarIcon,
    title: "Promouvoir l'excellence",
    text: "Promouvoir l'excellence pour un avenir meilleur pour tous les membres de l'association.",
    color: '#d97706',
    bg: '#fffbeb',
    border: '#fed7aa',
  },
  {
    number: '04',
    Icon: HeartIcon,
    title: 'Entente & Solidarité',
    text: "Garantir l'entente et la solidarité entre les membres, jusqu'après même les études universitaires.",
    color: '#9333ea',
    bg: '#faf5ff',
    border: '#e9d5ff',
  },
  {
    number: '05',
    Icon: BookOpenIcon,
    title: 'Encadrement des bacheliers',
    text: "Encadrement des petit(e)s frères & sœurs (nouveaux bachelier(e)s) afin de faciliter leur insertion académique et professionnelle.",
    color: '#dc2626',
    bg: '#fff1f2',
    border: '#fecdd3',
  },
  {
    number: '06',
    Icon: ScaleIcon,
    title: 'Esprit apolitique',
    text: "Faire de l'esprit apolitique le socle de l'association A.V.E.R.A, garantissant son indépendance et sa neutralité.",
    color: '#0e7490',
    bg: '#ecfeff',
    border: '#a5f3fc',
  },
]

export default function Objectives() {
  return (
    <section
      id="objectifs"
      className="py-24"
      style={{ background: 'linear-gradient(180deg, #f8fafc 0%, #fff 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#F77F00' }}
          >
            Notre raison d'être
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a2340' }}
          >
            Nos Objectifs
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Six engagements fondateurs qui guident chacune de nos actions et définissent notre vision pour la communauté estudiantine d'Aboisso.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-6" style={{ background: '#F77F00' }} />
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {objectives.map(obj => (
            <div
              key={obj.number}
              className="group relative rounded-2xl p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-default"
              style={{
                background: obj.bg,
                border: `1.5px solid ${obj.border}`,
              }}
            >
              {/* Number watermark */}
              <span
                className="absolute top-4 right-5 text-5xl font-black opacity-10 select-none"
                style={{ fontFamily: 'Playfair Display, serif', color: obj.color }}
              >
                {obj.number}
              </span>

              {/* Icon */}
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 shadow-sm"
                style={{ background: '#fff' }}
              >
                <obj.Icon className="w-6 h-6" style={{ color: obj.color }} />
              </div>

              {/* Title */}
              <h3
                className="text-lg font-bold mb-3"
                style={{ color: obj.color }}
              >
                {obj.title}
              </h3>

              {/* Text */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {obj.text}
              </p>

              {/* Bottom accent */}
              <div
                className="absolute bottom-0 left-6 right-6 h-0.5 rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: obj.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
