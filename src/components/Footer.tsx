import { Link } from "react-router-dom";
import hrwlLogoWhite from "@/assets/hrwl-logo-white.png";
import hrwlLogoBlack from "@/assets/Hrwl-Logo-black.svg";
import { useTheme } from "next-themes";
import { Instagram, Linkedin, Youtube, Music2, ArrowUpRight } from "lucide-react";

interface FooterProps {
  catchphrase?: string;
}

const Footer = ({ catchphrase = "Let's create something worth watching." }: FooterProps) => {
  const currentYear = new Date().getFullYear();
  const { resolvedTheme } = useTheme();

  const logoSrc = resolvedTheme === "dark" ? hrwlLogoBlack : hrwlLogoWhite;

  return (
    <footer className="bg-foreground text-background relative overflow-hidden">
      {/* (will get back at it later)
      <div className="absolute bottom-[30%] left-1/2 -translate-x-1/2 w-full max-w-[1400px] px-6 lg:px-12 pointer-events-none select-none" style={{ zIndex: 0 }}>
        <svg className="block dark:hidden w-full h-auto opacity-[0.01]" viewBox="0 0 884 170" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120.255 56.7735H66.5888V0H0V169.119H66.5888V112.334H120.255V169.119H186.843V0H120.255V56.7735ZM606.405 98.4089H600.739L581.917 0.173337H530.272L511.451 98.4089H505.784L493.442 0.173337H425.831L455.393 169.292H545.273L553.343 104.869H558.835L566.916 169.292H656.796L686.358 0.173337H618.736L606.405 98.4089ZM756.674 0.173337H690.085V169.292H883.5V114.125H756.674V0.173337ZM351.069 81.2948L263.104 81.1215V54.9246L351.069 55.1326C361.182 55.1326 365.629 60.3558 365.629 68.2137C365.629 76.0716 361.182 81.2948 351.069 81.2948ZM432.426 67.6244C432.426 19.7141 404.316 0.358229 356.119 0.358229L196.515 0.173337V169.292H263.104V130.049L354.099 130.222L373.942 169.5H439.126L410.377 115.315C423.126 105.261 432.426 89.5688 432.426 67.6244Z" fill="url(#paint0_footer_light)" />
          <defs>
            <linearGradient id="paint0_footer_light" x1="441.75" y1="-65" x2="441.75" y2="170" gradientUnits="userSpaceOnUse">
              <stop stopColor="#FFFFFF" stopOpacity="0" />
              <stop offset="1" stopColor="#FFFFFF" />
            </linearGradient>
          </defs>
        </svg>
        <svg className="hidden dark:block w-full h-auto opacity-[0.08]" viewBox="0 0 884 170" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M120.255 56.7735H66.5888V0H0V169.119H66.5888V112.334H120.255V169.119H186.843V0H120.255V56.7735ZM606.405 98.4089H600.739L581.917 0.173337H530.272L511.451 98.4089H505.784L493.442 0.173337H425.831L455.393 169.292H545.273L553.343 104.869H558.835L566.916 169.292H656.796L686.358 0.173337H618.736L606.405 98.4089ZM756.674 0.173337H690.085V169.292H883.5V114.125H756.674V0.173337ZM351.069 81.2948L263.104 81.1215V54.9246L351.069 55.1326C361.182 55.1326 365.629 60.3558 365.629 68.2137C365.629 76.0716 361.182 81.2948 351.069 81.2948ZM432.426 67.6244C432.426 19.7141 404.316 0.358229 356.119 0.358229L196.515 0.173337V169.292H263.104V130.049L354.099 130.222L373.942 169.5H439.126L410.377 115.315C423.126 105.261 432.426 89.5688 432.426 67.6244Z" fill="url(#paint0_footer_dark)" />
          <defs>
            <linearGradient id="paint0_footer_dark" x1="441.75" y1="-65" x2="441.75" y2="170" gradientUnits="userSpaceOnUse">
              <stop stopColor="#000000" stopOpacity="0" />
              <stop offset="1" stopColor="#000000" />
            </linearGradient>
          </defs>
        </svg>
      </div> */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-12 lg:pt-16 pb-8 lg:pb-10 relative" style={{ zIndex: 1 }}>
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 mb-12 lg:mb-16">
          {/* Brand */}
          <div className="lg:col-span-5">
            <img src={logoSrc} alt="HRWL" width="96" height="24" className="h-6 w-auto mb-8" />

            <h3 className="text-2xl md:text-3xl font-semibold mb-4 max-w-md leading-tight">
              {catchphrase}
            </h3>
            <p className="text-background/80 leading-relaxed max-w-md mb-8">
              Freelance Motion Designer specializing in brand films and commercials for ambitious brands.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "https://instagram.com/hrwl.studio", label: "Instagram" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/djamel-haroual-9028b3241/", label: "LinkedIn" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-background/5 flex items-center justify-center hover:bg-background/10 transition-all hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/65">Explore</h4>
              <nav className="flex flex-col gap-3">
                {[
                  { name: "Home", path: "/" },
                  { name: "Work", path: "/work" },
                  { name: "About", path: "/about" },
                  { name: "Blog", path: "/blog" }
                ].map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="text-background/60 hover:text-background transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Services — hidden on mobile */}
            <div className="hidden md:block">
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/65">Services</h4>
              <nav className="flex flex-col gap-3">
                {["Brand Films", "Commercials", "Motion Design", "Creative Direction"].map((item) => (
                  <span key={item} className="text-background/60 text-sm">{item}</span>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="font-semibold mb-5 text-sm uppercase tracking-wider text-background/65">Connect</h4>
              <nav className="flex flex-col gap-3">
                <Link to="/inquiry" className="text-background/60 hover:text-background transition-colors text-sm flex items-center gap-1 group">
                  Start Inquiry
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
                <a href="mailto:djamel@hrwl.studio" className="text-background/60 hover:text-background transition-colors text-sm">
                  djamel@hrwl.studio
                </a>
                <Link to="/shop" className="text-background/60 hover:text-background transition-colors text-sm">
                  Shop
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-background/60 text-sm">
              © {currentYear} HRWL LTD. All rights reserved.
            </div>
            <div className="text-background/75 text-xs">
              Built by{" "}
              <a
                href="https://salaheddinemedkour.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-background/90 transition-colors underline-offset-2 hover:underline"
              >
                Salahuddin
              </a>
            </div>
            <div className="flex gap-8 text-sm">
              <Link to="/terms" className="text-background/60 hover:text-background/80 transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-background/60 hover:text-background/80 transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
