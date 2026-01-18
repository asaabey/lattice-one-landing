import { motion } from 'framer-motion'
import { Github, Star, ExternalLink } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'

const standards = [
  { name: 'FHIR R4', color: 'bg-destructive/20 text-destructive' },
  { name: 'LOINC', color: 'bg-chart-3/20 text-chart-3' },
  { name: 'SNOMED CT', color: 'bg-chart-4/20 text-chart-4' },
  { name: 'RxNorm', color: 'bg-chart-1/20 text-chart-1' },
  { name: 'Medplum', color: 'bg-primary/20 text-primary' },
  { name: 'Offline PWA', color: 'bg-chart-2/20 text-chart-2' },
]

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6 font-serif">
              What EMRs Would Look Like<br />
              <span className="text-primary">If Designed Today</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6">
              Headless, composable, FHIR-native, and AI-assisted. This is the architecture
              healthcare should have built 10 years ago.
            </p>

            <div className="flex flex-wrap gap-2 mb-8">
              {standards.map((standard) => (
                <Badge key={standard.name} className={standard.color}>
                  {standard.name}
                </Badge>
              ))}
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground font-serif">FHIR-native, not FHIR-wrapped</h3>
                  <p className="text-muted-foreground text-sm">Every screen generates valid FHIR resources. Not a translation layer.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Medplum as the backbone</h3>
                  <p className="text-muted-foreground text-sm">Storage, auth, FHIR APIs. Lattice One handles clinical UX.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground font-serif">Open source, no lock-in</h3>
                  <p className="text-muted-foreground text-sm">MIT licensed. Fork it, extend it, or contribute back.</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => window.open('https://github.com/asaabey/lattice-one', '_blank')}
                className="inline-flex items-center gap-2"
              >
                <Github className="w-5 h-5" />
                Star on GitHub
                <Star className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('https://github.com/asaabey/lattice-one', '_blank')}
                className="inline-flex items-center gap-2"
              >
                View Documentation
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>

          {/* Right Content - Architecture */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-card rounded-2xl border border-border p-8 shadow-sm">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">Architecture</h3>

              <div className="space-y-4">
                {/* UI Layer */}
                <div className="bg-primary/10 rounded-lg border border-primary/20 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground font-serif">Clinical Screens</span>
                    <span className="text-xs text-primary font-medium">Lattice One</span>
                  </div>
                  <p className="text-sm text-muted-foreground">AI-assisted, role-aware, versioned</p>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Data Layer */}
                <div className="bg-chart-4/10 rounded-lg border border-chart-4/20 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground font-serif">FHIR R4 Resources</span>
                    <span className="text-xs text-chart-4 font-medium">Standard</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Observation, Condition, MedicationStatement</p>
                </div>

                <div className="flex justify-center">
                  <div className="w-px h-4 bg-border" />
                </div>

                {/* Backend Layer */}
                <div className="bg-chart-3/10 rounded-lg border border-chart-3/20 p-4">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground font-serif">Medplum</span>
                    <span className="text-xs text-chart-3 font-medium">Backend</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Storage, auth, FHIR APIs, subscriptions</p>
                </div>

                <div className="flex justify-center">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-px bg-border" />
                    <span className="text-xs text-muted-foreground">projects to</span>
                    <div className="w-16 h-px bg-border" />
                  </div>
                </div>

                {/* Output Layer */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-secondary rounded-lg border border-primary/10 p-3 text-center">
                    <span className="text-sm font-medium text-secondary-foreground">Registry Views</span>
                  </div>
                  <div className="bg-secondary rounded-lg border border-primary/10 p-3 text-center">
                    <span className="text-sm font-medium text-secondary-foreground">Analytics</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
