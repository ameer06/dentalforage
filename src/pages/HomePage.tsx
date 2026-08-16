import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, Cpu, Zap, Handshake, Shield, Clock, CheckCircle2, ScanLine, PenTool, Factory, Sparkles, PackageCheck, Truck, MessageCircle } from 'lucide-react';
import FeatureCard from '../components/ui/FeatureCard';
import ProductCard from '../components/ui/ProductCard';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { PRODUCTS } from '../data/products';
import { WHATSAPP_URL } from '../data/config';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

const WORKFLOW_STEPS = [
  { icon: <ScanLine size={20} />, step: '01', title: 'Digital Scan', desc: 'Submit cases digitally via TRIOS, iTero, Medit or send STL/PLY files directly.' },
  { icon: <CheckCircle2 size={20} />, step: '02', title: 'Case Analysis', desc: 'Our team reviews your digital files, prescription, and case requirements.' },
  { icon: <PenTool size={20} />, step: '03', title: 'CAD Design', desc: 'Expert technicians design your restoration in Exocad or 3Shape with precise anatomy and occlusion.' },
  { icon: <Factory size={20} />, step: '04', title: 'Manufacturing', desc: 'Multi-axis CNC milling from premium zirconia, e.max, or PMMA blanks.' },
  { icon: <Sparkles size={20} />, step: '05', title: 'Finishing', desc: 'Hand staining, glazing, and surface finishing for lifelike aesthetics.' },
  { icon: <PackageCheck size={20} />, step: '06', title: 'Quality Control', desc: 'Dimensional verification, marginal fit check, and shade validation before dispatch.' },
  { icon: <Truck size={20} />, step: '07', title: 'Dispatch', desc: 'Securely packaged and shipped with case documentation via tracked courier.' },
];

const QUALITY_ITEMS = [
  {
    icon: <Shield size={22} className="text-secondary" />,
    title: 'Quality Control',
    description: 'Every restoration undergoes dimensional verification and marginal fit inspection before leaving our lab.',
  },
  {
    icon: <Microscope size={22} className="text-secondary" />,
    title: 'Premium Materials',
    description: 'We use only certified dental-grade zirconia, lithium disilicate, and titanium from verified suppliers.',
  },
  {
    icon: <Factory size={22} className="text-secondary" />,
    title: 'Precision Manufacturing',
    description: 'Multi-axis CNC milling with tolerances of ±0.05mm ensures consistent, accurate restorations.',
  },
  {
    icon: <Clock size={22} className="text-secondary" />,
    title: 'Reliable Turnaround',
    description: 'Structured production schedules with clear timelines — standard cases delivered in 3–5 business days.',
  },
];

const HERO_SLIDES = [
  {
    src: '/images/products/image1.png',
    alt: 'Precision-milled zirconia dental crown on sterile surface',
    badge: 'ZRO2 // MILLED',
  },
  {
    src: '/images/products/image6.png',
    alt: 'Clear orthodontic aligner system over digital dental model',
    badge: 'PET-G // ALIGNER',
  },
  {
    src: '/images/products/image9.png',
    alt: 'CAD/CAM milling machine for dental restorations',
    badge: '5-AXIS // MILLING',
  },
];

const featuredProducts = PRODUCTS.filter((p) => p.featured);

