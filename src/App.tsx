import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";
import { lazy, Suspense } from "react";
import PageTransition from "./components/PageTransition";
import Navbar from "./components/Navbar";
// import AkioAgent from "./components/AkioAgent"; // Temporarily disabled
import LoadingScreen from "./components/LoadingScreen";
import ScrollToTop from "./components/ScrollToTop";
import CustomScrollbar from "./components/CustomScrollbar";
import { AudioProvider } from "./context/AudioContext";
import AudioMiniPlayer from "./components/AudioMiniPlayer";
import { HelmetProvider } from "react-helmet-async";

// Lazy-load heavy pages — reduces initial bundle, improves FCP/LCP
const Index = lazy(() => import("./pages/Index"));
const Work = lazy(() => import("./pages/Work"));
const About = lazy(() => import("./pages/About"));
const Blog = lazy(() => import("./pages/Blog"));
const NotFound = lazy(() => import("./pages/NotFound"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Inquiry = lazy(() => import("./pages/Inquiry"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={null}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<PageTransition><Index /></PageTransition>} />
          <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
          <Route path="/work/:id" element={<PageTransition><CaseStudy /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
          <Route path="/blog/:slug" element={<PageTransition><BlogPost /></PageTransition>} />
          <Route path="/inquiry" element={<PageTransition><Inquiry /></PageTransition>} />
          <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
        <TooltipProvider>
          <LoadingScreen />
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <AudioProvider>
              <ScrollToTop />
              <Navbar />
              <CustomScrollbar />
              <AudioMiniPlayer />
              {/* <AkioAgent /> — Temporarily disabled */}
              <AnimatedRoutes />
            </AudioProvider>
          </BrowserRouter>
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
