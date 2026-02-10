"use client";

import { useState } from "react";
import { Section, SectionHeader, BlogCard, GradientCTA } from "@/components/ui";

/* PLACEHOLDER: All blog posts below are upcoming topic placeholders.
   Replace with real articles as content is published. */
const posts = [
  {
    title: "Why Every Startup Needs a Security Mindset from Day One",
    excerpt: "Most startups treat security as an afterthought. Here's why baking it in from the beginning saves time, money, and reputation.",
    category: "Cybersecurity",
    author: "N0E9Tech Team",
    date: "Jan 07, 2026",
    readTime: "5 min read",
    slug: "startup-security-mindset",
  },
  {
    title: "Taking Raspberry Pi from Prototype to Production",
    excerpt: "Lessons learned deploying Raspberry Pi-based IoT solutions in real-world environments — from sensor networks to edge computing.",
    category: "IoT & Embedded",
    author: "N0E9Tech Team",
    date: "Jan 15, 2026",
    readTime: "6 min read",
    slug: "raspberry-pi-production",
  },
  {
    title: "Choosing the Right Tech Stack for Your MVP",
    excerpt: "A practical guide to selecting frameworks, languages, and infrastructure that let you ship fast without accumulating tech debt.",
    category: "Web Development",
    author: "N0E9Tech Team",
    date: "Jan 21, 2026",
    readTime: "6 min read",
    slug: "choosing-mvp-tech-stack",
  },
];

const categories = [
  "All",
  "Cybersecurity",
  "IoT & Embedded",
  "Web Development",
];

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      {/* Hero — inline because client component */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 bg-gradient-to-b from-bg-dark via-bg-dark to-bg-card">
        <div className="absolute inset-0 bg-grid-pattern opacity-60" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-primary sm:text-sm animate-fade-in">
            Insights & Resources
          </span>
          <h1 className="text-3xl font-extrabold text-text-primary sm:text-4xl lg:text-5xl xl:text-6xl leading-tight animate-fade-in-up delay-100">
            Our Blog
          </h1>
          <p className="mx-auto mt-5 max-w-3xl text-base text-text-secondary lg:text-lg leading-relaxed animate-fade-in-up delay-200">
            {/* PLACEHOLDER: Update intro text as real articles are published */}
            Technical guides, case studies, and insights on cybersecurity, IoT, and modern software development.
          </p>
        </div>
      </section>

      {/* ===== BLOG CONTENT ===== */}
      <Section>
        {/* Search + Filter bar */}
        <div className="flex flex-col gap-4 mb-10">
          {/* Category filter */}
          <div
            className="flex flex-wrap gap-2 justify-center"
            role="tablist"
            aria-label="Filter posts by category"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-primary text-white shadow-md shadow-primary/25"
                    : "bg-bg-card text-text-secondary border border-border hover:border-primary/50 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Blog Grid */}
        <div role="tabpanel" aria-label={`${activeCategory} posts`} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredPosts.map((post) => (
            <div key={post.slug} className="animate-fade-in-up">
              <BlogCard {...post} />
            </div>
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <p className="text-text-muted mb-4">
              No articles found matching your criteria.
            </p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setSearchQuery("");
              }}
              className="text-sm text-primary hover:text-primary-light transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}
      </Section>

      {/* ===== NEWSLETTER ===== */}
      <Section className="bg-bg-card">
        <div className="relative max-w-2xl mx-auto text-center">
          <SectionHeader
            label="Newsletter"
            title="Get Notified When We Publish"
            subtitle="We're working on our first articles. Subscribe to be the first to know when we go live — plus monthly insights on cybersecurity, IoT, and development. No spam."
          />
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              aria-label="Email for newsletter"
              className="flex-1 rounded-lg bg-bg-dark border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <button
              type="submit"
              className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-primary-dark hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/20"
            >
              Subscribe
            </button>
          </form>
          <p className="mt-3 text-xs text-text-muted">
            {/* PLACEHOLDER: Update subscriber count as list grows */}
            Be among the first to subscribe. Unsubscribe anytime.
          </p>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <GradientCTA
        title="Have a Project in Mind?"
        subtitle="While we work on our content, we're already building solutions. Let's talk about your next project."
        buttonText="Start a Conversation"
        buttonHref="/contact"
      />
    </>
  );
}
