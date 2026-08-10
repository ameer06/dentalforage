import { useState } from 'react';
import ProductCard from '../components/ui/ProductCard';
import CTASection from '../components/sections/CTASection';
import SectionLabel from '../components/ui/SectionLabel';
import { PRODUCTS, PRODUCT_CATEGORIES } from '../data/products';
import { useSEO } from '../hooks/useSEO';

export default function ProductsPage() {
  useSEO({
    title: 'Products & Services',
    description: 'Explore our comprehensive range of digital dental laboratory services including Zirconia crowns, implants, clear aligners, and precision removables.',
  });

  const [activeCategory, setActiveCategory] = useState<string>('All');
  const categories = ['All', ...PRODUCT_CATEGORIES];

  const filtered =
    activeCategory === 'All'
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative border-b border-stroke-subtle py-16 md:py-24 overflow-hidden" aria-label="Products hero">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="section-container relative z-10 text-center">
          <SectionLabel className="mb-3">Lab Services</SectionLabel>
          <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-4 tracking-tight">
            Products & Services
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Complete digital dental laboratory services — from single crowns to full-arch
            reconstructions, clear aligners, and digital smile designs.
          </p>
        </div>
      </section>

      {/* ── Filter tabs ───────────────────────────────────────────── */}
      <section className="sticky top-20 z-30 bg-surface-container-lowest border-b border-stroke-subtle" aria-label="Filter by category">
        <div className="section-container">
          <div className="flex gap-2 py-3 overflow-x-auto scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded font-label-md text-label-md transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
                aria-pressed={activeCategory === cat}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Products Grid ─────────────────────────────────────────── */}
      <section className="py-stack-lg md:py-margin-desktop" aria-label="Products list">
        <div className="section-container">
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {filtered.map((product) => (
                <ProductCard key={product.slug} product={product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-on-surface-variant py-20">No products found.</p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
