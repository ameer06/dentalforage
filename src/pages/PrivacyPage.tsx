import { SITE_CONFIG } from '../data/config';

export default function PrivacyPage() {
  const sections = [
    {
      title: 'Information We Collect',
      content: `When you use the Dental Forge Technologies website or submit a case inquiry, we may collect:
      
• Contact information (name, email address, phone number)
• Clinic or practice name and location
• Case-related information submitted via our quote form
• Digital scan files or other dental case files you choose to upload
• Browser and usage data collected automatically (IP address, browser type, pages visited)`,
    },
    {
      title: 'How We Use Your Information',
      content: `We use the information we collect to:

• Process and respond to case inquiries and quote requests
• Communicate with you about your dental laboratory orders
• Provide technical support related to your cases
• Improve our services and website
• Comply with applicable laws and regulations

We do not sell, rent, or share your personal information with third parties for marketing purposes.`,
    },
    {
      title: 'Data Security',
      content: `We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. Dental case files and personal data are handled with strict confidentiality in accordance with professional standards.`,
    },
    {
      title: 'Data Retention',
      content: `We retain personal and case-related information for as long as necessary to provide our services and comply with legal obligations. You may request deletion of your personal data by contacting us directly.`,
    },
    {
      title: 'Cookies',
      content: `Our website may use cookies and similar technologies to improve your browsing experience, analyze traffic, and understand how our site is used. You can control cookies through your browser settings.`,
    },
    {
      title: 'Third-Party Services',
      content: `Our website may link to or use third-party services (such as WhatsApp for communication, Google Maps for location). These services have their own privacy policies which we encourage you to review.`,
    },
    {
      title: 'Your Rights',
      content: `Depending on your location and applicable law, you may have rights including:

• Access to the personal data we hold about you
• Correction of inaccurate data
• Deletion of your personal data
• Objection to certain processing activities

To exercise any of these rights, please contact us at ${SITE_CONFIG.email}.`,
    },
    {
      title: 'Contact Us',
      content: `If you have questions about this Privacy Policy or how we handle your personal information, please contact us:

Email: ${SITE_CONFIG.email}
Phone: ${SITE_CONFIG.phone}
Address: ${SITE_CONFIG.address.full}`,
    },
  ];

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="border-b border-stroke-subtle py-16 md:py-24" aria-label="Privacy policy header">
        <div className="section-container">
          <p className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary mb-3">
            Legal
          </p>
          <h1 className="text-display-lg-mobile md:text-headline-md font-bold text-primary mb-4">
            Privacy Policy
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            This Privacy Policy describes how Dental Forge Technologies LLP collects, uses, and
            protects your personal information when you use our website and services.
          </p>
          <p className="text-body-md text-text-muted mt-4">
            Last updated: {SITE_CONFIG.established}
          </p>
        </div>
      </section>

      {/* ── Content ───────────────────────────────────────────────── */}
      <section className="py-stack-lg md:py-margin-desktop" aria-label="Privacy policy content">
        <div className="section-container max-w-3xl">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.title} className="card p-8">
                <h2 className="text-headline-sm font-semibold text-primary mb-4">{section.title}</h2>
                <p className="text-body-md text-on-surface-variant whitespace-pre-line leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
