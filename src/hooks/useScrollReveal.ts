import { useEffect, useRef } from 'react';

/**
 * Lightweight scroll-reveal using Intersection Observer.
 * Adds `.is-visible` to elements with `.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`
 * when they enter the viewport. No external dependencies.
 */
export function useScrollReveal() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    if (!container) return;

    const elements = container.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale');
    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target); // Only animate once
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
