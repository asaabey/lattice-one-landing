import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'

const comparisonData = [
  {
    question: 'Where does data live?',
    redcap: 'Parallel system',
    epic: 'Monolithic DB',
    lattice: 'FHIR record',
  },
  {
    question: 'Double documentation?',
    redcap: 'Yes',
    epic: 'N/A',
    lattice: 'No',
    redcapBad: true,
    latticeGood: true,
  },
  {
    question: 'Registry maintenance?',
    redcap: 'Manual curation',
    epic: 'Separate modules',
    lattice: 'Automatic projection',
    latticeGood: true,
  },
  {
    question: 'Time to change workflow?',
    redcap: 'Days',
    epic: 'Months',
    lattice: 'Hours',
    epicBad: true,
    latticeGood: true,
  },
  {
    question: 'AI-assisted design?',
    redcap: 'No',
    epic: 'No',
    lattice: 'Yes',
    latticeGood: true,
  },
  {
    question: 'Who controls the UI?',
    redcap: 'Form builders',
    epic: 'Vendor',
    lattice: 'You',
    latticeGood: true,
  },
  {
    question: 'FHIR-native?',
    redcap: 'No',
    epic: 'Partial',
    lattice: 'Yes',
    latticeGood: true,
  },
]

function CellValue({ value, isGood, isBad }: { value: string; isGood?: boolean; isBad?: boolean }) {
  if (isGood) {
    return (
      <span className="flex items-center gap-1.5 text-primary font-medium">
        <Check className="w-4 h-4" />
        {value}
      </span>
    )
  }
  if (isBad) {
    return (
      <span className="flex items-center gap-1.5 text-destructive">
        <X className="w-4 h-4" />
        {value}
      </span>
    )
  }
  return <span className="text-muted-foreground">{value}</span>
}

export function Comparison() {
  return (
    <section id="comparison" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
            How Lattice One Compares
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Honest positioning against the tools health informaticians know.
          </p>
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-semibold text-foreground font-serif">Question</th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">REDCap</th>
                <th className="text-left py-4 px-4 font-semibold text-muted-foreground">Epic / Cerner</th>
                <th className="text-left py-4 px-4 font-semibold text-primary">Lattice One</th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={row.question} className={index % 2 === 0 ? 'bg-muted' : 'bg-card'}>
                  <td className="py-4 px-4 font-medium text-foreground">{row.question}</td>
                  <td className="py-4 px-4">
                    <CellValue value={row.redcap} isBad={row.redcapBad} />
                  </td>
                  <td className="py-4 px-4">
                    <CellValue value={row.epic} isBad={row.epicBad} />
                  </td>
                  <td className="py-4 px-4">
                    <CellValue value={row.lattice} isGood={row.latticeGood} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Credibility Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 bg-secondary rounded-2xl p-8 border border-primary/20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-semibold text-foreground mb-3 font-serif">Our Honest Position</h3>
            <p className="text-muted-foreground leading-relaxed">
              Lattice One supersedes REDCap for <span className="font-medium text-foreground">operational clinical registries</span>.
              It complements enterprise EMRs by modernizing the clinical interaction layer.
              It is <span className="italic">not</span> trying to replace billing engines or national hospital backbones.
            </p>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              It replaces the <span className="font-medium text-foreground">brittle, slow, and inflexible layer</span> where
              clinicians actually interact with data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
