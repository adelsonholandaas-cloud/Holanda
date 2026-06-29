import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FileText, Store, Shield, ArrowRight, CheckCircle } from 'lucide-react'

const services = [
  {
    icon: FileText,
    tag: 'IRPF',
    title: 'Imposto de Renda Pessoa Física',
    desc: 'Organização de documentos, conferência de informações e apoio completo para declarar com segurança e sem erros.',
    items: [
      'Levantamento de documentos necessários',
      'Análise de rendimentos e deduções',
      'Orientação sobre pendências na Receita Federal',
      'Acompanhamento até a entrega',
    ],
    color: '#c9972a',
    featured: true,
  },
  {
    icon: Store,
    tag: 'MEI',
    title: 'Rotina e Regularização MEI',
    desc: 'Orientação completa para declaração anual, pendências, DAS, cadastro e regularização do microempreendedor.',
    items: [
      'Declaração Anual DASN-SIMEI',
      'Emissão e controle do DAS',
      'Regularização de pendências',
      'Cadastro e alterações no CNPJ',
    ],
    color: '#1a5c42',
    featured: false,
  },
  {
    icon: Shield,
    tag: 'INSS',
    title: 'Organização para INSS',
    desc: 'Apoio na preparação documental e orientação inicial para benefícios, contribuições e próximos passos com o INSS.',
    items: [
      'Preparação de documentação',
      'Orientação sobre benefícios',
      'Acompanhamento de contribuições',
      'Agendamento e suporte',
    ],
    color: '#7c3aed',
    featured: false,
  },
]

const WHATSAPP = 'https://wa.me/5581998721990?text=Olá%20Adelson%2C%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20atendimento.'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12 },
  }),
}

export default function Services() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="servicos" className="py-32">
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
            Serviços
          </motion.p>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
            <motion.h2
              custom={1}
              variants={fadeUp}
              className="text-4xl lg:text-5xl font-black leading-tight max-w-lg"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Soluções para sua
              <br />
              <span className="text-[#c9972a]">vida administrativa.</span>
            </motion.h2>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-[#6b6560] text-base max-w-sm"
            >
              Atendimento direto, linguagem simples e orientação pensada para quem
              precisa resolver sem perder tempo.
            </motion.p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5">
            {services.map((s, i) => (
              <motion.div
                key={s.tag}
                custom={i + 3}
                variants={fadeUp}
                className={`relative flex flex-col p-7 rounded-2xl border transition-all duration-300 group ${
                  s.featured
                    ? 'border-[#c9972a]/40 bg-[#c9972a]/8 hover:border-[#c9972a]/60'
                    : 'border-white/8 bg-white/[0.03] hover:border-white/15 hover:bg-white/[0.06]'
                }`}
              >
                {s.featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-widest text-[#c9972a] border border-[#c9972a]/40 rounded-full px-2.5 py-1">
                    Popular
                  </span>
                )}

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                  style={{ backgroundColor: `${s.color}15` }}
                >
                  <s.icon size={20} style={{ color: s.color }} />
                </div>

                <span
                  className="text-xs font-bold uppercase tracking-widest mb-3"
                  style={{ color: s.color }}
                >
                  {s.tag}
                </span>

                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-[#6b6560] text-sm leading-relaxed mb-6">{s.desc}</p>

                <ul className="space-y-2.5 mb-8 flex-1">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle
                        size={14}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: s.color }}
                      />
                      <span className="text-sm text-[#9d9890]">{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between w-full px-5 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  style={{
                    backgroundColor: s.featured ? s.color : 'transparent',
                    color: s.featured ? '#000' : s.color,
                    border: s.featured ? 'none' : `1px solid ${s.color}30`,
                  }}
                >
                  <span>Solicitar atendimento</span>
                  <ArrowRight size={16} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
