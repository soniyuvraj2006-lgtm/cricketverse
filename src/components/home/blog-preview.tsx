import Link from "next/link";
import { blogPosts } from "@/lib/data/blog";

export function BlogPreview() {
  const [featured, ...rest] = blogPosts.slice(0, 3);

  return (
    <section className="section-padding bg-deep">
      <div className="mx-auto max-w-7xl">
        <h2 className="font-display text-[var(--display-md)] text-primary">FROM THE VERSE</h2>
        <p className="mt-2 font-body text-secondary">Cricket stories, guides &amp; collector tips</p>

        <div className="mt-10 flex flex-col gap-4 lg:flex-row">
          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group relative min-h-[320px] flex-[3] rounded-xl border border-[var(--border-dim)] bg-surface p-8 transition-colors hover:border-[var(--border-active)] hover:bg-[rgba(200,168,75,0.02)]"
            >
              <div className="absolute left-0 top-8 h-[60px] w-[3px] rounded-sm bg-gold" />
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{featured.category}</span>
              <h3 className="mt-3 max-w-lg font-body text-[28px] font-bold text-primary group-hover:underline">{featured.title}</h3>
              <p className="mt-3 max-w-lg font-body text-[15px] text-secondary">{featured.excerpt}</p>
              <div className="mt-8 flex items-center justify-between">
                <span className="font-mono text-xs text-muted">{featured.readTime} min read</span>
                <span className="font-body text-sm font-semibold text-gold transition-transform group-hover:translate-x-1">Read More →</span>
              </div>
            </Link>
          )}
          <div className="flex flex-[2] flex-col gap-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl border border-[var(--border-dim)] bg-surface p-5 transition-colors hover:border-[var(--border-active)] hover:bg-[rgba(200,168,75,0.02)]"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold">{post.category}</span>
                <h3 className="mt-2 font-body text-lg font-bold text-primary group-hover:underline">{post.title}</h3>
                <span className="mt-2 inline-block font-mono text-xs text-muted">{post.readTime} min read</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
