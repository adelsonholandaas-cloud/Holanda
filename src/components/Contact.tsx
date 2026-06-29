import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageCircle, Share2, ExternalLink, Mail } from 'lucide-react'

const WHATSAPP = 'https://wa.me/5581998721990?text=Olá%20Adelson%2C%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20atendimento.'

const contacts = [
  {
    icon: MessageCircle,
    label: 'WhatsApp',
    desc: '+55 81 99872-1990',
    href: WHATSAPP,
    color: '#22c55e',
    primary: true,
  },
  {
    icon: Share2,
    label: 'Instagram',
    desc: '@adelsonholanda',
    href: 'https://instagram.com/adelsonholanda/',
    color: '#e1306c',
    primary: false,
  },
  {
    icon: ExternalLink,
    label: 'Portal de Atendimento',
    desc: 'holanda-assessoria.base44.app',
    href: 'https://holanda-assessoria.base44.app',
    color: '#c9972a',
    primary: false,
  },
  {
    icon: Mail,
    label: 'E-mail',
    desc: 'adelsonholandaas@gmail.com',
    href: 'mailto:adelsonholandaas@gmail.com',
    color: '#6366f1',
    primary: false,
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

export default function Contact() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="contato" className="py-32 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-[#c9972a]/8 blur-[120px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-[#c9972a] text-xs font-bold uppercase tracking-widest mb-4 text-center"
          >
            Contato
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-4xl lg:text-6xl font-black text-center mb-6 leading-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Vamos resolver{' '}
            <span className="text-[#c9972a]">juntos?</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-[#6b6560] text-center max-w-xl mx-auto mb-16 text-lg"
          >
            Envie uma mensagem e receba uma orientação inicial sobre o seu caso.
            Atendimento claro, rápido e personalizado.
          </motion.p>

          {/* Main CTA */}
          <motion.div custom={3} variants={fadeUp} className="flex justify-center mb-16">
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 px-10 py-5 rounded-full bg-[#c9972a] text-black font-black text-lg hover:bg-[#e0a930] transition-all shadow-[0_0_60px_rgba(201,151,42,0.3)] hover:shadow-[0_0_80px_rgba(201,151,42,0.5)] hover:scale-105"
            >
              <MessageCircle size={22} />
              <span>Chamar no WhatsApp</span>
            </a>
          </motion.div>

          {/* Contact cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contacts.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noreferrer"
                custom={i + 4}
                variants={fadeUp}
                className={`group p-5 rounded-2xl border transition-all duration-300 flex flex-col gap-3 ${
                  c.primary
                    ? 'border-[#22c55e]/30 bg-[#22c55e]/5 hover:border-[#22c55e]/50 hover:bg-[#22c55e]/10'
                    : 'border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]'
                }`}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: `${c.color}15` }}
                >
                  <c.icon size={18} style={{ color: c.color }} />
                </div>
                <div>
                  <p className="font-bold text-white text-sm mb-1">{c.label}</p>
                  <p className="text-xs text-[#6b6560] break-all">{c.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
