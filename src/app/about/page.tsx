import type { Metadata } from "next";
import {
  PageHero,
  Section,
  SectionHeader,
  GradientCTA,
} from "@/components/ui";
import {
  Shield,
  Lightbulb,
  Eye,
  Heart,
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { team } from "@/lib/constants"; 


export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet the team behind N0E9Tech — a startup building cybersecurity, IoT, and software solutions with engineering depth and startup agility.",
};

const values = [
  {
    icon: Shield,
    title: "Integrity First",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate iure laudantium molestiae dolore sapiente.",
  },
  {
    icon: Eye,
    title: "Radical Transparency",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate iure laudantium molestiae dolore sapiente.",
  },
  {
    icon: Heart,
    title: "Outcomes Over Hours",
    description:
      "We measure success by the results we create for you,not by hours billed or reports generated.",
  },
  {
    icon: BookOpen,
    title: "Always Learning",
    description:
      "Technology evolves daily. So do we. Our team invests in certifications, research, and open-source contributions to stay sharp.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About Us"
        title=" Lorem Epsum Dolor"
        subtitle="N0E9Tech was founded on a simple belief: businesses deserve technology partners who actually build. We're a small, focused team turning complex problems into secure, elegant solutions."
      />


      {/* ===== MISSION & VISION ===== */}
      <Section className="bg-bg-card bg-radial-glow">
        <SectionHeader
          label="Mission & Vision"
          title="What Drives Us Forward"
        />
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          <div className="group rounded-xl border border-border bg-bg-dark p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(14,165,233,0.06)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
              <CheckCircle size={20} className="text-primary" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Our Mission
            </h3>
            <p className="text-text-secondary leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate iure laudantium molestiae dolore sapiente.
            </p>
          </div>
          <div className="group rounded-xl border border-border bg-bg-dark p-8 transition-all duration-300 hover:border-accent/30 hover:shadow-[0_0_30px_rgba(16,185,129,0.06)]">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-accent/10 ring-1 ring-accent/20">
              <Lightbulb size={20} className="text-accent" />
            </div>
            <h3 className="text-lg font-semibold text-text-primary mb-3">
              Our Vision
            </h3>
            <p className="text-text-secondary leading-relaxed">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet voluptate iure laudantium molestiae dolore sapiente.
            </p>
          </div>
        </div>
      </Section>

      {/* ===== VALUES ===== */}
      <Section>
        <SectionHeader
          label="Our Values"
          title="Principles That Guide Every Decision"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`card-glow group rounded-xl border border-border bg-bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/40">
                <value.icon size={22} className="text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-text-primary">
                {value.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== TEAM ===== */}
      <Section className="bg-bg-card">
        <SectionHeader
          label="Our Team"
          title="Small Team. Big Capabilities."
          subtitle="We're a lean, multidisciplinary team of developers who cover cybersecurity , software development. We're growing , reach out if you'd like to join us."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {team.map((member, index) => (
            <div
              key={member.name}
              className={`card-glow group rounded-xl border border-border bg-bg-dark p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 animate-fade-in-up delay-${(index + 1) * 100}`}
            >
              {/* Avatar */}
              <div className="mb-5 flex items-center gap-4">
                <div className="h-14 w-14 shrink-0 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ring-2 ring-border flex items-center justify-center transition-all group-hover:ring-primary/40">
                  <span className="text-lg font-bold text-primary">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-text-primary">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary">{member.role}</p>
                </div>
              </div>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                {member.bio}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {member.specialties.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-bg-elevated px-2 py-0.5 text-xs font-medium text-text-muted border border-border/50"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <GradientCTA
        title="Want to Build With Us?"
        subtitle="Whether you have a project in mind or just want to explore what's possible — we'd love to hear from you. No commitment, no hard sell."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
