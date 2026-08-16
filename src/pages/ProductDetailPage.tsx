import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Check, Clock } from 'lucide-react';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { PRODUCTS } from '../data/products';
import { WHATSAPP_URL } from '../data/config';
import { MessageCircle } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find((p) => p.slug === slug);

  // Default SEO fallback if product is loading or not found
  const seoTitle = product ? product.name : 'Product Details';
  const seoDesc = product ? product.shortDescription : 'Product details and specifications';

  useSEO({
    title: seoTitle,
    description: seoDesc,
  });

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  // Related products (same category, exclude self)
  const related = PRODUCTS.filter(
    (p) => p.category === product.category && p.slug !== product.slug
  ).slice(0, 3);

  const scrollRef = useScrollReveal();

  return (
    <div ref={scrollRef}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-stroke-subtle" aria-label={`${product.name} detail`}>
        {/* Grid BG */}
        <div className="absolute inset-0 grid-bg-sm opacity-100 pointer-events-none" />

        <div className="section-container relative z-10 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-gutter items-center">
          {/* Left: copy */}
          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-secondary mb-stack-md transition-colors"
              aria-label="Back to all products"
            >
              <ArrowLeft size={14} /> All Products
            </Link>
            <div className="flex items-center gap-3 mb-stack-sm">
              <span className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary border border-secondary/30 px-2 py-0.5 rounded bg-secondary/5">
                {product.category}
              </span>
            </div>
            <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-md tracking-tight">
              {product.name}
            </h1>
            <p className="text-body-lg text-on-surface-variant mb-stack-lg max-w-xl">
              {product.fullDescription}
            </p>

            {/* Key benefits */}
            <ul className="space-y-3 mb-stack-lg">
              {product.keyBenefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary/10 flex items-center justify-center mt-0.5">
                    <Check size={12} className="text-secondary" />
                  </div>
                  <span className="text-body-md text-on-background">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/quote" className="btn-primary px-8 py-4 inline-flex items-center gap-2">
                Request a Quote <ArrowRight size={16} />
              </Link>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary px-8 py-4 inline-flex items-center gap-2"
              >
                <MessageCircle size={16} /> Discuss This Case
              </a>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative h-[360px] lg:h-[520px] rounded-3xl overflow-hidden bg-surface-container border border-stroke-subtle">
            <img
              src={product.imageUrl}
              alt={product.imageAlt}
              loading="eager"
              className="w-full h-full object-cover"
            />
            {/* Overlay badge */}
            <div className="absolute top-4 right-4 bg-surface-charcoal/80 backdrop-blur-sm px-3 py-1.5 rounded flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary-fixed animate-pulse" />
              <span className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary-fixed text-[10px]">
                System Active
              </span>
            </div>
            {/* Tolerance badge */}
            {product.specs.find((s) => s.label === 'Tolerance') && (
              <div className="absolute bottom-6 left-6 border-l-2 border-secondary-fixed pl-4">
                <div className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary-fixed text-[10px] mb-0.5">Tolerance</div>
                <div className="text-headline-sm font-semibold text-on-primary">
                  {product.specs.find((s) => s.label === 'Tolerance')?.value}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Specs Bento ───────────────────────────────────────────── */}
      <section className="py-stack-lg md:py-margin-desktop bg-surface-container-lowest border-b border-stroke-subtle" aria-labelledby="specs-heading">
        <div className="section-container">
          <div className="mb-stack-lg">
            <SectionLabel className="mb-2">Specifications</SectionLabel>
            <h2 id="specs-heading" className="text-headline-md font-semibold text-primary">
              Technical Specifications
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {product.specs.map((spec) => (
              <div
                key={spec.label}
                className="card p-6 flex flex-col gap-2"
              >
                <span className="font-mono text-label-caps tracking-[0.08em] uppercase text-secondary text-[10px]">
                  {spec.label}
                </span>
                <span className="text-body-md font-semibold text-on-background">{spec.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Turnaround callout ────────────────────────────────────── */}
      <section className="py-stack-md bg-surface border-b border-stroke-subtle">
        <div className="section-container">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 card p-6 md:p-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Clock size={22} className="text-secondary" />
              </div>
              <div>
                <p className="font-mono text-label-caps tracking-[0.08em] uppercase text-text-muted text-[10px]">
                  Standard Turnaround
                </p>
                <p className="text-headline-sm font-semibold text-primary">{product.turnaround}</p>
              </div>
            </div>
            <Link to="/quote" className="btn-primary px-8 py-3 flex-shrink-0">
              Start This Case
            </Link>
          </div>
        </div>
      </section>

      {/* ── Related Products ──────────────────────────────────────── */}
      {related.length > 0 && (
        <section className="py-stack-lg md:py-margin-desktop" aria-labelledby="related-heading">
          <div className="section-container">
            <h2 id="related-heading" className="text-headline-md font-semibold text-primary mb-stack-lg">
              Related Services
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {related.map((p) => {
                return (
                  <article key={p.slug} className="card overflow-hidden group hover:border-secondary transition-colors duration-300 flex flex-col">
                    <div className="relative aspect-[4/3] overflow-hidden bg-surface-container">
                      <img
                        src={p.imageUrl}
                        alt={p.imageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h3 className="text-headline-sm font-semibold text-primary mb-2">{p.name}</h3>
                      <p className="text-body-md text-on-surface-variant mb-4 flex-1">{p.shortDescription}</p>
                      <Link
                        to={`/products/${p.slug}`}
                        className="inline-flex items-center gap-1 font-label-md text-label-md text-secondary hover:gap-2 transition-all"
                      >
                        Learn More <ArrowRight size={14} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <CTASection
        primaryLabel="Submit a Case"
        primaryTo="/submit-case"
      />
    </div>
  );
}
