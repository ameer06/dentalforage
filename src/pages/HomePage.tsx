import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Cpu, Zap, Handshake, Shield, Clock } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import ProductCard from '../components/ui/ProductCard';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { PRODUCTS } from '../data/products';

const WHY_FEATURES = [
  {
    icon: <Microscope size={22} className="text-secondary" />,
    title: 'Micron Precision',
    description:
      'State-of-the-art milling ensures marginal integrity and perfect fits, reducing chairside adjustment time.',
  },
  {
    icon: <Cpu size={22} className="text-secondary" />,
    title: 'Digital Workflow',
    description:
      'Seamless integration with intraoral scanners (TRIOS, iTero, Medit) for a streamlined, impression-free process.',
  },
  {
    icon: <Shield size={22} className="text-secondary" />,
    title: 'Quality Materials',
    description:
      'Sourcing only premium-grade monolithic zirconia, lithium disilicate, and titanium alloys.',
  },
  {
    icon: <Cpu size={22} className="text-secondary" />,
    title: 'Advanced CAD/CAM',
    description:
      'Expert technicians utilizing Exocad and 3Shape software for optimized functional and esthetic designs.',
  },
  {
    icon: <Zap size={22} className="text-secondary" />,
    title: 'Efficient Turnaround',
    description:
      'Optimized manufacturing protocols guarantee reliable, fast turnaround times without compromising quality.',
  },
  {
    icon: <Handshake size={22} className="text-secondary" />,
    title: 'Professional Support',
    description:
      'Dedicated case communication and technical support from experienced dental technicians.',
  },
];

const TRUST_ITEMS = [
  { icon: <Microscope size={28} className="text-secondary" />, label: 'Digital Lab' },
  { icon: <Cpu size={28} className="text-secondary" />, label: 'Precision Mfg' },
  { icon: <Clock size={28} className="text-secondary" />, label: 'CAD/CAM' },
  { icon: <Handshake size={28} className="text-secondary" />, label: 'B2B Solutions' },
];

