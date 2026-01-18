import { motion } from 'framer-motion'
import { Activity, Pill, Heart, Stethoscope } from 'lucide-react'

const useCases = [
  {
    icon: Activity,
    title: 'Chronic Kidney Disease',
    description: 'eGFR tracking, staging, dialysis management. The registry that started it all.',
    color: 'bg-primary/20 text-primary',
  },
  {
    icon: Pill,
    title: 'Oncology',
    description: 'Treatment protocols, response tracking, survivorship. Complex longitudinal care.',
    color: 'bg-chart-4/20 text-chart-4',
  },
  {
    icon: Heart,
    title: 'Transplant Programs',
    description: 'Pre-transplant workup, post-transplant monitoring. Multi-disciplinary coordination.',
    color: 'bg-destructive/20 text-destructive',
  },
  {
    icon: Stethoscope,
    title: 'Chronic Disease',
    description: 'Diabetes, heart failure, COPD. Conditions that demand longitudinal visibility.',
    color: 'bg-chart-1/20 text-chart-1',
  },
]

export function UseCases() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
            Built for Programs That Run on Registries
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            These are the domains dominated by parallel data capture.
            Lattice One makes the registry disappear into care.
          </p>
        </motion.div>

        {/* Use Case Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="bg-card rounded-xl p-6 h-full border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div className={`w-12 h-12 ${useCase.color} rounded-xl flex items-center justify-center mb-4`}>
                  <useCase.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-foreground mb-2 font-serif">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground">
            Any specialty that maintains a registry outside the EMR is a candidate for Lattice One.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
