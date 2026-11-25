import { gsap } from "gsap";
import { useEffect, useRef } from "react";

import themeConfig, { LINKS } from "./lib/brand";
import { useLenis } from "./marketing/useLenis";

import "./marketing/marketing.css";
import AudienceSplit from "./marketing/sections/AudienceSplit";
import CapabilityMarquee from "./marketing/sections/CapabilityMarquee";
import CreditModel from "./marketing/sections/CreditModel";
import CTASection from "./marketing/sections/CTASection";
import Faq from "./marketing/sections/Faq";
import FloatingNav from "./marketing/sections/FloatingNav";
import Footer from "./marketing/sections/Footer";
import Fragmentation from "./marketing/sections/Fragmentation";
import Hero from "./marketing/sections/Hero";
import HorizontalShowcase from "./marketing/sections/HorizontalShowcase";
import Impact from "./marketing/sections/Impact";
import Navbar from "./marketing/sections/Navbar";
import {
  ContactScene,
  DashboardScene,
  IntegrationsScene,
  IntelligenceScene,
  OutreachScene,
  ProfileScene,
  RemindersScene,
  SignalsScene,
} from "./marketing/sections/ProductTour";
import StoryFunnel from "./marketing/sections/StoryFunnel";
import TalentPreview from "./marketing/sections/TalentPreview";
import Testimonials from "./marketing/sections/Testimonials";
import Vision from "./marketing/sections/Vision";

const Home = () => {
  const lenisRef = useLenis(true);
  const progressRef = useRef(null);

  // Smooth-scroll to a section, routed through Lenis when it's active.
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (lenisRef.current) {
      lenisRef.current.scrollTo(el, { offset: -72 });
    } else {
      const top = el.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  // GSAP-driven scroll-progress bar (works with native + Lenis scroll).
  useEffect(() => {
    const bar = progressRef.current;
    if (!bar) return;
    const setX = gsap.quickTo(bar, "scaleX", {
      duration: 0.3,
      ease: "power2.out",
    });
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setX(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* ── CTA handlers (wired to existing app actions) ─────────────────── */
  const onStartFree = () => {
    window.location.href = LINKS.SIGNUP;
  };

  const onLogin = () => {
    window.location.href = LINKS.LOGIN;
  };

  const onBookDemo = () => {
    const url = themeConfig.calendlyUrl;
    if (window.Calendly?.initPopupWidget && url) {
      window.Calendly.initPopupWidget({ url });
    } else if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    }
  };

  const navLinks = [
    { label: "Platform", onClick: () => scrollToId("dashboard") },
    { label: "How it works", onClick: () => scrollToId("how-it-works") },
    { label: "Signals", onClick: () => scrollToId("signals") },
    { label: "Pricing", onClick: () => scrollToId("pricing") },
    { label: "Log in", onClick: () => {} },
  ];

  const railItems = [
    { id: "how-it-works", label: "Workflow" },
    { id: "dashboard", label: "Dashboard" },
    { id: "intelligence", label: "Intelligence" },
    { id: "signals", label: "Signals" },
    { id: "outreach", label: "Outreach" },
    { id: "integrations", label: "Integrations" },
    { id: "pricing", label: "Pricing" },
  ];

  const footerLinks = [
    { label: "Platform", onClick: () => scrollToId("dashboard") },
    { label: "How it works", onClick: () => scrollToId("how-it-works") },
    { label: "Integrations", onClick: () => scrollToId("integrations") },
    { label: "Pricing", onClick: () => scrollToId("pricing") },
    { label: "Log in", onClick: onLogin },
    {
      label: "For jobseekers",
      onClick: () =>
        window.open(
          "https://candidate.futurejobs.ai/",
          "_blank",
          "noopener,noreferrer",
        ),
    },
  ];

  return (
    <div className="fj-marketing w-full bg-bg-base">
      <div
        ref={progressRef}
        className="fj-scroll-progress"
        aria-hidden="true"
      />
      <Navbar
        links={navLinks}
        onStartFree={onStartFree}
        onSeeHow={onBookDemo}
      />
      <main>
        {/* Act 1 — the promise, the vision & the problem */}
        <Hero onStartFree={onStartFree} onSeeHow={onBookDemo} />
        <Vision />
        <TalentPreview onStartFree={onStartFree} />
        <Fragmentation />
        <StoryFunnel />

        {/* Act 2 — the product tour (each surface of the OS) */}
        <DashboardScene />
        <IntelligenceScene />
        <ProfileScene />
        <SignalsScene />
        <ContactScene />
        <OutreachScene />
        <IntegrationsScene />
        <RemindersScene />

        {/* Act 3 — breadth, proof & conversion */}
        <HorizontalShowcase />
        <CapabilityMarquee />
        <AudienceSplit />
        <Impact />
        <Testimonials />
        <CreditModel onBookDemo={onBookDemo} />
        <Faq />
        <CTASection onStartFree={onStartFree} onBookDemo={onBookDemo} />
      </main>
      <Footer links={footerLinks} />
      <FloatingNav items={railItems} />
    </div>
  );
};

export default Home;
