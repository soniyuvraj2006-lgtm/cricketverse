export interface PlayerCircleData {
  slug: string;
  name: string;
  initials: string;
  number: string;
  color1: string;
  color2: string;
  jersey: string;
}

export const playerCircleData: PlayerCircleData[] = [
  { slug: "virat-kohli", name: "Virat Kohli", initials: "VK", number: "18", color1: "#1B4FFF", color2: "#0099FF", jersey: "India" },
  { slug: "rohit-sharma", name: "Rohit Sharma", initials: "RS", number: "45", color1: "#004C97", color2: "#0066CC", jersey: "India" },
  { slug: "ms-dhoni", name: "MS Dhoni", initials: "MSD", number: "7", color1: "#FDB913", color2: "#FF8C00", jersey: "CSK" },
  { slug: "jasprit-bumrah", name: "Jasprit Bumrah", initials: "JB", number: "93", color1: "#004C97", color2: "#0066CC", jersey: "India" },
  { slug: "hardik-pandya", name: "Hardik Pandya", initials: "HP", number: "228", color1: "#E74C3C", color2: "#C0392B", jersey: "MI" },
  { slug: "sachin-tendulkar", name: "Sachin Tendulkar", initials: "ST", number: "10", color1: "#FFD700", color2: "#FFA500", jersey: "India" },
  { slug: "ab-de-villiers", name: "AB de Villiers", initials: "ABD", number: "17", color1: "#007A4D", color2: "#005C3A", jersey: "RCB" },
  { slug: "shubman-gill", name: "Shubman Gill", initials: "SG", number: "77", color1: "#9333EA", color2: "#7C3AED", jersey: "GT" },
  { slug: "kl-rahul", name: "KL Rahul", initials: "KL", number: "1", color1: "#A72056", color2: "#FFCC00", jersey: "LSG" },
];
