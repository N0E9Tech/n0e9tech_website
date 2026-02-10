import { type LucideIcon, ArrowRight, Star } from "lucide-react";
import Link from "next/link";

// Section-Header

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 lg:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm">
        {label}
      </span>
      <h2 className="text-2xl font-bold text-text-primary sm:text-3xl lg:text-4xl leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base text-text-secondary lg:text-lg leading-relaxed ${
            align === "center" ? "mx-auto max-w-3xl" : "max-w-3xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// Section

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`relative py-16 md:py-20 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">{children}</div>
    </section>
  );
}

// Inner page HeroSection

interface PageHeroProps {
  label: string;
  title: string;
  subtitle: string;
}

export function PageHero({ label, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-bg-dark via-bg-dark to-bg-card">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60" />
      <div className="absolute inset-0 bg-radial-glow" />

      {/* Decorative orbs */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm animate-fade-in">
          {label}
        </span>
        <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-in-up delay-100">
          {title}
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-base text-text-secondary lg:text-lg leading-relaxed animate-fade-in-up delay-200">
          {subtitle}
        </p>
      </div>
    </section>
  );
}

// FeatureCard

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="card-glow group rounded-xl border border-border bg-bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:-translate-y-1">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/40 group-hover:shadow-[0_0_20px_rgba(14,165,233,0.2)]">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ServiceCard

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
}: ServiceCardProps) {
  return (
    <div className="card-glow group rounded-xl border border-border bg-bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:-translate-y-1">
      <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-all duration-300 group-hover:bg-primary/20 group-hover:ring-primary/40">
        <Icon size={22} className="text-primary" />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-text-primary">{title}</h3>
      <p className="mb-5 text-sm text-text-secondary leading-relaxed">
        {description}
      </p>
      <Link
        href={href}
        className="inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-all duration-200 hover:gap-2.5 group-hover:text-primary-light"
      >
        Learn More
        <ArrowRight size={16} />
      </Link>
    </div>
  );
}

// ProjectCard

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image?: string;
}

const categoryGradients: Record<string, string> = {
  Cybersecurity: "from-primary/20 via-primary/5 to-bg-elevated",
  "IoT & Embedded": "from-accent/20 via-accent/5 to-bg-elevated",
  "Web Development": "from-purple-500/20 via-purple-500/5 to-bg-elevated",
  "IT Consulting": "from-warning/20 via-warning/5 to-bg-elevated",
};

const categoryIcons: Record<string, string> = {
  Cybersecurity: "🛡️",
  "IoT & Embedded": "📡",
  "Software Development": "💻",
};

export function ProjectCard({
  title,
  category,
  description,
  technologies,
}: ProjectCardProps) {
  const gradient = categoryGradients[category] || "from-primary/20 via-primary/5 to-bg-elevated";
  const icon = categoryIcons[category] || "🔧";

  return (
    <div className="card-glow group rounded-xl border border-border bg-bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:-translate-y-1">
      {/* Visual header */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
        <div className="absolute inset-0 bg-dot-pattern opacity-40" />
        <span className="relative text-5xl transition-transform duration-500 group-hover:scale-110">
          {icon}
        </span>
        {/* Decorative corner accent */}
        <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-primary/10 to-transparent" />
      </div>
      <div className="p-6">
        <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary uppercase tracking-wider">
          {category}
        </span>
        <h3 className="mb-2 text-lg font-bold text-text-primary leading-snug group-hover:text-primary transition-colors duration-200">
          {title}
        </h3>
        <p className="mb-4 text-sm text-text-secondary leading-relaxed line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-bg-elevated px-2 py-0.5 text-xs font-medium text-text-muted border border-border/50"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

// TestimonialCard

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export function TestimonialCard({
  quote,
  name,
  role,
  company,
}: TestimonialCardProps) {
  return (
    <div className="card-glow group rounded-xl border border-border bg-bg-card p-6 lg:p-8 transition-all duration-300 hover:border-primary/30 flex flex-col">
      {/* Stars */}
      <div className="mb-4 flex gap-0.5" aria-label="5 out of 5 stars">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className="text-warning fill-warning"
            aria-hidden="true"
          />
        ))}
      </div>
      <blockquote className="mb-6 flex-1 text-sm text-text-secondary leading-relaxed italic">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex items-center gap-3 border-t border-border pt-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 ring-1 ring-border">
          <span className="text-xs font-bold text-primary">
            {name.split(" ").map((n) => n[0]).join("")}
          </span>
        </div>
        <div>
          <p className="text-sm font-semibold text-text-primary">{name}</p>
          <p className="text-xs text-text-muted">
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}

// BlogCard

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  slug: string;
}

const blogCategoryColors: Record<string, string> = {
  Cybersecurity: "from-primary/20 to-bg-elevated",
  "IoT & Embedded": "from-accent/20 to-bg-elevated",
  "Web Development": "from-purple-500/20 to-bg-elevated",
  "Industry Insights": "from-warning/20 to-bg-elevated",
  Tutorials: "from-cyan-500/20 to-bg-elevated",
};

export function BlogCard({
  title,
  excerpt,
  category,
  author,
  date,
  readTime,
  slug,
}: BlogCardProps) {
  const gradient = blogCategoryColors[category] || "from-primary/20 to-bg-elevated";

  return (
    <Link href={`/blog/${slug}`} className="block h-full">
      <article className="card-glow group rounded-xl border border-border bg-bg-card overflow-hidden transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(14,165,233,0.1)] hover:-translate-y-1 flex flex-col h-full">
        {/* Visual header */}
        <div className={`relative h-48 bg-gradient-to-br ${gradient} flex items-center justify-center overflow-hidden`}>
          <div className="absolute inset-0 bg-grid-pattern opacity-50" />
          <div className="relative h-12 w-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center ring-1 ring-white/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
            <span className="text-xs font-bold text-text-primary uppercase">{category.slice(0, 3)}</span>
          </div>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <span className="mb-3 inline-block self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            {category}
          </span>
          <h3 className="mb-2 text-lg font-bold text-text-primary leading-snug group-hover:text-primary transition-colors duration-200 line-clamp-2">
            {title}
          </h3>
          <p className="mb-4 flex-1 text-sm text-text-secondary leading-relaxed line-clamp-3">
            {excerpt}
          </p>
          <div className="flex items-center gap-3 text-xs text-text-muted border-t border-border pt-4">
            <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
              <span className="text-[10px] font-bold text-primary">
                {author.split(" ").map((n) => n[0]).join("")}
              </span>
            </div>
            <span className="font-medium text-text-secondary">{author}</span>
            <span className="text-border">|</span>
            <span>{date}</span>
            <span className="text-border">|</span>
            <span>{readTime}</span>
          </div>
        </div>
      </article>
    </Link>
  );
}

// StatCard

interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="group text-center p-6 rounded-xl border border-border/50 bg-bg-card/50 transition-all duration-300 hover:border-primary/30 hover:bg-bg-card">
      <p className="text-3xl font-extrabold text-gradient-primary lg:text-4xl xl:text-5xl">
        {value}
      </p>
      <p className="mt-2 text-sm text-text-secondary font-medium">{label}</p>
    </div>
  );
}

// Buttons

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  size = "md",
}: ButtonProps) {
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const baseStyles = `inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${sizes[size]}`;

  const variants = {
    primary:
      "bg-primary text-white hover:bg-primary-dark shadow-lg shadow-primary/25 hover:shadow-primary/40",
    secondary:
      "border border-primary/60 text-primary hover:bg-primary hover:text-white hover:border-primary hover:shadow-lg hover:shadow-primary/20",
    ghost: "text-text-secondary hover:text-primary hover:bg-bg-elevated",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedStyles}>
      {children}
    </button>
  );
}

// GradientCTA

interface GradientCTAProps {
  title: string;
  subtitle: string;
  buttonText: string;
  buttonHref: string;
}

export function GradientCTA({
  title,
  subtitle,
  buttonText,
  buttonHref,
}: GradientCTAProps) {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 lg:py-24">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary-dark to-accent opacity-90" />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />

      <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 lg:text-lg leading-relaxed">
          {subtitle}
        </p>
        <div className="mt-8">
          <Link
            href={buttonHref}
            className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] active:scale-[0.98] shadow-lg"
          >
            {buttonText}
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
