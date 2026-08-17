import { Phone, MessageCircle, Mail, MapPin, ArrowRight } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';
import SectionLabel from '../components/ui/SectionLabel';
import { SITE_CONFIG, WHATSAPP_URL } from '../data/config';
import { CheckCircle2 } from 'lucide-react';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Subject is required'),
  message: z.string().min(10, 'Please provide a message'),
});

type ContactForm = z.infer<typeof schema>;

export default function ContactPage() {
  useSEO({
    title: 'Contact Us',
    description: 'Get in touch with Dental Forge Technologies LLP. Contact our specialized team to streamline your digital workflow and discuss precision manufacturing requirements.',
  });

  const scrollRef = useScrollReveal();

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactForm>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: ContactForm) => {
    setSubmitting(true);
    try {
      const formData = new URLSearchParams();
      formData.append('form-name', 'contact');
      Object.entries(data).forEach(([key, value]) => {
        if (value) formData.append(key, value);
      });

      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: formData.toString(),
      });
      
      console.info('Contact form submitted via Netlify Forms');
      setSubmitted(true);
      reset();
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an issue submitting your message. Please try again or contact us on WhatsApp.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div ref={scrollRef}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="px-4 md:px-margin-desktop py-stack-lg max-w-container-max mx-auto" aria-label="Contact hero">
        <SectionLabel className="mb-3">Get In Touch</SectionLabel>
        <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-sm tracking-tight">
          Let's Discuss Your Next Case
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl">
          Connect with our specialized team to streamline your digital workflow and discuss precision
          manufacturing requirements for your upcoming cases.
        </p>
      </section>

      {/* ── Two Column Layout ──────────────────────────────────────── */}
      <section className="px-4 md:px-margin-desktop pb-stack-lg max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-12 gap-gutter" aria-label="Contact details and form">
        {/* Left: Contact info */}
        <div className="lg:col-span-5 space-y-stack-md">
          {/* Contact Channels */}
          <div className="card p-stack-md">
            <h2 className="text-headline-sm font-semibold text-primary mb-stack-sm border-b border-stroke-subtle pb-stack-sm">
              Contact Information
            </h2>
            <ul className="space-y-stack-sm mt-stack-sm">
              <li className="flex items-start gap-stack-sm">
                <Phone size={20} className="text-text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant">Phone</p>
                  <a
                    href={`tel:${SITE_CONFIG.phone}`}
                    className="text-body-md text-primary hover:text-secondary transition-colors"
                  >
                    {SITE_CONFIG.phone}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-stack-sm">
                <MessageCircle size={20} className="text-text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant">
                    WhatsApp (Direct Technician Line)
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-body-md text-primary hover:text-secondary transition-colors"
                  >
                    {SITE_CONFIG.whatsappDisplay}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-stack-sm">
                <Mail size={20} className="text-text-muted mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-label-md text-label-md text-on-surface-variant">Case Inquiries</p>
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="text-body-md text-primary hover:text-secondary transition-colors break-all"
                  >
                    {SITE_CONFIG.email}
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div className="card p-stack-md">
            <h2 className="text-headline-sm font-semibold text-primary mb-stack-sm border-b border-stroke-subtle pb-stack-sm">
              Operating Hours
            </h2>
            <ul className="space-y-unit mt-stack-sm">
              {SITE_CONFIG.hours.map((h) => (
                <li key={h.day} className="flex justify-between text-body-md text-on-surface-variant">
                  <span>{h.day}</span>
                  <span className={h.time === 'Closed' ? 'text-text-muted' : ''}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Address */}
          <div className="card p-stack-md">
            <h2 className="text-headline-sm font-semibold text-primary mb-stack-sm border-b border-stroke-subtle pb-stack-sm">
              Address
            </h2>
            <div className="flex items-start gap-stack-sm mt-stack-sm">
              <MapPin size={20} className="text-text-muted mt-0.5 flex-shrink-0" />
              <p className="text-body-md text-primary leading-relaxed">
                {SITE_CONFIG.address.line1}<br />
                {SITE_CONFIG.address.line2}
              </p>
            </div>

            {/* Location Map Placeholder */}
            {SITE_CONFIG.googleMapsUrl ? (
              <div className="mt-stack-lg rounded-xl overflow-hidden border border-stroke-subtle h-[200px]">
                <iframe
                  src={SITE_CONFIG.googleMapsUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Dental Forge Location"
                />
              </div>
            ) : (
              <div className="mt-stack-lg rounded-xl border border-stroke-subtle bg-surface flex items-center justify-center p-8 text-center text-on-surface-variant min-h-[160px]">
                <p className="text-sm">
                  Google Maps Location<br/>
                  <span className="text-text-muted">(Update googleMapsUrl in config.ts)</span>
                </p>
              </div>
            )}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-5 rounded-xl border border-stroke-subtle bg-surface-container-lowest hover:border-secondary transition-colors group"
          >
            <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
              <MessageCircle size={20} className="text-[#25D366]" />
            </div>
            <div className="flex-1">
              <p className="font-label-md text-label-md text-primary">WhatsApp Us Directly</p>
              <p className="text-body-md text-on-surface-variant text-sm">
                Fastest response for case inquiries
              </p>
            </div>
            <ArrowRight size={16} className="text-on-surface-variant group-hover:text-secondary transition-colors" />
          </a>
        </div>

        {/* Right: Contact Form */}
        <div className="lg:col-span-7">
          <div className="card p-8">
            <h2 className="text-headline-sm font-semibold text-primary mb-stack-md border-b border-stroke-subtle pb-stack-sm">
              Send Us a Message
            </h2>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle2 size={40} className="text-secondary mx-auto mb-4" />
                <h3 className="text-headline-sm font-semibold text-primary mb-2">Message Sent</h3>
                <p className="text-body-md text-on-surface-variant mb-6">
                  We'll get back to you within 24 business hours.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn-secondary px-6 py-2">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-stack-md">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  <div>
                    <label htmlFor="contact-name" className="form-label">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      placeholder="Dr. Anjali Sharma"
                      {...register('name')}
                      className={`form-input ${errors.name ? 'border-error' : ''}`}
                      aria-invalid={!!errors.name}
                    />
                    {errors.name && <p className="text-error text-sm mt-1" role="alert">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="form-label">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      placeholder="dr@clinic.com"
                      {...register('email')}
                      className={`form-input ${errors.email ? 'border-error' : ''}`}
                      aria-invalid={!!errors.email}
                    />
                    {errors.email && <p className="text-error text-sm mt-1" role="alert">{errors.email.message}</p>}
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-phone" className="form-label">Phone Number</label>
                  <input
                    id="contact-phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    {...register('phone')}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="form-label">Subject *</label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Case inquiry / Technical question"
                    {...register('subject')}
                    className={`form-input ${errors.subject ? 'border-error' : ''}`}
                    aria-invalid={!!errors.subject}
                  />
                  {errors.subject && <p className="text-error text-sm mt-1" role="alert">{errors.subject.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact-message" className="form-label">Message *</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    placeholder="Tell us about your requirements, case details, or questions..."
                    {...register('message')}
                    className={`form-input resize-none ${errors.message ? 'border-error' : ''}`}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && <p className="text-error text-sm mt-1" role="alert">{errors.message.message}</p>}
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary px-8 py-3 inline-flex items-center gap-2 disabled:opacity-60"
                  >
                    {submitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Message <ArrowRight size={16} /></>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
