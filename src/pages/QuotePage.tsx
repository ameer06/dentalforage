import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useRef } from 'react';
import { ArrowRight, Upload, CheckCircle2, Cog } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import { PRODUCT_OPTIONS } from '../data/products';
import { SITE_CONFIG } from '../data/config';

const schema = z.object({
  practitionerName: z.string().min(2, 'Name is required'),
  clinicName: z.string().min(2, 'Clinic name is required'),
  email: z.string().email('Valid email required'),
  phone: z.string().min(10, 'Valid phone number required'),
  whatsapp: z.string().optional(),
  city: z.string().min(2, 'City is required'),
  state: z.string().min(2, 'State is required'),
  productType: z.string().min(1, 'Please select a product'),
  units: z.coerce.number().min(1).max(32).optional(),
  turnaround: z.enum(['standard', 'expedited']),
  caseDetails: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function QuotePage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema) as any,
    defaultValues: { turnaround: 'standard' },
  });

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    // Mock submission — replace with real API call
    await new Promise((r) => setTimeout(r, 1500));
    console.info('Quote request submitted:', data, files);
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  };

  if (submitted) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-secondary" />
          </div>
          <h1 className="text-headline-md font-semibold text-primary mb-3">Request Received</h1>
          <p className="text-body-lg text-on-surface-variant mb-6">
            Thank you. Our team will review your case details and get back to you within 24 business
            hours. You can also reach us directly on WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary px-6 py-3"
            >
              WhatsApp Us
            </a>
            <button
              onClick={() => setSubmitted(false)}
              className="btn-secondary px-6 py-3"
            >
              Submit Another Case
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-surface-container-lowest border-b border-stroke-subtle overflow-hidden" aria-label="Request a quote">
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              'linear-gradient(to right, #E9ECEF 1px, transparent 1px), linear-gradient(to bottom, #E9ECEF 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="relative section-container py-16 md:py-24 flex flex-col items-center text-center">
          <SectionLabel className="mb-3">Case Submission</SectionLabel>
          <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-sm tracking-tight">
            Request a Quote
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl">
            Submit your case details below for a comprehensive technical assessment and precise
            manufacturing quotation. Our digital workflow ensures millimeter accuracy and rapid
            turnaround.
          </p>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────── */}
      <section className="py-stack-lg" aria-label="Quote form">
        <div className="section-container">
          <form
            onSubmit={handleSubmit(onSubmit as any)}
            noValidate
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start"
          >
            {/* ── Left: Clinic Details ──────────────────────────── */}
            <div className="lg:col-span-4 bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8">
              <div className="flex items-center gap-2 mb-stack-md border-b border-stroke-subtle pb-stack-sm">
                <Cog size={20} className="text-secondary" />
                <h2 className="text-headline-sm font-semibold text-primary">Clinic Details</h2>
              </div>

              <div className="space-y-stack-md">
                {/* Practitioner Name */}
                <div>
                  <label htmlFor="practitionerName" className="form-label">
                    Practitioner Name *
                  </label>
                  <input
                    id="practitionerName"
                    type="text"
                    placeholder="Dr. Anjali Sharma"
                    {...register('practitionerName')}
                    className={`form-input ${errors.practitionerName ? 'border-error focus:border-error focus:ring-error' : ''}`}
                    aria-describedby={errors.practitionerName ? 'name-error' : undefined}
                    aria-invalid={!!errors.practitionerName}
                  />
                  {errors.practitionerName && (
                    <p id="name-error" className="text-error text-sm mt-1" role="alert">
                      {errors.practitionerName.message}
                    </p>
                  )}
                </div>

                {/* Clinic Name */}
                <div>
                  <label htmlFor="clinicName" className="form-label">
                    Clinic / Practice Name *
                  </label>
                  <input
                    id="clinicName"
                    type="text"
                    placeholder="Advanced Dental Care"
                    {...register('clinicName')}
                    className={`form-input ${errors.clinicName ? 'border-error' : ''}`}
                    aria-invalid={!!errors.clinicName}
                  />
                  {errors.clinicName && (
                    <p className="text-error text-sm mt-1" role="alert">{errors.clinicName.message}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="form-label">
                    Email Address *
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="dr@clinic.com"
                    {...register('email')}
                    className={`form-input ${errors.email ? 'border-error' : ''}`}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-error text-sm mt-1" role="alert">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone + WhatsApp */}
                <div className="grid grid-cols-2 gap-unit">
                  <div>
                    <label htmlFor="phone" className="form-label">Phone *</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      {...register('phone')}
                      className={`form-input ${errors.phone ? 'border-error' : ''}`}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="text-error text-sm mt-1" role="alert">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="form-label">WhatsApp</label>
                    <input
                      id="whatsapp"
                      type="tel"
                      placeholder="Optional"
                      {...register('whatsapp')}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* City + State */}
                <div className="grid grid-cols-2 gap-unit">
                  <div>
                    <label htmlFor="city" className="form-label">City *</label>
                    <input
                      id="city"
                      type="text"
                      placeholder="Mumbai"
                      {...register('city')}
                      className={`form-input ${errors.city ? 'border-error' : ''}`}
                      aria-invalid={!!errors.city}
                    />
                    {errors.city && (
                      <p className="text-error text-sm mt-1" role="alert">{errors.city.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="state" className="form-label">State *</label>
                    <input
                      id="state"
                      type="text"
                      placeholder="Maharashtra"
                      {...register('state')}
                      className={`form-input ${errors.state ? 'border-error' : ''}`}
                      aria-invalid={!!errors.state}
                    />
                    {errors.state && (
                      <p className="text-error text-sm mt-1" role="alert">{errors.state.message}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Case Info + Upload ─────────────────────── */}
            <div className="lg:col-span-8 space-y-gutter">
              {/* Case Specifications */}
              <div className="bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8">
                <div className="flex items-center gap-2 mb-stack-md border-b border-stroke-subtle pb-stack-sm">
                  <Cog size={20} className="text-secondary" />
                  <h2 className="text-headline-sm font-semibold text-primary">Case Specifications</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-md">
                  {/* Product Type */}
                  <div>
                    <label htmlFor="productType" className="form-label">Product Type *</label>
                    <select
                      id="productType"
                      {...register('productType')}
                      className={`form-input ${errors.productType ? 'border-error' : ''}`}
                      aria-invalid={!!errors.productType}
                    >
                      <option value="">Select a product...</option>
                      {PRODUCT_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>{opt}</option>
                      ))}
                    </select>
                    {errors.productType && (
                      <p className="text-error text-sm mt-1" role="alert">{errors.productType.message}</p>
                    )}
                  </div>

                  {/* Number of Units */}
                  <div>
                    <label htmlFor="units" className="form-label">Number of Units</label>
                    <input
                      id="units"
                      type="number"
                      min={1}
                      max={32}
                      placeholder="e.g. 3"
                      {...register('units')}
                      className="form-input"
                    />
                  </div>

                  {/* Turnaround */}
                  <div className="md:col-span-2">
                    <label className="form-label">Turnaround Requirement</label>
                    <div className="flex flex-wrap gap-stack-md mt-unit">
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="standard"
                          {...register('turnaround')}
                          className="accent-secondary w-4 h-4"
                        />
                        <span className="text-body-md text-on-background">Standard (3–5 Business Days)</span>
                      </label>
                      <label className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          value="expedited"
                          {...register('turnaround')}
                          className="accent-secondary w-4 h-4"
                        />
                        <span className="text-body-md text-on-background">Expedited (24–48 Hours)</span>
                      </label>
                    </div>
                  </div>

                  {/* Case Details */}
                  <div className="md:col-span-2">
                    <label htmlFor="caseDetails" className="form-label">
                      Additional Case Details / Shade
                    </label>
                    <textarea
                      id="caseDetails"
                      rows={4}
                      placeholder="Provide specific instructions, shade mapping, implant system details, or any other relevant information..."
                      {...register('caseDetails')}
                      className="form-input resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* File Upload */}
              <div className="bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8">
                <div className="flex items-center gap-2 mb-stack-md border-b border-stroke-subtle pb-stack-sm">
                  <Upload size={20} className="text-secondary" />
                  <h2 className="text-headline-sm font-semibold text-primary">Digital Scans & Files</h2>
                </div>

                <div
                  className={`border-2 border-dashed rounded p-12 text-center cursor-pointer group transition-colors duration-200 ${
                    dragOver
                      ? 'border-secondary bg-secondary/5'
                      : 'border-stroke-subtle hover:border-secondary-fixed bg-surface'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => {
                    e.preventDefault();
                    setDragOver(false);
                    handleFiles(e.dataTransfer.files);
                  }}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload scan files"
                  onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".stl,.ply,.dcm,.obj,.zip"
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                    aria-hidden="true"
                  />
                  <Upload
                    size={48}
                    className={`mx-auto mb-unit transition-colors ${
                      dragOver ? 'text-secondary' : 'text-outline-variant group-hover:text-secondary-fixed'
                    }`}
                  />
                  <p className="font-label-md text-label-md text-primary mb-1">
                    Drag and drop STL, PLY, DCM, or OBJ files here
                  </p>
                  <p className="text-body-md text-on-surface-variant text-sm">
                    or click to browse from your computer
                  </p>
                  <p className="font-mono text-label-caps tracking-[0.08em] uppercase text-text-muted mt-stack-md text-[10px]">
                    Max file size: 250MB per file
                  </p>
                </div>

                {/* File list */}
                {files.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {files.map((file, i) => (
                      <li key={i} className="flex items-center justify-between text-sm card px-4 py-2">
                        <span className="text-on-background truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => setFiles((prev) => prev.filter((_, idx) => idx !== i))}
                          className="text-text-muted hover:text-error ml-4 flex-shrink-0"
                          aria-label={`Remove ${file.name}`}
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary px-margin-desktop py-stack-sm inline-flex items-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Request <ArrowRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
