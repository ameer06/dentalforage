import { Cpu, BarChart3, Shield, Users } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  useSEO({
    title: 'About Us | Digital Architecture',
    description: 'Learn about Dental Forge Technologies LLP, our state-of-the-art digital manufacturing facility, and our commitment to uncompromising precision in dental restorations.',
  });

  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative py-20 md:py-32 border-b border-stroke-subtle overflow-hidden" aria-label="About hero">
        {/* Tech grid bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, rgba(233,236,239,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(233,236,239,0.5) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="section-container relative z-10 grid md:grid-cols-2 gap-gutter items-center">
          <div className="max-w-2xl">
            <SectionLabel className="mb-stack-sm">Company Overview</SectionLabel>
            <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-md tracking-tight">
              Engineering Precision for Modern Dentistry
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-xl">
              We are a digital-first CAD/CAM dental laboratory dedicated to micron-level accuracy.
              We bridge the gap between advanced manufacturing protocols and clinical excellence —
              serving dentists, clinics, and hospitals across India.
            </p>
          </div>
          <div className="relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-stroke-subtle bg-surface-container-low">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBllEzmEBOHBOYLf1C8KQ7NaWLMQ6sPlyiL8qg3z2G4CNPsTWlCiDBS2nz4m1-q6ZsIQ5F_VMX_B1kCV7MphHZBSDdPUj6r6iIJNScSpmiwxnAi7AAw0hK7SHb4nUMXpyN2yoxtobBXVo8JxokSkxJLO0WbQk4wXOYCelUeQO2AyoZPLlJrPR0gEdzQbrwnMCnC05huJV6omXXLzCjy51gCPWKPg2zMu3jtk67FHAJdciXJZT_A3ek3EA"
              alt="Precision-milled zirconia dental restoration — Dental Forge Technologies LLP manufacturing"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ── Who We Are ────────────────────────────────────────────── */}
      <section className="py-stack-lg md:py-margin-desktop bg-surface" aria-labelledby="who-heading">
        <div className="section-container">
          <div className="grid md:grid-cols-12 gap-gutter items-start">
            <div className="md:col-span-4">
              <h2 id="who-heading" className="text-headline-md font-semibold text-primary md:sticky md:top-32">
                A Digital-First Architecture.
              </h2>
            </div>
            <div className="md:col-span-8 grid sm:grid-cols-2 gap-gutter">
              {[
                {
                  icon: <Cpu size={32} className="text-secondary mb-4" />,
                  title: 'Automated Workflows',
                  desc: 'Our facility relies entirely on a digitized pipeline, reducing human error and ensuring every restoration adheres to strict dimensional tolerances.',
                },
                {
                  icon: <BarChart3 size={32} className="text-secondary mb-4" />,
                  title: 'Data-Driven Quality',
                  desc: 'We monitor production metrics in real-time. Every scan, design, and milling path is logged to ensure consistency across every case.',
                },
                {
                  icon: <Shield size={32} className="text-secondary mb-4" />,
                  title: 'Premium Materials',
                  desc: 'We source only premium-grade zirconia, lithium disilicate, medical-grade titanium, and PMMA for every restoration.',
                },
                {
                  icon: <Users size={32} className="text-secondary mb-4" />,
                  title: 'B2B Focus',
                  desc: 'Dental Forge serves dentists, multi-specialty clinics, and hospital dental departments — not retail patients. We are your lab partner.',
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-surface-container-lowest p-8 rounded-xl border border-stroke-subtle hover:border-secondary transition-colors"
                >
                  {item.icon}
                  <h3 className="text-headline-sm font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission & Vision ──────────────────────────────────────── */}
      <section className="py-stack-lg md:py-margin-desktop bg-surface-charcoal" aria-labelledby="mission-heading">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-gutter">
            <div className="p-8 rounded-xl border border-surface-tint">
              <SectionLabel className="mb-3 !text-secondary-fixed">Our Mission</SectionLabel>
              <h2 id="mission-heading" className="text-headline-md font-semibold text-on-primary mb-4">
                Precision Without Compromise
              </h2>
              <p className="text-body-lg text-surface-dim">
                To empower every dental professional in India with access to world-class digital
                laboratory services — delivering restorations that fit right the first time, every time.
              </p>
            </div>
            <div className="p-8 rounded-xl border border-surface-tint">
              <SectionLabel className="mb-3 !text-secondary-fixed">Our Vision</SectionLabel>
              <h2 className="text-headline-md font-semibold text-on-primary mb-4">
                The Digital Lab Standard
              </h2>
              <p className="text-body-lg text-surface-dim">
                To become India's leading digital dental laboratory, setting the benchmark for
                CAD/CAM manufacturing quality, turnaround reliability, and clinical partnership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Technology ────────────────────────────────────────────── */}
      <section className="py-stack-lg md:py-margin-desktop bg-surface border-t border-stroke-subtle" aria-labelledby="tech-heading">
        <div className="section-container">
          <div className="mb-stack-lg text-center">
            <SectionLabel className="mb-2">Technology</SectionLabel>
            <h2 id="tech-heading" className="text-headline-md font-semibold text-primary">
              Lab Technology
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-xl mx-auto">
              Our manufacturing infrastructure is built around industry-leading digital tools.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {[
              { label: 'CAD SOFTWARE', items: ['Exocad DentalCAD', '3Shape Dental System', 'DSD App'] },
              { label: 'SCANNERS SUPPORTED', items: ['TRIOS (3Shape)', 'iTero (Align)', 'Medit i700', 'Carestream CS 3600'] },
              { label: 'MANUFACTURING', items: ['Multi-axis CNC Milling', 'DLP / SLA 3D Printing', 'High-precision thermoforming'] },
            ].map((col) => (
              <div key={col.label} className="card p-6">
                <h3 className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary mb-4">
                  {col.label}
                </h3>
                <ul className="space-y-2">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-body-md text-on-background">
                      <div className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
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
