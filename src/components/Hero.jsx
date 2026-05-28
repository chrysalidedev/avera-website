import logo from '../assets/averalogo.jpeg'

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="accueil"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #003d1f 0%, #006B3F 40%, #00853a 70%, #1a2340 100%)',
      }}
    >
      {/* Decorative circles */}
      <div
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#F77F00', transform: 'translate(40%, -40%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 pointer-events-none"
        style={{ background: '#F77F00', transform: 'translate(-40%, 40%)' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full opacity-5 pointer-events-none"
        style={{ background: '#fff', transform: 'translate(-50%, -50%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white pt-20 pb-12">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            <div
              className="absolute inset-0 rounded-full blur-xl opacity-40"
              style={{ background: '#F77F00', transform: 'scale(1.2)' }}
            />
            <img
              src={logo}
              alt="Logo A.V.E.R.A"
              className="relative w-32 h-32 rounded-full object-cover border-4 border-orange-400 shadow-2xl"
            />
          </div>
        </div>

        {/* Association name */}
        <h1
          className="text-6xl sm:text-7xl md:text-8xl font-black tracking-widest mb-4 drop-shadow-lg"
          style={{ fontFamily: 'Playfair Display, serif', color: '#F77F00' }}
        >
          A.V.E.R.A
        </h1>

        <div className="w-24 h-1 mx-auto rounded-full mb-6" style={{ background: '#F77F00' }} />

        <h2
          className="text-lg sm:text-xl md:text-2xl font-semibold tracking-wide mb-3 text-white/90"
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          Association des Vaillants Étudiants Ressortissants d'Aboisso
        </h2>
        <p className="text-sm sm:text-base text-white/70 mb-10 max-w-xl mx-auto leading-relaxed">
          Rassemblement, excellence et solidarité pour tous les étudiants d'Aboisso et ses environs.
          Ensemble, construisons un avenir meilleur.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollTo('#contact')}
            className="px-8 py-4 rounded-full font-bold text-white text-base shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            style={{ background: 'linear-gradient(135deg, #F77F00, #e65c00)' }}
          >
            Nous rejoindre
          </button>
          <button
            onClick={() => scrollTo('#objectifs')}
            className="px-8 py-4 rounded-full font-bold text-white text-base border-2 border-white/40 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/70"
          >
            Nos objectifs
          </button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-6 max-w-md mx-auto">
          {[
            { value: '6', label: 'Objectifs' },
            { value: '∞', label: 'Solidarité' },
            { value: '1', label: 'Vision commune' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div
                className="text-3xl font-black mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: '#F77F00' }}
              >
                {s.value}
              </div>
              <div className="text-xs text-white/60 font-medium tracking-wide uppercase">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50">
        <span className="text-xs tracking-widest uppercase">Défiler</span>
        <div className="w-0.5 h-10 rounded-full overflow-hidden bg-white/20">
          <div
            className="w-full bg-orange-400 rounded-full"
            style={{ height: '40%', animation: 'bounce 1.5s infinite' }}
          />
        </div>
      </div>
    </section>
  )
}
