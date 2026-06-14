import type { Player } from "@/lib/types";

export const players: Player[] = [
  {
    slug: "virat-kohli",
    name: "Virat Kohli",
    team: "Royal Challengers Bengaluru",
    role: "Batsman",
    image: "https://images.unsplash.com/photo-1531416510404-8fa5b1065462?w=400&h=400&fit=crop",
    stats: [
      { label: "ODI Runs", value: "13,848" },
      { label: "Centuries", value: "50" },
      { label: "IPL Titles", value: "1" },
    ],
    quote: "I play for the fans who wear my jersey with pride.",
    bio: "The King of cricket. Virat Kohli's aggressive batting and passionate leadership have made him one of India's most beloved cricketers.",
  },
  {
    slug: "rohit-sharma",
    name: "Rohit Sharma",
    team: "Mumbai Indians",
    role: "Batsman",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=400&fit=crop",
    stats: [
      { label: "ODI Runs", value: "11,169" },
      { label: "Double Centuries", value: "3" },
      { label: "IPL Titles", value: "5" },
    ],
    quote: "Hitman mode activated every time I step on the pitch.",
    bio: "Hitman Rohit Sharma holds the record for most double centuries in ODIs and leads Mumbai Indians to unprecedented IPL success.",
  },
  {
    slug: "ms-dhoni",
    name: "MS Dhoni",
    team: "Chennai Super Kings",
    role: "Wicket-Keeper Batsman",
    image: "https://images.unsplash.com/photo-1540747913346-19a32ad3b0f5?w=400&h=400&fit=crop",
    stats: [
      { label: "World Cups", value: "2" },
      { label: "IPL Titles", value: "5" },
      { label: "Finishes", value: "Legendary" },
    ],
    quote: "Finishers don't follow trends. They create legacies.",
    bio: "Captain Cool. MS Dhoni's calm demeanor and match-winning finishes have etched him into cricket folklore forever.",
  },
  {
    slug: "jasprit-bumrah",
    name: "Jasprit Bumrah",
    team: "Mumbai Indians",
    role: "Fast Bowler",
    image: "https://images.unsplash.com/photo-1622279457486-62dcc4a431d6?w=400&h=400&fit=crop",
    stats: [
      { label: "Test Wickets", value: "150+" },
      { label: "Economy", value: "4.2" },
      { label: "Yorkers", value: "Deadly" },
    ],
    quote: "Every yorker is a love letter to fast bowling.",
    bio: "The world's most unplayable fast bowler. Bumrah's unique action and pinpoint accuracy make him a fan favorite.",
  },
  {
    slug: "hardik-pandya",
    name: "Hardik Pandya",
    team: "Mumbai Indians",
    role: "All-Rounder",
    image: "https://images.unsplash.com/photo-1593341646782-e0b4954a845a?w=400&h=400&fit=crop",
    stats: [
      { label: "Strike Rate", value: "156" },
      { label: "IPL Sixes", value: "100+" },
      { label: "All-Round", value: "Elite" },
    ],
    quote: "Power, passion, and never backing down.",
    bio: "Hardik Pandya brings explosive all-round ability and swagger to every match he plays.",
  },
  {
    slug: "sachin-tendulkar",
    name: "Sachin Tendulkar",
    team: "Mumbai Indians",
    role: "Legend",
    image: "https://images.unsplash.com/photo-1593764600622-4a706f0a2d2f?w=400&h=400&fit=crop",
    stats: [
      { label: "Intl Runs", value: "34,357" },
      { label: "Centuries", value: "100" },
      { label: "Status", value: "God of Cricket" },
    ],
    quote: "Dreams do come true if you work hard enough.",
    bio: "The Master Blaster. Sachin Tendulkar's records and humility inspire generations of cricket fans worldwide.",
  },
  {
    slug: "ab-de-villiers",
    name: "AB de Villiers",
    team: "Royal Challengers Bengaluru",
    role: "Batsman",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=400&h=400&fit=crop",
    stats: [
      { label: "IPL Runs", value: "5,162" },
      { label: "360° Player", value: "Yes" },
      { label: "Mr. 360", value: "Legend" },
    ],
    quote: "Innovation is the soul of modern cricket.",
    bio: "Mr. 360 revolutionized batting with his audacious shot-making and electric fielding.",
  },
  {
    slug: "shubman-gill",
    name: "Shubman Gill",
    team: "Gujarat Titans",
    role: "Batsman",
    image: "https://images.unsplash.com/photo-1531416510404-8fa5b1065462?w=400&h=400&fit=crop",
    stats: [
      { label: "ODI Avg", value: "58+" },
      { label: "IPL Runs", value: "2,500+" },
      { label: "Future", value: "Bright" },
    ],
    quote: "The next generation carries the torch forward.",
    bio: "Shubman Gill represents the future of Indian cricket with elegant stroke play and consistent performances.",
  },
  {
    slug: "kl-rahul",
    name: "KL Rahul",
    team: "Lucknow Super Giants",
    role: "Batsman",
    image: "https://images.unsplash.com/photo-1593341646782-e0b4954a845a?w=400&h=400&fit=crop",
    stats: [
      { label: "IPL Centuries", value: "4" },
      { label: "T20I Runs", value: "2,000+" },
      { label: "Style", value: "Classy" },
    ],
    quote: "Class never goes out of fashion.",
    bio: "KL Rahul combines classical technique with modern T20 aggression across all formats.",
  },
];

export function getPlayerBySlug(slug: string) {
  return players.find((p) => p.slug === slug);
}
