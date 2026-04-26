import { motion } from 'framer-motion'
import { BadgeCheck, BarChart3, Code2 } from 'lucide-react'
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

function SectionTitle({ eyebrow, title, description }: { eyebrow: string; title: string; description: string }) {
  return (
    <motion.div variants={fadeUp} className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#0071bc]/15 bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#0071bc] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-[-0.04em] text-black md:text-5xl">{title}</h2>
      <p className="mt-4 text-sm leading-7 text-black/65 md:text-base">{description}</p>
    </motion.div>
  )
}

const iconMap = {
  traffic: BarChart3,
  dev: Code2,
}

export function Services() {
  return (
    <section id="servicos" className="px-4 py-10 md:py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <SectionTitle
          eyebrow="Serviços"
          title={content.services.title}
          description={content.services.description}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {content.services.cards.map((card) => {
            const Icon = iconMap[card.icon as keyof typeof iconMap]
            return (
              <motion.div key={card.title} variants={fadeUp}>
                <GlassCard className="group h-full p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="inline-flex rounded-2xl border border-[#0071bc]/10 bg-[linear-gradient(135deg,rgba(0,204,235,0.18),rgba(0,113,188,0.12),rgba(70,189,203,0.2))] p-3 text-[#0071bc] shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition group-hover:scale-105 group-hover:shadow-[0_12px_30px_rgba(0,113,188,0.16)]">
                        <Icon className="h-6 w-6" />
                      </div>
                      <h3 className="mt-5 text-2xl font-semibold tracking-[-0.04em] text-black">{card.title}</h3>
                      <p className="mt-2 text-sm text-black/55">{card.subtitle}</p>
                    </div>
                    <BadgeCheck className="h-5 w-5 text-[#0071bc] transition group-hover:rotate-6" />
                  </div>
                  <div className="mt-8 space-y-3">
                    {card.points.map((point) => (
                      <div
                        key={point}
                        className="rounded-2xl border border-black/6 bg-white/75 px-4 py-3 text-sm leading-7 text-black/70"
                      >
                        {point}
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </motion.div>
    </section>
  )
}
