import { motion } from 'framer-motion'
import { ArrowDown, MessageCircle, Share2 } from 'lucide-react'
import { Link } from 'react-scroll'
import adelsonImg from '../assets/adelson.png'

const WHATSAPP = 'https://wa.me/5581998721990?text=Olá%20Adelson%2C%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20conversar.'

const tags = ['IRPF', 'MEI', 'INSS', 'Direito', 'Assessoria']

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Gradient blobs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#c9972a]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 -right-40 w-80 h-80 rounded-full bg-[#1a5c42]/15 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white/[0.02] blur-[60px]" />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
              <span className="text-sm text-[#9d9890] tracking-widest uppercase">
                Disponível para novos clientes
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl lg:text-7xl font-black leading-[1] tracking-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Adelson
              <br />
              <span className="text-[#c9972a]">Elias</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-[#9d9890] leading-relaxed mb-4 max-w-lg"
            >
              Assessoria administrativa especializada em{' '}
              <span className="text-white font-semibold">IRPF, MEI e INSS</span>.
              Atendimento claro, organizado e personalizado para a sua realidade.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-sm text-[#6b6560] mb-10"
            >
              Estudante de Direito · Uninassau · Estágio em Advocacia
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 rounded-full border border-[#c9972a]/30 text-[#c9972a] text-xs font-semibold tracking-wider"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-wrap gap-3"
            >
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#c9972a] text-black font-bold text-sm hover:bg-[#e0a930] transition-all shadow-[0_0_30px_rgba(201,151,42,0.25)] hover:shadow-[0_0_40px_rgba(201,151,42,0.4)]"
              >
                <MessageCircle size={16} />
                Chamar no WhatsApp
              </a>
              <a
                href="https://instagram.com/adelsonholanda/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full border border-white/10 text-white text-sm font-semibold hover:bg-white/5 hover:border-white/20 transition-all"
              >
                <Share2 size={16} />
                Instagram
              </a>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#c9972a]/20 to-transparent blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={adelsonImg}
                alt="Adelson Elias - Assessoria Administrativa"
                className="w-full h-[580px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0e]/60 via-transparent to-transparent" />

              {/* Floating card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-6 left-6 right-6 bg-[#0c0c0e]/80 backdrop-blur-md rounded-2xl p-4 border border-white/10"
              >
                <p className="text-[#c9972a] text-xs font-bold uppercase tracking-widest mb-1">
                  Atendimento consultivo
                </p>
                <p className="text-white font-semibold text-sm">
                  Análise documental + orientação prática personalizada
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="flex justify-center mt-24"
        >
          <Link
            to="sobre"
            smooth
            duration={600}
            offset={-64}
            className="flex flex-col items-center gap-2 text-[#6b6560] hover:text-[#9d9890] transition-colors cursor-pointer group"
          >
            <span className="text-xs tracking-widest uppercase">Explorar</span>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            >
              <ArrowDown size={18} />
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
