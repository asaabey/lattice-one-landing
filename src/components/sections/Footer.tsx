import { Github, Heart } from 'lucide-react'

const footerLinks = [
  { label: 'Features', href: '#features' },
  { label: 'AI Wizard', href: '#ai-wizard' },
  { label: 'Tech Stack', href: '#tech-stack' },
  { label: 'GitHub', href: 'https://github.com/asaabey/lattice-one', external: true },
]

export function Footer() {
  return (
    <footer className="bg-primary-dark text-primary-foreground/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-light to-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-dark font-bold">L1</span>
            </div>
            <span className="font-bold text-primary-foreground font-serif">Lattice One</span>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
                className="text-sm hover:text-primary-foreground transition-colors flex items-center gap-1"
              >
                {link.label === 'GitHub' && <Github className="w-4 h-4" />}
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm">
            © {new Date().getFullYear()} Lattice One. MIT Licensed.
          </p>
          <p className="text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-destructive" /> for better clinical workflows
          </p>
        </div>
      </div>
    </footer>
  )
}
