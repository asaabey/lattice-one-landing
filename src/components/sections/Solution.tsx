import { motion } from 'framer-motion'
import { ArrowRight, Check } from 'lucide-react'

export function Solution() {
  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
            Registry as Projection, Not Destination
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            In Lattice One, a registry is a saved query over the clinical record—not a separate system you feed.
          </p>
        </motion.div>

        {/* Architecture Visual */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto mb-16"
        >
          <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
            {/* Flow Diagram */}
            <div className="space-y-4">
              {/* Clinical Screens */}
              <div className="bg-primary/10 rounded-xl p-5 border border-primary/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground font-serif">Clinical Screens</span>
                  <span className="text-xs text-primary font-medium bg-primary/10 px-2 py-1 rounded">Lattice One</span>
                </div>
                <p className="text-sm text-muted-foreground">Role-aware capture. AI-assisted design. Single point of entry.</p>
              </div>

              {/* Arrow */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  <span className="text-xs text-muted-foreground mt-1">writes to</span>
                </div>
              </div>

              {/* FHIR Record */}
              <div className="bg-chart-3/10 rounded-xl p-5 border border-chart-3/20">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-foreground font-serif">FHIR R4 Record</span>
                  <span className="text-xs text-chart-3 font-medium bg-chart-3/10 px-2 py-1 rounded">Source of Truth</span>
                </div>
                <p className="text-sm text-muted-foreground">Observation, Condition, MedicationStatement. Standards-compliant by design.</p>
              </div>

              {/* Arrow splitting */}
              <div className="flex justify-center">
                <div className="flex flex-col items-center">
                  <ArrowRight className="w-5 h-5 text-muted-foreground rotate-90" />
                  <span className="text-xs text-muted-foreground mt-1">projects to</span>
                </div>
              </div>

              {/* Registry Views */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="bg-secondary rounded-xl p-4 border border-primary/10 text-center">
                  <span className="text-sm font-medium text-secondary-foreground">CKD Registry</span>
                  <p className="text-xs text-muted-foreground mt-1">Real-time</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 border border-primary/10 text-center">
                  <span className="text-sm font-medium text-secondary-foreground">Quality Metrics</span>
                  <p className="text-xs text-muted-foreground mt-1">Derived</p>
                </div>
                <div className="bg-secondary rounded-xl p-4 border border-primary/10 text-center">
                  <span className="text-sm font-medium text-secondary-foreground">Research Cohort</span>
                  <p className="text-xs text-muted-foreground mt-1">Query-based</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Key Points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              title: 'Single Source of Truth',
              description: 'Data captured AS the clinical record, not FOR a registry. No reconciliation needed.',
            },
            {
              title: 'Registries Emerge',
              description: 'Queries over FHIR resources. Real-time, not retrospectively curated datasets.',
            },
            {
              title: 'Zero Data Drift',
              description: 'No lag between care and registry. No manual sync. Reality, not reconstructed truth.',
            },
          ].map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
                  <Check className="w-4 h-4 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1 font-serif">{point.title}</h3>
                <p className="text-muted-foreground text-sm">{point.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
