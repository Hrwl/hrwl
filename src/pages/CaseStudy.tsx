import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Play, CheckCircle, Volume2, Music2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { CASES } from "@/data/cases";
import Footer from "@/components/Footer";
import TheOneYouKeepCaseStudy from "@/components/case-studies/TheOneYouKeepCaseStudy";
import HRWLVisualIdentityCaseStudy from "@/components/case-studies/HRWLVisualIdentityCaseStudy";
import HRWLBrandFilmCaseStudy from "@/components/case-studies/HRWLBrandFilmCaseStudy";
import BackToWork from "@/components/BackToWork";
import MediaLightbox from "@/components/MediaLightbox";
import SEO from "@/components/SEO";
import { useAudio } from "@/context/AudioContext";
import hrwlSfx from "@/assets/Case studies/Hrwl - Launch Campaign/SFX/djamel_sfx_final.mp3";

// Google Storyboard
import googleSb1 from "@/assets/Case studies/Google - case study/Storyboard images/1.webp";
import googleSb2 from "@/assets/Case studies/Google - case study/Storyboard images/2.webp";
import googleSb3 from "@/assets/Case studies/Google - case study/Storyboard images/Frame 3.webp";
import googleSb4 from "@/assets/Case studies/Google - case study/Storyboard images/game of frame.webp";
import googleSb5 from "@/assets/Case studies/Google - case study/Storyboard images/last frame.webp";

// HRWL Launch Storyboard
import launchSb1 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/Frame 2147226620.webp";
import launchSb2 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/Frame 2147226621.webp";
import launchSb3 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/Frame 2147226678.webp";
import launchSb4 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM 1.webp";
import launchSb5 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM2.webp";
import launchSb6 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM3.webp";
import launchSb7 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM4.webp";
import launchSb8 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM6.webp";
import launchSb9 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM 7.webp";
import launchSb10 from "@/assets/Case studies/Hrwl - Launch Campaign/Storyboard/RMM8.webp";

// Mini SFX player
const SFXPlayer = ({ label, src }: { label: string; src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { pauseForVideo } = useAudio();

  const togglePlay = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.onended = () => setIsPlaying(false);
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      pauseForVideo(); // pause voice note when SFX starts
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <button
      onClick={togglePlay}
      className="flex items-center gap-2 px-4 py-3 bg-foreground text-background rounded-lg hover:opacity-90 transition-opacity duration-300 group"
    >
      {isPlaying ? (
        <Volume2 className="w-4 h-4 animate-pulse" />
      ) : (
        <Play className="w-4 h-4 ml-0.5" />
      )}
      <span className="text-sm font-medium">{label}</span>
    </button>
  );
};

