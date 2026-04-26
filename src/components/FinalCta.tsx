import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { content } from '../data/content'

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[28px] border border-white/70 bg-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

export function FinalCta() {
  return (
    <section id="contato" className="px-4 py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="mx-auto max-w-5xl"
      >
        <GlassCard className="relative overflow-hidden px-6 py-10 text-center md:px-10 md:py-14">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,204,235,0.18),transparent_32%),radial-gradient(circle_at_bottom,rgba(0,113,188,0.12),transparent_30%)]" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl font-semibold tracking-[-0.05em] text-black md:text-5xl">{content.cta.title}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-black/65 md:text-base">
              {content.cta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href="mailto:contato@exemplo.com?subject=Quero%20acelerar%20meu%20projeto"
                className="group relative inline-flex items-center gap-3 rounded-[22px] bg-[linear-gradient(135deg,#00cceb,#0071bc,#46bdcb)] px-7 py-4 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_24px_60px_rgba(0,113,188,0.28)] transition hover:-translate-y-1 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.48),0_30px_70px_rgba(0,113,188,0.34)]"
              >
                <span className="absolute inset-0 rounded-[22px] bg-white/10 opacity-0 blur-xl transition group-hover:opacity-100" />
                <span className="relative">{content.cta.button}</span>
                <ArrowRight className="relative h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </GlassCard>
      </motion.div>
    </section>
  )
}
