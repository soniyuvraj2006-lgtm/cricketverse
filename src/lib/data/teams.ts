import type { Team } from "@/lib/types";

export const teams: Team[] = [
  {
    slug: "csk",
    name: "Chennai Super Kings",
    shortName: "CSK",
    colors: { primary: "#FDB913", secondary: "#0066B3" },
    logo: "🦁",
    description: "Yellow army. Five-time IPL champions led by the legendary MS Dhoni.",
  },
  {
    slug: "mi",
    name: "Mumbai Indians",
    shortName: "MI",
    colors: { primary: "#004BA0", secondary: "#D1AB3E" },
    logo: "🔵",
    description: "The most successful IPL franchise with five titles and a star-studded roster.",
  },
  {
    slug: "rcb",
    name: "Royal Challengers Bengaluru",
    shortName: "RCB",
    colors: { primary: "#EC1C24", secondary: "#2B2A29" },
    logo: "🔴",
    description: "Play Bold. The passionate red army with Virat Kohli at the helm.",
  },
  {
    slug: "kkr",
    name: "Kolkata Knight Riders",
    shortName: "KKR",
    colors: { primary: "#3A225D", secondary: "#B3A123" },
    logo: "💜",
    description: "Two-time champions with the most passionate fan base in Kolkata.",
  },
  {
    slug: "dc",
    name: "Delhi Capitals",
    shortName: "DC",
    colors: { primary: "#0078BC", secondary: "#EF1B23" },
    logo: "🔷",
    description: "Capital's pride with a young, dynamic squad ready to conquer.",
  },
  {
    slug: "pbks",
    name: "Punjab Kings",
    shortName: "PBKS",
    colors: { primary: "#ED1B24", secondary: "#A7A9AC" },
    logo: "👑",
    description: "Sher da squad representing Punjab's fierce cricket spirit.",
  },
  {
    slug: "rr",
    name: "Rajasthan Royals",
    shortName: "RR",
    colors: { primary: "#254AA5", secondary: "#E50695" },
    logo: "💗",
    description: "The inaugural IPL champions known for nurturing young talent.",
  },
  {
    slug: "srh",
    name: "Sunrisers Hyderabad",
    shortName: "SRH",
    colors: { primary: "#FF822A", secondary: "#000000" },
    logo: "🧡",
    description: "Orange army with a formidable bowling attack and fighting spirit.",
  },
  {
    slug: "gt",
    name: "Gujarat Titans",
    shortName: "GT",
    colors: { primary: "#1B2133", secondary: "#CBAD71" },
    logo: "⚡",
    description: "IPL debut champions who took the league by storm in 2022.",
  },
  {
    slug: "lsg",
    name: "Lucknow Super Giants",
    shortName: "LSG",
    colors: { primary: "#A72056", secondary: "#FFCC00" },
    logo: "🌟",
    description: "Rising giants from Lucknow with a star-packed lineup.",
  },
  {
    slug: "ind",
    name: "Team India",
    shortName: "IND",
    colors: { primary: "#138808", secondary: "#FF9933" },
    logo: "🇮🇳",
    description: "Bleed blue. Official Team India merchandise for the true patriot.",
  },
];

export function getTeamBySlug(slug: string) {
  return teams.find((t) => t.slug === slug);
}
