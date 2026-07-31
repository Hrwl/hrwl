/**
 * Home Page — /
 * Sections: Hero (100vh), Headline block, Selected Work grid, What I Do, FAQ, CTA Banner, Footer
 */
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/ScrollReveal";
import heroThumb from "@/assets/hero-thumb.webp";
import WorkCard from "@/components/WorkCard";
import { CASES } from "@/data/cases";
import { ArrowUpRight, Play } from "lucide-react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useTheme } from "next-themes";
import { useAudio } from "@/context/AudioContext";
import SEO from "@/components/SEO";

const WHAT_I_DO = [
  {
    num: "01",
    title: "Brand Films",
    description: "Cinematic stories that transform how audiences perceive your brand.",
  },
  {
    num: "02",
    title: "Commercials",
    description: "Strategic ads that sell without feeling like selling.",
  },
  {
    num: "03",
    title: "Motion Design",
    description: "Product demos, explainers, and UI animations that clarify.",
  },
];

const FAQ_ITEMS = [
  {
    q: "Why is a brand film worth more than a regular video?",
    a: "A regular video fills a slot. A brand film creates a perception. It's the difference between showing what you do and making people feel why it matters — which is what drives conversions, loyalty, and pricing power.",
  },
  {
    q: "Can't I just use stock footage and templates?",
    a: "You can — and your competitors probably do. That's exactly why it won't differentiate you. Custom brand films position you as the premium choice. Templates position you as one of many.",
  },
  {
    q: "How does a brand film actually increase conversions?",
    a: "A well-crafted brand film communicates your who, your why, and your how in under 60 seconds — faster and more memorably than any landing page. Companies using strategic video see up to 80% higher conversion rates on key pages.",
  },
  {
    q: "Why not just hire a video agency for less?",
    a: "Agencies optimize for volume. I optimize for impact. Every frame, transition, and sound cue is designed to serve your brand strategy — not to fill a deliverable checklist. You're paying for thinking, not just output.",
  },
  {
    q: "Why is your process different from other motion designers?",
    a: "I don't start with animation — I start with your business problem. Narrative arc, color psychology, original sound design, and strategic pacing come before a single keyframe is touched. The result is a film that works as hard as your sales team.",
  },
  {
    q: "How do you position a brand as premium through video?",
    a: "Perception is built through intention. Every creative choice — color grading, pacing, typography, original score — is calibrated to signal quality and authority. People associate production value with brand value. A $100M company that uses a stock template communicates the opposite of what it is.",
  },
];

const FAQ_LEFT = FAQ_ITEMS.slice(0, 3);
const FAQ_RIGHT = FAQ_ITEMS.slice(3);

