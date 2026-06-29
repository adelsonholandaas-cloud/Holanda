import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'Preciso ter todos os documentos antes de chamar?',
    a: 'Não. O primeiro contato serve justamente para entender seu caso e montar uma lista objetiva do que será necessário. Você não precisa chegar preparado — eu te ajudo a organizar.',
  },
  {
    q: 'A assessoria atende MEI com pendências?',
    a: 'Sim. O atendimento pode orientar sobre pendências comuns, declaração anual, DAS em atraso e regularização básica. Cada caso é analisado individualmente.',
  },
  {
    q: 'O atendimento substitui advogado ou contador?',
    a: 'Não substitui a atuação privativa quando ela for necessária. A proposta é orientar, organizar informações e indicar próximos passos com responsabilidade e clareza.',
  },
  {
    q: 'Qual é o valor do atendimento?',
    a: 'O valor varia conforme a complexidade de cada caso. Entre em contato para uma avaliação inicial gratuita — sem compromisso.',
  },
  {
    q: 'O atendimento é presencial ou online?',
    a: 'O atendimento pode ser feito online via WhatsApp, facilitando o acesso de qualquer localidade. Para casos específicos, o formato presencial pode ser combinado.',
  },
  {
    q: 'Quanto tempo leva para resolver meu caso?',
    a: 'Depende da complexidade e da documentação disponível. Cases simples de IRPF podem ser resolvidos em 1-2 dias. MEI e INSS podem levar mais tempo dependendo das pendências.',
  },
]

function Item({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        open ? 'border-[#c9972a]/40 bg-[#c9972a]/5' : 'border-white/8 bg-white/[0.02]'
      }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left"
      >
        <span className="font-semibold text-white text-base">{q}</span>
        <div
          className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
            open ? 'bg-[#c9972a] text-black' : 'bg-white/8 text-[#9d9890]'
          }`}
        >
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 text-[#9d9890] text-sm leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="faq" className="py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#c9972a] text-xs font-bold uppercase tracking-widest mb-4">
              Dúvidas frequentes
            </p>
            <h2
              className="text-4xl lg:text-5xl font-black leading-tight mb-6"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Perguntas que
              <br />
              <span className="text-[#c9972a]">chegam sempre.</span>
            </h2>
            <p className="text-[#6b6560]">
              Se a sua dúvida não estiver aqui, me chame no WhatsApp — respondo com
              atenção e clareza.
            </p>
          </motion.div>

          <div className="space-y-3" ref={ref}>
            {faqs.map((f, i) => (
              <Item key={f.q} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
