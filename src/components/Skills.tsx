import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skills = [
  { name: 'Declaração IRPF', level: 95, color: '#c9972a' },
  { name: 'Regularização MEI', level: 92, color: '#c9972a' },
  { name: 'Organização INSS', level: 88, color: '#c9972a' },
  { name: 'Análise Documental', level: 90, color: '#1a5c42' },
  { name: 'Direito Civil', level: 75, color: '#7c3aed' },
  { name: 'Atendimento ao Cliente', level: 98, color: '#0891b2' },
]

const tools = [
  { label: 'SEFAZ', desc: 'Secretaria da Fazenda' },
  { label: 'e-CAC', desc: 'Portal da Receita Federal' },
  { label: 'MEI.gov', desc: 'Portal do Empreendedor' },
  { label: 'Meu INSS', desc: 'Portal de Benefícios' },
  { label: 'PGFN', desc: 'Procuradoria Geral' },
  { label: 'DAS', desc: 'Documento de Arrecadação' },
  { label: 'DCTF', desc: 'Declaração de Débitos' },
  { label: 'DASN-SIMEI', desc: 'Declaração Anual MEI' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.08 },
  }),
}


function SkillBar({ name, level, color, index }: { name: string; level: number; color: string; index: number }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      custom={index}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={fadeUp}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-white">{name}</span>
        <span className="text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/8 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: index * 0.1 + 0.3 }}
          className="h-full rounded-full"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="habilidades" className="py-32 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#c9972a]/5 blur-[100px]" />
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
            className="text-[#c9972a] text-xs font-bold uppercase tracking-widest mb-4"
          >
            Habilidades
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black mb-16"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            O que eu faço{' '}
            <span className="text-[#c9972a]">muito bem.</span>
          </motion.h2>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Skill bars */}
            <div>
              <motion.h3
                custom={2}
                variants={fadeUp}
                className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8"
              >
                Competências técnicas
              </motion.h3>
              <div className="space-y-7">
                {skills.map((s, i) => (
                  <SkillBar key={s.name} {...s} index={i} />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <motion.h3
                custom={3}
                variants={fadeUp}
                className="text-white/40 text-xs font-bold uppercase tracking-widest mb-8"
              >
                Plataformas e sistemas
              </motion.h3>
              <div className="grid grid-cols-2 gap-3">
                {tools.map((t, i) => (
                  <motion.div
                    key={t.label}
                    custom={i + 4}
                    variants={fadeUp}
                    className="p-4 rounded-xl border border-white/8 bg-white/[0.03] hover:border-[#c9972a]/30 hover:bg-[#c9972a]/5 transition-all duration-300 group"
                  >
                    <p className="font-bold text-white text-sm group-hover:text-[#c9972a] transition-colors">
                      {t.label}
                    </p>
                    <p className="text-xs text-[#6b6560] mt-1">{t.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
