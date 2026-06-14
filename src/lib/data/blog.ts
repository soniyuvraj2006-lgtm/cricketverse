import type { BlogPost } from "@/lib/types";

export const blogPosts: BlogPost[] = [
  {
    slug: "ms-dhoni-2011-world-cup-jersey",
    title: "The Story Behind MS Dhoni's 2011 World Cup Jersey",
    excerpt: "How the iconic blue jersey became a symbol of India's greatest cricket triumph.",
    category: "Player Stories",
    author: "CricketVerse Editorial",
    readTime: 6,
    date: "2024-03-15",
    image: "https://images.unsplash.com/photo-1540747913346-19a32ad3b0f5?w=800&h=450&fit=crop",
    content: [
      "On April 2, 2011, MS Dhoni hit the winning six at Wankhede Stadium, and a nation erupted in joy. The jersey he wore that night has become one of the most sought-after pieces of cricket memorabilia in India.",
      "The 2011 World Cup jersey featured a distinctive design with the BCCI logo prominently displayed. The moisture-wicking fabric was cutting-edge for its time, designed to keep players cool during high-pressure matches.",
      "Today, replica jerseys and commemorative editions continue to sell out within hours of release. Collectors pay premium prices for authenticated match-worn memorabilia.",
      "At CricketVerse, we offer officially licensed replica jerseys that capture the spirit of that historic moment. Each jersey comes with authenticity verification.",
    ],
  },
  {
    slug: "spot-fake-cricket-merchandise",
    title: "How to Spot Fake Cricket Merchandise",
    excerpt: "Protect yourself from counterfeit products with our expert authentication guide.",
    category: "Merchandise Guide",
    author: "CricketVerse Editorial",
    readTime: 8,
    date: "2024-04-02",
    image: "https://images.unsplash.com/photo-1531416510404-8fa5b1065462?w=800&h=450&fit=crop",
    content: [
      "The cricket merchandise market in India is booming — and so is the counterfeit industry. Fake jerseys, cards, and signed items flood online marketplaces every day.",
      "Look for official licensing tags. Authentic products carry holographic BCCI or IPL licensing stickers that cannot be easily replicated.",
      "Check stitching quality. Genuine jerseys use reinforced seams and premium polyester blends. Counterfeits often have loose threads and faded prints.",
      "Verify seller credentials. CricketVerse only partners with verified vendors who provide authenticity certificates for signed merchandise.",
      "When in doubt, buy from trusted platforms like CricketVerse where every product is verified before listing.",
    ],
  },
  {
    slug: "limited-edition-steel-cards",
    title: "Limited Edition Steel Cards: Why Collectors Love Them",
    excerpt: "The rise of steel card collecting in India and what makes them so valuable.",
    category: "Collector Tips",
    author: "CricketVerse Editorial",
    readTime: 5,
    date: "2024-05-10",
    image: "https://images.unsplash.com/photo-1624526267942-ab0ff8a3e972?w=800&h=450&fit=crop",
    content: [
      "Steel cards have revolutionized cricket collecting in India. Unlike paper cards, these premium metal editions are built to last generations.",
      "Each steel card features laser-etched player statistics, holographic accents, and a unique serial number. Limited runs of 500 or fewer make them highly collectible.",
      "The secondary market for rare steel cards has seen 300% growth in the past two years. Cards featuring World Cup moments command the highest premiums.",
      "CricketVerse drops new limited edition steel cards every Friday. Subscribe to our newsletter for early access to drops.",
    ],
  },
  {
    slug: "ipl-2024-merchandise-guide",
    title: "IPL 2024: Complete Merchandise Guide",
    excerpt: "Everything you need to know about the latest IPL team jerseys and collectibles.",
    category: "Cricket Culture",
    author: "CricketVerse Editorial",
    readTime: 7,
    date: "2024-03-22",
    image: "https://images.unsplash.com/photo-1593764600622-4a706f0a2d2f?w=800&h=450&fit=crop",
    content: [
      "IPL 2024 brought fresh jersey designs for all ten franchises. From CSK's classic yellow to GT's sleek navy, each team has unique merchandise worth collecting.",
      "This season's jerseys feature sustainable fabric made from recycled materials — a first for IPL official merchandise.",
      "Team shops on CricketVerse offer exclusive bundle deals: jersey + poster + steel card combos at 15% off.",
    ],
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((b) => b.slug === slug);
}
