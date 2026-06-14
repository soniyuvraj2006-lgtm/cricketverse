import type { Vendor } from "@/lib/types";

export const vendors: Vendor[] = [
  {
    id: "v1",
    slug: "cricket-kings-store",
    name: "Cricket Kings Store",
    description: "Premium cricket merchandise since 2010. Authentic jerseys and collectibles.",
    logo: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=200&h=200&fit=crop",
    banner: "https://images.unsplash.com/photo-1531416510404-8fa5b1065462?w=1200&h=400&fit=crop",
    rating: 4.8,
    reviewCount: 1240,
    memberSince: "2019",
    responseTime: "< 2 hours",
    social: { instagram: "@cricketkings", facebook: "CricketKingsStore" },
  },
  {
    id: "v2",
    slug: "msd-fanatics",
    name: "MSD Fanatics",
    description: "Dedicated to MS Dhoni and CSK fans. Exclusive Thala merchandise.",
    logo: "https://images.unsplash.com/photo-1540747913346-19a32ad3b0f5?w=200&h=200&fit=crop",
    banner: "https://images.unsplash.com/photo-1593764600622-4a706f0a2d2f?w=1200&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 890,
    memberSince: "2020",
    responseTime: "< 1 hour",
    social: { instagram: "@msdfanatics", twitter: "@MSDFanatics" },
  },
  {
    id: "v3",
    slug: "hitman-merch",
    name: "Hitman Merch",
    description: "Rohit Sharma and Mumbai Indians official partner store.",
    logo: "https://images.unsplash.com/photo-1593341646782-e0b4954a845a?w=200&h=200&fit=crop",
    banner: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=1200&h=400&fit=crop",
    rating: 4.7,
    reviewCount: 650,
    memberSince: "2021",
    responseTime: "< 3 hours",
    social: { instagram: "@hitmanmerch" },
  },
  {
    id: "v4",
    slug: "steel-collectors",
    name: "Steel Collectors India",
    description: "India's largest steel card and poster collection. Limited editions weekly.",
    logo: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=200&h=200&fit=crop",
    banner: "https://images.unsplash.com/photo-1531416510404-8fa5b1065462?w=1200&h=400&fit=crop",
    rating: 4.6,
    reviewCount: 420,
    memberSince: "2022",
    responseTime: "< 4 hours",
    social: { instagram: "@steelcollectors" },
  },
  {
    id: "v5",
    slug: "virat-verse",
    name: "Virat Verse",
    description: "The ultimate Virat Kohli and RCB merchandise destination.",
    logo: "https://images.unsplash.com/photo-1531416510404-8fa5b1065462?w=200&h=200&fit=crop",
    banner: "https://images.unsplash.com/photo-1593764600622-4a706f0a2d2f?w=1200&h=400&fit=crop",
    rating: 4.9,
    reviewCount: 2100,
    memberSince: "2018",
    responseTime: "< 1 hour",
    social: { instagram: "@viratverse", facebook: "ViratVerseOfficial" },
  },
];

export function getVendorBySlug(slug: string) {
  return vendors.find((v) => v.slug === slug);
}

export function getVendorById(id: string) {
  return vendors.find((v) => v.id === id);
}
