export interface PaymentPlan {
  downPayment: string;
  monthlyInstallment: string;
  durationMonths: number;
}

export interface Apartment {
  id: string;
  name: string;
  slug: string;
  tier: 'Silver' | 'Emerald' | 'Royal' | 'Skyline' | 'Elite' | 'Platinum';
  bedrooms: number;
  totalPrice: string;
  paymentPlan: PaymentPlan;
  description: string;
  features: string[];
  imageUrl: string;
  threeModelUrl?: string; // For 3D preview
  mapUrl: string; // Embed Google Maps URL
  locationLabel: string;
}
