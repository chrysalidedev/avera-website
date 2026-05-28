import logo from '../assets/averalogo.jpeg'
import { HeartIcon } from './Icons'

const navLinks = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Objectifs', href: '#objectifs' },
  { label: 'Bureau', href: '#bureau' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#0d1526', color: '#fff' }}>
      <div className="max-w-7xl mx-auto px-6 sm:px-8 pt-16 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <img
                src={logo}
                alt="Logo A.V.E.R.A"
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
              />
              <div>
                <span
                  className="block font-black text-xl tracking-widest"
                  style={{ fontFamily: 'Playfair Display, serif', color: '#F77F00' }}
                >
                  A.V.E.R.A
                </span>
                <span className="block text-xs text-gray-500">Aboisso, Côte d'Ivoire</span>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Association des Vaillants Étudiants Ressortissants d'Aboisso. Rassemblement, excellence
              et solidarité pour tous.
            </p>

            {/* Ivory Coast flag strip */}
            <div className="flex mt-5 rounded-full overflow-hidden h-1.5 w-24">
              <div className="flex-1" style={{ background: '#F77F00' }} />
              <div className="flex-1" style={{ background: '#fff' }} />
              <div className="flex-1" style={{ background: '#009A44' }} />
            </div>
            <p className="text-xs text-gray-600 mt-1.5">Côte d'Ivoire</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Navigation</h4>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map(l => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={e => { e.preventDefault(); scrollTo(l.href) }}
                    className="text-sm text-gray-400 hover:text-orange-400 transition-colors flex items-center gap-2 group"
                  >
                    <span
                      className="w-3 h-0.5 rounded-full transition-all group-hover:w-5"
                      style={{ background: '#F77F00' }}
                    />
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Motto */}
          <div>
            <h4 className="text-sm font-bold text-white mb-5 uppercase tracking-widest">Notre devise</h4>
            <div
              className="rounded-2xl p-6"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
            >
              <blockquote className="text-sm text-gray-300 italic leading-relaxed mb-3">
                "Ensemble, construisons un avenir meilleur pour tous les étudiants ressortissants d'Aboisso."
              </blockquote>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 rounded-full" style={{ background: '#F77F00' }} />
                <span className="text-xs text-gray-500 font-semibold tracking-wide uppercase">A.V.E.R.A</span>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs text-gray-500">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: '#009A44' }}
              />
              Association apolitique et indépendante
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t" style={{ borderColor: 'rgba(255,255,255,0.06)' }} />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8">
          <p className="text-xs text-gray-600">
            © {new Date().getFullYear()} A.V.E.R.A — Tous droits réservés.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
            <p className="text-xs text-gray-600 flex items-center gap-1">
              Fait avec
              <HeartIcon className="w-3.5 h-3.5 text-red-500 inline" />
              pour Aboisso
            </p>
            <span className="hidden sm:block w-px h-3 bg-gray-700" />
            <a
              href="https://essiscedric.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-semibold transition-colors duration-200 group flex items-center gap-1.5"
              style={{ color: '#6b7280' }}
            >
              Développé par
              <span
                className="font-black tracking-wide group-hover:text-orange-400 transition-colors duration-200"
                style={{ color: '#F77F00' }}
              >
                Cédric Dev
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
