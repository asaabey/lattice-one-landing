import { motion } from 'framer-motion'
import { Shield, Blocks, Wifi, Code2 } from 'lucide-react'

const trustItems = [
  {
    icon: Shield,
    label: 'FHIR R4 Native',
    description: 'Built on HL7 standard',
  },
  {
    icon: Blocks,
    label: 'Medplum Backend',
    description: 'Headless EMR infrastructure',
  },
  {
    icon: Wifi,
    label: 'Offline-First PWA',
    description: 'Works without internet',
  },
  {
    icon: Code2,
    label: 'Developer-First',
    description: 'Composable & extensible',
  },
]

export function TrustBar() {
  return (
    <section className="py-12 bg-muted border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {trustItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-3">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 font-serif">{item.label}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
