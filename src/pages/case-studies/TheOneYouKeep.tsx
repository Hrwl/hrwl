/**
 * Case Study: The One You Keep — Brand Film
 * Route: /work/the-one-you-keep
 * Light/dark mode compatible via CSS variables
 */
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Heart,
  Zap,
  Layers,
  VolumeX,
  Music,
  Sparkles,
  Target,
  Mic,
  Palette,
  Film,
  Maximize,
  Search,
  CheckCircle2,
  ArrowRight,
  Shield,
  Clock,
  User,
  FileText,
  ArrowLeft,
  Calendar
} from "lucide-react";
import Navbar from "@/components/Navbar";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ─── Reusable sub-components ─── */

function StatCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex-1 min-w-[200px] rounded-xl p-6 bg-foreground/[0.04] border border-foreground/[0.08]">
      <span className="font-inter text-[12px] font-normal uppercase tracking-[0.6px] text-foreground/50">
        {label}
      </span>
      <p className="mt-2 font-inter text-[18px] font-semibold leading-[28px] text-foreground">
        {value}
      </p>
    </div>
  );
}

function SectionNumber({ n }: { n: string }) {
  return <span className="font-inter text-[14px] text-foreground/50">{n}</span>;
}

function SectionHeading({ children, size = "md" }: { children: React.ReactNode; size?: "md" | "lg" }) {
  const fontSize = size === "lg" ? "clamp(28px, 3vw, 36px)" : "24px";
  return (
    <h2
      className="text-foreground"
      style={{
        fontFamily: "Inter",
        fontWeight: 700,
        fontSize,
        lineHeight: size === "lg" ? "40px" : "32px",
        letterSpacing: size === "lg" ? "-1.08px" : "-0.72px",
      }}
    >
      {children}
    </h2>
  );
}

function ConstraintItem({ n, text }: { n: number; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl px-5 py-5 bg-foreground/[0.04] border border-foreground/[0.08]">
      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center bg-foreground">
        <span className="font-inter font-bold text-[14px] text-background">{n}</span>
      </div>
      <span className="font-inter font-medium text-[16px] leading-[24px] text-foreground">{text}</span>
    </div>
  );
}

function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3">
      <CheckCircle2 size={20} className="text-foreground/40" />
      <span className="font-inter text-[14px] font-medium text-foreground">{text}</span>
    </div>
  );
}

function GreenCheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl px-5 py-5 bg-foreground/[0.03] border border-foreground/[0.08]">
      <CheckCircle2 size={20} className="text-[#25F273]" />
      <span className="font-inter text-[16px] text-foreground">{text}</span>
    </div>
  );
}