const featuredProducts = PRODUCTS.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* SEO meta via title tag — actual meta managed in App.tsx / helmet */}

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-b border-stroke-subtle"
        aria-label="Hero"
      >
        {/* Blueprint grid bg */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-stack-lg w-full">
          {/* Left: copy */}
          <div className="md:col-span-6 space-y-stack-md">
            <SectionLabel>Digital Dental Laboratory</SectionLabel>
            <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary tracking-tight leading-none">
              Precision Dental Laboratory Solutions for Modern Dentistry
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Elevating B2B dental restorations through advanced CAD/CAM manufacturing, uncompromising
              material science, and rigorous digital workflows. Partner with Dental Forge for consistent
              excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-stack-sm pt-stack-sm">
              <Link to="/quote" className="btn-primary px-8 py-4">
                Request a Quote
              </Link>
              <Link to="/products" className="btn-secondary px-8 py-4">
                Explore Our Solutions
              </Link>
            </div>
          </div>

          {/* Right: hero image */}
          <div className="md:col-span-6 mt-stack-lg md:mt-0 relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden border border-stroke-subtle">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3nbJslIhHFrWUPRPP0WNeCVc3MdO5Grl5INO1RfpTG0Y5xlmEBUbgnYElgkT9aOYsGU4PbXgb6a-bZUDs-lrzCBeXipxX1qMxfru4P_Atvf8bzRApIUuPtEQwOZtm8yM52wugz1YbTPiJ_z32679pVWDWArxxXS8PrP9vjk2JDenWp82MRGcQ7aBpswwB0wQVcohLk15STH7tyZJvJjsY7hVNXA0oWsBHPkGjtvH1QnnqGARVFzkFgw"
              alt="A precision-milled zirconia dental crown resting on a sterile metallic surface with CAD wireframe overlay — Dental Forge Technologies digital laboratory"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* CAD overlay badge */}
            <div className="absolute top-4 right-4 z-20 font-mono text-label-caps tracking-[0.08em] uppercase text-secondary-fixed bg-surface-charcoal/80 px-2 py-1 rounded backdrop-blur-sm text-[10px]">
              ZRO2 // MILLED
            </div>
            {/* Status dots */}
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              <div className="w-2 h-2 bg-secondary-fixed rounded-full animate-pulse" />
              <div className="w-2 h-2 bg-stroke-subtle rounded-full" />
              <div className="w-2 h-2 bg-stroke-subtle rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────── */}
      <section className="border-b border-stroke-subtle bg-surface-bright py-stack-md" aria-label="Key capabilities">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2">
                {item.icon}
                <span className="font-mono text-label-caps tracking-[0.08em] uppercase text-on-surface-variant">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Dental Forge ──────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-bright relative" aria-labelledby="why-heading">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="mb-stack-lg">
            <SectionLabel className="mb-2">Why Choose Us</SectionLabel>
            <h2 id="why-heading" className="text-headline-md font-semibold text-primary">
              Why Dental Forge
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Engineered for accuracy, built for reliability. We provide the technical backbone for
              modern dental practices.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {WHY_FEATURES.map((f) => (
              <FeatureCard key={f.title} icon={f.icon} title={f.title} description={f.description} />
            ))}
          </div>
          <div className="mt-stack-lg">
            <Link to="/why-us" className="btn-secondary inline-flex items-center gap-2">
              See All Advantages <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Products ──────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-container-lowest border-t border-stroke-subtle" aria-labelledby="products-heading">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg gap-4">
            <div>
              <SectionLabel className="mb-2">Lab Services</SectionLabel>
              <h2 id="products-heading" className="text-headline-md font-semibold text-primary">
                Precision Restorations
              </h2>
              <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
                CAD/CAM crafted dental restorations designed for modern digital workflows.
              </p>
            </div>
            <Link
              to="/products"
              className="btn-secondary inline-flex items-center gap-2 flex-shrink-0"
            >
              All Products <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {featuredProducts.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Workflow Teaser ───────────────────────────────── */}
      <section className="py-margin-desktop bg-surface relative overflow-hidden border-t border-stroke-subtle" aria-labelledby="workflow-heading">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-gutter items-center">
          <div>
            <SectionLabel className="mb-2">Digital Workflow</SectionLabel>
            <h2 id="workflow-heading" className="text-headline-md font-semibold text-primary mb-stack-md">
              Scan. Design. Mill. Deliver.
            </h2>
            <div className="space-y-6">
              {[
                { step: '01', title: 'Intraoral Scan / Digital File', desc: 'Submit cases digitally via TRIOS, iTero, Medit or send STL files directly.' },
                { step: '02', title: 'CAD Design Review', desc: 'Our technicians design your restoration in Exocad or 3Shape with precise anatomy.' },
                { step: '03', title: 'Precision Milling', desc: 'Multi-axis CNC milling from premium zirconia, e.max, or PMMA blanks.' },
                { step: '04', title: 'Quality Check & Dispatch', desc: 'Every restoration undergoes dimensional verification before courier dispatch.' },
              ].map((item) => (
                <div key={item.step} className="flex gap-4 items-start">
                  <div className="font-mono text-label-caps text-secondary tracking-[0.08em] flex-shrink-0 mt-1">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-headline-sm font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-stroke-subtle bg-surface-container">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2I11CELrF1BtTyBtSDg0IUybpLUyMzPxza1-9_AQVQ2aWRSFMZMNTYh-QPlVNBkletyBlvsKiDzrh1P9B2621hX9zx6X26kMF4WshWeNOkSzu4W8mWCk-1eVKL3U_EfMLWjEiS_Uq6t2jbNRszNNYMrSlyb_WSumaMHYgf7pQqsOzTjdBrlmsTw74dtt_ETVUl7l1hoTqAIh9KbEzHQqHAb7yovjaKGUYdv7iPnZ6W8ozICJ0WNrW9w"
              alt="CAD/CAM dental workflow — digital tooth design on screen"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-charcoal/40 to-transparent" />
            <div className="absolute bottom-8 left-8 border-l-2 border-secondary-fixed pl-4">
              <div className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary-fixed text-[10px] mb-1">TOLERANCE</div>
              <div className="text-headline-sm font-semibold text-on-primary">±0.05mm</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTASection />
    </>
  );
}
