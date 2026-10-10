export interface Product {
  id: string;
  name: string;
  collectionId: 'pastel-flora' | 'royal-heritage' | 'contemporary-georgette' | 'curated-kurti';
  collectionTitle: string;
  price: number;
  originalPrice: number;
  fabric: string;
  description: string;
  longDescription: string;
  image: string;
  additionalImages?: string[];
  dimensions: {
    kurta: string;
    bottom: string;
    dupatta: string;
  };
  work: string;
  occasion: string;
  colorName: string;
  colorHex: string;
  inStock: boolean;
  isBestseller?: boolean;
  isNew?: boolean;
  rating: number;
  reviewsCount: number;
  care: string;
  sku: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
  stitchingPreference?: string;
  note?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  tag: string;
  review: string;
  rating: number;
  date: string;
  verified: boolean;
  itemBought: string;
}

export interface StoreDetails {
  name: string;
  tagline: string;
  addressLine1: string;
  addressLine2: string;
  city: string;
  pin: string;
  phone: string;
  phoneRaw: string;
  email: string;
  supportEmail: string;
  hoursMonSat: string;
  hoursSun: string;
  domain: string;
  whatsappNumber: string;
}
