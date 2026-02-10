import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  Button,
  GradientCTA,
} from "@/components/ui";
import {
  Shield,
  Cpu,
  Smartphone,
  Settings,
  Search,
  PenTool,
  Wrench,
  Rocket,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore N0E9Tech's services: Cybersecurity, IoT, Web & Mobile Development — delivered with startup speed and engineering rigor.",
};

const services = [
  {
    id: "cybersecurity",
    icon: Shield,
    label: "CYBERSECURITY",
    title: "Protect What Matters Most",
    description:
      "Cyber threats don't wait, and neither do we. We combine offense-informed defense with practical risk management — helping you identify vulnerabilities before attackers do and build resilience into every layer of your stack. You work directly with our security engineers, not a sales team.",
    gradient: "from-primary/10 to-primary/5",
    offerings: [
      {
        title: "Penetration Testing",
        description:
          "Simulated attacks against your networks, applications, and infrastructure to identify exploitable weaknesses before real adversaries find them.",
      },
      {
        title: "Vulnerability Assessment",
        description:
          "Comprehensive scanning and analysis of your systems to catalog risks, prioritize remediation, and track security posture over time.",
      },
      {
        title: "Security Architecture Review",
        description:
          "Evaluation of your existing infrastructure, network topology, and application design to identify structural weaknesses and recommend hardened alternatives.",
      },
      {
        title: "Incident Response Planning",
        description:
          "Preparedness frameworks, runbooks, and tabletop exercises so your team knows exactly what to do when — not if — an incident occurs.",
      },
      {
        title: "Security Awareness Training",
        description:
          "Customized training programs for your teams to recognize phishing, social engineering, and common threats.",
      },
    ],
    cta: "Request a Security Assessment",
  },
  {
    id: "iot",
    icon: Cpu,
    label: "IOT & EMBEDDED",
    title: "From Prototype to Production at the Edge",
    description:
      "The Raspberry Pi revolutionized accessible computing. We take that power and engineer it into real-world solutions by building custom embedded systems, edge computing platforms.",
    gradient: "from-accent/10 to-accent/5",
    offerings: [
      {
        title: "Custom Embedded Solutions",
        description:
          "Purpose-built hardware/software systems on Raspberry Pi and compatible platforms, tailored to your operational requirements.",
      },
      {
        title: "Edge Computing Platforms",
        description:
          "Processing data at the source to reduce latency, lower bandwidth costs, and enable real-time decision-making in remote environments.",
      },

      {
        title: "System Hardening & Security",
        description:
          "Securing embedded Linux systems, implementing secure boot, encrypted communications, and access controls for deployed IoT devices.",
      },
    ],
    cta: "Discuss Your IoT Project",
  },
  {
    id: "development",
    icon: Smartphone,
    label: "SOFTWARE DEVELOPMENT",
    title: "Applications That Perform, Scale, and Delight",
    description:
      "We build web and mobile applications the right way — with clean architecture, modern frameworks, and a relentless focus on user experience and performance. Whether you're launching a SaaS product, building an internal tool, or creating your first digital product, we deliver code that your users love and your engineers can maintain.",
    gradient: "from-purple-500/10 to-purple-500/5",
    offerings: [
      {
        title: "Full-Stack Web Applications",
        description:
          "End-to-end development using Next.js, React, Node.js, and modern databases. From concept to deployment, we handle the entire stack.",
      },
      {
        title: "Mobile Applications",
        description:
          "Cross-platform mobile apps built with React Native or Flutter, delivering native performance with shared codebases.",
      },
      {
        title: "SaaS & Product Development",
        description:
          "Multi-tenant architectures, subscription management, analytics dashboards, and the core infrastructure your product needs to launch and grow.",
      },
      {
        title: "UI/UX Design",
        description:
          "User research, wireframing, prototyping, and high-fidelity design that transforms complex workflows into intuitive interfaces.",
      },
    ],
    cta: "Start Your Project",
  },

];

const process = [
  {
    step: "01",
    icon: Search,
    title: "Discovery & Assessment",
    description:
      "We listen first. Through focused conversations, technical audits, and requirements sessions, we develop a clear understanding of your challenge before proposing solutions.",
  },
  {
    step: "02",
    icon: PenTool,
    title: "Architecture & Planning",
    description:
      "Based on discovery, we design the technical architecture, define milestones, and create a transparent project plan with fixed timelines and clear deliverables.",
  },
  {
    step: "03",
    icon: Wrench,
    title: "Build & Iterate",
    description:
      "Using agile sprints, we build incrementally — delivering working software or security improvements every two weeks. You review, we iterate, progress stays visible.",
  },
  {
    step: "04",
    icon: Rocket,
    title: "Deliver & Support",
    description:
      "We don't disappear after launch. Every project includes documentation, knowledge transfer, and optional ongoing support. As a startup, our reputation depends on your success.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        label="Our Services"
        title="Startup Speed. Engineering Depth."
        subtitle="From penetration testing to IoT prototyping, from custom web apps to cloud infrastructure — every service we offer is designed to solve real problems with lean, hands-on delivery. No layers of management. Just engineers who build."
      />

      {/* ===== SERVICE SECTIONS ===== */}
      {services.map((service, index) => (
        <Section
          key={service.id}
          id={service.id}
          className={index % 2 === 1 ? "bg-bg-card" : ""}
        >
          <div className="max-w-5xl mx-auto">
            {/* Service header with icon */}
            <div className="flex items-start gap-5 mb-8">
              <div className={`shrink-0 hidden sm:flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.gradient} ring-1 ring-border`}>
                <service.icon size={26} className="text-primary" />
              </div>
              <div>
                <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                  {service.label}
                </span>
                <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl leading-tight">
                  {service.title}
                </h2>
              </div>
            </div>

            <p className="text-text-secondary leading-relaxed mb-10 max-w-3xl">
              {service.description}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-5 mb-10">
              {service.offerings.map((offering, offIndex) => (
                <div
                  key={offering.title}
                  className={`card-glow group rounded-xl border border-border bg-bg-dark p-5 lg:p-6 transition-all duration-300 hover:border-primary/30 animate-fade-in-up delay-${(offIndex + 1) * 100}`}
                >
                  <h4 className="text-sm font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
                    {offering.title}
                  </h4>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {offering.description}
                  </p>
                </div>
              ))}
            </div>

            <Button href="/contact">
              {service.cta}
              <ArrowRight size={16} />
            </Button>
          </div>
        </Section>
      ))}

      {/* ===== PROCESS ===== */}
      <Section className="bg-bg-card bg-radial-glow">
        <SectionHeader
          label="How We Work"
          title="Our Engagement Process"
          subtitle="Every project follows a lean, structured methodology designed for clarity, quality, and fast delivery — no bureaucratic overhead."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {process.map((step, index) => (
            <div
              key={step.step}
              className="card-glow group relative rounded-xl border border-border bg-bg-dark p-6 lg:p-8 transition-all duration-300 hover:border-primary/30"
            >
              {/* Step number watermark */}
              <span className="absolute top-4 right-4 text-4xl font-extrabold text-primary/[0.08]">
                {step.step}
              </span>

              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:ring-primary/40">
                <step.icon size={22} className="text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-text-primary">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {step.description}
              </p>

              {/* Connector arrow (hidden on last item and on mobile) */}
              {index < process.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={16} className="text-primary/30" />
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <GradientCTA
        title="Not Sure Which Service You Need?"
        subtitle="That's perfectly fine. Tell us about your challenge, and we'll recommend the right approach — no obligation, no pressure."
        buttonText="Book a Free Consultation"
        buttonHref="/contact"
      />
    </>
  );
}
