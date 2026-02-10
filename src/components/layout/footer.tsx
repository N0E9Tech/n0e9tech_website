import Link from "next/link";
import { Mail, Phone, MapPin, Shield } from "lucide-react";
import { COMPANY } from "@/lib/constants";
import Image from "next/image";


const footerLinks = {
  company: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog & Insights" },
    // { href: "/projects", label: "Projects" },
  ],
  resources: [

    { href: "/services#cybersecurity", label: "Cybersecurity" },
    // { href: "/services#iot", label: "IoT Solutions" },
    { href: "/services#development", label: "Software Development" },
  ],
};

export function Footer() {
  return (
    <footer className="relative bg-bg-elevated border-t border-border" role="contentinfo">
      {/* Subtle top glow */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand Column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <Link href="/" className="group inline-flex items-center gap-2.5">
              <div className="flex items-center justify-center transition-all duration-300 group-hover:bg-primary/15">
                 <Image
                                src="/logo.png"
                                alt="N0E9Tech Logo"
                                width={30}
                                height={30}
                              />
              </div>
              <span className="text-lg font-bold text-text-primary tracking-tight">
                N0<span className="text-primary">E9</span>{" "}
                <span className="text-text-secondary font-medium">Tech</span>
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed max-w-xs">
             Cybersecurity, IoT
              engineering, and software development.
            </p>
            <div className="flex gap-3">
              <a
                href="https://linkedin.com/n0e9tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-card text-text-muted transition-all duration-200 hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                aria-label="LinkedIn"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://github.com/n0e9tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-card text-text-muted transition-all duration-200 hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                aria-label="GitHub"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://x.com/n0e9tech"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-card text-text-muted transition-all duration-200 hover:text-primary hover:border-primary/50 hover:bg-primary/5"
                aria-label="X (Twitter)"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-5">
              Company
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.company.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-5">
              Services
            </h3>
            <ul className="space-y-3" role="list">
              {footerLinks.resources.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-sm text-text-secondary transition-colors hover:text-primary"
                  >
                    <span className="h-px w-0 bg-primary transition-all duration-200 group-hover:w-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-semibold text-text-primary uppercase tracking-wider mb-5">
              Contact
            </h3>
            <ul className="space-y-4" role="list">
              <li>
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="group flex items-start gap-3 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <Mail size={16} className="text-primary mt-0.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  {COMPANY.email}
                </a>
              </li>
              <li>
                <a
                  href={COMPANY.phone}
                  className="group flex items-start gap-3 text-sm text-text-secondary transition-colors hover:text-primary"
                >
                  <Phone size={16} className="text-primary mt-0.5 shrink-0 transition-transform duration-200 group-hover:scale-110" />
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-text-secondary">
                  {COMPANY.address}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Row */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-text-primary mb-1">
                Stay ahead of the curve
              </p>
              <p className="text-xs text-text-muted">
                Monthly insights on cybersecurity, IoT and Software Development.
              </p>
            </div>
            <form className="flex gap-2 max-w-sm w-full md:w-auto">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email for newsletter"
                className="flex-1 rounded-lg bg-bg-card border border-border px-4 py-2.5 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button
                type="submit"
                className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] shadow-sm shadow-primary/20"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-text-muted">
          Made with ❤️ by N0E9Tech
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-xs text-text-muted hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-text-muted hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