function PlaceholderBox({ label, aspect = "16/9", className = "" }: { label?: string; aspect?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl flex items-center justify-center bg-foreground/[0.06] border border-foreground/[0.08] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {label && <span className="font-inter text-[14px] text-foreground/30">{label}</span>}
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function TheOneYouKeep() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background font-inter">
      <Navbar />

      {/* ── 01 Header ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1240px] px-6 pt-16 pb-2 md:px-10"
      >
        <Link
          to="/work"
          className="inline-flex items-center gap-2 group mb-6 no-underline transition-opacity hover:opacity-100"
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 500,
            fontSize: "13px",
            color: "hsl(var(--foreground) / 0.75)",
          }}
        >
          <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
          Back to Work
        </Link>

        <div className="inline-flex items-center rounded-full px-3 py-1 mb-6 border border-foreground/[0.12]">
          <span className="font-inter font-bold text-[11px] tracking-[0.1em] uppercase text-foreground/75">
            Case Study
          </span>
        </div>
        <h1
          style={{
            fontFamily: "Inter",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 68px)",
            lineHeight: "1.05",
            letterSpacing: "-2.5px",
            color: "hsl(var(--foreground))",
          }}
        >
          The One You Keep
        </h1>
        <p className="mt-6 font-inter text-foreground/50 max-w-[1240px]" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "1.35", letterSpacing: "-0.5px" }}>
          Engineering Emotional Recall Through Intentional Storytelling
        </p>
      </motion.section>

      {/* ── Hero video placeholder ── */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1240px] px-6 py-6 md:px-10"
      >
        <div
          className="relative overflow-hidden rounded-2xl w-full flex items-center justify-center bg-foreground/[0.06]"
          style={{ aspectRatio: "16/9", borderRadius: 16 }}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 80, height: 80, background: "hsl(var(--foreground) / 0.1)" }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M12 8L24 16L12 24V8Z" stroke="currentColor" strokeWidth="2.67" strokeLinejoin="round" className="text-foreground/60" />
            </svg>
          </div>
          <span className="absolute bottom-6 left-6 font-inter font-medium text-[14px] text-foreground/50">
            The One You Keep — Brand Film
          </span>
        </div>
      </motion.section>

      {/* ── Stat bar ── */}
      <ScrollReveal>
        <section className="mx-auto max-w-[1240px] px-6 py-4 md:px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <StatCard label="Format" value="Brand Film" />
            <StatCard label="Production" value="1 Month" />
            <StatCard label="Roles" value="8 Disciplines" />
            <StatCard label="Impact" value="Emotional Transfer" />
          </div>
        </section>
      </ScrollReveal>

      {/* ── The Result (light card) ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <div className="rounded-2xl p-12 md:p-16" style={{ borderRadius: 16, background: "hsl(0 0% 0% / 0.05)" }}>
            <div className="flex items-center gap-3 mb-6">
              <Heart size={32} className="text-foreground" />
              <span className="font-inter text-[14px] tracking-[0.7px] uppercase text-foreground/70">
                The Result
              </span>
            </div>
            <p
              className="text-foreground"
              style={{ fontFamily: "Inter", fontWeight: 400, fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: "1.35", maxWidth: 740 }}
            >
              Viewers did not comment on animation quality. They commented on <strong>people in their own lives.</strong>
            </p>
            <p className="mt-6 font-inter text-[18px] leading-[28px] text-foreground/70" style={{ maxWidth: 850 }}>
              That response pattern is not accidental—it's a signal of emotional transfer. The film was designed to be remembered, not rewatched.
            </p>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 01 Intent ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="flex flex-col gap-2">
              <SectionNumber n="01" />
              <SectionHeading>Intent</SectionHeading>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-inter text-foreground/50" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "32px" }}>
                Most brand content fails for one reason: it is transactional.
              </p>
              <p className="font-inter text-[18px] leading-[29px] text-foreground">
                It delivers information, checks boxes, and disappears. It does not stay with the viewer long enough to influence memory, preference, or behavior.
              </p>
              <p className="font-inter text-[18px] leading-[29px] text-foreground">
                The One You Keep was created to prove the opposite—that emotional recall can be deliberately designed. The film was produced as a birthday gift for my best friend, but executed at full brand-film production level to remove all commercial excuses.
              </p>
              <p className="font-inter font-medium text-[18px] leading-[29px] text-foreground">
                No brief. No KPI. No approval layers. No safety net.
              </p>
              <div className="rounded-2xl p-8 bg-foreground/[0.04] border border-foreground/[0.08]">
                <p className="font-inter text-[18px] leading-[28px] text-foreground">
                  The intent was not to impress. It was to test whether emotion could be manufactured on demand, using the same rigor typically reserved for commercial work.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 02 Emotional Objective ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 bg-foreground/[0.02]"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
              <div className="flex flex-col gap-2">
                <SectionNumber n="02" />
                <SectionHeading>Emotional{"\n"}Objective</SectionHeading>
              </div>
              <div className="flex flex-col gap-6">
                <p className="font-inter text-foreground" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "32px" }}>
                  The objective was precise:
                </p>
                <p className="font-inter text-[18px] leading-[28px] text-foreground/60">
                  Not to make the viewer sad. Not to make them happy.
                </p>
                <p className="font-inter font-bold text-foreground" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "32px" }}>
                  But to create quiet emotional residue—the kind that lingers after the film ends.
                </p>

                {/* Target Emotion card */}
                <div className="rounded-2xl p-8 bg-foreground/[0.06] border border-foreground/[0.1]">
                  <div className="flex items-center gap-3 mb-4">
                    <Target size={32} className="text-[#25F273]" />
                    <span className="font-inter font-semibold text-[18px] tracking-[-0.54px] text-foreground">
                      Target Emotion: Recognition
                    </span>
                  </div>
                  <p className="font-inter text-[16px] leading-[24px] text-foreground/60">
                    The feeling of realizing someone mattered more than you've ever said out loud. This is the emotional state that drives memorability, loyalty, and long-term attachment—exactly what brands struggle to achieve with surface-level storytelling.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 03 Constraints ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="flex flex-col gap-2">
              <SectionNumber n="03" />
              <SectionHeading>Constraints</SectionHeading>
            </div>
            <div className="flex flex-col gap-4">
              <p className="font-inter text-[20px] leading-[32px] text-foreground/60">
                The constraints were deliberate and severe:
              </p>
              <ConstraintItem n={1} text="No client brief or external validation" />
              <ConstraintItem n={2} text="No performance metrics to optimize against" />
              <ConstraintItem n={3} text="No commercial deadline pressure" />
              <ConstraintItem n={4} text="One creator acting as writer, director, animator, and producer" />
              <ConstraintItem n={5} text="One month of overinvestment into a non-monetized outcome" />
              <p className="mt-4 font-inter text-[16px] leading-[24px] text-foreground/60">
                These constraints removed optimization shortcuts. Without KPIs or feedback loops, every decision had to be justified internally. The only question that mattered was: does this deepen emotional clarity or dilute it?
              </p>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 04 Creative Decisions ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="flex flex-col gap-2">
              <SectionNumber n="04" />
              <SectionHeading>Creative{"\n"}Decisions</SectionHeading>
            </div>
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl p-8 text-center bg-foreground/[0.04] border border-foreground/[0.1]">
                <p className="font-inter font-semibold text-[20px] leading-[28px] text-foreground">
                  Every creative decision followed a single governing principle: restraint compounds emotion.
                </p>
              </div>
              <p className="font-inter text-[18px] leading-[29px] text-foreground">
                Nothing was added to make the film more impressive. Elements were added only if they sharpened meaning. If a moment could be felt without being shown, it was removed. If an idea could be implied instead of explained, it was implied.
              </p>
              <p className="font-inter text-[18px] leading-[29px] text-foreground">
                The film avoided spectacle by design. No visual flexing. No unnecessary motion. The role of craft was to disappear behind intent.
              </p>
              <p className="font-inter font-medium text-[18px] leading-[29px] text-foreground">
                This approach mirrors how high-performing brand narratives work: they don't demand attention—they earn it.
              </p>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 05 Production Breakdown ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <div className="flex flex-col gap-2 mb-8">
            <SectionNumber n="05" />
            <SectionHeading size="lg">Production Breakdown</SectionHeading>
            <p className="font-inter text-[20px] leading-[28px] text-foreground/60">
              Each phase served the emotional architecture—never decoration.
            </p>
          </div>

          {/* Script & Voiceover row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Script & Narrative card */}
            <div className="rounded-2xl p-8 bg-foreground/[0.06] border border-foreground/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-foreground">
                  <FileText size={20} className="text-background" />
                </div>
                <span className="font-inter font-bold text-[20px] tracking-[-0.6px] text-foreground">Script & Narrative</span>
              </div>
              <p className="font-inter text-[16px] leading-[24px] text-foreground/60">
                The film began as a poem, not a script. The writing process focused on compression—distilling years of shared memory into language that felt inevitable rather than expressive.
              </p>
              <div className="mt-4 rounded-xl p-5 bg-foreground border border-foreground/[0.1]">
                <span className="font-inter text-[14px] text-background/60">Key Question</span>
                <p className="mt-2 font-inter font-medium text-[16px] italic leading-[24px] text-background">
                  "Does this reveal something the viewer already knows but hasn't named?"
                </p>
              </div>
            </div>

            {/* Voiceover card */}
            <div className="rounded-2xl p-8 bg-foreground/[0.06] border border-foreground/[0.08]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-foreground">
                  <Mic size={20} className="text-background" />
                </div>
                <span className="font-inter font-bold text-[20px] tracking-[-0.6px] text-foreground">Voiceover</span>
              </div>
              <p className="font-inter text-[16px] leading-[24px] text-foreground/60">
                The narrative avoided chronology. Instead, it followed emotional logic—memory fragments, pauses, unsaid thoughts. This mirrors how people actually remember relationships.
              </p>
              <div className="mt-4 rounded-xl p-5 bg-foreground border border-foreground/[0.1]">
                <span className="font-inter text-[14px] text-background/60">Delivery Approach</span>
                <p className="mt-2 font-inter font-medium text-[16px] leading-[24px] text-background">
                  Written, revised, recorded, re-recorded until delivery felt neutral enough to be trusted.
                </p>
              </div>
            </div>
          </div>

          {/* Visual System (light card) */}
          <div className="rounded-2xl p-10 md:p-12 mb-6 bg-white text-black" style={{ borderRadius: 16 }}>
            <div className="grid grid-cols-1 md:grid-cols-[1fr\_1fr] gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Palette size={28} className="text-black" />
                  <span className="font-inter font-bold text-[24px] tracking-[-0.72px] text-black">Visual System</span>
                </div>
                <p className="font-inter text-[16px] leading-[24px] text-black/70">
                  The visual system was designed to support the writing, not decorate it. Color, composition, and pacing were intentionally minimal to prevent emotional inflation.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {["Negative space as breathing room", "Motion as punctuation", "Transitions over scenes"].map((t) => (
                    <div key={t} className="flex items-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <circle cx="10" cy="10" r="9" stroke="#00000066" strokeWidth="1.5" />
                        <path d="M6 10.5L8.5 13L14 7" stroke="#00000066" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-inter text-[14px] font-medium text-black">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
              <PlaceholderBox aspect="4/3" />
            </div>
          </div>

          {/* Storyboard section */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Film size={32} className="text-foreground/60" />
              <span className="font-inter font-bold text-[24px] tracking-[-0.72px] text-foreground">Storyboard</span>
            </div>
            <p className="mb-4 text-center font-inter text-[16px] text-foreground/50">
              Storyboard frames visualizing the emotional arc — context before execution.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {Array.from({ length: 8 }).map((_, i) => (
                <PlaceholderBox key={i} label={`Frame ${String(i + 1).padStart(2, "0")}`} aspect="16/10" />
              ))}
            </div>
          </div>

          {/* Styleframes */}
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Maximize size={32} className="text-foreground/60" />
              <span className="font-inter font-bold text-[24px] tracking-[-0.72px] text-foreground">Styleframes</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {["Styleframe 01", "Styleframe 02", "Styleframe 03"].map((label) => (
                <PlaceholderBox key={label} label={label} aspect="4/3" />
              ))}
            </div>
          </div>

          {/* Animation Process */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Zap size={32} className="text-foreground/60" />
                <span className="font-inter font-bold text-[24px] tracking-[-0.72px] text-foreground">Animation Process</span>
              </div>
              <p className="mb-4 font-inter text-[16px] leading-[24px] text-foreground/60">
                Animation was approached as emotional timing, not technical execution.
              </p>
              <div className="flex flex-col gap-3">
                {["Keyframes based on vocal cadence, not visual rhythm", "Holds longer than comfortable", "Movements resolve slower than expected"].map((item) => (
                  <div key={item} className="rounded-xl px-4 py-4 bg-foreground/[0.04] border border-foreground/[0.08]">
                    <span className="font-inter font-medium text-[16px] leading-[24px] text-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 font-inter text-[16px] leading-[24px] text-foreground/60">
                The animation system was modular, not bespoke. Motion rules were defined early and followed consistently.
              </p>
            </div>
            <PlaceholderBox aspect="1/1" className="min-h-[300px]" />
          </div>

          {/* Sonic Identity */}
          <div className="rounded-2xl p-10" style={{ borderRadius: 16, background: "hsl(0 0% 0% / 0.05)" }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Music size={32} className="text-foreground/60" />
                  <span className="font-inter font-bold text-[24px] tracking-[-0.72px] text-foreground">Sonic Identity</span>
                </div>
                <p className="font-inter text-[16px] leading-[24px] text-foreground/60">
                  Sound was treated as a narrative layer, not an enhancement. The emotional arc was mapped before collaboration began.
                </p>
                <div className="mt-6 flex flex-col gap-3">
                  {[{ n: "1", label: "Voice" }, { n: "2", label: "Texture" }, { n: "3", label: "Silence" }, { n: "4", label: "Score" }].map((item) => (
                    <div key={item.n} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center bg-foreground">
                        <span className="font-inter font-bold text-[12px] text-background">{item.n}</span>
                      </div>
                      <span className="font-inter font-medium text-[16px] text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-xl p-6 bg-foreground border border-foreground/[0.1]">
                <span className="font-inter text-[14px] tracking-[0.7px] uppercase text-background/60">Key Principle</span>
                <p className="mt-3 font-inter font-semibold text-[20px] leading-[28px] text-background">
                  Silence was used as a tool, not an absence. Music entered only when it added contrast, not sentimentality.
                </p>
              </div>
            </div>
          </div>

          {/* R&D / Exploration */}
          <div className="mt-6 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <Search size={32} className="text-foreground/60" />
              <span className="font-inter font-bold text-[24px] tracking-[-0.72px] text-foreground">R&D / Exploration</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["Color tests", "Type exploration", "Motion studies", "Texture R&D"].map((label) => (
                <PlaceholderBox key={label} label={label} aspect="1/1" />
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 06 Final Impact ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="py-10 bg-foreground/[0.06] dark:bg-foreground/[0.04]"
        >
          <div className="mx-auto max-w-[1240px] px-6 md:px-10">
            <div className="flex flex-col gap-2 mb-8">
              <SectionNumber n="06" />
              <SectionHeading size="lg">Final Impact</SectionHeading>
              <p className="font-inter text-[20px] leading-[32px] text-foreground/60">
                The film achieved its primary objective: it stayed with people.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <GreenCheckItem text="Demonstrates end-to-end creative direction" />
              <GreenCheckItem text="Shows emotional engineering under constraint" />
              <GreenCheckItem text="Signals authorship, restraint, and judgment" />
              <GreenCheckItem text="Proves collaboration without creative dilution" />
            </div>
            <div className="rounded-2xl p-8 text-center bg-foreground/[0.04]" style={{ borderRadius: 16 }}>
              <p className="font-inter text-[20px] leading-[32px] text-foreground">
                This was not art for art's sake. It was a controlled experiment in emotional leverage— executed without external incentives to prove internal discipline.
              </p>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── 07 Why This Matters for Brands ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-8">
            <div className="flex flex-col gap-2">
              <SectionNumber n="07" />
              <SectionHeading>Why This Matters for Brands</SectionHeading>
            </div>
            <div className="flex flex-col gap-6">
              <p className="font-inter text-foreground" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "32px" }}>
                Most brands chase attention. Few invest in recall.
              </p>
              <p className="font-inter text-[18px] leading-[29px] text-foreground">
                The One You Keep exists to show that emotional storytelling is not an indulgence—it's a system. When intention, narrative, visuals, and sound are aligned, emotion becomes predictable.
              </p>
              <p className="font-inter font-semibold text-[20px] leading-[28px] text-foreground">
                Predictable emotion becomes a business asset.
              </p>
              <div className="rounded-2xl p-8 text-center bg-foreground/[0.04] border border-foreground/[0.1]">
                <p className="font-inter text-[18px] leading-[28px] text-foreground">
                  This project wasn't created to be sold. It was created to prove that it could be.
                </p>
                <p className="mt-4 font-inter text-[16px] leading-[24px] text-foreground/60">
                  And that distinction is the difference between content that performs—and stories that endure.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── Credits ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <SectionHeading>Credits</SectionHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mt-8">
            {[
              { role: "Creative Direction", name: "Djamel Haroual" },
              { role: "Poem Writing", name: "Djamel Haroual" },
              { role: "Voiceover", name: "Djamel Haroual" },
              { role: "Pixel Art Design", name: "Djamel Haroual" },
              { role: "Character Animation", name: "Djamel Haroual" },
              { role: "Motion Design", name: "Djamel Haroual" },
              { role: "Sound Design", name: "John Green" },
              { role: "Music Composition", name: "Penrose Audio" },
            ].map((credit, i) => (
              <div key={i} className="flex items-center justify-between py-5 px-4 border-b border-foreground/[0.08]">
                <span className="font-inter text-[15px] text-foreground">{credit.role}</span>
                <span className="font-inter text-[15px] text-foreground/40">{credit.name}</span>
              </div>
            ))}
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10 py-10">
        <CTABanner />
      </div>

      {/* ── Next Case Study nav ── */}
      <div className="border-t border-foreground/[0.08] bg-foreground/[0.02]">
        <div className="mx-auto max-w-[1240px] px-6 py-12 md:px-10 flex items-center justify-between">
          <div>
            <span className="font-inter text-[14px] text-foreground/50">Next Case Study</span>
            <p className="mt-1 font-inter font-bold text-foreground" style={{ fontSize: "clamp(18px, 2vw, 24px)", lineHeight: "32px" }}>
              HRWL — Visual Identity + Brand Film
            </p>
          </div>
          <Link
            to="/work/hrwl-visual-identity"
            onClick={() => window.scrollTo({ top: 0 })}
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 no-underline transition-opacity hover:opacity-80 bg-foreground group"
            style={{ fontFamily: "Inter", fontWeight: 500, fontSize: 14 }}
          >
            <span className="text-background">View Case</span>
            <ArrowRight size={16} className="text-background transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

      <Footer variant="white" catchphrase="Let's create something worth watching." />
    </div>
  );
}
