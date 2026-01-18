import { motion } from 'framer-motion'
import { Github, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-primary-dark" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary-foreground/10 via-transparent to-transparent" />

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6"
            >
              <span className="text-primary-foreground/90 text-sm font-medium">Open Source</span>
              <span className="w-1 h-1 bg-primary-foreground/60 rounded-full" />
              <span className="text-primary-foreground/90 text-sm">FHIR R4 Native</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-6 font-serif">
              Your Clinical Record{' '}
              <span className="text-accent">
                Should Be Your Registry
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Lattice One collapses registry capture into routine clinical care.
              No parallel systems. No double entry. No data lag.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-background text-primary hover:bg-accent shadow-xl"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground border-2"
                onClick={() => window.open('https://github.com/asaabey/lattice-one', '_blank')}
              >
                <Github className="mr-2 w-5 h-5" />
                View on GitHub
              </Button>
            </div>

            {/* Key differentiators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-primary-foreground/70"
            >
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Document once, not twice
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                Registries emerge from care
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                10x faster iteration
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Visual showing the shift */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card - The Shift */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="bg-card rounded-2xl shadow-2xl p-6 max-w-md ml-auto border border-border"
              >
                <div className="flex items-center justify-between mb-5">
                  <h3 className="font-semibold text-foreground font-serif">The Architectural Shift</h3>
                </div>

                <div className="space-y-3">
                  {/* Before */}
                  <div className="p-3 bg-destructive/10 rounded-lg border border-destructive/20">
                    <p className="text-xs text-destructive font-medium mb-2">BEFORE: Parallel Systems</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="px-2 py-1 bg-card rounded text-xs border border-border">Epic</span>
                      <span className="text-muted-foreground/50">+</span>
                      <span className="px-2 py-1 bg-card rounded text-xs border border-border">REDCap</span>
                      <span className="text-muted-foreground/50">+</span>
                      <span className="px-2 py-1 bg-card rounded text-xs border border-border">Excel</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex justify-center">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <ArrowRight className="w-4 h-4 text-accent-foreground rotate-90" />
                    </div>
                  </div>

                  {/* After */}
                  <div className="p-3 bg-secondary rounded-lg border border-primary/20">
                    <p className="text-xs text-primary font-medium mb-2">AFTER: Single Source</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="px-2 py-1 bg-card rounded text-xs font-medium text-foreground border border-border">Clinical Screen</span>
                      <span className="text-muted-foreground/50">→</span>
                      <span className="px-2 py-1 bg-accent rounded text-xs font-medium text-accent-foreground">FHIR</span>
                      <span className="text-muted-foreground/50">→</span>
                      <span className="px-2 py-1 bg-primary/20 rounded text-xs font-medium text-primary">Registry</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - Velocity */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-card rounded-xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-chart-1/20 rounded-lg flex items-center justify-center">
                    <span className="text-chart-1 font-bold text-sm">10x</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Workflow changes</p>
                    <p className="font-semibold text-foreground">Hours, not months</p>
                  </div>
                </div>
              </motion.div>

              {/* Floating Card - No Double Entry */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-8 bg-card rounded-xl shadow-lg p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                    <span className="text-primary text-lg">✓</span>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Double entry</p>
                    <p className="font-semibold text-foreground">Eliminated</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