export default function HomePage() {
  useSEO({
    title: 'Precision Digital Dental Laboratory',
    description: 'Dental Forge Technologies LLP — a digital-first CAD/CAM dental laboratory providing precision milled restorations, clear aligners, and digital workflows for dentists, clinics, and hospitals across India.',
  });

  const scrollRef = useScrollReveal();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div ref={scrollRef}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[calc(100vh-80px)] flex items-center overflow-hidden border-b border-stroke-subtle"
        aria-label="Hero"
      >
        {/* Blueprint grid bg */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

        <div className="section-container relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter items-center py-stack-lg w-full">
          {/* Left: copy */}
          <div className="md:col-span-6 space-y-stack-md reveal-left">
            <SectionLabel>Digital Dental Laboratory</SectionLabel>
            <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary tracking-tight leading-none">
              Your Digital Dental Laboratory Partner
            </h1>
            <p className="text-body-lg text-on-surface-variant max-w-lg">
              Precision CAD/CAM restorations for dentists, clinics, and hospitals. 
              Submit your cases digitally and receive lab-quality restorations manufactured 
              with advanced milling technology and rigorous quality control.
            </p>
            <div className="flex flex-col sm:flex-row gap-stack-sm pt-stack-sm">
              <Link to="/submit-case" className="btn-primary px-8 py-4">
                Submit a Case <ArrowRight size={16} />
              </Link>
              <Link to="/quote" className="btn-secondary px-8 py-4">
                Request a Quote
              </Link>
            </div>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-body-md text-on-surface-variant hover:text-secondary transition-colors"
            >
              <MessageCircle size={16} className="text-[#25D366]" />
              <span>Or WhatsApp us directly</span>
            </a>
          </div>
          <div className="md:col-span-6 mt-stack-lg md:mt-0 relative aspect-[1.25/1] sm:aspect-[4/3] md:aspect-[16/9] rounded-3xl overflow-hidden border border-stroke-subtle reveal-right group shadow-sm">
            {HERO_SLIDES.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  className="w-full h-full object-cover"
                  loading={index === 0 ? "eager" : "lazy"}
                  fetchPriority={index === 0 ? "high" : "auto"}
                />
                {/* CAD overlay badge */}
                <div className="absolute top-4 right-4 z-20 font-mono text-label-caps tracking-[0.08em] uppercase text-secondary-fixed bg-surface-charcoal/80 px-2 py-1 rounded backdrop-blur-sm text-[10px]">
                  {slide.badge}
                </div>
              </div>
            ))}
            
            {/* Status dots (Clickable) */}
            <div className="absolute bottom-4 left-4 z-20 flex gap-2">
              {HERO_SLIDES.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-secondary focus-visible:ring-offset-1 ${
                    index === currentSlide ? 'bg-secondary-fixed animate-pulse scale-125' : 'bg-stroke-subtle hover:bg-on-surface-variant'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Trust Strip ───────────────────────────────────────────── */}
      <section className="border-b border-stroke-subtle bg-surface-bright py-stack-md" aria-label="Key capabilities">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter text-center">
            {TRUST_ITEMS.map((item) => (
              <div key={item.label} className="flex flex-col items-center gap-2 reveal stagger-1">
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
          <div className="mb-stack-lg reveal">
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
            {WHY_FEATURES.map((f, i) => (
              <div key={f.title} className={`reveal stagger-${i + 1}`}>
                <FeatureCard icon={f.icon} title={f.title} description={f.description} />
              </div>
            ))}
          </div>
          <div className="mt-stack-lg reveal">
            <Link to="/why-us" className="btn-secondary inline-flex items-center gap-2">
              See All Advantages <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── Featured Products ──────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-container-lowest border-t border-stroke-subtle" aria-labelledby="products-heading">
        <div className="section-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-stack-lg gap-4 reveal">
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
              All Services <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
            {featuredProducts.map((p, i) => (
              <div key={p.slug} className={`reveal stagger-${i + 1}`}>
                <ProductCard product={p} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Digital Workflow ───────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface relative overflow-hidden border-t border-stroke-subtle" aria-labelledby="workflow-heading">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="section-container relative z-10">
          <div className="mb-stack-lg reveal">
            <SectionLabel className="mb-2">Digital Workflow</SectionLabel>
            <h2 id="workflow-heading" className="text-headline-md font-semibold text-primary">
              Scan. Design. Mill. Deliver.
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">
              A fully digital manufacturing process — from your intraoral scan to a finished, quality-verified restoration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
            {/* Steps */}
            <div className="space-y-0">
              {WORKFLOW_STEPS.map((item, i) => (
                <div key={item.step} className={`reveal stagger-${i + 1} flex gap-4 items-start relative`}>
                  {/* Vertical connector line */}
                  {i < WORKFLOW_STEPS.length - 1 && (
                    <div className="absolute left-[19px] top-[40px] w-[2px] h-[calc(100%-16px)] bg-stroke-subtle" />
                  )}
                  <div className="w-10 h-10 bg-surface-container border border-stroke-subtle flex items-center justify-center rounded-lg flex-shrink-0 text-secondary relative z-10">
                    {item.icon}
                  </div>
                  <div className="pb-6">
                    <div className="font-mono text-label-caps text-text-muted tracking-[0.08em] text-[10px] mb-0.5">
                      STEP {item.step}
                    </div>
                    <h3 className="text-headline-sm font-semibold text-primary mb-1">{item.title}</h3>
                    <p className="text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Image */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden border border-stroke-subtle bg-surface-container reveal-right">
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
        </div>
      </section>

      {/* ── Quality & Trust ──────────────────────────────────────── */}
      <section className="py-margin-desktop bg-surface-container-lowest border-t border-stroke-subtle" aria-labelledby="quality-heading">
        <div className="section-container">
          <div className="mb-stack-lg reveal">
            <SectionLabel className="mb-2">Quality Assurance</SectionLabel>
            <h2 id="quality-heading" className="text-headline-md font-semibold text-primary">
              Built on Precision, Verified by Process
            </h2>
            <p className="text-body-md text-on-surface-variant mt-2 max-w-2xl">
              Every restoration from Dental Forge goes through a structured quality process — 
              from material selection to final dimensional verification.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
            {QUALITY_ITEMS.map((item, i) => (
              <div key={item.title} className={`reveal stagger-${i + 1}`}>
                <div className="card p-8 group hover:border-secondary transition-colors duration-300">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-surface-container flex items-center justify-center rounded-lg flex-shrink-0 group-hover:bg-secondary/10 transition-colors">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-headline-sm font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-body-md text-on-surface-variant">{item.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <CTASection
        heading="Ready to Partner With a Precision Lab?"
        subheading="Submit your case digitally and experience micron-level accuracy with reliable turnaround times."
        primaryLabel="Submit a Case"
        primaryTo="/submit-case"
      />
    </div>
  );
}
