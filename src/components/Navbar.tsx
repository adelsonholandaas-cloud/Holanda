import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-scroll'

const links = [
  { label: 'Início', to: 'hero' },
  { label: 'Sobre', to: 'sobre' },
  { label: 'Habilidades', to: 'habilidades' },
  { label: 'Serviços', to: 'servicos' },
  { label: 'Contato', to: 'contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0c0c0e]/90 backdrop-blur-md border-b border-white/5 shadow-xl'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <Link
            to="hero"
            smooth
            duration={600}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <span className="w-9 h-9 rounded-full bg-[#c9972a] flex items-center justify-center font-bold text-black text-sm">
              AE
            </span>
            <span className="font-semibold text-white text-sm tracking-wide hidden sm:block">
              Adelson Elias
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                smooth
                duration={600}
                offset={-64}
                className="px-4 py-2 text-sm text-[#9d9890] hover:text-white cursor-pointer rounded-lg hover:bg-white/5 transition-all"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <Link
            to="contato"
            smooth
            duration={600}
            offset={-64}
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c9972a] text-black text-sm font-bold hover:bg-[#e0a930] transition-colors cursor-pointer"
          >
            Falar comigo
          </Link>

          <button
            onClick={() => setMobileOpen(true)}
            className="md:hidden text-white p-2"
            aria-label="Abrir menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[100] bg-[#0c0c0e] flex flex-col p-8"
          >
            <div className="flex items-center justify-between mb-12">
              <span className="font-semibold text-white">Menu</span>
              <button onClick={() => setMobileOpen(false)} className="text-white p-2">
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col gap-2">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    smooth
                    duration={600}
                    offset={-64}
                    onClick={() => setMobileOpen(false)}
                    className="block py-4 text-2xl font-bold text-white/80 hover:text-white border-b border-white/5 cursor-pointer"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="mt-auto">
              <Link
                to="contato"
                smooth
                duration={600}
                onClick={() => setMobileOpen(false)}
                className="w-full flex items-center justify-center py-4 rounded-full bg-[#c9972a] text-black font-bold text-lg cursor-pointer"
              >
                Falar comigo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
