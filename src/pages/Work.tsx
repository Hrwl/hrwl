import { Link } from "react-router-dom";
import { Plus } from "lucide-react";
import { CASES } from "@/data/cases";
import Footer from "@/components/Footer";
import { RevealContainer, RevealItem } from "@/components/Reveal";
import SEO from "@/components/SEO";

const Work = () => {
  // Reorder: newest/most important first
  const orderedIds = [
    "hrwl-launch",
    "hrwl-brand-film",
    "theoneyoukeep",
    "google",
    "hrwl",
    "noxisros",
    "coinbase",
  ];

  const orderedCases = orderedIds
    .map((id) => CASES.find((c) => c.id === id))
    .filter(Boolean) as typeof CASES;

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title="Work — HRWL" 
        description="Selected case studies and cinematic motion design projects by Djamel Haroual."
        url="https://hrwl.studio/work"
      />
      <main className="flex-1 pt-28 pb-0 px-6">
        <div className="max-w-[1200px] mx-auto mb-24">
          <div className="mb-14 text-center">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">Portfolio</p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">Work</h1>
          </div>

          <RevealContainer className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {orderedCases.map((project, index) => (
              <RevealItem key={project.id}>
                <Link
                  to={`/work/${project.id}`}
                  className={`group block ${project.comingSoon ? "" : ""}`}
                >
                  <div className={`rounded-xl overflow-hidden border border-border/60 bg-card card-elevated ${project.comingSoon ? "opacity-60" : ""}`}>
                    {/* Thumbnail — 577.96 : 324.53 ratio */}
                    <div className="relative overflow-hidden bg-muted" style={{ aspectRatio: "2.35 / 1" }}>
                      {project.thumbnail ? (
                        <img
                          src={project.thumbnail}
                          alt={project.title}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      ) : (
                        <>
                          <div className="absolute inset-0 bg-foreground" />
                          <div className="absolute inset-0 bg-gradient-to-br from-foreground/90 to-foreground" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-[11px] text-background/20 uppercase tracking-widest font-medium">
                              {project.comingSoon ? "Coming Soon" : "Preview"}
                            </span>
                          </div>
                        </>
                      )}
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-background/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    {/* Info — Fixed height for uniformity */}
                    <div className="px-5 py-4 flex flex-col h-[105px] justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-3">
                          <h3 className="font-semibold text-sm leading-snug group-hover:text-muted-foreground transition-colors duration-400 text-foreground">
                            {project.title}
                          </h3>
                          <span className="text-[11px] font-mono text-muted-foreground flex-shrink-0 mt-0.5">
                            {project.year}
                          </span>

                        </div>
                        <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                          {project.overview}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </RevealItem>
            ))}

            {/* CTA Box */}
            <RevealItem>
              <Link
                to="/inquiry"
                className="group block h-full"
              >
                <div className="rounded-xl overflow-hidden border border-dashed border-border/60 bg-surface/50 card-elevated h-full flex flex-col">
                  <div className="flex-1 flex flex-col items-center justify-center p-10 gap-4" style={{ minHeight: "calc(100% / 2.35 + 105px)" }}>
                    <div className="w-12 h-12 rounded-full border border-dashed border-muted-foreground/25 flex items-center justify-center group-hover:border-foreground/40 transition-colors duration-400">
                      <Plus className="w-4 h-4 text-muted-foreground/50 group-hover:text-foreground transition-colors duration-400" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-400 text-center text-balance">
                      Want to be the next case study?
                    </p>
                  </div>
                </div>
              </Link>
            </RevealItem>
          </RevealContainer>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
