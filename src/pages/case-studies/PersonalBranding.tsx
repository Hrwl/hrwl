/**
 * Case Study: Repositioning a Motion Designer From Executor to Strategic Creative Director
 * Route: /work/personal-branding
 */
import Navbar from "@/components/Navbar";
import BackToWork from "@/components/BackToWork";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Eye, Sparkles, Shield, Target, Repeat, FileText, CheckCircle2, ArrowUpRight, Layers, Zap, Users, Crosshair, Lightbulb, BarChart3, Puzzle, Clock, User, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import CTABanner from "@/components/CTABanner";
import { ScrollReveal } from "@/components/ScrollReveal";

/* ── Reusable sub-components ── */

function Thumb({ aspect = "16/9", label = "", className = "" }: { aspect?: string; label?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-foreground/[0.06] border border-foreground/[0.08] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <img src="/placeholder.svg" alt={label || "placeholder"} className="h-full w-full object-cover opacity-20" />
      {label && (
        <span className="absolute bottom-3 left-3 text-[11px] text-foreground/40 font-inter">{label}</span>
      )}
    </div>
  );
}

/* Section with numbered label + heading on the left, content on the right */
function NumberedSection({
  num,
  heading,
  children,
  bgClass = "",
}: {
  num: string;
  heading: string;
  children: React.ReactNode;
  bgClass?: string;
}) {
  return (
    <ScrollReveal>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={`${bgClass}`}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
            <div>
              <span className="text-[14px] font-inter text-foreground/50">{num}</span>
              <h2
                className="mt-2"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 700,
                  fontSize: "24px",
                  lineHeight: "32px",
                  letterSpacing: "-0.72px",
                  color: "hsl(var(--foreground))",
                }}
              >
                {heading}
              </h2>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </motion.section>
    </ScrollReveal>
  );
}

/* Large heading section (for dark/visual sections) */
function LargeSection({
  num,
  heading,
  children,
  dark = false,
}: {
  num: string;
  heading: string;
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <ScrollReveal>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className={dark ? "bg-[#141414]" : "bg-foreground/[0.02]"}
      >
        <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
          <span className={`text-[14px] font-inter ${dark ? "text-white/60" : "text-foreground/50"}`}>{num}</span>
          <h2
            className="mt-2 mb-6"
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "36px",
              lineHeight: "40px",
              letterSpacing: "-1.08px",
              color: dark ? "#FFFFFF" : "hsl(var(--foreground))",
            }}
          >
            {heading}
          </h2>
          {children}
        </div>
      </motion.section>
    </ScrollReveal>
  );
}

/* Constraint item with black circle icon + Lucide icon */
function ConstraintItem({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-start gap-5 mb-8">
      <div className="w-12 h-12 rounded-full bg-foreground flex-shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "18px",
            lineHeight: "28px",
            letterSpacing: "-0.54px",
            color: "hsl(var(--foreground))",
          }}
        >
          {title}
        </h3>
        <p className="mt-2 text-[16px] font-inter leading-[24px] text-foreground/50">{desc}</p>
      </div>
    </div>
  );
}

/* Strategy card with icon */
function StrategyCard({ title, desc, icon }: { title: string; desc: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-[#E8E8E8] dark:border-foreground/10 bg-background p-8">
      <div className="mb-4 text-foreground/60">
        {icon}
      </div>
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "-0.54px",
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </h3>
      <p className="mt-2 text-[16px] font-inter leading-[24px] text-foreground/50">{desc}</p>
    </div>
  );
}

/* Decision filter row with checkmark icon */
function FilterRow({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-foreground/[0.03] border border-[#E8E8E8] dark:border-foreground/10 px-6 py-5 mb-3">
      <CheckCircle2 size={20} className="text-foreground/40 flex-shrink-0" />
      <span className="text-[16px] font-inter font-medium text-foreground">{text}</span>
    </div>
  );
}

/* Process timeline item */
function TimelineItem({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="relative pl-8 pb-8 border-l-2 border-foreground/10 last:border-0">
      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-foreground" />
      <h3
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "18px",
          lineHeight: "28px",
          letterSpacing: "-0.54px",
          color: "hsl(var(--foreground))",
        }}
      >
        {title}
      </h3>
      <p className="mt-2 text-[16px] font-inter leading-[24px] text-foreground/50">{desc}</p>
    </div>
  );
}

