import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { RevealContainer, RevealItem } from "@/components/Reveal";
import blogThumbnail from "@/assets/blog-brand-film-100m.png";
import SEO from "@/components/SEO";

const BLOG_ENTRIES = [
  {
    slug: "100m-brand-film",
    title: "$100M Brand Film",
    subtitle: "Are You Rich Enough to Waste It?",
    date: "March 2026",
    readTime: "4 min read",
    image: blogThumbnail,
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEO 
        title="Blog — HRWL" 
        description="Insights, behind-the-scenes, and thoughts on motion design and creative direction."
        url="https://hrwl.studio/blog"
      />
      <div className="flex-1 pt-32 pb-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">Insights</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">Blog</h1>
            <p className="text-base text-muted-foreground max-w-lg mx-auto">
              Thought pieces on motion design, storytelling, and brand strategy.
            </p>
          </div>

          <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BLOG_ENTRIES.map((post) => (
              <RevealItem key={post.slug}>
                <Link
                  to={`/blog/${post.slug}`}
                  className="group block"
                >
                  <div className="rounded-xl overflow-hidden border border-border/60 bg-card card-elevated uppercase-info">
                    {/* Thumbnail — 2.35 / 1 ratio */}
                    <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "2.35 / 1" }}>
                      <img
                        src={post.image}
                        alt={post.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Info — Fixed height for uniformity */}
                    <div className="px-5 py-4 flex flex-col h-[105px] justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-semibold text-sm leading-snug group-hover:text-muted-foreground transition-colors duration-400 text-foreground">
                            {post.title}
                          </h3>
                          <span className="text-[11px] font-mono text-muted-foreground flex-shrink-0 mt-0.5">
                            {post.date}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                          {post.subtitle} — {post.readTime}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}
          </RevealContainer>
        </div>
      </div>
      <CTABanner />
      <Footer />
    </div>
  );
}