export default function Index() {
  const { theme } = useTheme();
  const { pauseForVideo } = useAudio();
  const [openFaq, setOpenFaq] = useState<string>("");
  const [isPlaying, setIsPlaying] = useState(false);
  const [iframeReady, setIframeReady] = useState(false); // lazy-load the iframe
  const [ambientColors, setAmbientColors] = useState({ from: "#0149daff", to: "#002ba0ff" });

  useEffect(() => {
    if (window.innerWidth < 768) {
      setAmbientColors({ from: "#0149daff", to: "#002ba0ff" });
    }
  }, []);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const [hasPlayed, setHasPlayed] = useState(false);
  const playStartTimeRef = useRef<number>(0);
  const prevTimeRef = useRef<number>(0);
  const sequenceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const palettes = {
    blue: { from: "#004BE4", to: "#002EB0" }, // Start
  };

  const startLightingSequence = useCallback(() => {
    if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      setAmbientColors(palettes.blue);
      return;
    }

    // Initial: Start with Purple
    setAmbientColors(palettes.blue);

    // Stage 1: Cyan shift (after 4s)
    sequenceTimerRef.current = setTimeout(() => {
      setAmbientColors(palettes.blue);

      // Stage 2: Gold finish (after 10s)
      sequenceTimerRef.current = setTimeout(() => {
        setAmbientColors(palettes.blue);

        // Stage 3: Return to Blue (after 16s - nearing loop)
        sequenceTimerRef.current = setTimeout(() => {
          setAmbientColors(palettes.blue);
        }, 6000);
      }, 6000);
    }, 4000);
  }, [palettes.blue]);

  // Post message to Vimeo player
  const postMessage = useCallback((action: string, value?: unknown) => {
    if (!iframeRef.current) return;
    iframeRef.current.contentWindow?.postMessage(
      JSON.stringify({ method: action, value }),
      "*"
    );
  }, []);

  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      let data;
      try {
        data = typeof e.data === "string" ? JSON.parse(e.data) : e.data;
      } catch (err) {
        return;
      }

      if (!data) return;

      // Handle playback events
      if (data.event === "playing" || data.event === "play") {
        if (isPlaying) {
          startLightingSequence();
        }
      }

      if (data.event === "pause" || data.event === "ended") {
        setIsPlaying(false);
        setAmbientColors(palettes.blue);
        if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);
      }

      // Loop detection via timeupdate
      if (data.event === "timeupdate" && data.data) {
        const currentTime = data.data.seconds;
        if (currentTime < prevTimeRef.current && currentTime < 1) {
          // Video looped
          startLightingSequence();
        }
        prevTimeRef.current = currentTime;
      }
    };
    window.addEventListener("message", handleMessage);
    return () => {
      window.removeEventListener("message", handleMessage);
      if (sequenceTimerRef.current) clearTimeout(sequenceTimerRef.current);
    };
  }, [startLightingSequence]);

  // Register Vimeo events once iframe is ready
  const handleIframeLoad = useCallback(() => {
    ["play", "pause", "ended", "timeupdate", "playing"].forEach((event) => {
      postMessage("addEventListener", event);
    });
  }, [postMessage]);



  return (
    <div className="min-h-screen bg-background text-foreground font-inter">
      <SEO url="https://hrwl.studio" />
      <main className="overflow-x-hidden">
        {/* ═══ Page overlay — appears when video is playing, above navbar ═══ */}
        {isPlaying && (
          <div
            className="fixed inset-0 z-[60] bg-black/75 backdrop-blur-sm"
            role="button"
            tabIndex={0}
            onClick={() => {
              setIsPlaying(false);
              postMessage("pause");
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                setIsPlaying(false);
                postMessage("pause");
              }
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              setIsPlaying(false);
              postMessage("pause");
            }}
            aria-label="Click to pause video"
          />
        )}



        {/* ═══ First Viewport: Hero Section ═══ */}
        <div className="min-h-[100dvh] flex flex-col items-center overflow-hidden relative">

          {/* Header Spacer (to avoid overlap and center content in the remaining space) */}
          <div className="h-24 md:h-28 w-full flex-none" />

          {/* High-level Centering Container */}
          <div className="flex-1 w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8 max-w-[1200px] mx-auto pb-5 md:pb-0 relative">

            {/* Ambient glow — intensifies when playing */}
            <div
              className="absolute inset-0 z-0 pointer-events-none"
              style={{ zIndex: isPlaying ? 65 : "auto" }}
            >
              <motion.div
                initial={false}
                animate={{
                  background: `linear-gradient(to right, ${ambientColors.from}, ${ambientColors.to})`,
                  opacity: isPlaying ? (theme === "dark" ? 0.22 : 0.15) : (theme === "dark" ? 0.15 : 0.12),
                  height: isPlaying ? "500px" : "400px",
                  width: isPlaying ? "800px" : "700px",
                }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
                className="absolute top-[30%] left-1/2 -translate-x-1/2 rounded-full"
                style={{
                  filter: "blur(130px)",
                  mixBlendMode: theme === "dark" ? "plus-lighter" : "normal",
                }}
              />
            </div>

            {/* 1. Video Area wrapper */}
            <div className="w-full flex flex-col items-center">

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex justify-center w-full mb-8 md:mb-0"
                style={{ maxWidth: "850px", zIndex: isPlaying ? 66 : "auto" }}
                ref={containerRef}
              >
                {/* Glow shadow behind video */}
                <motion.div
                  initial={false}
                  animate={{
                    background: isPlaying ? `linear-gradient(135deg, ${ambientColors.from}, ${ambientColors.to})` : palettes.blue.from,
                    opacity: isPlaying ? (theme === "dark" ? 0.18 : 0.12) : 0.08,
                  }}
                  transition={{ duration: 2.5, ease: "easeInOut" }}
                  className="absolute pointer-events-none"
                  style={{
                    width: "120%",
                    height: "80%",
                    bottom: "-20%",
                    left: "-10%",
                    filter: isPlaying ? "blur(80px)" : "blur(90px)",
                    borderRadius: "50%",
                    mixBlendMode: theme === "dark" ? "plus-lighter" : "normal",
                  }}
                />

                {/* Video container */}
                <div
                  className="relative overflow-hidden rounded-[16px] sm:rounded-[20px] md:rounded-[24px] w-full shadow-2xl bg-cover bg-center"
                  style={{
                    backgroundColor: "#0F0F0F",
                    aspectRatio: "16/9",
                    backgroundImage: !isPlaying ? `url(${heroThumb})` : "none"
                  }}
                >
                  {/* Vimeo iframe — injected on first play to prevent background CPU/network load */}
                  {iframeReady && (
                    <iframe
                      ref={iframeRef}
                      src="https://player.vimeo.com/video/1179505050?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0&transparent=0&loop=1&api=1&autoplay=1"
                      className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${isPlaying ? "opacity-100" : "opacity-0"}`}
                      allow="autoplay; fullscreen; picture-in-picture"
                      title="HRWL - Brand film"
                      onLoad={handleIframeLoad}
                    />
                  )}

                  {/* Video Interaction Overlay — only shows play button; clicking void (bg overlay) pauses */}
                  <div
                    className="absolute inset-0 z-20 cursor-pointer pointer-events-none"
                    role="presentation"
                  >

                    <AnimatePresence>
                      {!isPlaying && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8, x: "-50%", y: "-50%" }}
                          animate={{ opacity: 1, scale: 1, x: "-50%", y: "-50%" }}
                          exit={{ opacity: 0, scale: 1.2, x: "-50%", y: "-50%" }}
                          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                          className="absolute top-1/2 left-1/2 pointer-events-auto"
                          onClick={() => {
                            pauseForVideo(); // pause voice note when video starts
                            setIframeReady(true);
                            setIsPlaying(true);
                            setHasPlayed(true);
                            startLightingSequence();
                          }}
                          onTouchEnd={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            pauseForVideo(); // pause voice note on mobile too
                            setIframeReady(true);
                            setIsPlaying(true);
                            setHasPlayed(true);
                            startLightingSequence();
                          }}
                        >
                          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:bg-white/20 transition-all duration-500 shadow-2xl">
                            <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1 fill-white" />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Black tint overlay (dims when not playing, clear when playing) */}
                  <div
                    className="absolute inset-0 transition-all duration-500 pointer-events-none"
                    style={{ background: isPlaying ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.12)" }}
                  />


                </div>
              </motion.div>

              <AnimatePresence mode="wait">
                {!isPlaying && (
                  <motion.div
                    key="mobile-hero-content"
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{ opacity: 1, height: "auto", marginTop: 40 }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                    className="mb-2 text-center block md:hidden w-full max-w-[500px] overflow-hidden px-4"
                  >
                    <h1
                      className="mb-8"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 900,
                        fontSize: "clamp(24px, 7vw, 34px)",
                        lineHeight: "1.2",
                        letterSpacing: "0.5px",
                        color: "hsl(var(--foreground))",
                      }}
                    >
                      Cinematic Brand Films
                      <br />
                      That make your product impossible to ignore
                    </h1>

                    <div className="flex flex-col items-center gap-4">
                      <Link to="/inquiry" className="dark-pill-btn w-full max-w-[190px]">
                        Start Inquiry
                        <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                      </Link>
                      <Link to="/work" className="secondary-pill-btn w-full max-w-[190px]">
                        See Case Studies
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* ═══ Headline + CTA (below the fold) ═══ */}
        <section className="px-6 md:px-12 py-16 md:py-24 hidden md:block">
          <ScrollReveal delay={0.15}>
            <div className="text-center max-w-[1240px] mx-auto">
              <h1
                className="mb-6 md:mb-8"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 3vw, 42px)",
                  lineHeight: "1.15",
                  letterSpacing: "0.72px",
                  color: "hsl(var(--foreground))",
                }}
              >
                Cinematic Brand Films
                <br />
                That make your product impossible to ignore
              </h1>
              <p
                className="mb-10 md:mb-12 max-w-2xl mx-auto font-medium"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: "clamp(14px, 1.3vw, 19px)",
                  lineHeight: "clamp(22px, 2.5vw, 34px)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                Freelance Motion Designer &amp; Creative Director crafting high-ROI visual stories for ambitious brands.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link to="/inquiry" className="dark-pill-btn">
                  Start Inquiry
                  <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                </Link>
                <Link to="/work" className="secondary-pill-btn min-w-[220px]">
                  See Case Studies
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </section>

        {/* Selected Work */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-[1200px] mx-auto">
            <div className="flex items-end justify-between mb-12">
              <div>
                <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                  Recent Work
                </p>
                <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Selected Projects</h2>
              </div>
              <Link
                to="/work"
                className="hidden md:flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300"
              >
                View All
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid md:grid-cols-3 gap-5">
              {CASES.filter(c => !c.comingSoon).slice(0, 3).map((project, i) => (
                <Link key={project.id} to={`/work/${project.id}`} className="group block">
                  <div className="aspect-[4/3] bg-muted rounded-xl mb-3 overflow-hidden relative card-elevated">
                    {project.thumbnail ? (
                      <img
                        src={project.thumbnail}
                        alt={project.title}
                        width={816}
                        height={612}
                        loading={i === 0 ? "eager" : "lazy"}
                        decoding="async"
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (

                      <div className="absolute inset-0 bg-gradient-to-br from-foreground/80 to-foreground flex items-center justify-center">
                        <span className="text-4xl font-bold text-background/8 group-hover:text-background/15 transition-colors duration-500">
                          0{i + 1}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
                      <div className="w-10 h-10 rounded-full bg-background text-foreground flex items-center justify-center shadow-lg">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-sm font-semibold mb-0.5 group-hover:text-muted-foreground transition-colors duration-300">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground">{project.format || "Brand System"}</p>
                    </div>
                    <span className="text-[11px] font-mono text-muted-foreground">{project.year}</span>
                  </div>
                </Link>
              ))}
            </div>

            <Link
              to="/work"
              className="md:hidden flex items-center justify-center gap-2 text-sm font-medium mt-10 text-muted-foreground"
            >
              View All Work
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* What I Do  */}
        <section className="px-6 lg:px-12 py-24">
          <div className="max-w-[900px] mx-auto">
            <div className="text-center mb-12">
              <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground mb-2 font-medium">
                What I Do
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
                Creative solutions for business problems.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              {WHAT_I_DO.map((item, i) => (
                <div
                  key={i}
                  className="p-6 bg-card rounded-xl border border-border/60 card-elevated"
                >
                  <span className="text-[11px] font-mono text-muted-foreground">{item.num}</span>
                  <h3 className="text-base font-semibold mt-3 mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-6 lg:px-12 py-20">
          <div className="max-w-[1200px] mx-auto">
            <ScrollReveal>
              <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-10">
                <div>
                  <h2
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(28px, 4.5vw, 64px)",
                      lineHeight: "1.1",
                      letterSpacing: "-2.45px",
                      color: "hsl(var(--foreground))",
                      textAlign: "left",
                    }}
                  >
                    Got any questions?
                  </h2>
                  <h2
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: "clamp(28px, 4.5vw, 64px)",
                      lineHeight: "1.1",
                      letterSpacing: "-2.45px",
                      color: "#B4B3B1",
                      textAlign: "left",
                      marginTop: "4px",
                    }}
                  >
                    I've got answers.
                  </h2>
                </div>
                <div className="flex-shrink-0">
                  <Link to="/inquiry" className="dark-pill-btn">
                    Start Inquiry
                    <svg className="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 items-start">
                <div className="flex flex-col gap-6">
                  {FAQ_LEFT.map((item, i) => {
                    const itemValue = `left-${i}`;
                    return (
                      <Accordion
                        key={i}
                        type="single"
                        collapsible
                        value={openFaq === itemValue ? itemValue : ""}
                        onValueChange={(val) => setOpenFaq(val || "")}
                        className="w-full"
                      >
                        <AccordionItem
                          value={itemValue}
                          className="faq-card border-none rounded-[32px] overflow-hidden px-8"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-8 text-lg font-bold tracking-tight">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-8">
                            <div className="faq-answer-bounce">
                              {item.a}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </div>

                <div className="flex flex-col gap-6">
                  {FAQ_RIGHT.map((item, i) => {
                    const itemValue = `right-${i}`;
                    return (
                      <Accordion
                        key={i}
                        type="single"
                        collapsible
                        value={openFaq === itemValue ? itemValue : ""}
                        onValueChange={(val) => setOpenFaq(val || "")}
                        className="w-full"
                      >
                        <AccordionItem
                          value={itemValue}
                          className="faq-card border-none rounded-[32px] overflow-hidden px-8"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-8 text-lg font-bold tracking-tight">
                            {item.q}
                          </AccordionTrigger>
                          <AccordionContent className="text-base text-muted-foreground leading-relaxed pb-8">
                            <div className="faq-answer-bounce">
                              {item.a}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    );
                  })}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <CTABanner />

      </main>
      <Footer catchphrase="Hire different" />
    </div>
  );
}