/* Callout box */
function Callout({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div
      className={`rounded-2xl px-8 py-9 text-center ${dark
        ? "bg-white/[0.05] border border-white/20"
        : "bg-foreground/[0.05] border border-foreground/20"
        }`}
    >
      <p
        className="font-inter font-medium text-[18px] leading-[28px]"
        style={{ color: dark ? "rgba(255,255,255,0.8)" : "hsl(var(--foreground))" }}
      >
        {children}
      </p>
    </div>
  );
}

/* Outcome card with checkmark */
function OutcomeCard({ text }: { text: string }) {
  return (
    <div className="rounded-xl border border-[#E8E8E8] dark:border-foreground/10 bg-background px-6 py-6 flex items-start gap-4">
      <CheckCircle2 size={20} className="text-foreground/40 flex-shrink-0 mt-0.5" />
      <span className="text-[16px] font-inter leading-[24px] text-foreground">{text}</span>
    </div>
  );
}

/* Numbered step row */
function NumberedStep({ n, text }: { n: number; text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-foreground/[0.03] px-6 py-4 mb-3">
      <div className="w-8 h-8 rounded-full bg-foreground flex-shrink-0 flex items-center justify-center">
        <span className="text-background font-inter font-bold text-[14px]">{n}</span>
      </div>
      <span className="text-[16px] font-inter font-medium text-foreground">{text}</span>
    </div>
  );
}

