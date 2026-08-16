import { Link } from 'react-router-dom';
import { SITE_CONFIG, WHATSAPP_URL } from '../../data/config';

const serviceLinks = [
  { label: 'Zirconia Crowns', href: '/products/zirconia-crowns' },
  { label: 'E-Max Crowns', href: '/products/emax-crowns' },
  { label: 'Clear Aligners', href: '/products/clear-aligners' },
  { label: 'Implant Restorations', href: '/products/implant-restorations' },
  { label: 'Digital Smile Design', href: '/products/digital-smile-design' },
  { label: 'CAD/CAM Milling', href: '/products/cadcam-milling' },
];

const companyLinks = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Why Dental Forge', href: '/why-us' },
  { label: 'For Dentists', href: '/for-dentists' },
  { label: 'Contact Us', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
];

export default function Footer() {
  return (
    <footer
      className="bg-surface-charcoal text-on-primary pt-stack-lg pb-8"
      aria-label="Site footer"
    >
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-stack-lg">
          {/* Brand column */}
          <div className="md:col-span-4 space-y-stack-sm">
            <Link
              to="/"
              className="block font-sans font-bold text-[22px] text-on-primary hover:text-secondary-fixed transition-colors"
            >
              {SITE_CONFIG.companyName}
            </Link>
            <p className="font-body-md text-surface-dim max-w-sm leading-relaxed">
              A digital-first CAD/CAM dental laboratory providing precision milled restorations
              and digital workflows for dentists, clinics, and hospitals.
            </p>
            {/* Contact quick links */}
            <div className="flex flex-col gap-1 pt-2">
              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="font-body-md text-surface-dim hover:text-secondary-fixed transition-colors"
              >
                {SITE_CONFIG.phoneDisplay}
              </a>
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="font-body-md text-surface-dim hover:text-secondary-fixed transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body-md text-secondary-fixed hover:text-secondary-fixed/80 transition-colors"
              >
                WhatsApp: {SITE_CONFIG.whatsappDisplay}
              </a>
              <p className="font-body-md text-surface-dim mt-1 text-sm leading-relaxed">
                {SITE_CONFIG.address.line1}<br />
                {SITE_CONFIG.address.line2}
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-label-caps tracking-[0.08em] uppercase text-surface-dim mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body-md text-surface-dim hover:text-on-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="md:col-span-2">
            <h3 className="font-mono text-label-caps tracking-[0.08em] uppercase text-surface-dim mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body-md text-surface-dim hover:text-on-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Actions */}
          <div className="md:col-span-3">
            <h3 className="font-mono text-label-caps tracking-[0.08em] uppercase text-surface-dim mb-4">
              Get Started
            </h3>
            <div className="flex flex-col gap-3">
              <Link
                to="/submit-case"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-secondary text-on-secondary font-label-md text-label-md hover:bg-secondary/90 transition-colors"
              >
                Submit a Case
              </Link>
              <Link
                to="/quote"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-surface-tint text-surface-dim font-label-md text-label-md hover:border-secondary-fixed hover:text-secondary-fixed transition-colors"
              >
                Request a Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-surface-tint pt-stack-sm flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="font-body-md text-surface-dim text-sm text-center sm:text-left">
            {SITE_CONFIG.copyright}
          </p>
          <p className="font-mono text-label-caps text-surface-tint tracking-[0.08em] text-center">
            DIGITAL LAB // CAD/CAM // INDIA
          </p>
        </div>
      </div>
    </footer>
  );
}
