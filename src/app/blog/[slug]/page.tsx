import { notFound } from "next/navigation";
import Link from "next/link";
import { PageHero } from "@/components/bucks/page-hero";
import { getBlogBySlug, blogPosts } from "@/lib/data/blog";
import type { Metadata } from "next";

export function generateStaticParams() {
  return blogPosts.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getBlogBySlug(params.slug);
  return { title: post?.title ?? "Blog" };
}

export default function BlogArticlePage({ params }: { params: { slug: string } }) {
  const post = getBlogBySlug(params.slug);
  if (!post) notFound();

  return (
    <article className="section-padding pt-28">
      <div className="mx-auto max-w-3xl">
        <PageHero eyebrow={post.category} title={post.title.split(" ").slice(-2).join(" ").toUpperCase()} titleOutline={post.title.split(" ").slice(0, -2).join(" ").toUpperCase() || post.title.toUpperCase()} />
        <div className="bucks-panel mb-8">
          <div className="flex items-center gap-4 font-mono text-xs text-cream/50">
            <span>{post.author}</span>
            <span>•</span>
            <span>{post.readTime} min read</span>
            <span>•</span>
            <span>{post.date}</span>
          </div>
        </div>
        <div className="space-y-4">
          {post.content.map((para, i) => (
            <p key={i} className="font-body leading-relaxed text-secondary">{para}</p>
          ))}
        </div>
        <div className="bucks-panel mt-8 text-center">
          <p className="font-display font-bold uppercase tracking-wider text-cream">Shop related collections →</p>
          <Link href="/jerseys" className="mt-2 inline-block font-mono text-sm text-gold hover:underline">Browse Jerseys</Link>
        </div>
      </div>
    </article>
  );
}
