/**
 * Case Study: Coinbase — Commercial
 * Route: /work/coinbase-commercial
 */
import Navbar from "@/components/Navbar";
import BackToWork from "@/components/BackToWork";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Zap, Layers, Calendar, UsersRound, FileText, Search, Heart, Lightbulb, ArrowLeft } from "lucide-react";
import CTABanner from "@/components/CTABanner";
import { ScrollReveal } from "@/components/ScrollReveal";

function Thumb({ aspect = "16/9", label = "", className = "" }: { aspect?: string; label?: string; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-foreground/[0.06] border border-foreground/[0.08] ${className}`}
      style={{ aspectRatio: aspect }}
    >
      <img src="/placeholder.svg" alt={label || "placeholder"} className="h-full w-full object-cover opacity-20" />
      {label && (
        <span className="absolute bottom-3 left-3 text-[11px] text-foreground/40 font-arial">{label}</span>
      )}
    </div>
  );
}

function SectionLabel({ children, className = "mb-8" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={className}
      style={{
        fontFamily: "Arial, sans-serif",
        fontWeight: 700,
        fontSize: "45.5px",
        lineHeight: "45px",
        letterSpacing: "-1.14px",
        color: "hsl(var(--foreground))",
      }}
    >
      {children}
    </h2>
  );
}

function PhaseStep({ n, title, desc, ledBy, i, isLast }: { n: string; title: string; desc: string; ledBy: string; i: number; isLast?: boolean }) {
  return (
    <div
      className="relative flex items-start w-full group"
      style={{
        height: "151.66px",
        marginBottom: isLast ? "0" : "22.75px"
      }}
    >
      {/* Background container (Paragraph+Overlay) */}
      <div
        className="absolute w-[calc(100%-60px)] h-full right-0 top-0 rounded-[15.17px]"
        style={{ background: "hsl(var(--foreground) / 0.05)" }}
      >
        <div className="relative h-full">
          {/* Title */}
          <h3
            style={{
              position: "absolute",
              left: "53.08px",
              top: "30.33px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontSize: "22.75px",
              lineHeight: "30px",
              color: "hsl(var(--foreground))",
              height: "30.33px",
              display: "flex",
              alignItems: "center",
              letterSpacing: "-0.45px"
            }}
          >
            {title}
          </h3>
          {/* Description */}
          <p
            style={{
              position: "absolute",
              left: "53.08px",
              top: "68.24px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: "15.17px",
              lineHeight: "23px",
              color: "hsl(var(--foreground) / 0.75)",
              display: "flex",
              alignItems: "center",
              maxWidth: "450px",
              height: "22.75px"
            }}
          >
            {desc}
          </p>
          {/* Led by */}
          <p
            style={{
              position: "absolute",
              left: "53.08px",
              top: "104.26px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: "13.27px",
              lineHeight: "19px",
              color: "hsl(var(--foreground))",
              display: "flex",
              alignItems: "center"
            }}
          >
            {ledBy}
          </p>
        </div>
      </div>

      {/* Circle (Number) */}
      <div
        className="flex-shrink-0 flex items-center justify-center z-10"
        style={{
          width: "45.5px",
          height: "45.5px",
          background: "hsl(var(--foreground))",
          borderRadius: "9477px",
          marginTop: "30.33px"
        }}
      >
        <span
          style={{
            fontFamily: "Arial, sans-serif",
            fontWeight: 700,
            fontSize: "15.17px",
            lineHeight: "23px",
            color: "hsl(var(--background))",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          {n}
        </span>
      </div>
    </div>
  );
}

export default function CoinbaseCommercial() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-foreground selection:text-background">
      <Navbar />

      {/* ── Header ── */}
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

        <h1
          className="mb-4"
          style={{
            fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(28px, 4vw, 40px)",
            lineHeight: "1.05",
            letterSpacing: "-1.2px",
            color: "hsl(var(--foreground))",
            textTransform: "capitalize",
          }}
        >
          Coinbase — Commercial
        </h1>
        <p className="text-[17px] font-arial text-foreground/80 mb-10 leading-relaxed max-w-[600px]">
          A commercial that makes you forget you're watching an ad.
        </p>

      </motion.section>

      {/* ── Hero image ── */}
      <motion.section
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-[1240px] px-6 pb-4 md:px-10"
      >
        <Thumb aspect="16/9" label="Coinbase Commercial" className="rounded-2xl" />
      </motion.section>

      {/* Stat bar */}
      <ScrollReveal>
        <div className="mx-auto max-w-[1240px] px-6 pb-4 md:px-10">
          <div className="flex gap-x-12 gap-y-12 flex-wrap py-6 border-t border-foreground/[0.08] justify-start">
            {[
              { label: "Leads generated", value: "$54k", underline: true, labelW: "192px" },
              { label: "Results", value: "Modular identity and motion toolkit with a Commercial.", labelW: "174.58px" },
              { label: "Production", value: "6 weeks", labelW: "124.9px" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2 min-w-[100px]" style={{ maxWidth: s.label === "Results" ? "624px" : "auto" }}>
                <span
                  className="text-foreground font-medium font-arial"
                  style={{
                    fontSize: "25px",
                    lineHeight: "38px",
                    letterSpacing: "-0.91px",
                    width: s.labelW,
                    display: "flex",
                    alignItems: "center"
                  }}
                >
                  {s.label}
                </span>
                <div className="relative">
                  <span
                    className="text-foreground font-semibold"
                    style={{
                      fontFamily: "'EB Garamond', serif",
                      fontSize: "25px",
                      lineHeight: "35px",
                      letterSpacing: "-0.59px",
                      display: "flex",
                      alignItems: "center"
                    }}
                  >
                    {s.value}
                  </span>
                  {s.underline && (
                    <div className="absolute -bottom-5 -left-1 pb-4">
                      <svg width="85" height="41" viewBox="0 0 85 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.58789 38.4625C11.676 37.3939 21.7641 35.1596 41.9402 34.1881C62.1164 33.2167 72.608 34.1881 82.2926 34.5767C84.2295 34.6544 80.7592 35.6842 80.6785 35.7425" stroke="#004BE5" strokeWidth="2.88943" strokeLinecap="square" strokeLinejoin="bevel" />
                      </svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── Project Overview ── */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-[1fr_500px] gap-12 items-start">
          <div className="flex flex-col">
            <SectionLabel className="mb-2">Project Overview</SectionLabel>
            <p className="font-arial text-foreground/60 leading-relaxed max-w-[450px] mb-12" style={{ fontSize: "14.21px" }}>
              Over the course of 1 month, we studied Coinbase's challenge, analyzed their successful past campaigns, and crafted a storytelling-driven commercial that intrigues viewers while showcasing crypto's advantages — all guided by the principle: 'a good commercial sells, a great one hides that it's selling.'
            </p>

            <div className="flex flex-col gap-8">
              {[
                { icon: <Target size={22.75} />, label: "The Challenge", value: "Create compelling financial messaging that doesn't feel like jargon-heavy advertising — making viewers engage with the story, not skip the ad." },
                { icon: <Calendar size={22.75} />, label: "Timeline", value: "1 month" },
                { icon: <UsersRound size={22.75} />, label: "Team", value: "9 specialists" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-[15px]">
                  <span className="text-foreground flex-shrink-0 mt-0.5" style={{ width: "22.75px", height: "22.75px" }}>{item.icon}</span>
                  <div className="flex flex-col">
                    <h3
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 700,
                        fontSize: "17.06px",
                        lineHeight: "27px",
                        letterSpacing: "-0.34px",
                        color: "hsl(var(--foreground))",
                        display: "flex",
                        alignItems: "center"
                      }}
                    >
                      {item.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Arial, sans-serif",
                        fontWeight: 400,
                        fontSize: "15.17px",
                        lineHeight: "23px",
                        color: "hsl(var(--foreground) / 0.75)",
                        display: "flex",
                        alignItems: "center",
                        marginTop: "3px"
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Thumb aspect="1/1" label="Coinbase" className="rounded-2xl" />
        </div>
      </motion.section>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── The Approach: Research to Execution ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <SectionLabel>The Approach: Research to Execution</SectionLabel>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {[
              { icon: <Target size={50} />, title: "Problem Study", desc: "Deep analysis of Coinbase's challenge and their target audience's pain points" },
              { icon: <Lightbulb size={50} />, title: "Competitive Analysis", desc: "Studied past successful commercials to understand what resonates" },
              { icon: <Heart size={50} />, title: "Storytelling Strategy", desc: "Crafted a narrative that intrigues viewers and hides the 'sell'" },
            ].map((card) => (
              <div key={card.title} className="rounded-[15.17px] p-8 bg-foreground/[0.05] min-h-[200px] flex flex-col relative overflow-hidden">
                <div className="flex-shrink-0 w-[45.5px] h-[45.5px] mb-6 flex items-center justify-center text-foreground">
                  {card.icon}
                </div>
                <h3 className="font-bold mb-3" style={{ fontFamily: "Arial, sans-serif", fontSize: "18.96px", lineHeight: "27px", letterSpacing: "-0.38px", color: "hsl(var(--foreground))" }}>
                  {card.title}
                </h3>
                <p className="font-arial text-foreground/45" style={{ fontSize: "15.17px", lineHeight: "23px" }}>
                  {card.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Core Principle box */}
          <div
            className="p-12 border rounded-[22.75px]"
            style={{
              background: "linear-gradient(135deg, hsl(var(--foreground) / 0.02) 0%, hsl(var(--foreground) / 0.05) 100%)",
              borderColor: "hsl(var(--foreground) / 0.1)"
            }}
          >
            <p className="font-bold mb-4" style={{ fontFamily: "Arial, sans-serif", fontSize: "22.75px", lineHeight: "30px", letterSpacing: "-0.45px", color: "hsl(var(--foreground))" }}>Core Principle</p>
            <h2 className="font-bold mb-6" style={{ fontFamily: "Arial, sans-serif", fontSize: "28.44px", lineHeight: "34px", color: "hsl(var(--foreground))" }}>
              "A good commercial sells, a great one hides that it's selling"
            </h2>
            <p className="font-arial text-foreground/45" style={{ fontSize: "17.06px", lineHeight: "27px", maxWidth: "1020px" }}>
              We crafted a story so engaging that viewers forget they're watching an ad — focusing on human benefits rather than technical features.
            </p>
          </div>
        </motion.section>
      </ScrollReveal>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── Production Timeline ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-20 md:px-10"
        >
          <div className="relative">
            <SectionLabel className="mb-20">Production Timeline</SectionLabel>

            {/* Vertical Divider */}
            <div
              className="absolute z-0"
              style={{
                width: "1.9px",
                left: "30.33px",
                top: "140px",
                bottom: "0",
                background: "hsl(var(--foreground) / 0.15)"
              }}
            />

            <div className="relative z-10">
              {[
                { n: "1", title: "Storyboarding", desc: "Visual planning and shot composition", ledBy: "Led by Djamel Haroual" },
                { n: "2", title: "Styleframe Design", desc: "Perfecting every frame for maximum impact", ledBy: "Led by Reem & Saleh" },
                { n: "3", title: "Teaser Trailer", desc: "Building anticipation and showcasing collaborators", ledBy: "Led by Team" },
                { n: "4", title: "Animation", desc: "Bringing styleframes to life with precision", ledBy: "Led by Ayman" },
                { n: "5", title: "Voiceover Pacing", desc: "Matching voice to visual rhythm", ledBy: "Led by Djamel Haroual" },
                { n: "6", title: "Music & Sound", desc: "Crafting the emotional soundscape", ledBy: "Led by Davies" },
              ].map((step, i, arr) => (
                <PhaseStep key={step.n} i={i} n={step.n} title={step.title} desc={step.desc} ledBy={step.ledBy} isLast={i === arr.length - 1} />
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── Credits ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-20 md:px-10"
        >
          <SectionLabel>Credits</SectionLabel>
          <div className="rounded-3xl bg-foreground/[0.02] p-10 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
              {[
                { n: "1", role: "Creative Direction", name: "Djamel Haroual" },
                { n: "2", role: "Problem Research", name: "Djamel Haroual" },
                { n: "3", role: "Storyboarding", name: "Djamel Haroual" },
                { n: "4", role: "Art Direction", name: "Saleh" },
                { n: "5", role: "Styleframe Design", name: "Reem & Saleh" },
                { n: "6", role: "Motion Design", name: "Ayman" },
                { n: "7", role: "Voiceover Pacing", name: "Djamel Haroual" },
                { n: "8", role: "Music Production", name: "Davies" },
                { n: "9", role: "Sound Design", name: "Davis" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-arial font-bold text-[12px]">
                    {c.n}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/40 font-arial font-bold">{c.role}</span>
                    <span className="text-[16px] font-arial text-foreground font-bold">{c.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      {/* ── CTA Banner ── */}
      <div className="mx-auto max-w-[1240px]">
        <CTABanner />
      </div>

      {/* ── Spacer ── */}
      <div className="mx-auto max-w-[1240px] px-6 pb-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── Prev / Next nav ── */}
      <div className="mx-auto max-w-[1240px] px-6 py-6 md:px-10 flex items-center justify-between">
        <Link
          to="/work/hrwl-visual-identity"
          className="font-inter text-[14px] text-foreground/50 hover:text-foreground transition-colors no-underline"
        >
          ← Hrwl
        </Link>
        <Link
          to="/work/the-one-you-keep"
          className="font-inter text-[14px] text-foreground/50 hover:text-foreground transition-colors no-underline"
        >
          The One You Keep →
        </Link>
      </div>

      <Footer catchphrase="Cinematic Brand Films" />
    </div>
  );
}