const CaseStudy = () => {
    const { id } = useParams();
    const caseData = CASES.find((c) => c.id === id);
    const { pauseForVideo } = useAudio();

    useEffect(() => {
        pauseForVideo();
    }, [pauseForVideo, id]);

    const [lightbox, setLightbox] = useState({
        isOpen: false,
        index: 0,
        images: [] as string[]
    });

    const openLightbox = (index: number, images: string[]) => {
        setLightbox({ isOpen: true, index, images });
    };

    const launchSbImages = [launchSb1, launchSb2, launchSb3, launchSb4, launchSb5, launchSb6, launchSb7, launchSb8, launchSb9, launchSb10];
    const googleSbImages = [googleSb1, googleSb2, googleSb3, googleSb4, googleSb5];
  const currentIndex = CASES.findIndex((c) => c.id === id);
  const nextCase = CASES[(currentIndex + 1) % CASES.length];

  // OG image for sharing — absolute URL using the stable public path
  const BASE = "https://hrwl.studio";
  const ogImage = `${BASE}/og/${id}.png`;
  const ogUrl = `${BASE}/work/${id}`;
  const ogTitle = caseData ? `${caseData.title} — HRWL` : "HRWL";
  const ogDesc = caseData?.overview ?? "Cinematic brand films and motion design by Djamel Haroual.";

  if (!caseData) {
    return (
      <div className="min-h-screen pt-32 px-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Case not found</h1>
          <Link to="/work">
            <Button variant="outline">Back to Work</Button>
          </Link>
        </div>
      </div>
    );
  }

  // Wrapper function to add BackToWork + per-case OG meta to any case
  const withNavigation = (content: React.ReactNode) => (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO 
        title={ogTitle}
        description={ogDesc}
        url={ogUrl}
        image={ogImage}
      />
      <div className="flex-1">
        <BackToWork />
        {content}
      </div>
      <Footer />
    </div>
  );

  // Dedicated components
  if (caseData.id === "theoneyoukeep") {
    return withNavigation(<TheOneYouKeepCaseStudy caseData={caseData} nextCase={nextCase} />);
  }
  if (caseData.id === "hrwl") {
    return withNavigation(<HRWLVisualIdentityCaseStudy caseData={caseData} nextCase={nextCase} />);
  }
  if (caseData.id === "hrwl-brand-film") {
    return withNavigation(<HRWLBrandFilmCaseStudy caseData={caseData} nextCase={nextCase} />);
  }

  // Coming Soon — styled placeholder
  if (caseData.comingSoon) {
    return (
      <div className="min-h-screen bg-background">
        <BackToWork />
        <section className="pt-32 pb-24 px-6 min-h-[80vh] flex items-center">
          <div className="max-w-[600px] mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-foreground flex items-center justify-center mx-auto mb-8">
              <span className="text-background text-2xl font-bold">C</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight mb-4 tracking-tight text-foreground">{caseData.title}</h1>
            <p className="text-lg text-muted-foreground mb-3">Project coming soon.</p>
            <p className="text-sm text-muted-foreground mb-10 max-w-sm mx-auto">{caseData.overview}</p>
            <Link to="/work">
              <Button variant="outline" className="rounded-full px-6 border-border/60 hover:border-foreground/30 transition-all duration-400">
                View Other Projects
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  // HRWL Launch Campaign
  if (caseData.id === "hrwl-launch") {
    return (
      <div className="min-h-screen bg-background">
        <BackToWork />

        <section className="pt-24 pb-4 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
              <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3 text-foreground">{caseData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
          </div>
        </section>

        {/* Two Films */}
        <section className="px-6 mb-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid md:grid-cols-2 gap-3">
              {[
                { title: "Launch Campaign - Video 2", id: "1182403786", muted: false },
                { title: "Trailer", id: "1177055608", muted: true }
              ].map((film, i) => (
                  <div className="aspect-video bg-black rounded-lg overflow-hidden relative group" key={i}>
                  <iframe
                    src={`https://player.vimeo.com/video/${film.id}?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1${film.muted ? "&muted=1" : ""}&loop=1&controls=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ border: 0 }}
                    loading="lazy"
                    title={film.title}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 mb-12">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {[
                { label: "Format", value: "Motion Video" },
                { label: "Runtime", value: "15s + 17s" },
                { label: "Production", value: "5 Days" },
                { label: "Purpose", value: "Brand Awareness" },
                { label: "CTA", value: "djamel@hrwl.studio" },
              ].map((stat, i) => (
                <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                  <p className="font-semibold text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Key Result */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <div className="bg-foreground text-background rounded-lg p-6 md:p-8 text-center">
              <p className="text-base md:text-lg leading-relaxed">
                HRWL entered the market as <span className="font-bold">recognizable before being understood</span>—instant recall, premium perception, and curiosity without explanation.
              </p>
            </div>
          </div>
        </section>

        {/* Strategy */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Strategy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4 text-sm">
              Inspired by IBM-style character animation campaigns, the goal was pattern recognition over persuasion. Instead of emotional storytelling or founder narratives, HRWL needed a signal—economical, repeatable, instantly recognizable.
            </p>
            <div className="grid grid-cols-3 gap-2">
              {["No story arc", "No emotional hooks", "Only signal"].map((point, i) => (
                <div key={i} className="p-3 bg-surface/50 rounded-md border border-border text-center">
                  <p className="font-medium text-xs">{point}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Storyboard</h2>
            {/* Fixed 951×538 grid — each thumbnail is exactly 16:9 */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {launchSbImages.map((img, i) => (
                <div 
                    key={i} 
                    className="bg-surface/50 rounded-md border border-border overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-zoom-in"
                    style={{ aspectRatio: "951/538" }}
                    onClick={() => openLightbox(i, launchSbImages)}
                >
                  <img src={img} alt={`Storyboard ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Process</h2>
            <div className="grid md:grid-cols-3 gap-3">
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Visual System</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>· Limited color for contrast</li>
                  <li>· Geometric simplicity</li>
                  <li>· Negative space as component</li>
                </ul>
              </div>
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Animation</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>· Standardized motion curves</li>
                  <li>· Structured timing</li>
                  <li>· Transitions over moments</li>
                </ul>
              </div>
              <div className="p-4 bg-surface/50 rounded-md border border-border">
                <h3 className="font-semibold text-sm mb-1">Constraints</h3>
                <ul className="text-xs text-muted-foreground space-y-1">
                  <li>· No voiceover</li>
                  <li>· Single visual system</li>
                  <li>· Digital-first only</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Collaboration & Sound Design</h2>
            <div className="bg-surface/30 rounded-lg p-5 border border-border mb-4">
              <p className="text-muted-foreground text-sm leading-relaxed">
                Animation was created first, intentionally off-tempo. <span className="text-foreground font-medium">Yuhui (Kelvin) Jian</span> then brought rhythm, music notes, and sound design that elevated the final result—transforming silent motion into a memorable sonic identity.
              </p>
            </div>
            <div className="flex gap-3">
              <SFXPlayer label="Case SFX Mix" src={hrwlSfx} />
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4">Roles & Credits</h2>
            <div className="space-y-2">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-1 sm:gap-4 border-b border-border/60 last:border-0">
                {credit.link ? (
                  <a
                    href={credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm flex items-start sm:items-center gap-1.5 hover:opacity-70 transition-opacity duration-200 group text-foreground"
                  >
                    <span className="leading-tight">{credit.name}</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-80 transition-opacity mt-0.5 sm:mt-0 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                ) : (
                  <span className="font-medium text-sm leading-tight text-foreground">{credit.name}</span>
                )}
                <span className="text-xs text-muted-foreground text-left sm:text-right">{credit.role}</span>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Next */}
        <div className="border-t border-border bg-surface/30 py-10 px-6">
          <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
              <p className="text-lg font-bold text-foreground">{nextCase.title}</p>
            </div>
            <Link to={`/work/${nextCase.id}`}>
              <Button variant="outline" className="group rounded-full">
                View Case
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
        <MediaLightbox 
          isOpen={lightbox.isOpen}
          images={lightbox.images}
          initialIndex={lightbox.index}
          onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        />
      </div>
    );
  }

  // Google — Minimal style (like HRWL Launch)
  if (caseData.id === "google") {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <BackToWork />

        <section className="pt-24 pb-4 px-6">
          <div className="max-w-[900px] mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
              <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
            </div>
            <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3 text-foreground">{caseData.title}</h1>
            <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
          </div>
        </section>

        <section className="px-6 mb-6">
          <div className="max-w-[1000px] mx-auto">
            <div className="aspect-video bg-black rounded-xl overflow-hidden relative group">
              <iframe
                src="https://player.vimeo.com/video/1065449370?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=1"
                className="absolute inset-0 w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
                style={{ border: 0 }}
                loading="lazy"
                title="Google Case Study"
              />
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-6 mb-12">
          <div className="max-w-[1000px] mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                { label: "Production", value: caseData.production },
                { label: "Year", value: caseData.year },
                { label: "Roles", value: `${caseData.credits.length} roles` },
                { label: "Purpose", value: "Case Study Intro" },
              ].map((stat, i) => (
                <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                  <p className="font-semibold text-sm">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Problem & Solution */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-bold mb-3 text-foreground">Problem</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{caseData.problem}</p>
            </div>
            <div>
              <h2 className="text-xl font-bold mb-3 text-foreground">Solution</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">{caseData.solution}</p>
            </div>
          </div>
        </section>

        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4 text-foreground">Style Frames</h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
              {googleSbImages.map((img, i) => (
                <div 
                    key={i} 
                    className="aspect-video bg-surface/50 rounded-lg border border-border overflow-hidden hover:opacity-80 transition-opacity duration-300 cursor-zoom-in"
                    onClick={() => openLightbox(i, googleSbImages)}
                >
                  <img src={img} alt={`Style Frame ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Credits */}
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <h2 className="text-xl font-bold mb-4 text-foreground">Roles & Credits</h2>
            <div className="space-y-2">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-1 sm:gap-4 border-b border-border/60 last:border-0">
                {credit.link ? (
                  <a
                    href={credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm flex items-start sm:items-center gap-1.5 hover:opacity-70 transition-opacity duration-200 group text-foreground"
                  >
                    <span className="leading-tight">{credit.name}</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-80 transition-opacity mt-0.5 sm:mt-0 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                ) : (
                  <span className="font-medium text-sm leading-tight text-foreground">{credit.name}</span>
                )}
                <span className="text-xs text-muted-foreground text-left sm:text-right">{credit.role}</span>
              </div>
            ))}
            </div>
          </div>
        </section>

        {/* Next */}
        <div className="border-t border-border bg-surface/30 py-10 px-6">
          <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
              <p className="text-lg font-bold text-foreground">{nextCase.title}</p>
            </div>
            <Link to={`/work/${nextCase.id}`}>
              <Button variant="outline" className="group rounded-full">
                View Case
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>
          </div>
        </div>
        <Footer />
        <MediaLightbox 
            isOpen={lightbox.isOpen}
            images={lightbox.images}
            initialIndex={lightbox.index}
            onClose={() => setLightbox({ ...lightbox, isOpen: false })}
        />
      </div>
    );
  }

  // Default concise template
  return (
    <div className="min-h-screen bg-background text-foreground">
      <BackToWork />

      <section className="pt-24 pb-4 px-6">
        <div className="max-w-[900px] mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground border border-border rounded-full px-2.5 py-1">Case Study</span>
            <span className="text-xs font-mono text-muted-foreground">{caseData.year}</span>
          </div>
          <h1 className="text-2xl md:text-4xl font-semibold leading-tight tracking-tight mb-3 text-foreground">{caseData.title}</h1>
          <p className="text-lg text-muted-foreground max-w-[600px]">{caseData.overview}</p>
        </div>
      </section>

      <section className="px-6 mb-6">
        <div className="max-w-[1000px] mx-auto">
          <div className="aspect-video bg-black rounded-lg overflow-hidden relative group">
            <iframe
              src="https://player.vimeo.com/video/1177053983?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&loop=1&controls=1"
              className="absolute inset-0 w-full h-full"
              allow="autoplay; fullscreen; picture-in-picture"
              style={{ border: 0 }}
              loading="lazy"
              title="Project Video"
            />
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {[
              { label: "Production", value: caseData.production },
              { label: "Year", value: caseData.year },
              { label: "Roles", value: `${caseData.credits.length} roles` },
              { label: "Result", value: caseData.result.split(",")[0] },
            ].map((stat, i) => (
              <div key={i} className="bg-surface/50 rounded-md p-3 border border-border">
                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">{stat.label}</p>
                <p className="font-semibold text-sm truncate">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {caseData.keyHighlight && (
        <section className="px-6 mb-12">
          <div className="max-w-[700px] mx-auto">
            <div className="bg-foreground text-background rounded-lg p-6 md:p-8 text-center">
              <p className="text-base md:text-lg leading-relaxed">{caseData.keyHighlight}</p>
            </div>
          </div>
        </section>
      )}

      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-3 text-foreground">Problem</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{caseData.problem}</p>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-3 text-foreground">Solution</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">{caseData.solution}</p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-10">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-3 text-foreground">Outcome</h2>
          <div className="flex gap-3 p-4 bg-surface/50 rounded-md border border-border">
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm">{caseData.result}</p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="max-w-[700px] mx-auto">
          <h2 className="text-xl font-bold mb-4 text-foreground">Roles & Credits</h2>
          <div className="grid md:grid-cols-2 gap-x-6">
            {caseData.credits.map((credit, i) => (
              <div key={i} className="flex flex-col sm:flex-row items-start sm:items-center justify-between py-3 gap-1 sm:gap-4 border-b border-border/60 last:border-0">
                {credit.link ? (
                  <a
                    href={credit.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-sm flex items-start sm:items-center gap-1.5 hover:opacity-70 transition-opacity duration-200 group text-foreground"
                  >
                    <span className="leading-tight">{credit.name}</span>
                    <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="opacity-40 group-hover:opacity-80 transition-opacity mt-0.5 sm:mt-0 flex-shrink-0" xmlns="http://www.w3.org/2000/svg"><path d="M1 9L9 1M9 1H3M9 1V7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                  </a>
                ) : (
                  <span className="font-medium text-sm leading-tight text-foreground">{credit.name}</span>
                )}
                <span className="text-xs text-muted-foreground text-left sm:text-right">{credit.role}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="border-t border-border bg-surface/30 py-10 px-6">
        <div className="max-w-[700px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-xs text-muted-foreground mb-1">Next Case Study</p>
            <p className="text-lg font-bold text-foreground">{nextCase.title}</p>
          </div>
          <Link to={`/work/${nextCase.id}`}>
            <Button variant="outline" className="group rounded-full">
              View Case
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudy;
