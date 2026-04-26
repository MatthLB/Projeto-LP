import { motion } from 'framer-motion'
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

export function BentoGrid() {
  const sizeClasses: Record<string, string> = {
    large: 'md:col-span-2 md:row-span-2 min-h-[320px]',
    medium: 'md:col-span-1 min-h-[220px]',
    small: 'md:col-span-1 min-h-[220px]',
  }

  return (
    <section id="portfolio" className="px-4 py-10 md:py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        className="mx-auto max-w-7xl"
      >
        <SectionTitle
          eyebrow="Portfólio Tech"
          title={content.bento.title}
          description={content.bento.description}
        />
        <div className="grid auto-rows-[minmax(220px,1fr)] gap-6 md:grid-cols-3">
          {content.bento.cards.map((card, index) => (
            <motion.div key={card.title} variants={fadeUp} className={sizeClasses[card.size]}>
              <GlassCard className="group relative h-full overflow-hidden p-6 md:p-7">
                <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_top_right,rgba(0,204,235,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(0,113,188,0.10),transparent_30%)]" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <span className="inline-flex rounded-full border border-black/8 bg-white/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-black/55">
                      {card.eyebrow}
                    </span>
                    <h3 className="mt-4 max-w-sm text-2xl font-semibold tracking-[-0.04em] text-black">{card.title}</h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-black/62">{card.text}</p>
                  </div>
                  <div className="mt-6 flex items-end justify-between">
                    <span className="text-sm font-medium text-[#0071bc]">0{index + 1}</span>
                    <span className="rounded-2xl bg-[linear-gradient(135deg,rgba(0,204,235,0.18),rgba(0,113,188,0.12),rgba(70,189,203,0.18))] px-4 py-2 text-sm font-semibold text-black shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
                      {card.stat}
                    </span>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
