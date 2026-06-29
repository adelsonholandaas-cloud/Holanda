import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MessageSquare, Search, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Contato inicial',
    desc: 'Você me chama no WhatsApp e conta o que precisa resolver — IRPF, MEI ou INSS. Sem burocracia, sem formulário.',
    color: '#c9972a',
  },
  {
    num: '02',
    icon: Search,
    title: 'Análise da situação',
    desc: 'Recebo uma orientação clara sobre os documentos necessários, pendências encontradas e o caminho mais eficiente para a resolução.',
    color: '#1a5c42',
  },
  {
    num: '03',
    icon: CheckCircle2,
    title: 'Regularização orientada',
    desc: 'Acompanho cada etapa com clareza, prazo definido e registro de tudo que foi tratado — você sabe exatamente onde está no processo.',
    color: '#7c3aed',
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#111]/60 to-transparent" />
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
            Processo
          </motion.p>

          <motion.h2
            custom={1}
            variants={fadeUp}
            className="text-4xl lg:text-5xl font-black mb-6"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            Como funciona
            <br />
            <span className="text-[#c9972a]">o atendimento.</span>
          </motion.h2>

          <motion.p
            custom={2}
            variants={fadeUp}
            className="text-[#6b6560] mb-20 max-w-xl"
          >
            Um processo simples, transparente e focado em resolver a sua situação
            com eficiência.
          </motion.p>

          <div className="grid md:grid-cols-3 gap-6 relative">
            {/* Connecting line (desktop) */}
            <div className="absolute top-10 left-[16.5%] right-[16.5%] h-px bg-gradient-to-r from-[#c9972a]/30 via-[#1a5c42]/30 to-[#7c3aed]/30 hidden md:block" />

            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                custom={i + 3}
                variants={fadeUp}
                className="relative p-7 rounded-2xl border border-white/8 bg-white/[0.03]"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="relative w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 z-10"
                    style={{ backgroundColor: `${step.color}15`, border: `1px solid ${step.color}40` }}
                  >
                    <step.icon size={20} style={{ color: step.color }} />
                  </div>
                  <span className="text-4xl font-black text-white/8 select-none">
                    {step.num}
                  </span>
                </div>
                <h3 className="font-bold text-white text-lg mb-3">{step.title}</h3>
                <p className="text-sm text-[#6b6560] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
