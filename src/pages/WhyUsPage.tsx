import {
  Microscope, Cpu, Shield, Zap, Handshake,
  CheckCircle2, XCircle, ArrowRight
} from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

const FEATURES = [
  {
    icon: <Microscope size={22} className="text-secondary" />,
    title: 'Micron Precision',
    description:
      'State-of-the-art milling ensures marginal integrity and perfect fits, reducing chairside adjustment time for your team.',
  },
  {
    icon: <Cpu size={22} className="text-secondary" />,
    title: 'Digital Workflow',
    description:
      'Seamless integration with intraoral scanners (TRIOS, iTero, Medit) for a streamlined, impression-free digital process.',
  },
  {
    icon: <Shield size={22} className="text-secondary" />,
    title: 'Quality Materials',
    description:
      'Premium-grade monolithic zirconia, lithium disilicate, and titanium alloys — no material compromises.',
  },
  {
    icon: <Cpu size={22} className="text-secondary" />,
    title: 'Advanced CAD/CAM',
    description:
      'Expert technicians utilizing Exocad and 3Shape for optimized functional and esthetic restoration designs.',
  },
  {
    icon: <Zap size={22} className="text-secondary" />,
    title: 'Efficient Turnaround',
    description:
      'Optimized manufacturing protocols guarantee reliable, fast turnaround times without compromising output quality.',
  },
  {
    icon: <Handshake size={22} className="text-secondary" />,
    title: 'Professional Support',
    description:
      'Dedicated case communication and technical support from experienced dental technicians at every step.',
  },
];

const US = [
  'Digital CAD/CAM workflow',
  'Micron-level precision (±0.05mm)',
  'Premium material sourcing',
  'Intraoral scanner compatible',
  'Transparent turnaround times',
  'Dedicated technician support',
  'Digital case tracking',
];

const TRADITIONAL = [
  'Manual fabrication variability',
  'Inconsistent fit accuracy',
  'Variable material quality',
  'Impression-based only',
  'Opaque production timelines',
  'Generic customer service',
  'No digital case records',
];

export default function WhyUsPage() {
  useSEO({
    title: 'Why Choose Dental Forge',
    description: 'Discover why top dental clinics across India partner with Dental Forge Technologies LLP for their CAD/CAM dental restorations and digital workflows.',
  });

  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative border-b border-stroke-subtle py-16 md:py-24 overflow-hidden" aria-label="Why Dental Forge hero">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="section-container relative z-10 max-w-3xl">
          <SectionLabel className="mb-3">Why Choose Us</SectionLabel>
          <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-md tracking-tight">
            Why Dental Forge Technologies LLP
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            We are not a generic dental lab. We are a purpose-built digital manufacturing partner
            for dental professionals who demand accuracy, consistency, and reliability.
          </p>
        </div>
      </section>

      {/* ── 6 Feature Cards ────────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-bright" aria-labelledby="features-heading">
        <div className="section-container">
          <div className="mb-stack-lg">
            <SectionLabel className="mb-2">Core Advantages</SectionLabel>
            <h2 id="features-heading" className="text-headline-md font-semibold text-primary">
              What Sets Us Apart
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Engineered for accuracy, built for reliability. Our processes and technology reflect
              our commitment to clinical excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison Table ───────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-container-lowest border-t border-stroke-subtle" aria-labelledby="comparison-heading">
        <div className="section-container">
          <div className="mb-stack-lg text-center">
            <SectionLabel className="mb-2">Comparison</SectionLabel>
            <h2 id="comparison-heading" className="text-headline-md font-semibold text-primary">
              Dental Forge vs. Traditional Lab
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-gutter max-w-3xl mx-auto">
            {/* Dental Forge column */}
            <div className="card p-8">
              <div className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary mb-6 pb-4 border-b border-stroke-subtle">
                Dental Forge Technologies LLP
              </div>
              <ul className="space-y-4">
                {US.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 size={18} className="text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-body-md text-on-background">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Traditional column */}
            <div className="card p-8 bg-surface-container">
              <div className="font-mono text-label-caps tracking-[0.08em] uppercase text-text-muted mb-6 pb-4 border-b border-stroke-subtle">
                Traditional Lab
              </div>
              <ul className="space-y-4">
                {TRADITIONAL.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <XCircle size={18} className="text-error flex-shrink-0 mt-0.5" />
                    <span className="text-body-md text-text-muted">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Process Timeline ───────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface border-t border-stroke-subtle" aria-labelledby="process-heading">
        <div className="section-container">
          <div className="mb-stack-lg">
            <SectionLabel className="mb-2">Our Process</SectionLabel>
            <h2 id="process-heading" className="text-headline-md font-semibold text-primary">
              How We Work
            </h2>
          </div>
          <div className="grid md:grid-cols-4 gap-gutter">
            {[
              { num: '01', title: 'Case Submission', desc: 'Submit via digital scan or STL file. Fast, secure, and paperless.' },
              { num: '02', title: 'CAD Design', desc: 'Technicians design your restoration with optimal anatomy and fit.' },
              { num: '03', title: 'Precision Milling', desc: 'Multi-axis CNC milling from premium material blanks.' },
              { num: '04', title: 'QC & Dispatch', desc: 'Dimensional verification followed by secure courier delivery.' },
            ].map((step, i) => (
              <div key={step.num} className="relative">
                <div className="font-mono text-label-caps tracking-[0.08em] text-secondary mb-3">{step.num}</div>
                <h3 className="text-headline-sm font-semibold text-primary mb-2">{step.title}</h3>
                <p className="text-body-md text-on-surface-variant">{step.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-3 right-0 translate-x-1/2 text-stroke-subtle">
                    <ArrowRight size={16} className="text-outline-variant" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        primaryLabel="Submit a Case"
        primaryTo="/submit-case"
      />
    </div>
  );
}
