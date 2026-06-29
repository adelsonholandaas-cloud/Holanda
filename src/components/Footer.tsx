import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

const links = [
  { label: 'Início', to: 'hero' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Habilidades', to: 'habilidades' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Contato', to: 'contato' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <Link
            to="hero"
            smooth
            duration={600}
            className="flex items-center gap-3 cursor-pointer"
          >
            <span className="w-9 h-9 rounded-full bg-[#c9972a] flex items-center justify-center font-bold text-black text-sm">
              AE
            </span>
            <span className="font-semibold text-white text-sm">Adelson Elias</span>
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={600}
                offset={-64}
                className="px-3 py-1.5 text-sm text-[#6b6560] hover:text-white cursor-pointer transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <p className="text-sm text-[#6b6560]">
            © {new Date().getFullYear()} Holanda Assessoria
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-xs text-[#3d3930]">
            IRPF · MEI · INSS · Assessoria Administrativa com clareza e organização.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
