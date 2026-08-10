import { Link } from 'react-router-dom';
import { UploadCloud, Cpu, Clock, MessageCircle, Check } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { WHATSAPP_URL } from '../data/config';

const PROCESS_CARDS = [
  {
    icon: <UploadCloud size={22} className="text-primary group-hover:text-on-secondary-container transition-colors" />,
    iconBg: 'bg-surface-container group-hover:bg-secondary-container',
    title: 'Easy Case Submission',
    description:
      'Submit cases digitally via intraoral scans or send traditional impressions. Our secure portal allows for instant file uploads, case tracking, and direct communication with our lead technicians.',
  },
  {
    icon: <Cpu size={22} className="text-primary group-hover:text-on-secondary-container transition-colors" />,
    iconBg: 'bg-surface-container group-hover:bg-secondary-container',
    title: 'Digital Workflow Integration',
    description:
      'Our lab is fully integrated with TRIOS, iTero, and Medit scanner workflows. No proprietary portal required — just send us the STL file and we handle the rest.',
  },
  {
    icon: <Clock size={22} className="text-primary group-hover:text-on-secondary-container transition-colors" />,
    iconBg: 'bg-surface-container group-hover:bg-secondary-container',
    title: 'Reliable Turnaround',
    description:
      'Standard cases dispatched in 3–5 business days. Expedited 24–48 hour turnaround available for urgent restorations. We respect your scheduling.',
  },
  {
    icon: <MessageCircle size={22} className="text-primary group-hover:text-on-secondary-container transition-colors" />,
    iconBg: 'bg-surface-container group-hover:bg-secondary-container',
    title: 'Direct Technician Access',
    description:
      'Talk directly to the technician handling your case via WhatsApp. No call centres, no generic support — real expertise when you need it.',
  },
];

const BENEFITS = [
  'Impression-free digital case submission',
  'Compatible with all major intraoral scanners',
  'Transparent case tracking updates',
  'Zirconia, E-Max, PFM, and aligner solutions',
  'Expedited turnaround available',
  'All-India courier delivery',
  'Dedicated WhatsApp technician line',
  'No minimum order quantity',
];

export default function ForDentistsPage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative border-b border-stroke-subtle py-16 md:py-[120px] overflow-hidden" aria-label="For dentists hero">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundSize: '24px 24px',
            backgroundImage:
              'linear-gradient(to right, rgba(233,236,239,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(233,236,239,0.5) 1px, transparent 1px)',
          }}
        />
        {/* Decorative right image */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 hidden lg:block opacity-40">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2I11CELrF1BtTyBtSDg0IUybpLUyMzPxza1-9_AQVQ2aWRSFMZMNTYh-QPlVNBkletyBlvsKiDzrh1P9B2621hX9zx6X26kMF4WshWeNOkSzu4W8mWCk-1eVKL3U_EfMLWjEiS_Uq6t2jbNRszNNYMrSlyb_WSumaMHYgf7pQqsOzTjdBrlmsTw74dtt_ETVUl7l1hoTqAIh9KbEzHQqHAb7yovjaKGUYdv7iPnZ6W8ozICJ0WNrW9w"
            alt="CAD wireframe dental crown — precision manufacturing"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="section-container relative z-10">
          <div className="max-w-3xl">
            <SectionLabel className="mb-3">Professional Partner</SectionLabel>
            <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-md tracking-tight">
              Built Around Your Practice.
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-stack-lg">
              A professional digital laboratory partner for dentists, clinics, and hospitals. We
              integrate seamlessly into your workflow to deliver precision-milled prosthetics with
              predictable quality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="btn-primary px-8 py-4">
                Start Your Case
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Cards ─────────────────────────────────────────── */}
      <section className="py-stack-lg md:py-[120px]" aria-labelledby="process-heading">
        <div className="section-container">
          <div className="mb-stack-lg">
            <SectionLabel className="mb-2">Designed for Dentists</SectionLabel>
            <h2 id="process-heading" className="text-headline-md font-semibold text-primary">
              How It Works For Your Practice
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {PROCESS_CARDS.map((card) => (
              <div
                key={card.title}
                className="bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8 hover:border-secondary transition-colors group"
              >
                <div className={`w-12 h-12 ${card.iconBg} flex items-center justify-center rounded-lg mb-6 transition-colors`}>
                  {card.icon}
                </div>
                <h3 className="text-headline-sm font-semibold text-primary mb-3">{card.title}</h3>
                <p className="text-body-md text-on-surface-variant">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefits List ─────────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface border-t border-stroke-subtle" aria-labelledby="benefits-heading">
        <div className="section-container grid md:grid-cols-2 gap-gutter items-center">
          <div>
            <SectionLabel className="mb-2">Partner Benefits</SectionLabel>
            <h2 id="benefits-heading" className="text-headline-md font-semibold text-primary mb-stack-md">
              Everything a Modern Practice Needs
            </h2>
            <ul className="space-y-3">
              {BENEFITS.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-secondary" />
                  </div>
                  <span className="text-body-md text-on-background">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px] rounded-3xl overflow-hidden border border-stroke-subtle">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3nbJslIhHFrWUPRPP0WNeCVc3MdO5Grl5INO1RfpTG0Y5xlmEBUbgnYElgkT9aOYsGU4PbXgb6a-bZUDs-lrzCBeXipxX1qMxfru4P_Atvf8bzRApIUuPtEQwOZtm8yM52wugz1YbTPiJ_z32679pVWDWArxxXS8PrP9vjk2JDenWp82MRGcQ7aBpswwB0wQVcohLk15STH7tyZJvJjsY7hVNXA0oWsBHPkGjtvH1QnnqGARVFzkFgw"
              alt="Precision dental lab restoration quality check"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            {/* Stacked scanner logos text */}
            <div className="absolute bottom-6 left-6 right-6 bg-surface-charcoal/80 backdrop-blur-sm rounded p-4">
              <p className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary-fixed text-[10px] mb-2">
                Compatible Scanners
              </p>
              <p className="text-body-md text-on-primary font-medium">
                TRIOS · iTero · Medit · Carestream · Planmeca
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-container-lowest border-t border-stroke-subtle" aria-labelledby="faq-heading">
        <div className="section-container">
          <div className="mb-stack-lg">
            <SectionLabel className="mb-2">FAQ</SectionLabel>
            <h2 id="faq-heading" className="text-headline-md font-semibold text-primary">
              Common Questions
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter">
            {[
              { q: 'How do I submit a case?', a: 'Send the STL or scan file via WhatsApp, email, or our Request a Quote form. We will confirm receipt and begin processing within hours.' },
              { q: 'What is your turnaround time?', a: 'Standard turnaround is 3–5 business days. Expedited 24–48 hour turnaround is available on request, subject to case complexity.' },
              { q: 'What scanners do you support?', a: 'We accept files from all major intraoral scanners including TRIOS, iTero, Medit, Carestream, and Planmeca, as well as standard STL files.' },
              { q: 'Do you deliver across India?', a: 'Yes. We deliver to all major cities and towns across India via our partner courier network with tracked shipments.' },
            ].map((item) => (
              <div key={item.q} className="card p-6">
                <h3 className="text-headline-sm font-semibold text-primary mb-3">{item.q}</h3>
                <p className="text-body-md text-on-surface-variant">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
