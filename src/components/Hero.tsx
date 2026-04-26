import { motion } from 'framer-motion'
import {
  ArrowRight,
  Gauge,
  Layers3,
  MousePointerClick,
  Rocket,
  TrendingUp,
  Workflow,
} from 'lucide-react'
import { content } from '../data/content'
import { fadeUp, stagger } from '../styles/animations'

function GlassCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={`rounded-[28px] border border-white/70 bg-white/60 shadow-[0_20px_60px_rgba(0,0,0,0.08)] backdrop-blur-xl ${className}`}
    >
      {children}
    </div>
  )
}

export function Hero() {
  return (
    <section id="top" className="px-4 pb-8 pt-8 md:pb-12 md:pt-10">
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <GlassCard className="relative overflow-hidden p-7 md:p-10 lg:p-12">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,204,235,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(0,113,188,0.12),transparent_28%)]" />
          <motion.div variants={fadeUp} className="relative z-10 max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-black/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]">
              <Rocket className="h-3.5 w-3.5 text-[#0071bc]" />
              {content.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl font-semibold leading-[0.94] tracking-[-0.06em] text-black sm:text-5xl md:text-7xl">
              {content.hero.titleTop} <br />
              <span className="inline-block animate-[gradientShift_8s_ease_infinite] bg-[linear-gradient(135deg,#00cceb,#0071bc,#46bdcb,#0071bc)] bg-[length:220%_220%] bg-clip-text text-transparent">
                {content.hero.titleGradient}
              </span>{' '}
              {content.hero.titleMiddle} <br />
              {content.hero.titleBottom}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 md:text-lg">
              {content.hero.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contato"
                className="group inline-flex items-center justify-center gap-2 rounded-[20px] bg-[linear-gradient(135deg,#00cceb,#0071bc,#46bdcb)] px-6 py-3.5 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.35),0_18px_45px_rgba(0,113,188,0.28)] transition hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.45),0_24px_60px_rgba(0,113,188,0.34)]"
              >
                {content.hero.primaryCta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 rounded-[20px] border border-black/10 bg-white/80 px-6 py-3.5 text-sm font-medium text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:border-[#0071bc]/30 hover:text-[#0071bc]"
              >
                <Layers3 className="h-4 w-4" />
                {content.hero.secondaryCta}
              </a>
            </div>
          </motion.div>
        </GlassCard>

        <motion.div variants={stagger} className="grid gap-6">
          <GlassCard className="p-6 md:p-7">
            <motion.div variants={fadeUp}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                    Painel de valor
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black">
                    Estratégia + execução visual
                  </h3>
                </div>
                <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(0,204,235,0.18),rgba(0,113,188,0.14))] p-3 text-[#0071bc]">
                  <Gauge className="h-5 w-5" />
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {content.hero.metrics.map((item) => (
                  <div
                    key={item.label}
                    className="flex items-center justify-between rounded-2xl border border-black/6 bg-white/70 px-4 py-3"
                  >
                    <span className="text-sm text-black/55">{item.label}</span>
                    <span className="text-sm font-semibold text-black">{item.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </GlassCard>

          <GlassCard className="p-6 md:p-7">
            <motion.div variants={fadeUp} className="flex h-full flex-col justify-between gap-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  Vantagem de Mercado
                </p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-black">
                  Mais facilidade entre mídia e conversão
                </h3>
                <p className="mt-3 text-sm leading-7 text-black/60">
                  Quando a mesma visão entende aquisição e interface, a operação fica mais rápida, coerente e lucrativa.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {[Workflow, MousePointerClick, TrendingUp].map((Icon, index) => (
                  <div
                    key={index}
                    className="group rounded-2xl border border-black/6 bg-white/75 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.85)] transition hover:-translate-y-1 hover:shadow-[0_16px_30px_rgba(0,113,188,0.12)]"
                  >
                    <Icon className="mx-auto h-5 w-5 text-[#0071bc] transition group-hover:scale-110" />
                  </div>
                ))}
              </div>
            </motion.div>
          </GlassCard>
        </motion.div>
      </motion.div>
    </section>
  )
}
