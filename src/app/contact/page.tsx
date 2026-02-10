"use client";

import { useState } from "react";
import { Section, Button } from "@/components/ui";
import { COMPANY } from "@/lib/constants";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  Send,
  ArrowRight,
  Calendar,
} from "lucide-react";

const subjects = [
  "Cybersecurity Assessment",
  "IoT / Raspberry Pi Project",
  "Web or Mobile Development",
  "General Inquiry",
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email Address",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
    description: "We respond within 24 hours",
  },
  {
    icon: Phone,
    label: "Phone Number",
    value: COMPANY.phone,
    description: "Mon-Fri, 9 AM – 6 PM CT",
  },
  {
    icon: MapPin,
    label: "Office Location",
    value: COMPANY.address,
    href: undefined,
    description: `${COMPANY.country}`,
  },
  
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    privacy: false,
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const target = e.target;
    const value =
      target instanceof HTMLInputElement && target.type === "checkbox"
        ? target.checked
        : target.value;
    setFormState((prev) => ({ ...prev, [target.name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-bg-dark via-bg-dark to-bg-card">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm animate-fade-in">
            Contact Us
          </span>
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-in-up delay-100">
            Let&apos;s Build Something{" "}
            <span className="text-gradient-primary">Great Together</span>
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-text-secondary lg:text-lg leading-relaxed animate-fade-in-up delay-200">
            Have a project in mind? Need a security assessment? Just want to
            explore ideas? As a startup, we&apos;re hungry for great projects
            and respond to every inquiry within one business day.
          </p>
        </div>
      </section>

      {/* ===== CONTACT INFO CARDS ===== */}
      <Section>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5 mb-16">
          {contactInfo.map((item) => (
            <div
              key={item.label}
              className="card-glow group rounded-xl border border-border bg-bg-card p-6 transition-all duration-300 hover:border-primary/30 text-center"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all group-hover:ring-primary/40 group-hover:bg-primary/15">
                <item.icon size={22} className="text-primary" />
              </div>
              <p className="text-sm font-semibold text-text-primary mb-1">
                {item.label}
              </p>
              {item.href ? (
                <a
                  href={item.href}
                  className="text-sm text-primary hover:text-primary-light transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-text-secondary">{item.value}</p>
              )}
              <p className="mt-1 text-xs text-text-muted">{item.description}</p>
            </div>
          ))}
        </div>

        {/* ===== FORM + SIDEBAR ===== */}
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-text-primary mb-6">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="rounded-xl border border-accent/30 bg-accent/5 p-8 lg:p-12 text-center animate-scale-in">
                <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 ring-2 ring-accent/30">
                  <CheckCircle size={32} className="text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  Thank you for reaching out!
                </h3>
                <p className="text-text-secondary max-w-md mx-auto">
                  We&apos;ve received your message and will respond within one
                  business day. In the meantime, feel free to explore our{" "}
                  <a
                    href="/services"
                    className="text-primary hover:underline font-medium"
                  >
                    Services
                  </a>{" "}
                  or{" "}
                  <a
                    href="/projects"
                    className="text-primary hover:underline font-medium"
                  >
                    Projects
                  </a>
                  .
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormState({
                      name: "",
                      email: "",
                      phone: "",
                      subject: "",
                      message: "",
                      privacy: false,
                    });
                  }}
                  className="mt-6 text-sm text-primary hover:text-primary-light transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Full Name <span className="text-danger">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Email Address <span className="text-danger">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Phone <span className="text-text-muted font-normal">(Optional)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 (555) 000-0000"
                      className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-text-primary mb-2"
                    >
                      Subject <span className="text-danger">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      required
                      value={formState.subject}
                      onChange={handleChange}
                      className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    >
                      <option value="">How can we help?</option>
                      {subjects.map((subject) => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-text-primary mb-2"
                  >
                    Message <span className="text-danger">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project or inquiry..."
                    className="w-full rounded-lg bg-bg-card border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  />
                </div>

                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    name="privacy"
                    required
                    checked={formState.privacy}
                    onChange={handleChange}
                    className="mt-1 h-4 w-4 rounded border-border text-primary focus:ring-primary accent-primary"
                  />
                  <label
                    htmlFor="privacy"
                    className="text-sm text-text-secondary leading-relaxed"
                  >
                    I agree to the{" "}
                    <a href="/privacy" className="text-primary hover:underline">
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted regarding my inquiry.
                  </label>
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:bg-primary-dark hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Send size={16} />
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Call CTA */}
            <div className="rounded-xl border border-border bg-bg-card p-6 lg:p-8">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 ring-1 ring-accent/20">
                <Calendar size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-text-primary mb-2">
                Prefer a Quick Call?
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-4">
                Sometimes a 15-minute conversation is worth more than a hundred
                emails. You&apos;ll talk directly with our founder — no gatekeepers.
              </p>
              <Button href="#" variant="secondary" size="sm">
                Schedule a Call
                <ArrowRight size={14} />
              </Button>
            </div>

            {/* Response time */}
            <div className="rounded-xl border border-border bg-bg-card p-6 lg:p-8">
              <h3 className="text-base font-semibold text-text-primary mb-4">
                What to Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Response within 1 business day",
                  "Free initial consultation",
                  "No-obligation project estimate",
                  "Direct access to the founder",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2.5 text-sm text-text-secondary"
                  >
                    <CheckCircle size={14} className="shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            
          </div>
        </div>
      </Section>
    </>
  );
}
