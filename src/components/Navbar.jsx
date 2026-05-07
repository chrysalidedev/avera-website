import { useState, useEffect } from 'react'
import logo from '../assets/averalogo.jpeg'

const links = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'À propos', href: '#apropos' },
  { label: 'Objectifs', href: '#objectifs' },
  { label: 'Bureau', href: '#bureau' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleLink = (e, href) => {
    e.preventDefault()
    setOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
        boxShadow: scrolled ? '0 2px 24px rgba(0,0,0,0.10)' : 'none',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-18 py-3">
        {/* Logo */}
        <a href="#accueil" onClick={e => handleLink(e, '#accueil')} className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo A.V.E.R.A"
            className="h-12 w-12 rounded-full object-cover border-2 border-orange-400 shadow"
          />
          <div className="leading-tight">
            <span
              className="block font-black text-xl tracking-widest"
              style={{ fontFamily: 'Playfair Display, serif', color: scrolled ? '#009A44' : '#fff' }}
            >
              A.V.E.R.A
            </span>
            <span
              className="block text-xs font-medium tracking-wide"
              style={{ color: scrolled ? '#F77F00' : '#ffd580' }}
            >
              Aboisso
            </span>
          </div>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={e => handleLink(e, l.href)}
                className="text-sm font-semibold transition-colors duration-200 hover:text-orange-400"
                style={{ color: scrolled ? '#1a2340' : '#fff' }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
              onClick={e => handleLink(e, '#contact')}
              className="px-5 py-2 rounded-full text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #F77F00, #e65c00)' }}
            >
              Nous rejoindre
            </a>
          </li>
        </ul>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(o => !o)}
          aria-label="Menu"
        >
          <span className="block w-6 h-0.5 transition-all" style={{ background: scrolled ? '#1a2340' : '#fff', transform: open ? 'rotate(45deg) translate(4px,4px)' : '' }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: scrolled ? '#1a2340' : '#fff', opacity: open ? 0 : 1 }} />
          <span className="block w-6 h-0.5 transition-all" style={{ background: scrolled ? '#1a2340' : '#fff', transform: open ? 'rotate(-45deg) translate(4px,-4px)' : '' }} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl">
          <ul className="flex flex-col py-4">
            {links.map(l => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={e => handleLink(e, l.href)}
                  className="block px-8 py-3 text-sm font-semibold text-gray-700 hover:text-orange-500 hover:bg-orange-50 transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li className="px-8 pt-3">
              <a
                href="#contact"
                onClick={e => handleLink(e, '#contact')}
                className="block text-center px-5 py-2.5 rounded-full text-sm font-bold text-white"
                style={{ background: 'linear-gradient(135deg, #F77F00, #e65c00)' }}
              >
                Nous rejoindre
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  )
}
