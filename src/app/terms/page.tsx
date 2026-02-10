import type { Metadata } from "next";
import { Section, PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "N0E9Tech terms of service — the terms and conditions governing use of our website and services.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        label="Legal"
        title="Terms of Service"
        subtitle="Last updated: February 2026"
      />

      <Section>
        <div className="prose prose-invert mx-auto max-w-3xl">
          <div className="space-y-8 text-text-secondary text-sm leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing or using the N0E9Tech website, you agree to be
                bound by these Terms of Service. If you do not agree with any
                part of these terms, please do not use our website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                2. Services
              </h2>
              <p>
                N0E9Tech provides cybersecurity consulting, IoT and embedded
                systems engineering, web and mobile application development, and
                IT consulting services. Specific service terms are outlined in
                individual project agreements and statements of work.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                3. Intellectual Property
              </h2>
              <p>
                All content on this website — including text, graphics, logos,
                and design — is the property of N0E9Tech or its licensors
                and is protected by applicable intellectual property laws.
                Unauthorized use is prohibited.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                4. Limitation of Liability
              </h2>
              <p>
                N0E9Tech provides this website on an &quot;as is&quot; basis.
                We make no warranties regarding the accuracy or completeness of
                the content. In no event shall N0E9Tech be liable for any
                indirect, incidental, or consequential damages arising from use
                of this website.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                5. Confidentiality
              </h2>
              <p>
                Any information shared during consultations or through our
                contact form will be treated as confidential. Non-disclosure
                agreements are available upon request for all engagements.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                6. Changes to Terms
              </h2>
              <p>
                We may update these Terms of Service from time to time. Changes
                will be posted on this page with an updated revision date.
                Continued use of our website after changes constitutes
                acceptance of the revised terms.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-text-primary mb-3">
                7. Contact
              </h2>
              <p>
                For questions about these terms, contact us at{" "}
                <a
                  href="mailto:ntprocs@n0e9tech.com"
                  className="text-primary hover:underline"
                >
                  ntprocs@n0e9tech.com
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
