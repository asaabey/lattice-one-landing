import { motion } from 'framer-motion'
import { FileStack, Clock, Puzzle } from 'lucide-react'

const problems = [
  {
    icon: FileStack,
    title: 'Double Documentation',
    description: 'REDCap beside Epic. Excel beside REDCap. Clinicians documenting twice—sometimes three times—for every registry.',
    color: 'bg-destructive/10 text-destructive',
  },
  {
    icon: Clock,
    title: 'Workflow Rigidity',
    description: 'Months to change an Epic form. IT tickets. Test environments. Release windows. Clinical needs wait in the queue.',
    color: 'bg-chart-1/10 text-chart-1',
  },
  {
    icon: Puzzle,
    title: 'The Specialty Gap',
    description: 'Generic EMR UIs serving no specialty well. Local workarounds proliferate. Shadow IT becomes the norm.',
    color: 'bg-chart-3/10 text-chart-3',
  },
]

export function Problem() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
            The Registry Tax
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Healthcare built parallel systems because clinical systems failed at structured,
            evolvable data capture. That failure has a cost.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl p-8 h-full border border-border">
                <div className={`w-14 h-14 ${problem.color} rounded-xl flex items-center justify-center mb-6`}>
                  <problem.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 font-serif">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-muted-foreground italic font-serif">
            "REDCap exists because clinical systems fail at structured, evolvable data capture.
            <br className="hidden sm:block" />
            <span className="text-foreground font-medium not-italic"> Lattice One fixes that failure at the source.</span>"
          </p>
        </motion.div>
      </div>
    </section>
  )
}
