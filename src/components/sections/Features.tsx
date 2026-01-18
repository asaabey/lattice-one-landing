import { motion } from 'framer-motion'
import {
  Zap,
  Users,
  GitBranch,
  LineChart,
  Sparkles,
  Shield
} from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'

const features = [
  {
    icon: Zap,
    title: 'Workflow Velocity',
    description: '10x–100x faster iteration. AI generates drafts, clinicians approve, versioned deploy. No IT tickets, no release windows.',
    color: 'bg-chart-1/20 text-chart-1',
  },
  {
    icon: Users,
    title: 'Role-Aware Capture',
    description: 'Nurses, doctors, pharmacists document on the same record. No duplicate instruments. No governance nightmares.',
    color: 'bg-chart-4/20 text-chart-4',
  },
  {
    icon: LineChart,
    title: 'Longitudinal by Default',
    description: 'Time-indexed FHIR resources. Trends, baselines, deltas are inherent. Built for chronic disease, not episodic visits.',
    color: 'bg-chart-3/20 text-chart-3',
  },
  {
    icon: Sparkles,
    title: 'AI Where It Works',
    description: "UI synthesis, not clinical judgment. Lower risk, higher leverage. You're automating software creation, not medicine.",
    color: 'bg-primary/20 text-primary',
  },
  {
    icon: GitBranch,
    title: 'Version Control',
    description: 'Track changes to clinical forms over time. Roll back when needed. Full audit trail for compliance.',
    color: 'bg-chart-2/20 text-chart-2',
  },
  {
    icon: Shield,
    title: 'Standards Built In',
    description: 'LOINC, SNOMED CT, RxNorm auto-coded. FHIR R4 output. Compliance is the default, not an afterthought.',
    color: 'bg-destructive/20 text-destructive',
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
            What Changes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Outcomes, not features. Here's what's different when the registry disappears into care.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 hover:border-primary/30">
                <CardHeader>
                  <div className={`w-12 h-12 ${feature.color} rounded-xl flex items-center justify-center mb-4`}>
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="font-serif">{feature.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
