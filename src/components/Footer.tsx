import { motion } from 'framer-motion'
import { Linkedin, Github, Instagram } from 'lucide-react'
import { content } from '../data/content'

const socialIconMap = {
  Linkedin,
  Github,
  Instagram,
}

export function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.a
            href="#top"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl font-bold bg-gradient-to-r from-[#00cceb] via-[#0071bc] to-[#46bdcb] bg-clip-text text-transparent"
          >
            {content.nav.brand}
          </motion.a>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-gray-600"
          >
            {content.footer.copyright}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4"
          >
            {content.footer.socials.map((social) => {
              const Icon = socialIconMap[social.icon as keyof typeof socialIconMap]
              return (
                <motion.a
                  key={social.platform}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 bg-white/70 backdrop-blur-xl rounded-xl flex items-center justify-center border border-black/5 shadow-lg hover:shadow-xl transition-all text-gray-700 hover:text-[#0071bc]"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
