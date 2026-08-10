// Reusable TypeScript types for the Dental Forge website

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}

export interface FeatureCardData {
  icon: string; // Lucide icon name
  title: string;
  description: string;
}

export interface QuoteFormData {
  practitionerName: string;
  clinicName: string;
  email: string;
  phone: string;
  whatsapp?: string;
  city: string;
  state: string;
  productType: string;
  units?: number;
  turnaround: 'standard' | 'expedited';
  caseDetails?: string;
  files?: FileList;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}
