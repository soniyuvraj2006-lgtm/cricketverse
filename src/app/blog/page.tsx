import Link from "next/link";
import { PageHero } from "@/components/bucks/page-hero";
import { blogPosts } from "@/lib/data/blog";

export default function BlogPage() {
  const categories = ["All", "Player Stories", "Merchandise Guide", "Cricket Culture", "Collector Tips"];

  return (
    <div className="section-padding pt-28">
      <div className="mx-auto max-w-7xl">
        <PageHero eyebrow="Stories" title="BLOG" titleOutline="THE VERSE" subtitle="Cricket stories, guides & collector tips" />
        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((cat) => (
            <span key={cat} className="pill-label text-xs">{cat}</span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group bucks-panel transition-colors hover:border-gold/30"
            >
              <span className="font-mono text-xs uppercase tracking-wider text-gold">{post.category}</span>
              <h2 className="mt-2 font-display text-xl font-bold text-cream group-hover:text-gold">{post.title}</h2>
              <p className="mt-2 line-clamp-2 font-body text-sm text-secondary">{post.excerpt}</p>
              <span className="mt-3 inline-block font-mono text-xs text-cream/40">{post.readTime} min read</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
