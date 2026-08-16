import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState, useRef } from 'react';
import { ArrowRight, Upload, CheckCircle2, FileText } from 'lucide-react';
import SectionLabel from '../components/ui/SectionLabel';
import { SITE_CONFIG } from '../data/config';
import { useSEO } from '../hooks/useSEO';
import { useScrollReveal } from '../hooks/useScrollReveal';

const CASE_TYPES = [
  'Zirconia Crown',
  'E-Max Crown',
  'PFM Crown',
  'Dental Bridge',
  'Veneers',
  'Clear Aligners',
  'Implant Restoration',
  'Denture',
  'Surgical Guide',
  '3D Printed Model',
  'Digital Smile Design',
  'Other',
];

const schema = z.object({
  dentistName: z.string().min(2, 'Dentist name is required'),
  clinicName: z.string().min(2, 'Clinic / Hospital name is required'),
  phone: z.string().min(10, 'Valid phone number required'),
  email: z.string().email('Valid email required'),
  caseType: z.string().min(1, 'Please select a case type'),
  caseReference: z.string().optional(),
  prescription: z.string().optional(),
  instructions: z.string().optional(),
});

type CaseFormData = z.infer<typeof schema>;

export default function SubmitCasePage() {
  useSEO({
    title: 'Submit a Case',
    description: 'Submit your dental case digitally to Dental Forge Technologies. Upload STL, PLY, OBJ, or other digital files and receive precision CAD/CAM restorations.',
  });

  const scrollRef = useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CaseFormData>({
    resolver: zodResolver(schema) as any,
  });

  const onSubmit = async (data: CaseFormData) => {
    setSubmitting(true);
    // TODO: Replace with real API endpoint when backend is ready
    await new Promise((r) => setTimeout(r, 1500));
    console.info('Case submission:', { ...data, files: files.map(f => f.name) });
    setSubmitting(false);
    setSubmitted(true);
  };

  const handleFiles = (fileList: FileList | null) => {
    if (!fileList) return;
    setFiles((prev) => [...prev, ...Array.from(fileList)]);
  };

  const removeFile = (index: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  if (submitted) {
    return (
      <div ref={scrollRef} className="min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md reveal">
          <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={32} className="text-secondary" />
          </div>
          <h1 className="text-headline-md font-semibold text-primary mb-3">Case Submitted</h1>
          <p className="text-body-lg text-on-surface-variant mb-6">
            Thank you. Our team will review your case files and contact you within 24 business hours 
            with a design assessment.
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
            <button onClick={() => setSubmitted(false)} className="btn-secondary px-6 py-3">
              Submit Another Case
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div ref={scrollRef}>
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative bg-surface-container-lowest border-b border-stroke-subtle overflow-hidden" aria-label="Submit a case">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
        <div className="relative section-container py-16 md:py-24 flex flex-col items-center text-center">
          <SectionLabel className="mb-3 reveal">Case Submission</SectionLabel>
          <h1 className="text-display-lg-mobile md:text-display-lg font-bold text-primary mb-stack-sm tracking-tight reveal stagger-1">
            Submit a Case
          </h1>
          <p className="text-body-lg text-on-surface-variant max-w-2xl reveal stagger-2">
            Upload your digital scan files and case details. Our team will review your submission 
            and begin the design process.
          </p>
        </div>
      </section>

      {/* ── Form ──────────────────────────────────────────────────── */}
      <section className="py-stack-lg" aria-label="Case submission form">
        <div className="section-container">
          <form
            onSubmit={handleSubmit(onSubmit as any)}
            noValidate
            className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start"
          >
            {/* ── Left: Dentist Details ──────────────────────────── */}
            <div className="lg:col-span-5 reveal">
              <div className="bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8">
                <div className="flex items-center gap-2 mb-stack-md border-b border-stroke-subtle pb-stack-sm">
                  <FileText size={20} className="text-secondary" />
                  <h2 className="text-headline-sm font-semibold text-primary">Practitioner Details</h2>
                </div>

                <div className="space-y-stack-md">
                  <div>
                    <label htmlFor="dentistName" className="form-label">Dentist Name *</label>
                    <input id="dentistName" type="text" placeholder="Dr. Name" {...register('dentistName')} className={`form-input ${errors.dentistName ? 'border-error' : ''}`} aria-invalid={!!errors.dentistName} />
                    {errors.dentistName && <p className="text-error text-sm mt-1" role="alert">{errors.dentistName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="clinicName" className="form-label">Clinic / Hospital *</label>
                    <input id="clinicName" type="text" placeholder="Clinic or Hospital name" {...register('clinicName')} className={`form-input ${errors.clinicName ? 'border-error' : ''}`} aria-invalid={!!errors.clinicName} />
                    {errors.clinicName && <p className="text-error text-sm mt-1" role="alert">{errors.clinicName.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="form-label">Phone *</label>
                    <input id="phone" type="tel" placeholder="+91 98765 43210" {...register('phone')} className={`form-input ${errors.phone ? 'border-error' : ''}`} aria-invalid={!!errors.phone} />
                    {errors.phone && <p className="text-error text-sm mt-1" role="alert">{errors.phone.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input id="email" type="email" placeholder="dr@clinic.com" {...register('email')} className={`form-input ${errors.email ? 'border-error' : ''}`} aria-invalid={!!errors.email} />
                    {errors.email && <p className="text-error text-sm mt-1" role="alert">{errors.email.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="caseType" className="form-label">Case Type *</label>
                    <select id="caseType" {...register('caseType')} className={`form-input ${errors.caseType ? 'border-error' : ''}`} aria-invalid={!!errors.caseType}>
                      <option value="">Select case type...</option>
                      {CASE_TYPES.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                    {errors.caseType && <p className="text-error text-sm mt-1" role="alert">{errors.caseType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="caseReference" className="form-label">Case Reference / Patient ID</label>
                    <input id="caseReference" type="text" placeholder="Optional reference number" {...register('caseReference')} className="form-input" />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Right: Files + Instructions ─────────────────────── */}
            <div className="lg:col-span-7 space-y-gutter reveal stagger-2">
              {/* File Upload */}
              <div className="bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8">
                <div className="flex items-center gap-2 mb-stack-md border-b border-stroke-subtle pb-stack-sm">
                  <Upload size={20} className="text-secondary" />
                  <h2 className="text-headline-sm font-semibold text-primary">Digital Files</h2>
                </div>

                <div
                  className={`border-2 border-dashed rounded-xl p-12 text-center cursor-pointer group transition-colors duration-200 ${
                    dragOver ? 'border-secondary bg-secondary/5' : 'border-stroke-subtle hover:border-secondary-fixed bg-surface'
                  }`}
                  onClick={() => fileInputRef.current?.click()}
                  onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => { e.preventDefault(); setDragOver(false); handleFiles(e.dataTransfer.files); }}
                  role="button"
                  tabIndex={0}
                  aria-label="Upload digital scan files"
                  onKeyDown={(e) => e.key === 'Enter' && fileInputRef.current?.click()}
                >
                  <input
                    ref={fileInputRef}
                    type="file"
                    multiple
                    accept=".stl,.ply,.obj,.zip,.pdf,.jpg,.jpeg,.png"
                    className="hidden"
                    onChange={(e) => handleFiles(e.target.files)}
                    aria-hidden="true"
                  />
                  <Upload size={40} className={`mx-auto mb-3 transition-colors ${dragOver ? 'text-secondary' : 'text-outline-variant group-hover:text-secondary-fixed'}`} />
                  <p className="font-label-md text-label-md text-primary mb-1">
                    Drag and drop your digital scan files here
                  </p>
                  <p className="text-body-md text-on-surface-variant text-sm">
                    or click to browse — STL, PLY, OBJ, ZIP, PDF, Images
                  </p>
                </div>

                {files.length > 0 && (
                  <ul className="mt-4 space-y-2">
                    {files.map((file, i) => (
                      <li key={i} className="flex items-center justify-between text-sm card px-4 py-2">
                        <span className="text-on-background truncate">{file.name}</span>
                        <button
                          type="button"
                          onClick={() => removeFile(i)}
                          className="text-text-muted hover:text-error ml-4 flex-shrink-0 text-lg"
                          aria-label={`Remove ${file.name}`}
                        >
                          ×
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </div>

              {/* Prescription & Instructions */}
              <div className="bg-surface-container-lowest border border-stroke-subtle rounded-xl p-8">
                <div className="flex items-center gap-2 mb-stack-md border-b border-stroke-subtle pb-stack-sm">
                  <FileText size={20} className="text-secondary" />
                  <h2 className="text-headline-sm font-semibold text-primary">Prescription & Instructions</h2>
                </div>

                <div className="space-y-stack-md">
                  <div>
                    <label htmlFor="prescription" className="form-label">Prescription / Shade</label>
                    <textarea
                      id="prescription"
                      rows={3}
                      placeholder="Shade mapping, tooth numbers, material preference..."
                      {...register('prescription')}
                      className="form-input resize-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="instructions" className="form-label">Additional Instructions</label>
                    <textarea
                      id="instructions"
                      rows={3}
                      placeholder="Any specific design requirements, occlusal notes, implant system details..."
                      {...register('instructions')}
                      className="form-input resize-none"
                    />
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={submitting}
                  className="btn-primary px-10 py-4 inline-flex items-center gap-2 disabled:opacity-60"
                >
                  {submitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-on-primary/30 border-t-on-primary rounded-full animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>Submit Case <ArrowRight size={18} /></>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
