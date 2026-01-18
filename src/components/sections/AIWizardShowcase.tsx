import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, Send, Check, Clock } from 'lucide-react'
import { Badge } from '@/components/ui/badge'

const examplePrompt = "Create a CKD monitoring screen with eGFR, creatinine, UACR, blood pressure, and medication reconciliation"

const formSections = [
  {
    title: 'Kidney Function',
    fields: ['eGFR (CKD-EPI 2021)', 'Serum Creatinine', 'UACR'],
    delay: 0.3,
  },
  {
    title: 'Vital Signs',
    fields: ['Systolic BP', 'Diastolic BP'],
    delay: 0.6,
  },
  {
    title: 'Medications',
    fields: ['Current Medications', 'Reconciliation Notes'],
    delay: 0.9,
  },
]

export function AIWizardShowcase() {
  const [typedText, setTypedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  const [showForm, setShowForm] = useState(false)

  useEffect(() => {
    if (isTyping && typedText.length < examplePrompt.length) {
      const timeout = setTimeout(() => {
        setTypedText(examplePrompt.slice(0, typedText.length + 1))
      }, 25)
      return () => clearTimeout(timeout)
    } else if (typedText.length === examplePrompt.length) {
      setIsTyping(false)
      setTimeout(() => setShowForm(true), 500)
    }
  }, [typedText, isTyping])

  const resetAnimation = () => {
    setTypedText('')
    setIsTyping(true)
    setShowForm(false)
  }

  return (
    <section id="ai-wizard" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge variant="primary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" />
            10x–100x Faster
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 font-serif">
            From Requirement to Screen in Hours, Not Months
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Describe what you need. AI generates a draft. Clinician approves. Versioned deploy.
            No IT tickets. No release windows.
          </p>
        </motion.div>

        {/* Velocity Comparison */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto mb-12"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-destructive/10 rounded-xl p-5 border border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-destructive" />
                <span className="text-sm font-medium text-destructive">Traditional EMR</span>
              </div>
              <p className="text-2xl font-bold text-destructive font-serif">Weeks to Months</p>
              <p className="text-xs text-destructive/70 mt-1">Analyst build → Review → Test → Release window</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-5 border border-primary/20">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Lattice One</span>
              </div>
              <p className="text-2xl font-bold text-primary font-serif">Hours to Days</p>
              <p className="text-xs text-primary/70 mt-1">AI draft → Clinician approval → Deploy</p>
            </div>
          </div>
        </motion.div>

        {/* Demo Area */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Chat Interface */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-foreground rounded-2xl p-6 shadow-2xl"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-chart-1" />
              <div className="w-3 h-3 rounded-full bg-primary" />
              <span className="ml-4 text-background/60 text-sm font-mono">AI Screen Wizard</span>
            </div>

            {/* Chat Messages */}
            <div className="space-y-4 mb-6">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4 text-primary-foreground" />
                </div>
                <div className="bg-background/10 rounded-lg p-3 max-w-sm">
                  <p className="text-background/80 text-sm">
                    Describe the clinical screen you need. I'll generate a FHIR-compliant form with automatic terminology binding.
                  </p>
                </div>
              </div>

              <AnimatePresence>
                {typedText && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3 justify-end"
                  >
                    <div className="bg-primary rounded-lg p-3 max-w-sm">
                      <p className="text-primary-foreground text-sm">
                        {typedText}
                        {isTyping && <span className="animate-pulse">|</span>}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-background/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-background/80 text-xs font-medium">You</span>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {showForm && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-primary-foreground" />
                    </div>
                    <div className="bg-background/10 rounded-lg p-3">
                      <p className="text-accent text-sm flex items-center gap-2">
                        <Check className="w-4 h-4" />
                        Screen generated with LOINC codes. Ready for review.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Input */}
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Describe your clinical screen..."
                className="flex-1 bg-background/10 text-background/80 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary font-mono"
                readOnly
              />
              <button
                onClick={resetAnimation}
                className="p-3 bg-primary hover:bg-primary-dark rounded-lg transition-colors"
              >
                <Send className="w-5 h-5 text-primary-foreground" />
              </button>
            </div>
          </motion.div>

          {/* Form Preview */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="bg-muted border-b border-border px-6 py-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-foreground font-serif">CKD Monitoring Screen</h3>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">LOINC</Badge>
                  <Badge variant="secondary">Auto-coded</Badge>
                </div>
              </div>
            </div>

            <div className="p-6 space-y-6">
              <AnimatePresence>
                {showForm ? (
                  formSections.map((section) => (
                    <motion.div
                      key={section.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: section.delay }}
                    >
                      <h4 className="text-sm font-semibold text-foreground mb-3 font-serif">{section.title}</h4>
                      <div className="space-y-3">
                        {section.fields.map((field) => (
                          <div key={field} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-primary rounded-full" />
                            <div className="flex-1 h-10 bg-muted rounded-lg flex items-center px-3">
                              <span className="text-sm text-muted-foreground">{field}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="py-12 text-center text-muted-foreground"
                  >
                    <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Your screen will appear here...</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Bottom note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-muted-foreground text-sm">
            AI generates deterministic, versioned output. Lower risk than clinical AI—we're automating <span className="font-medium text-foreground">software creation</span>, not clinical judgment.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
