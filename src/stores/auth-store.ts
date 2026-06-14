"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { User, Address, Order } from "@/lib/types";

const demoUser: User = {
  id: "u1",
  name: "Arjun Sharma",
  email: "fan@cricketverse.in",
  phone: "9876543210",
  favoriteTeam: "csk",
  favoritePlayer: "ms-dhoni",
  role: "user",
  points: 1250,
};

const demoOrders: Order[] = [
  {
    id: "CV2024001234",
    items: [],
    total: 3248,
    status: "Ready to Dispatch",
    createdAt: "2024-06-10T14:35:00",
    estimatedDelivery: "2024-06-15",
    address: {
      id: "a1",
      fullName: "Arjun Sharma",
      phone: "9876543210",
      pinCode: "400001",
      addressLine1: "42 Marine Drive",
      city: "Mumbai",
      state: "Maharashtra",
    },
    paymentMethod: "UPI",
    timeline: [
      { status: "Order Received", date: "June 10, 2:35 PM", completed: true },
      { status: "Payment Confirmed", date: "June 10, 2:36 PM", completed: true },
      { status: "Packing Started", date: "June 11, 10:20 AM", completed: true },
      { status: "Ready to Dispatch", date: "June 12, 9:00 AM", completed: true },
      { status: "Dispatched", date: "", completed: false },
      { status: "In Transit", date: "", completed: false },
      { status: "Out for Delivery", date: "", completed: false },
      { status: "Delivered", date: "", completed: false },
    ],
  },
];

interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  addresses: Address[];
  orders: Order[];
  login: (email: string, password: string) => boolean;
  logout: () => void;
  signup: (name: string, email: string, password: string) => boolean;
  updateProfile: (data: Partial<User>) => void;
  addAddress: (address: Address) => void;
  addOrder: (order: Order) => void;
}

export const useAuthStore = create<AuthStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      addresses: [
        {
          id: "a1",
          fullName: "Arjun Sharma",
          phone: "9876543210",
          pinCode: "400001",
          addressLine1: "42 Marine Drive",
          addressLine2: "Apartment 7B",
          city: "Mumbai",
          state: "Maharashtra",
          isDefault: true,
        },
      ],
      orders: demoOrders,

      login: (email, password) => {
        const credentials: Record<string, { password: string; user: User }> = {
          "fan@cricketverse.in": { password: "Cricket@123", user: demoUser },
          "admin@cricketverse.in": {
            password: "AdminCV@2024",
            user: { ...demoUser, id: "admin1", name: "Admin", email: "admin@cricketverse.in", role: "admin" },
          },
          "seller@cricketverse.in": {
            password: "Seller@123",
            user: { ...demoUser, id: "v-user1", name: "Seller", email: "seller@cricketverse.in", role: "vendor" },
          },
        };
        const cred = credentials[email.toLowerCase()];
        if (cred && cred.password === password) {
          set({ user: cred.user, isAuthenticated: true });
          return true;
        }
        return false;
      },

      logout: () => set({ user: null, isAuthenticated: false }),

      signup: (name, email) => {
        set({
          user: { id: `u${Date.now()}`, name, email, role: "user", points: 100 },
          isAuthenticated: true,
        });
        return true;
      },

      updateProfile: (data) => {
        const user = get().user;
        if (user) set({ user: { ...user, ...data } });
      },

      addAddress: (address) =>
        set((state) => ({ addresses: [...state.addresses, address] })),

      addOrder: (order) =>
        set((state) => ({ orders: [order, ...state.orders] })),
    }),
    { name: "cricketverse-auth" }
  )
);
