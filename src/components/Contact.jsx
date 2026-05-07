import { useState } from 'react'
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon,
  CheckCircleIcon,
  PaperAirplaneIcon,
  FacebookIcon,
  WhatsAppIcon,
  InstagramIcon,
} from './Icons'

const infos = [
  { Icon: MapPinIcon, label: 'Ville', value: "Aboisso, Côte d'Ivoire" },
  { Icon: EnvelopeIcon, label: 'Email', value: 'sudcomoeavera@gmail.com', href: 'mailto:sudcomoeavera@gmail.com' },
  { Icon: PhoneIcon, label: 'WhatsApp', value: '07 89 87 54 11', href: 'https://wa.me/2250789875411' },
]

const socials = [
  { label: 'Facebook', Icon: FacebookIcon, color: '#1877f2', href: 'https://web.facebook.com/profile.php?id=61558528656231' },
  { label: 'WhatsApp', Icon: WhatsAppIcon, color: '#25d366', href: 'https://wa.me/2250789875411' },
  { label: 'Instagram', Icon: InstagramIcon, color: '#e1306c', href: '#' },
]

export default function Contact() {
  const [form, setForm] = useState({ nom: '', email: '', ville: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block text-xs font-bold tracking-widest uppercase mb-4"
            style={{ color: '#009A44' }}
          >
            Rejoins-nous
          </span>
          <h2
            className="text-4xl sm:text-5xl font-black mb-4"
            style={{ fontFamily: 'Playfair Display, serif', color: '#1a2340' }}
          >
            Contact & Adhésion
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Tu es étudiant(e) ressortissant(e) d'Aboisso ? Contacte-nous pour adhérer à l'association
            et rejoindre notre communauté.
          </p>
          <div className="w-16 h-1 mx-auto rounded-full mt-6" style={{ background: '#009A44' }} />
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info panel */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div
              className="rounded-2xl p-7"
              style={{ background: 'linear-gradient(135deg, #006B3F, #009A44)', color: '#fff' }}
            >
              <h3
                className="text-2xl font-black mb-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                A.V.E.R.A
              </h3>
              <p className="text-sm text-green-100 mb-6 leading-relaxed">
                Rejoins des centaines d'étudiants ressortissants d'Aboisso qui construisent ensemble leur avenir.
              </p>

              <div className="flex flex-col gap-4">
                {infos.map(i => (
                  <div key={i.label} className="flex items-start gap-3">
                    <i.Icon className="w-5 h-5 text-green-200 mt-0.5 shrink-0" />
                    <div>
                      <div className="text-xs text-green-200 font-semibold uppercase tracking-wide">{i.label}</div>
                      {i.href ? (
                        <a href={i.href} target="_blank" rel="noopener noreferrer" className="text-sm text-white font-medium hover:text-green-200 underline underline-offset-2 transition-colors">
                          {i.value}
                        </a>
                      ) : (
                        <div className="text-sm text-white font-medium">{i.value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div
              className="rounded-2xl p-6"
              style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
            >
              <h4 className="font-bold text-gray-700 mb-4 text-sm">Retrouvez-nous sur</h4>
              <div className="flex gap-3">
                {socials.map(s => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 rounded-xl text-xs font-semibold text-white transition-all hover:scale-105 hover:shadow flex flex-col items-center gap-1"
                    style={{ background: s.color }}
                    aria-label={s.label}
                  >
                    <s.Icon className="w-4 h-4" />
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-3">
            {sent ? (
              <div
                className="h-full flex flex-col items-center justify-center text-center rounded-2xl p-12"
                style={{ background: '#f0fdf4', border: '2px solid #bbf7d0' }}
              >
                <CheckCircleIcon className="w-16 h-16 text-green-500 mb-4" />
                <h3 className="text-2xl font-black text-green-700 mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>
                  Message envoyé !
                </h3>
                <p className="text-gray-600">
                  Merci pour ton intérêt. Un membre du bureau te contactera très prochainement.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-6 px-6 py-2 rounded-full text-sm font-semibold text-green-700 border border-green-300 hover:bg-green-50 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl p-8 flex flex-col gap-5"
                style={{ background: '#f8fafc', border: '1px solid #e2e8f0' }}
              >
                <div className="grid sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Nom complet *</label>
                    <input
                      name="nom"
                      value={form.nom}
                      onChange={handleChange}
                      required
                      placeholder="Ex : Kouassi Jean"
                      className="px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                      style={{ border: '1.5px solid #e2e8f0', background: '#fff' }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Email *</label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="ton@email.com"
                      className="px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                      style={{ border: '1.5px solid #e2e8f0', background: '#fff' }}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Ville / Quartier d'origine</label>
                  <input
                    name="ville"
                    value={form.ville}
                    onChange={handleChange}
                    placeholder="Ex : Aboisso, Maféré, Ayamé..."
                    className="px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-green-400 transition"
                    style={{ border: '1.5px solid #e2e8f0', background: '#fff' }}
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-bold text-gray-600 uppercase tracking-wide">Ton message *</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Présente-toi, parle-nous de ton parcours ou de ta demande..."
                    className="px-4 py-3 rounded-xl text-sm border focus:outline-none focus:ring-2 focus:ring-green-400 transition resize-none"
                    style={{ border: '1.5px solid #e2e8f0', background: '#fff' }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-white text-sm transition-all duration-300 hover:scale-[1.02] hover:shadow-lg flex items-center justify-center gap-2"
                  style={{ background: 'linear-gradient(135deg, #009A44, #006B3F)' }}
                >
                  Envoyer ma candidature
                  <PaperAirplaneIcon className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
