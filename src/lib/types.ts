export type Category =
  | "jerseys"
  | "steel-cards"
  | "fridge-magnets"
  | "posters"
  | "collectibles"
  | "signed-merch";

export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  category: Category;
  player?: string;
  playerSlug?: string;
  team?: string;
  teamSlug?: string;
  vendorId?: string;
  price: number;
  mrp: number;
  rating: number;
  reviewCount: number;
  soldThisWeek: number;
  inStock: boolean;
  stockCount: number;
  sizes?: string[];
  colors?: { name: string; hex: string }[];
  images: string[];
  tags: string[];
  trending?: boolean;
  featured?: boolean;
  flashSale?: boolean;
  flashDiscount?: number;
  newArrival?: boolean;
  signed?: boolean;
}

export interface Player {
  slug: string;
  name: string;
  team: string;
  role: string;
  image: string;
  stats: { label: string; value: string }[];
  quote: string;
  bio: string;
}

export interface Team {
  slug: string;
  name: string;
  shortName: string;
  colors: { primary: string; secondary: string };
  logo: string;
  description: string;
}

export interface Vendor {
  id: string;
  slug: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  rating: number;
  reviewCount: number;
  memberSince: string;
  responseTime: string;
  social: { instagram?: string; facebook?: string; twitter?: string };
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  readTime: number;
  date: string;
  image: string;
  content: string[];
}

export interface Coupon {
  code: string;
  discount: number;
  type: "percentage" | "fixed" | "shipping";
  minOrder?: number;
  active: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
  size?: string;
  color?: string;
}

export interface Address {
  id: string;
  fullName: string;
  phone: string;
  pinCode: string;
  addressLine1: string;
  addressLine2?: string;
  landmark?: string;
  city: string;
  state: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  createdAt: string;
  estimatedDelivery: string;
  address: Address;
  paymentMethod: string;
  timeline: { status: OrderStatus; date: string; completed: boolean }[];
}

export type OrderStatus =
  | "Order Received"
  | "Payment Confirmed"
  | "Packing Started"
  | "Ready to Dispatch"
  | "Dispatched"
  | "In Transit"
  | "Out for Delivery"
  | "Delivered";

export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  avatar?: string;
  favoriteTeam?: string;
  favoritePlayer?: string;
  role: "user" | "admin" | "vendor";
  points?: number;
}
