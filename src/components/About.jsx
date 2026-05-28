import logo from '../assets/averalogo.jpeg'
import { UsersIcon, AcademicCapIcon, ScaleIcon, GlobeIcon } from './Icons'

const values = [
  { Icon: UsersIcon, title: 'Solidarité', desc: "L'entraide entre membres, avant et après les études." },
  { Icon: AcademicCapIcon, title: 'Excellence', desc: "Promouvoir la réussite académique et professionnelle." },
  { Icon: ScaleIcon, title: 'Apolitisme', desc: "Une association libre de tout engagement politique partisan." },
  { Icon: GlobeIcon, title: 'Unité', desc: "Rassembler tous les ressortissants d'Aboisso autour d'une vision commune." },
]

export default function About() {
  return (
    <section id="apropos" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#F77F00' }}
          >
            Qui sommes-nous ?
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a2340' }}
          >
            À propos de l'A.V.E.R.A
          </h2>
          <div className="w-16 h-1 mx-auto rounded-full" style={{ background: '#009A44' }} />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Text */}
          <div>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              L'<strong className="text-green-700">Association des Vaillants Étudiants Ressortissants d'Aboisso (A.V.E.R.A)</strong> est
              une organisation estudiantine fondée pour rassembler tous les étudiants originaires
              d'Aboisso et de ses environs autour d'une vision commune de la réussite.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Elle se veut un espace d'entraide, de partage et d'épanouissement où chaque étudiant
              trouve le soutien nécessaire pour réussir ses études et s'insérer dans la vie
              professionnelle grâce à l'appui des cadres de notre commune.
            </p>
            <p className="text-gray-600 leading-relaxed">
              L'A.V.E.R.A accompagne également les nouveaux bacheliers dans leur insertion
              académique, et maintient des liens durables entre ses membres bien au-delà
              des années universitaires.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Aboisso', "Côte d'Ivoire", 'Étudiants', 'Excellence', 'Solidarité'].map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{ background: '#f0fdf4', color: '#009A44', border: '1px solid #bbf7d0' }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Image card */}
          <div className="relative flex justify-center">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: 'linear-gradient(135deg, #006B3F22, #F77F0022)',
                transform: 'rotate(3deg)',
              }}
            />
            <div className="relative bg-white rounded-3xl shadow-2xl p-8 text-center max-w-sm w-full">
              <img
                src={logo}
                alt="Logo A.V.E.R.A"
                className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-green-100 shadow-lg mb-6"
              />
              <h3
                className="text-2xl font-black tracking-widest mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: '#009A44' }}
              >
                A.V.E.R.A
              </h3>
              <p className="text-sm text-gray-500 font-medium">
                Association des Étudiants<br />Ressortissants d'Aboisso
              </p>
              <div className="mt-6 pt-6 border-t border-gray-100 grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-black text-orange-500" style={{ fontFamily: 'Playfair Display, serif' }}>6</div>
                  <div className="text-xs text-gray-500 font-medium">Objectifs</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-black text-green-600" style={{ fontFamily: 'Playfair Display, serif' }}>100%</div>
                  <div className="text-xs text-gray-500 font-medium">Apolitique</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {values.map(v => (
            <div
              key={v.title}
              className="text-center p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              <div className="flex justify-center mb-3">
                <v.Icon className="w-8 h-8 text-green-600" />
              </div>
              <h4 className="font-bold text-gray-800 mb-2">{v.title}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
