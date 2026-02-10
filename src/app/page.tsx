// import Link from "next/link";
import {
  Section,
  SectionHeader,
  FeatureCard,
  ServiceCard,
  BlogCard,
  Button,
  GradientCTA,
} from "@/components/ui";
import { COMPANY } from "@/lib/constants";
import {
  ShieldCheck,
  Cpu,
  Code,
  Globe,
  Shield,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function Home() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-bg-dark via-[#0c1629] to-[#0f1d32]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-40" />
        <div className="absolute inset-0 bg-radial-glow" />

        {/* Decorative orbs */}
        <div className="absolute top-1/4 -left-32 h-[500px] w-[500px] rounded-full bg-primary/[0.04] blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 h-[400px] w-[400px] rounded-full bg-accent/[0.03] blur-3xl" />
        <div className="absolute top-20 right-1/4 h-2 w-2 rounded-full bg-primary/40 animate-float will-change-transform" />
        <div className="absolute bottom-40 left-1/3 h-1.5 w-1.5 rounded-full bg-accent/40 animate-float delay-300 will-change-transform" />
        <div className="absolute top-1/3 right-1/3 h-1 w-1 rounded-full bg-primary/30 animate-float delay-600 will-change-transform" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-20 lg:py-0 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — Content */}
            <div className="max-w-2xl">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
                  Cybersecurity · IoT · Software
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-extrabold text-text-primary sm:text-5xl lg:text-[3.5rem] xl:text-6xl leading-[1.08] tracking-tight animate-fade-in-up delay-100">
                Secure Systems.{" "}
                <span className="text-gradient-primary">Smart Solutions.</span>
              </h1>

              <p className="mt-6 text-lg text-text-secondary leading-relaxed max-w-xl animate-fade-in-up delay-200">
                We&apos;re a startup team passionate about
                cybersecurity, IoT, and modern software. Whether you need a
                security assessment or a secure web app, we build it right from day one.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
                <Button href="/contact" size="lg">
                  Let&apos;s Talk
                  <ArrowRight size={18} />
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  See What We Do
                </Button>
              </div>

              {/* Trust indicators */}
              <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-text-muted animate-fade-in delay-500">
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-accent" />
                  Security-First Approach
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle size={14} className="text-accent" />
                  Startup Agility
                </span>
              </div>
            </div>

            {/* Right — Visual element */}
            <div className="animate-fade-in-right delay-300">
              <div className="relative">
                {/* Central card */}
                <div className="relative rounded-2xl border border-border/60 bg-bg-card/50 backdrop-blur-sm p-8 shadow-2xl shadow-primary/5">
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                  <div className="relative space-y-6">
                    {/* Terminal Header */}
                    <div className="flex items-center gap-2 pb-4 border-b border-border/40">
                      <div className="flex gap-1.5">
                        <div className="h-3 w-3 rounded-full bg-red-500/80" />
                        <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                        <div className="h-3 w-3 rounded-full bg-green-500/80" />
                      </div>
                      <span className="text-xs font-mono text-text-muted ml-2">n0e9@terminal:~</span>
                    </div>

                    {/* Terminal Content */}
                    <div className="rounded-lg bg-bg-dark/80 p-4 border border-border/30 font-mono text-sm text-text-muted leading-relaxed">
                      <div className="space-y-2">
                        <div>
                          <span className="text-accent">$</span>{" "}
                          <span className="text-text-primary">echo list services</span>
                        </div>
                        <div className="pl-4 space-y-1">
                          <div className="flex items-center gap-2">
                            <Shield size={14} className="text-primary" />
                            <span className="text-text-secondary">1. Cybersecurity Solutions</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Code size={14} className="text-primary" />
                            <span className="text-text-secondary">2. Software Development</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Cpu size={14} className="text-primary" />
                            <span className="text-text-secondary">3. IoT & Embedded Systems</span>
                          </div>
                        </div>
                        <div className="mt-3">
                          <span className="text-accent">$</span>{" "}
                          <span className="text-primary animate-pulse">_</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 rounded-xl border border-border bg-bg-card px-4 py-2.5 shadow-lg animate-float will-change-transform">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={16} className="text-accent" />
                    <span className="text-xs font-semibold text-text-primary">Protected</span>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-xl border border-border bg-bg-card px-4 py-2.5 shadow-lg animate-float delay-300 will-change-transform">
                  <div className="flex items-center gap-2">
                    <Globe size={16} className="text-primary" />
                    <span className="text-xs font-semibold text-text-primary">Edge Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-bg-dark to-transparent" />
      </section>

      {/* ===== FEATURES ===== */}
      <Section className="bg-radial-glow">
        <SectionHeader
          label="What We Offer"
          title="Technology Solutions Built for the Real World"
          subtitle="We bring together cybersecurity and full-stack development to help businesses launch, protect, and scale their technology."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <FeatureCard
            icon={ShieldCheck}
            title="Threat-Resilient Security"
            description="Vulnerability assessments, penetration testing, and security architecture designed to protect your assets before threats arrive."
          />
          <FeatureCard
            icon={Cpu}
            title="IoT & Embedded Systems"
            description="Raspberry Pi and embedded systems solutions — from sensor networks and edge computing to custom hardware prototypes for real-world automation."
          />
          <FeatureCard
            icon={Code}
            title="Custom Software Development"
            description="Full-stack web and mobile applications built with modern frameworks, clean architecture, and your business logic at the center."
          />
        </div>
      </Section>

      {/* ===== ABOUT PREVIEW ===== */}
      <Section className="bg-bg-card">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <SectionHeader
              label="About Us"
              title="Engineers First. Business-Minded Always."
              align="left"
            />
            <p className="text-text-secondary leading-relaxed mb-5">
              N0E9Tech is a startup founded by developers who believe
              great technology should be accessible to every business. We bring hands-on
              expertise in cybersecurity, embedded systems, and software
              development to every engagement.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              We don&apos;t just advise, we build. From the first line of
              code to production deployment, our team is with you every step
              of the way.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Security-first engineering mindset",
                "Hands-on experience across IoT, web, app",
                "Agile delivery with transparent communication",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-text-secondary"
                >
                  <CheckCircle size={16} className="text-accent shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <Button href="/about" variant="secondary">
              Learn More About Us
              <ArrowRight size={16} />
            </Button>
          </div>

          {/* Visual */}
          <div className="relative rounded-2xl border border-border bg-gradient-to-br from-primary/5 via-bg-dark to-accent/5 p-8 lg:p-12">
            <div className="absolute inset-0 rounded-2xl bg-dot-pattern opacity-30" />
            <div className="relative grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-bg-card border border-border p-5 text-center">
                <Shield size={28} className="text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-text-primary">Security</p>
                <p className="text-xs text-text-muted">Offense-Informed</p>
              </div>
              <div className="rounded-xl bg-bg-card border border-border p-5 text-center">
                <Cpu size={28} className="text-accent mx-auto mb-2" />
                <p className="text-lg font-bold text-text-primary">IoT</p>
                <p className="text-xs text-text-muted">Embedded System</p>
              </div>
              <div className="rounded-xl bg-bg-card border border-border p-5 text-center">
                <Code size={28} className="text-primary mx-auto mb-2" />
                <p className="text-lg font-bold text-text-primary">Software</p>
                <p className="text-xs text-text-muted">Web & App</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ===== SERVICES PREVIEW ===== */}
      <Section>
        <SectionHeader
          label="Our Services"
          title="Three Pillars. One Mission. Your Growth."
          subtitle="Whether you need to secure your infrastructure, prototype an IoT device, launch a digital product, or modernize your IT — we’re ready to build."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          <ServiceCard
            icon={Shield}
            title="Cybersecurity Solutions"
            description="Penetration testing, security audits, incident response, and architecture review to keep your organization protected."
            href="/services#cybersecurity"
          />
          <ServiceCard
            icon={Cpu}
            title="IoT & Embedded Systems"
            description="Custom embedded solutions, edge computing platforms, and secure IoT deployments powered by Raspberry Pi and beyond."
            href="/services#iot"
          />
          <ServiceCard
            icon={Smartphone}
            title="Web & Mobile Development"
            description="Modern web applications, mobile apps, SaaS platforms, and API ecosystems built with performance and UX in mind."
            href="/services#development"
          />
        </div>
      </Section>

      {/* ===== BLOG PREVIEW ===== */}
      <Section>
        <SectionHeader
          label="Insights"
          title="From Our Blog"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* PLACEHOLDER: Dummy blog cards */}
          <BlogCard
            title="Why Every Startup Needs a Security Mindset from Day One"
            excerpt="Most startups treat security as an afterthought. Here's why baking it in from the beginning saves time, money, and reputation."
            category="Cybersecurity"
            author="N0E9Tech Team"
            date="Jan 07, 2026"
            readTime="5 min read"
            slug="startup-security-mindset"
          />
          <BlogCard
            title="Taking Raspberry Pi from Prototype to Production"
            excerpt="Lessons learned deploying Raspberry Pi-based IoT solutions in real-world environments — from sensor networks to edge computing."
            category="IoT & Embedded"
            author="N0E9Tech Team"
            date="Jan 15, 2026"
            readTime="6 min read"
            slug="raspberry-pi-production"
          />
          <BlogCard
            title="Choosing the Right Tech Stack for Your MVP"
            excerpt="A practical guide to selecting frameworks, languages, and infrastructure that let you ship fast without accumulating tech debt."
            category="Web Development"
            author="N0E9Tech Team"
            date="Jan 21, 2026"
            readTime="6 min read"
            slug="choosing-mvp-tech-stack"
          />
        </div>
        <div className="mt-10 text-center">
          <Button href="/blog" variant="secondary">
            Read More Articles
            <ArrowRight size={16} />
          </Button>
        </div>
      </Section>

      {/* ===== CTA BANNER ===== */}
      <GradientCTA
        title="Ready to Build Something Great?"
        subtitle="Whether you need a security assessment, an IoT prototype, or a custom web app — let’s start the conversation. No commitment, no hard sell."
        buttonText="Get in Touch"
        buttonHref="/contact"
      />

      {/* ===== CONTACT PREVIEW ===== */}
      <Section>
        <SectionHeader label="Get in Touch" title="Contact Us" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            {
              icon: Mail,
              label: "Email",
              value: COMPANY.email,
              href: `mailto:${COMPANY.email}`,
            },
            {
              icon: Phone,
              label: "Phone",
              value: COMPANY.phone,
            },
            {
              icon: MapPin,
              label: "Location",
              value: COMPANY.address,
              href: undefined,
            },
          ].map((item) => (
            <div
              key={item.label}
              className="group text-center rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.06)]"
            >
              <div className="mb-3 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <item.icon size={22} className="text-primary" />
              </div>
              <p className="text-sm font-medium text-text-primary mb-1">{item.label}</p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-text-secondary hover:text-primary transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-text-secondary">{item.value}</p>
              )}
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}



