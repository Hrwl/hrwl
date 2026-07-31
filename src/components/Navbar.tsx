/**
 * Navbar — sticky top nav with desktop links + centered logo.
 * Mobile: hamburger → fullscreen overlay menu.
 * File: src/components/Navbar.tsx
 */
import { useState, useEffect, useCallback } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { ShoppingBag } from "lucide-react";
import hrwlLogoBlack from "@/assets/Hrwl-Logo-black.svg";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const MOBILE_NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

const NAV_STYLE = {
  fontFamily: "Inter",
  fontWeight: 500,
  fontSize: "17.5px",
  lineHeight: "22px",
  letterSpacing: "-0.01em",
  textDecoration: "none",
};

export default function Navbar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = useCallback((to: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === to) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(to);
      window.scrollTo({ top: 0 });
    }
  }, [pathname, navigate]);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full bg-background/80 backdrop-blur-xl transition-colors ${scrolled ? "border-b border-border/30 py-1" : "border-b border-transparent py-2.5"
          }`}
        style={{
          transitionDuration: "300ms",
          transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)"
        }}
      >
        <nav className="flex w-full items-center justify-between px-6 py-4 md:px-10 lg:px-12">
          {/* ── Left: page links (desktop only) ── */}
          <div className="flex-1">
            <ul className="nav-desktop-links items-center gap-7">
              {NAV_LINKS.map(({ label, to }, i) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                >
                  <Link
                    to={to}
                    onClick={handleNavClick(to)}
                    style={{
                      ...NAV_STYLE,
                      opacity: pathname === to ? 1 : 0.6,
                      color: "hsl(var(--foreground))",
                    }}

                    className={`transition-all duration-300 relative group hover:opacity-100 ${pathname === to ? "brightness-125" : ""
                      }`}
                  >
                    {label}
                    {pathname === to && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.5 }}
                      />
                    )}
                    <div className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-foreground scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300" />
                  </Link>
                </motion.li>
              ))}
            </ul>

            {/* ── Left: hamburger (mobile-only, including landscape phones) ── */}
            <button
              className="nav-hamburger flex flex-col items-center justify-center gap-1.5"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              style={{ width: 28, height: 28 }}
            >
              <span
                className="block h-[1.5px] w-6 origin-center rounded-full bg-foreground transition-all duration-300"
                style={{ transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }}
              />
              <span
                className="block h-[1.5px] w-6 rounded-full bg-foreground transition-all duration-300"
                style={{ opacity: menuOpen ? 0 : 1 }}
              />
              <span
                className="block h-[1.5px] w-6 origin-center rounded-full bg-foreground transition-all duration-300"
                style={{ transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }}
              />
            </button>
          </div>

          {/* ── Center: logo ── */}
          <Link
            to="/"
            onClick={handleNavClick("/")}
            className="absolute left-1/2 -translate-x-1/2 select-none"
          >
            <img
              src={hrwlLogoBlack}
              alt="HRWL"
              width="96"
              height="28"
              className="h-6 md:h-7 w-auto dark:invert transition-all duration-300 hover:scale-105"
            />

          </Link>

          {/* ── Right: Shop + toggle + Inquiries (desktop) ── */}
          <div className="flex flex-1 justify-end items-center gap-4">
            <div className="nav-desktop-links items-center gap-6">
              <div className="relative group overflow-hidden h-6 flex items-center cursor-default select-none">
                <a
                  href="#"
                  style={{ ...NAV_STYLE, color: "hsl(var(--foreground))" }}
                  className="block leading-none"
                  onClick={(e) => e.preventDefault()}
                >
                  {/* "Shop" slides up on hover */}
                  <span
                    className="block transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-50 group-hover:opacity-0 group-hover:-translate-y-full"
                  >
                    Shop
                  </span>
                  {/* "Soon" slides in from below */}
                  <span
                    className="block absolute inset-0 flex items-center transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0"
                  >
                    Soon
                  </span>
                </a>
              </div>
              <ThemeToggle />
              <Link to="/inquiry" onClick={handleNavClick("/inquiry")} className="inquiry-btn">
                Inquiry
                <span className="inquiry-btn__icon">
                  <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg">
                    <path
                      d="M1 7.5h11M8 3l4.5 4.5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg inquiry-btn__svg--copy">
                    <path
                      d="M1 7.5h11M8 3l4.5 4.5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>

            {/* ── Right: toggle only on mobile/landscape phones ── */}
            <div className="nav-mobile-only flex items-center gap-3">
              <ThemeToggle />
            </div>
          </div>
        </nav>
      </header>

      {/* ══════════════════════════════════════════════
          FULLSCREEN MOBILE MENU OVERLAY
      ══════════════════════════════════════════════ */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
            className="nav-mobile-overlay fixed inset-0 z-40 flex flex-col overflow-hidden"
            style={{ backgroundColor: "hsl(var(--background))" }}
          >
            {/* Top padding so content sits below the navbar bar */}
            <div className="h-20 flex-none" />

            {/* Nav links — left-aligned, display scale */}
            <nav className="flex-1 flex flex-col justify-center px-8 gap-1">
              {MOBILE_NAV_LINKS.map((link, i) => {
                const isActive = pathname === link.to;
                return (
                  <motion.div
                    key={link.to}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.05 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setMenuOpen(false)}
                      className="group flex items-baseline gap-3 py-2 transition-all duration-300"
                      style={{
                        opacity: isActive ? 1 : 0.15,
                      }}
                    >
                      <span
                        className="text-[10px] font-mono text-foreground/50 mb-0.5 w-5 flex-none"
                        style={{ opacity: isActive ? 0.5 : 0.5 }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="font-black tracking-tight text-foreground leading-none"
                        style={{
                          fontSize: "clamp(48px, 13vw, 72px)",
                          letterSpacing: "-0.03em",
                          fontFamily: "Inter, sans-serif",
                        }}
                      >
                        {link.label}
                      </span>
                      {isActive && (
                        <motion.span
                          layoutId="mobile-active-dot"
                          className="w-2 h-2 rounded-full bg-foreground flex-none mb-1 self-end"
                          transition={{ type: "spring", bounce: 0.3, duration: 0.5 }}
                        />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom: divider + CTA + theme toggle */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 + MOBILE_NAV_LINKS.length * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="px-8 pb-10 flex items-center justify-between gap-4"
            >
              <Link
                to="/inquiry"
                onClick={() => setMenuOpen(false)}
                className="inquiry-btn-mobile flex-none"
              >
                Start Inquiry
                <span className="inquiry-btn__icon">
                  <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg">
                    <path
                      d="M1 7.5h11M8 3l4.5 4.5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <svg viewBox="0 0 14 15" fill="none" width="10" className="inquiry-btn__svg inquiry-btn__svg--copy">
                    <path
                      d="M1 7.5h11M8 3l4.5 4.5L8 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>

              {/* Shop — coming soon */}
              <div className="relative group flex items-center justify-center">
                <button
                  disabled
                  aria-label="Shop — coming soon"
                  className="w-11 h-11 rounded-full flex items-center justify-center opacity-30 cursor-not-allowed"
                  style={{ border: "1.5px solid hsl(var(--foreground) / 0.2)" }}
                >
                  <ShoppingBag className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </button>
                {/* Tooltip */}
                <div className="pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2.5 opacity-0 group-hover:opacity-100 transition-all duration-200 translate-y-1 group-hover:translate-y-0">
                  <div className="bg-foreground text-background text-[10px] font-semibold tracking-widest uppercase whitespace-nowrap px-3 py-1.5 rounded-full shadow-lg">
                    Soon
                    {/* Arrow */}
                    <span className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
