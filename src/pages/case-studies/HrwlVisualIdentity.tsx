/**
 * Case Study: HRWL Visual Identity + Brand Film + OC Animations
 * Route: /work/hrwl-visual-identity
 */
import Navbar from "@/components/Navbar";
import BackToWork from "@/components/BackToWork";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Target, Zap, Layers, Calendar, UsersRound, FileText, Heart, ArrowLeft } from "lucide-react";
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
        <span className="absolute bottom-3 left-3 text-[11px] text-foreground/40 font-inter">{label}</span>
      )}
    </div>
  );
}

function SectionLabel({ children, className = "mb-8" }: { children: React.ReactNode; className?: string }) {
  return (
    <h2
      className={className}
      style={{
        fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        fontWeight: 900,
        fontSize: "45px",
        lineHeight: "1.15",
        letterSpacing: "-0.5px",
        color: "hsl(var(--foreground))",
      }}
    >
      {children}
    </h2>
  );
}

function PhaseStep({ n, title, desc, i, isLast }: { n: string; title: string; desc: string; i: number; isLast?: boolean }) {
  return (
    <div
      className="relative flex items-start w-full group"
      style={{
        height: "147.87px",
        marginBottom: isLast ? "0" : "45.12px"
      }}
    >
      {/* Background container (Paragraph+Overlay) */}
      <div
        className="absolute w-[calc(100%-75.83px)] h-full right-0 top-0 rounded-[15.17px]"
        style={{ background: "hsl(var(--foreground) / 0.05)" }}
      >
        <div className="relative h-full">
          {/* Week label */}
          <p
            style={{
              position: "absolute",
              left: "30.33px",
              top: "30.33px",
              fontFamily: "'Consolas', monospace",
              fontWeight: 400,
              fontSize: "13.27px",
              lineHeight: "19px",
              color: "hsl(var(--foreground) / 0.75)",
              display: "flex",
              alignItems: "center"
            }}
          >
            Week {n}
          </p>
          {/* Title */}
          <h3
            style={{
              position: "absolute",
              left: "30.33px",
              top: "56.87px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 700,
              fontSize: "22.5px",
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
              left: "30.33px",
              top: "94.78px",
              fontFamily: "Arial, sans-serif",
              fontWeight: 400,
              fontSize: "15.17px",
              lineHeight: "23px",
              color: "hsl(var(--foreground) / 0.75)",
              display: "flex",
              alignItems: "center",
              maxWidth: "323.74px",
              height: "22.75px"
            }}
          >
            {desc}
          </p>
        </div>
      </div>

      {/* Circle (Number) */}
      <div
        className="flex-shrink-0 flex items-center justify-center z-10"
        style={{
          width: "60.66px",
          height: "60.66px",
          background: "hsl(var(--foreground))",
          borderRadius: "50%"
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

export default function HrwlVisualIdentity() {
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
          Hrwl — Visual Identity + Brand Film + OC Animations
        </h1>
        <p className="text-[17px] font-inter text-foreground/80 mb-10 leading-relaxed max-w-[600px]">
          Personal brand build: identity, cinematic film and original character animations.
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
        <Thumb aspect="16/9" label="HRWL Brand film" className="rounded-2xl" />
      </motion.section>

      {/* Stat bar (Now under image) */}
      <ScrollReveal>
        <div className="mx-auto max-w-[1240px] px-6 pb-4 md:px-10">
          <div className="flex gap-x-12 gap-y-12 flex-wrap py-6 border-t border-foreground/[0.08] justify-start">
            {[
              { label: "Views", value: "100k+", underline: true, labelW: "68.61px" },
              { label: "Collaborators", value: "2 Partners", labelW: "158px" },
              { label: "Results", value: "Full identity system + film and reusable motion assets.", labelW: "174.58px" },
              { label: "Production", value: "5 weeks", labelW: "124.9px" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col gap-2 min-w-[100px]" style={{ maxWidth: s.label === "Results" ? "624px" : "auto" }}>
                <span
                  className="text-foreground font-medium font-inter"
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
      <ScrollReveal>
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
              <p className="font-inter text-foreground/60 leading-relaxed max-w-[450px] mb-12" style={{ fontSize: "14.21px" }}>
                Hrwl isn't just a portfolio — it's my philosophy in motion. This project encompassed identity, a short brand film, and the creation of an original character and animations.
              </p>

              <div className="flex flex-col gap-8">
                {[
                  { icon: <Target size={22.75} />, label: "The Challenge", value: "Show studio-grade identity and motion while maintaining authorship." },
                  { icon: <Calendar size={22.75} />, label: "Timeline", value: "1 month" },
                  { icon: <UsersRound size={22.75} />, label: "Team", value: "2 specialists" },
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
            <div className="rounded-2xl bg-[#0F0F0F] flex items-center justify-center relative overflow-hidden" style={{ aspectRatio: "1/1" }}>
              <span
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "120px",
                  color: "#1A1A1A",
                  letterSpacing: "-5px"
                }}
              >
                HRWL.
              </span>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── Brand Identity Section ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <SectionLabel>Brand Identity</SectionLabel>

          {/* Logo system row */}
          <div className="mb-12">
            <p className="font-inter font-bold text-foreground mb-6" style={{ fontSize: "22.5px" }}>Logo System</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-2xl bg-[#0F0F0F] flex items-center justify-center p-12" style={{ aspectRatio: "16/9" }}>
                <span className="text-white font-black text-[24px]">HRWL.</span>
              </div>
              <div className="rounded-2xl bg-[#0F0F0F] flex items-center justify-center p-12" style={{ aspectRatio: "16/9" }}>
                <span className="text-white font-black text-[28px]">W</span>
              </div>
              <div className="rounded-2xl bg-[#0F0F0F] flex items-center justify-center p-6 overflow-hidden" style={{ aspectRatio: "16/9" }}>
                <div className="flex gap-4 opacity-50">
                  <span className="text-white font-black text-[14px] whitespace-nowrap">HRWL. HRWL. HRWL. HRWL.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Business card design */}
          <div className="mb-12">
            <p className="font-inter font-bold text-foreground mb-6" style={{ fontSize: "22.5px" }}>Business Card Design</p>
            <div className="rounded-3xl bg-foreground/[0.03] p-12 flex flex-col md:flex-row gap-8 items-center justify-center">
              <div className="w-full md:w-1/2 aspect-[1.6/1] bg-[#111111] rounded-xl flex items-center justify-center shadow-2xl">
                <span className="text-white font-black text-[24px]">HRWL.</span>
              </div>
              <div className="w-full md:w-1/2 aspect-[1.6/1] bg-[#111111] rounded-xl p-8 flex flex-col justify-between shadow-2xl border border-white/5">
                <div>
                  <p className="text-white font-bold text-[14px]">Djamel Haroual | Creative Director</p>
                  <div className="mt-2 text-white/40 text-[10px] space-y-1">
                    <p>Motion design</p>
                    <p>Video editing</p>
                    <p>Animation</p>
                  </div>
                </div>
                <div className="flex justify-between items-end">
                  <div className="flex gap-2">
                    <div className="w-4 h-4 bg-white/20 rounded-full" />
                    <div className="w-4 h-4 bg-white/20 rounded-full" />
                    <div className="w-4 h-4 bg-white/20 rounded-full" />
                  </div>
                  <p className="text-white/40 text-[10px]">djamelharoual@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Brand in Motion */}
          <div className="mb-12">
            <p className="font-inter font-bold text-foreground mb-6" style={{ fontSize: "22.5px" }}>Brand in Motion</p>
            <Thumb aspect="16/9" label="Brand film — full length" className="rounded-2xl" />
          </div>

          {/* Endcard System */}
          <div className="mb-4">
            <p className="font-inter font-bold text-foreground mb-6" style={{ fontSize: "22.5px" }}>Endcard System</p>
            <div
              className="w-full rounded-2xl bg-[#0F0F0F] flex items-center justify-center relative overflow-hidden text-white"
              style={{ aspectRatio: "21/9" }}
            >
              <p
                style={{
                  fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(24px, 5vw, 48px)",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                }}
              >
                THANKS FOR WATCHING
              </p>
              <div className="absolute bottom-10 left-10 text-[10px] font-bold tracking-widest uppercase opacity-40">Djamel Haroual</div>
              <div className="absolute bottom-10 right-10 text-[10px] font-bold tracking-widest uppercase opacity-40">C.2024</div>
            </div>
          </div>
        </motion.section>
      </ScrollReveal>

      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <hr className="border-foreground/[0.08]" />
      </div>

      {/* ── Original Character Animations ── */}
      <ScrollReveal>
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-[1240px] px-6 py-10 md:px-10"
        >
          <SectionLabel>Original Character Animations</SectionLabel>
          <div className="grid grid-cols-2 gap-6 mb-4">
            <div>
              <div className="rounded-2xl bg-[#0F0F0F] aspect-[4/3] flex items-center justify-center overflow-hidden">
                <div className="relative w-48 h-32">
                  <div className="absolute right-0 top-0 w-24 h-full bg-white/5 rounded-lg transform rotate-6 scale-y-110" />
                  <div className="absolute right-4 top-4 w-24 h-full bg-white/5 rounded-lg transform rotate-6" />
                  <div className="absolute right-8 top-8 w-24 h-full bg-white/5 rounded-lg transform rotate-6" />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-inter font-bold text-foreground" style={{ fontSize: "22.5px" }}>3D Character Exploration</p>
                <p className="text-[11px] font-inter text-foreground/40">Spline 3D character development</p>
              </div>
            </div>
            <div>
              <div className="rounded-2xl bg-[#0F0F0F] aspect-[4/3] flex items-center justify-center relative overflow-hidden">
                <span
                  style={{
                    fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
                    fontWeight: 900,
                    fontSize: "120px",
                    color: "#1A1A1A",
                    letterSpacing: "-5px"
                  }}
                >
                  RW.
                </span>
                <div className="absolute inset-0 flex items-center justify-center gap-4">
                  <div className="w-4 h-2 bg-white rounded-full" />
                  <div className="w-4 h-2 bg-white rounded-full" />
                </div>
              </div>
              <div className="mt-4">
                <p className="font-inter font-bold text-foreground" style={{ fontSize: "22.5px" }}>Character Animation</p>
                <p className="text-[11px] font-inter text-foreground/40">Chibi-style character animation</p>
              </div>
            </div>
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
          <div className="relative" style={{ minHeight: "818.95px" }}>
            <h2
              className="mb-14"
              style={{
                fontFamily: "Arial, sans-serif",
                fontWeight: 700,
                fontSize: "45.5px",
                lineHeight: "45px",
                color: "hsl(var(--foreground))",
                letterSpacing: "-1.14px",
                display: "flex",
                alignItems: "center"
              }}
            >
              Production Timeline
            </h2>

            {/* Vertical Divider */}
            <div
              className="absolute z-0"
              style={{
                width: "1.9px",
                left: "30.33px",
                top: "91px",
                bottom: "0",
                background: "hsl(var(--foreground) / 0.15)"
              }}
            />

            <div className="relative z-10" style={{ top: "0" }}>
              {[
                { n: "1", title: "Discovery & Concept", desc: "Brand strategy, mood boards, initial explorations" },
                { n: "2", title: "Identity Design", desc: "Logo design, typography, color system" },
                { n: "3", title: "Brand Applications", desc: "Business cards, assets, motion tests" },
                { n: "4", title: "Character & Animation", desc: "Final demo reel animation, Character animation" },
              ].map((step, i, arr) => (
                <PhaseStep key={step.n} i={i} n={step.n} title={step.title} desc={step.desc} isLast={i === arr.length - 1} />
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
                { n: "1", role: "Creative Direction & Motion", name: "Djamel Haroual" },
                { n: "2", role: "Web Design", name: "Yasser Moussaoui" },
              ].map((c, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground flex items-center justify-center text-background font-inter font-bold text-[12px]">
                    {c.n}
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[9px] uppercase tracking-[0.2em] text-foreground/40 font-inter font-bold">{c.role}</span>
                    <span className="text-[16px] font-inter text-foreground font-bold">{c.name}</span>
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
          to="/work/the-one-you-keep"
          className="font-inter text-[14px] text-foreground/50 hover:text-foreground transition-colors no-underline"
        >
          ← The One You Keep
        </Link>
        <Link
          to="/work/coinbase-commercial"
          className="font-inter text-[14px] text-foreground/50 hover:text-foreground transition-colors no-underline"
        >
          Coinbase →
        </Link>
      </div>

      <Footer catchphrase="Cinematic Brand Films" />
    </div>
  );
}
