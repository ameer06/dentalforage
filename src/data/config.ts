// Central configuration — edit these values to update across the site

export const SITE_CONFIG = {
  companyName: 'Dental Forge Technologies LLP',
  companyFullName: 'Dental Forge Technologies LLP',
  tagline: 'Precision Digital Dental Laboratory',
  description:
    'A digital-first CAD/CAM dental laboratory providing precision milled restorations, clear aligners, and digital workflows for dentists, clinics, and hospitals across India.',

  // Contact
  phone: '8724907297',
  phoneDisplay: '+91 87249 07297',
  whatsapp: '918724907297', // no spaces/dashes, used in wa.me link
  whatsappDisplay: '+91 87249 07297',
  email: 'info@dentalforgetech.com',
  address: {
    line1: '38 B, Elango Plaza, Radhapuram Road',
    line2: 'Vallioor, 627117',
    full: '38 B, Elango Plaza, Radhapuram Road, Vallioor, 627117',
  },

  // Google Maps — insert official URL when available
  googleMapsUrl: '',

  // Business hours (IST)
  hours: [
    { day: 'Monday – Friday', time: '09:00 – 19:00 IST' },
    { day: 'Saturday', time: '10:00 – 15:00 IST' },
    { day: 'Sunday', time: 'Closed' },
  ],

  // Social / legal
  established: '2024',
  copyright: '© 2024 Dental Forge Technologies LLP. Precision Manufacturing for Modern Dentistry.',
};

export const WHATSAPP_URL = `https://wa.me/${SITE_CONFIG.whatsapp}?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20dental%20lab%20services.`;
