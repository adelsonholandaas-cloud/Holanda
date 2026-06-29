import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { GraduationCap, Briefcase, Award, Heart } from 'lucide-react'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1 },
  }),
}

const credentials = [
  {
    icon: GraduationCap,
    title: 'Direito (7/10)',
    institution: 'Uninassau',
    desc: 'Formação jurídica sólida com foco em direito civil e administrativo.',
    color: '#c9972a',
  },
  {
    icon: Award,
    title: 'Teologia',
    institution: 'FATIN',
    desc: 'Formação complementar em liderança, ética e relações humanas.',
    color: '#1a5c42',
  },
  {
    icon: Briefcase,
    title: 'Estágio em Advocacia',
    institution: 'Prática Jurídica',
    desc: 'Experiência prática em atendimento jurídico, análise de documentos e orientação a clientes.',
    color: '#7c3aed',
  },
  {
    icon: Heart,
    title: 'Assessoria Administrativa',
    institution: 'Holanda Assessoria',
    desc: 'Especializado em IRPF, MEI e INSS com atendimento humanizado e orientação personalizada.',
    color: '#c9972a',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="sobre" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.p
            custom={0}
            variants={fadeUp}
            className="text-[#c9972a] text-xs font-bold uppercase tracking-widest mb-4"
          >
            Sobre mim
          </motion.p>

          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-black leading-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Clareza e confiança
              <br />
              <span className="text-[#c9972a]">em cada atendimento.</span>
            </motion.h2>

            <motion.div custom={2} variants={fadeUp} className="space-y-4">
              <p className="text-[#9d9890] text-lg leading-relaxed">
                Sou Adelson Elias, estudante de Direito e especialista em assessoria
                administrativa. Minha missão é simplificar processos burocráticos para
                pessoas físicas, MEIs e segurados do INSS.
              </p>
              <p className="text-[#6b6560] leading-relaxed">
                Combino conhecimento jurídico, prática de estágio e comunicação clara
                para entregar orientação de qualidade — sem jargões desnecessários e
                com total transparência sobre cada etapa do processo.
              </p>
            </motion.div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {credentials.map((c, i) => (
              <motion.div
                key={c.title}
                custom={i + 3}
                variants={fadeUp}
                className="group p-6 rounded-2xl border border-white/8 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/15 transition-all duration-300"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${c.color}15` }}
                >
                  <c.icon size={22} style={{ color: c.color }} />
                </div>
                <h3 className="font-bold text-white text-base mb-1">{c.title}</h3>
                <p className="text-xs text-[#c9972a] font-semibold mb-3 tracking-wide">
                  {c.institution}
                </p>
                <p className="text-sm text-[#6b6560] leading-relaxed">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
