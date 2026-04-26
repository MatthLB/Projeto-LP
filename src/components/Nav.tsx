import { motion } from 'framer-motion'
import { ArrowRight, Binary } from 'lucide-react'
import { content } from '../data/content'
import { slideDown } from '../styles/animations'

export function Nav() {
  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={slideDown}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="sticky top-0 z-50 px-4 pt-4"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-[24px] border border-white/80 bg-white/65 px-5 py-3 shadow-[0_12px_40px_rgba(0,0,0,0.08)] backdrop-blur-xl md:px-6">
        <a href="#top" className="flex items-center gap-3 text-sm font-semibold tracking-[-0.03em] text-black">
          <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#00cceb,#0071bc,#46bdcb)] text-white shadow-[0_10px_25px_rgba(0,113,188,0.35)]">
            <Binary className="h-4 w-4" />
          </span>
          {content.nav.brand}
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {content.nav.links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-black/65 transition hover:text-black"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contato"
          className="inline-flex items-center gap-2 rounded-2xl border border-[#0071bc]/20 bg-[linear-gradient(135deg,rgba(0,204,235,0.18),rgba(0,113,188,0.14),rgba(70,189,203,0.22))] px-4 py-2 text-sm font-medium text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_10px_30px_rgba(0,113,188,0.12)] transition hover:scale-[1.02] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_16px_40px_rgba(0,113,188,0.18)]"
        >
          {content.nav.cta}
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </motion.header>
  )
}
