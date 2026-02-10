import type { Metadata } from "next";
import { Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "N0E9Tech privacy policy — how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Privacy Policy"
        subtitle="Last updated: February 2026"
      />

      <Section>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <div className="space-y-8 text-text-secondary text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                1. Information We Collect
              </h2>
              <p>
                We collect information you provide directly, such as your name,
                email address, phone number, and message content when you use our
                contact form. We also collect standard web analytics data
                including browser type, device information, and pages visited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We use the information we collect to respond to your inquiries,
                provide requested services, improve our website, and send relevant
                communications if you opt in to our newsletter. We do not sell
                your personal data to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                3. Data Security
              </h2>
              <p>
                As a cybersecurity company, we take data protection seriously. We
                employ industry-standard security measures including encryption,
                access controls, and regular security audits to protect your
                information.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                4. Cookies
              </h2>
              <p>
                Our website uses essential cookies to ensure proper functionality.
                We may use analytics cookies to understand how visitors interact
                with our site. You can control cookie preferences through your
                browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                5. Your Rights
              </h2>
              <p>
                You have the right to access, correct, or delete your personal
                data. You may also opt out of marketing communications at any
                time. To exercise these rights, contact us at{" "}
                <a
                  href="mailto:ntprocs@n0e9tech.com"
                  className="text-primary hover:underline"
                >
                  ntprocs@n0e9tech.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                6. Contact
              </h2>
              <p>
                For privacy-related inquiries, please reach out to us at{" "}
                <a
                  href="mailto:ntprocs@n0e9tech.com"
                  className="text-primary hover:underline"
                >
                  ntprocs@n0e9tech.com
                </a>{" "}
                or visit our{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Contact page
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
