import { motion } from 'framer-motion'
import { BriefcaseBusiness } from 'lucide-react'
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

export function SocialProof() {
  return (
    <section id="prova-social" className="px-4 py-10 md:py-16">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto max-w-7xl"
      >
        <SectionTitle
          eyebrow="Social Proof"
          title={content.proof.title}
          description={content.proof.description}
        />
        <div className="grid gap-6 md:grid-cols-2">
          {content.proof.items.map((item) => (
            <motion.div key={item.title} variants={fadeUp}>
              <GlassCard className="h-full p-6 md:p-7">
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-[linear-gradient(135deg,rgba(0,204,235,0.22),rgba(0,113,188,0.14),rgba(70,189,203,0.18))] p-3 text-[#0071bc] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                    <BriefcaseBusiness className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-[-0.04em] text-black">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-black/65">{item.text}</p>
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
