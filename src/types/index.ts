// Business types
export interface Service {
  id: string;
  name: string;
  description: string;
  price: number;
  features: string[];
  icon: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  video?: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
  service?: string;
}

export interface QuoteForm {
  address: string;
  lawnSize: number;
  frequency: 'weekly' | 'bi-weekly' | 'monthly';
  services: string[];
  contact: ContactForm;
}