/* ═══════════════════════════════════════════
   MAIN PAGE
═══════════════════════════════════════════ */
export default function PersonalBranding() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />

      {/* ── HEADER ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1240px] px-6 pt-16 pb-4 md:px-10"
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

        <span className="inline-block rounded-full border border-foreground/10 px-3 py-1 text-[11px] font-inter font-bold tracking-[0.1em] uppercase text-foreground/75 mb-6">
          Case Study
        </span>
        <h1
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(32px, 5vw, 68px)",
            lineHeight: "1.05",
            letterSpacing: "-2.5px",
            color: "hsl(var(--foreground))",
          }}
        >
          Repositioning a Motion Designer From Executor to Strategic Creative Director
        </h1>

        {/* Meta bar */}
        <div className="flex gap-6 mt-8 flex-wrap text-[13px] font-inter font-medium text-foreground/40">
          <span className="flex items-center gap-2 bg-foreground/[0.03] px-3 py-1.5 rounded-lg border border-foreground/[0.05]"><Clock size={14} /> 1 Month</span>
          <span className="flex items-center gap-2 bg-foreground/[0.03] px-3 py-1.5 rounded-lg border border-foreground/[0.05]"><User size={14} /> Solo Project</span>
          <span className="flex items-center gap-2 bg-foreground/[0.03] px-3 py-1.5 rounded-lg border border-foreground/[0.05]"><FileText size={14} /> Brand Strategy + Identity</span>
        </div>
      </motion.section>

      {/* ── HERO IMAGE ── */}
      <ScrollReveal delay={0.3}>
        <motion.section
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mx-auto max-w-[1240px] px-6 py-8 md:px-10"
        >
          <div className="rounded-2xl bg-[#141414] overflow-hidden" style={{ aspectRatio: "1400/600" }}>
            <img src="/placeholder.svg" alt="Hero" className="w-full h-full object-cover opacity-20" />
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════
          01 — PROBLEM
      ═══════════════════════════════════════════ */}
      <NumberedSection num="01" heading="Problem">
        <p className="text-[24px] font-inter leading-[32px] text-foreground/50 mb-6">
          The business problem was not a lack of skill. It was a lack of leverage.
        </p>
        <p className="text-[18px] font-inter leading-[29px] text-foreground mb-4">
          Technically, the work was strong. Visually, it was competitive. But in the market, the brand was positioned as a service provider, not a decision-maker. Clients evaluated the work based on aesthetics rather than outcomes. Conversations revolved around execution details instead of business impact.
        </p>
        <p className="text-[18px] font-inter leading-[29px] text-foreground mb-4">
          As a result, pricing was constantly negotiated, projects were transactional, and every new engagement required rebuilding trust from zero.
        </p>
        <p className="text-[18px] font-inter font-medium leading-[29px] text-foreground mb-8">
          This positioning attracted the wrong type of client: price-sensitive, taste-driven buyers looking for "a motion designer," not partners looking for thinking. That compressed margins, extended sales cycles, and forced constant outbound selling to maintain momentum.
        </p>
        <Callout>
          The core issue was not visibility. It was misalignment between capability and perception. The market saw execution. The business needed to signal strategy.
        </Callout>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          02 — CONSTRAINTS
      ═══════════════════════════════════════════ */}
      <NumberedSection num="02" heading="Constraints">
        <p className="text-[24px] font-inter leading-[32px] text-foreground/50 mb-8">
          This repositioning had one major constraint: the product and the brand were the same person.
        </p>
        <ConstraintItem
          title="No Borrowed Authority"
          desc="Unlike a studio, there was no team to hide behind, no layers of hierarchy. Every signal of strategic thinking had to be communicated through work, systems, and language— not claims."
          icon={<Eye size={20} className="text-background" />}
        />
        <ConstraintItem
          title="Credibility Risk"
          desc="Over-positioning without substance would immediately collapse trust. The solution had to prove strategic thinking through execution, not through self-description. The brand needed to feel inevitable, not aspirational."
          icon={<Target size={20} className="text-background" />}
        />
        <ConstraintItem
          title="Limited Differentiation"
          desc="The motion design market is visually saturated. Competing on style would only reinforce the existing problem. The repositioning had to shift the evaluation criteria entirely."
          icon={<Layers size={20} className="text-background" />}
        />
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          03 — STRATEGY
      ═══════════════════════════════════════════ */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-foreground/[0.02]"
        >
          <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
            <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
              <div>
                <span className="text-[14px] font-inter text-foreground/50">03</span>
                <h2 className="mt-2" style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.72px", color: "hsl(var(--foreground))" }}>Strategy</h2>
              </div>
              <div>
                <p className="text-[24px] font-inter leading-[32px] text-foreground mb-8">
                  The strategic decision was to stop competing as a motion designer and instead position as a creative director who uses motion design as a problem-solving tool.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
                  <StrategyCard
                    title="Ideal Client Definition"
                    desc="Founders, CMOs, and brand leads who already value storytelling, clarity, and long-term brand equity—but lack a partner who can translate strategy into motion systems."
                    icon={<Crosshair size={28} strokeWidth={1.5} />}
                  />
                  <StrategyCard
                    title="Reframed Value Proposition"
                    desc="The problem being solved was reframed from 'making visuals' to reducing brand risk. The value proposition became clarity, coherence, and narrative control across touchpoints—not just deliverables."
                    icon={<Zap size={28} strokeWidth={1.5} />}
                  />
                  <StrategyCard
                    title="Trust Compression Mechanism"
                    desc="Brand identity was used to compress trust. Instead of asking clients to believe in strategic thinking, the brand would demonstrate it before contact. Every asset would function as silent proof."
                    icon={<Shield size={28} strokeWidth={1.5} />}
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════
          04 — DECISION-MAKING
      ═══════════════════════════════════════════ */}
      <NumberedSection num="04" heading="Decision-Making">
        <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-6">
          All downstream decisions followed three filters:
        </p>
        <FilterRow text="Does this signal thinking or taste?" />
        <FilterRow text="Does this reduce perceived risk for a decision-maker?" />
        <FilterRow text="Does this justify a higher anchor price without explanation?" />
        <p className="text-[18px] font-inter leading-[29px] text-foreground mt-8 mb-4">
          The target client profile informed pricing strategy. Rather than mid-market invisibility, the brand anchored above freelancers and below full studios—positioned as a strategic alternative, not a compromise.
        </p>
        <p className="text-[18px] font-inter font-medium leading-[29px] text-foreground">
          This meant rejecting volume work, aesthetic-only briefs, and trends that signaled execution-first thinking. The goal was not more clients, but fewer, better-aligned ones.
        </p>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          05 — PROCESS
      ═══════════════════════════════════════════ */}
      <NumberedSection num="05" heading="Process">
        <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-8">
          The process was designed as a system, not a project.
        </p>
        <div className="mb-8">
          <TimelineItem
            title="Thinking Framework Formalized"
            desc="Every engagement follows the same structure: problem definition, narrative intent, system design, execution. This ensured consistency and removed reliance on inspiration."
          />
          <TimelineItem
            title="Motion Language Codified"
            desc="Motion was treated as a storytelling grammar—timing, restraint, emphasis—rather than decoration. The system prioritized clarity over spectacle."
          />
          <TimelineItem
            title="Documentation as Output"
            desc='Strategy was made visible through artifacts: storyboards, rationale, structure. This reframed the role from "maker" to "director."'
          />
        </div>
        <Callout>
          Every decision answered a single question: Does this make the client feel guided?
        </Callout>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          06 — POSITIONING NARRATIVE
      ═══════════════════════════════════════════ */}
      <NumberedSection num="06" heading="Positioning Narrative">
        <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-6">
          The narrative was designed not to persuade, but to qualify.
        </p>
        <p className="text-[18px] font-inter leading-[29px] text-foreground mb-4">
          Every piece of communication was filtered for implied capability. Instead of saying "I think strategically," the work demonstrated strategic thinking. Instead of describing the process, the process was embedded into client-facing materials.
        </p>
        <p className="text-[18px] font-inter font-medium leading-[29px] text-foreground mb-8">
          The positioning narrative used restraint as proof. What was left out mattered as much as what was included.
        </p>
        <Callout>
          The brand didn't explain. It demonstrated.
        </Callout>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          07 — STYLE FRAMES & VISUAL DIRECTION (DARK)
      ═══════════════════════════════════════════ */}
      <ScrollReveal>
        <section className="bg-[#141414]">
          <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
            <span className="text-[14px] font-inter text-white/60">07</span>
            <h2
              className="mt-2 mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "40px", letterSpacing: "-1.08px", color: "#FFFFFF" }}
            >
              Style Frames & Visual Direction
            </h2>
            <p className="text-[20px] font-inter leading-[32px] text-white/70 mb-8 max-w-[500px]">
              The visual direction was intentionally restrained.
            </p>

            {/* Two placeholder video boxes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="rounded-xl bg-white/10 flex items-center justify-center" style={{ aspectRatio: "1/0.7" }}>
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white/60 ml-1" />
                </div>
              </div>
              <div className="rounded-xl bg-white/10 flex items-center justify-center" style={{ aspectRatio: "1/0.7" }}>
                <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                  <div className="w-6 h-6 rounded border-2 border-white/40" />
                </div>
              </div>
            </div>

            {/* Three info cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {[
                { title: "Color Strategy", desc: "Color was used strategically, not expressively. A limited palette signaled control and focus." },
                { title: "Typography Authority", desc: "Typography favored clarity and authority over novelty." },
                { title: "Negative Space", desc: "Treated as a tool for emphasis, not emptiness. Every visual choice reduced cognitive load." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl bg-white/[0.05] p-6">
                  <h3 className="font-inter font-semibold text-[16px] leading-[24px] tracking-[-0.48px] text-white mb-2">{item.title}</h3>
                  <p className="font-inter text-[14px] leading-[20px] text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>

            <p className="text-center font-inter text-[18px] leading-[28px] text-white/80">
              The goal was not to impress designers, but to reassure stakeholders. Premium positioning comes from predictability, not surprise.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════
          08 — LOGO & IDENTITY SYSTEM
      ═══════════════════════════════════════════ */}
      <LargeSection num="08" heading="Logo & Identity System">
        <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-8">
          The identity system was designed to scale without explanation.
        </p>

        {/* Three dark logo cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {["HRWL Main Logo", "HRWL W Logo", "HRWL Logo Animation"].map((label, i) => (
            <div key={i} className="rounded-2xl bg-[#141414] flex items-center justify-center" style={{ aspectRatio: "1/0.95" }}>
              <span className="text-white/30 font-inter text-[14px]">{label}</span>
            </div>
          ))}
        </div>

        {/* Business cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {["Business Card Front", "Business Card Back"].map((label) => (
            <div key={label} className="rounded-2xl bg-foreground/[0.03] border border-foreground/[0.08] p-8">
              <Thumb aspect="16/10" label={label} />
            </div>
          ))}
        </div>

        {/* Video placeholder */}
        <div className="rounded-2xl bg-[#141414] overflow-hidden mb-6" style={{ aspectRatio: "1400/788" }}>
          <img src="/placeholder.svg" alt="Business card video" className="w-full h-full object-cover opacity-10" />
        </div>

        {/* Two-column descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-inter font-semibold text-[18px] leading-[28px] tracking-[-0.54px] text-foreground">Motion Behavior</h3>
            <p className="mt-2 font-inter text-[16px] leading-[24px] text-foreground/50">
              The logo's animation was minimal, deliberate, and repeatable—reinforcing consistency across platforms.
            </p>
          </div>
          <div>
            <h3 className="font-inter font-semibold text-[18px] leading-[28px] tracking-[-0.54px] text-foreground">Operational Maturity</h3>
            <p className="mt-2 font-inter text-[16px] leading-[24px] text-foreground/50">
              The system worked across decks, reels, social, and client deliverables without adaptation. That coherence signaled operational maturity—a key trust driver for high-value clients.
            </p>
          </div>
        </div>
      </LargeSection>

      {/* ═══════════════════════════════════════════
          09 — DEMO REEL STRATEGY
      ═══════════════════════════════════════════ */}
      <NumberedSection num="09" heading="Demo Reel Strategy">
        <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-6">
          The demo reel was rebuilt as a thinking artifact, not a highlight reel.
        </p>
        <p className="text-[18px] font-inter leading-[29px] text-foreground mb-4">
          Work was sequenced to show progression, not peaks. Context was implied through structure, pacing, and transitions. The reel communicated judgment, not range.
        </p>
        <p className="text-[18px] font-inter font-medium leading-[29px] text-foreground">
          Clients who responded to the reel already understood the positioning. Those who didn't self-selected out—by design.
        </p>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          10 — EXECUTION
      ═══════════════════════════════════════════ */}
      <LargeSection num="10" heading="Execution">
        <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-8">
          Execution followed the same discipline as strategy.
        </p>

        {/* Two cards with video placeholders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-2xl bg-foreground/[0.03] overflow-hidden">
            <Thumb aspect="1/0.87" label="3D Spline" />
            <div className="p-6">
              <h3 className="font-inter font-bold text-[18px] leading-[28px] tracking-[-0.54px] text-foreground">3D Character System</h3>
              <p className="mt-1 font-inter text-[14px] leading-[20px] text-foreground/50">Technical decisions favored reliability over novelty.</p>
            </div>
          </div>
          <div className="rounded-2xl bg-foreground/[0.03] overflow-hidden">
            <Thumb aspect="1/0.87" label="Chibi Batman" />
            <div className="p-6">
              <h3 className="font-inter font-bold text-[18px] leading-[28px] tracking-[-0.54px] text-foreground">Character Animation</h3>
              <p className="mt-1 font-inter text-[14px] leading-[20px] text-foreground/50">Constraints were treated as design inputs, not limitations.</p>
            </div>
          </div>
        </div>

        {/* THANKS FOR WATCHING endcard */}
        <div className="rounded-2xl bg-[#141414] overflow-hidden mb-6" style={{ aspectRatio: "1400/450" }}>
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white/20 font-inter font-bold text-[20px] tracking-[0.3em] uppercase">THANKS FOR WATCHING</span>
          </div>
        </div>

        <p className="text-center font-inter text-[18px] leading-[28px] text-foreground/50">
          Quality was protected by reducing scope, not cutting corners. Every deliverable reinforced the same message: this work is intentional.
        </p>
      </LargeSection>

      {/* ═══════════════════════════════════════════
          11 — IMPACT & OUTCOMES
      ═══════════════════════════════════════════ */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-foreground/[0.02]"
        >
          <div className="mx-auto max-w-[1240px] px-6 py-16 md:px-10">
            <span className="text-[14px] font-inter text-foreground/50">11</span>
            <h2
              className="mt-2 mb-2"
              style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "36px", lineHeight: "40px", letterSpacing: "-1.08px", color: "hsl(var(--foreground))" }}
            >
              Impact & Outcomes
            </h2>
            <p className="text-[20px] font-inter leading-[32px] text-foreground/50 mb-8">
              The repositioning produced measurable shifts:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <OutcomeCard text="Average project value increased as pricing conversations moved from hours to outcomes" />
              <OutcomeCard text='Inquiry quality improved, with fewer "how much per video" requests' />
              <OutcomeCard text="Sales cycles shortened due to pre-qualified leads" />
              <OutcomeCard text="Client conversations began at strategy, not execution" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              <OutcomeCard text="Referrals increased due to clearer positioning" />
            </div>

            <Callout>
              Most importantly, the business required less selling. The brand did the work upfront.
            </Callout>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ═══════════════════════════════════════════
          12 — LESSONS LEARNED
      ═══════════════════════════════════════════ */}
      <NumberedSection num="12" heading="Lessons Learned">
        <div className="space-y-0">
          {[
            "Taste does not differentiate. Thinking does.",
            "Strategy only works when it's visible.",
            "Claims without systems collapse trust.",
            "Restraint communicates confidence.",
            "Clarity attracts better clients than volume ever will.",
          ].map((lesson, i) => (
            <div key={i} className="border-l-2 border-foreground/10 pl-6 py-3">
              <p className="text-[20px] font-inter leading-[32px] text-foreground">{lesson}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 font-inter text-[18px] leading-[28px] text-foreground/50">
          The most valuable outcome was not higher prices—it was alignment.
        </p>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ═══════════════════════════════════════════
          13 — WHAT'S REPEATABLE
      ═══════════════════════════════════════════ */}
      <NumberedSection num="13" heading="What's Repeatable">
        <p className="text-[20px] font-inter leading-[32px] text-foreground mb-6">
          This is not a one-off rebrand. It's a framework.
        </p>
        <NumberedStep n={1} text="Diagnose perception gaps before designing" />
        <NumberedStep n={2} text="Position around risk reduction, not features" />
        <NumberedStep n={3} text="Use systems to signal thinking" />
        <NumberedStep n={4} text="Let narrative guide execution" />
        <NumberedStep n={5} text="Design for trust compression" />

        <div className="mt-8 rounded-2xl bg-foreground p-8">
          <p className="font-inter text-[20px] leading-[32px] text-background">
            This methodology now applies to every client engagement. The work adapts. The thinking remains constant.
          </p>
          <p className="mt-4 font-inter text-[18px] leading-[28px] text-background/70">
            That consistency is the brand.
          </p>
        </div>
      </NumberedSection>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10"><hr className="border-foreground/[0.08]" /></div>

      {/* ── Credits ── */}
      <ScrollReveal>
        <section className="mx-auto max-w-[1240px] px-6 py-12 md:px-10">
          <h2
            style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "24px", lineHeight: "32px", letterSpacing: "-0.72px", color: "hsl(var(--foreground))" }}
            className="mb-10"
          >
            Credits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16">
            {[
              { role: "Creative Direction & Motion", name: "Djamel Haroual" },
              { role: "Sound Design", name: "Kelvin" },
            ].map((c, i) => (
              <div key={i} className="flex items-baseline gap-6">
                <span className="text-[14px] font-inter text-foreground/40 whitespace-nowrap min-w-[180px]">{c.role}</span>
                <span className="text-[18px] font-inter font-bold text-foreground">{c.name}</span>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <CTABanner />
      </div>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10 pt-12 pb-6"><hr className="border-foreground/[0.08]" /></div>

      {/* ── Prev / Next ── */}
      <div className="mx-auto max-w-[1240px] px-6 py-6 md:px-10 flex items-center justify-between">
        <Link to="/work/coinbase-commercial" className="font-inter text-[14px] text-foreground/50 hover:text-foreground transition-colors no-underline">
          ← Coinbase Commercial
        </Link>
        <Link to="/work/hrwl-visual-identity" className="font-inter text-[14px] text-foreground/50 hover:text-foreground transition-colors no-underline">
          HRWL Visual Identity →
        </Link>
      </div>

      <Footer catchphrase="Cinematic Brand Films" />
    </div>
  );
}
