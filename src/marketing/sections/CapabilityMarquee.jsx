import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { INTEGRATIONS } from "../content";
import { Icon } from "../icons";
import { subscribeLenis } from "../lenisBus";
import { Container } from "../primitives";

const CAPS = [
  [
    "AI sourcing",
    "Describe a role and AI finds matching candidates, ranked by fit.",
  ],
  [
    "Voice search",
    "Speak the role out loud - AI turns it into a structured search.",
  ],
  ["Boolean queries", "Build precise searches with AND/OR/NOT logic."],
  [
    "Similar profiles",
    "Find people like a candidate or LinkedIn profile you already like.",
  ],
  [
    "Contact reveal",
    "Unlock verified work & personal emails and phone numbers.",
  ],
  [
    "Bulk reveal",
    "Reveal contacts for a whole list at once, spending only on hits.",
  ],
  [
    "Email sequences",
    "Automated multi-step email campaigns, sent from FutureJobs or your inbox.",
  ],
  [
    "WhatsApp outreach",
    "Reach candidates on WhatsApp with templated messages.",
  ],
  [
    "AI calling",
    "AI places outbound voice calls to candidates on your behalf.",
  ],
  [
    "AI screening",
    "An AI assistant runs the first screening conversation for you.",
  ],
  ["Competency scoring", "Candidates scored across weighted skill dimensions."],
  [
    "Culture-fit scoring",
    "Candidates scored on alignment with how your team works.",
  ],
  [
    "Resume matching",
    "Upload resumes and rank them against a job description.",
  ],
  [
    "Candidate pool",
    "One searchable home for every sourced, applied, or uploaded candidate.",
  ],
  [
    "Signals",
    "AI flags job-change signals so you reach out at the right moment.",
  ],
  [
    "Team workspaces",
    "Invite teammates, share pools, and control spend together.",
  ],
];

const getIntegrationIcon = (name) => {
  if (name === "WhatsApp") return "whatsapp";
  if (name.includes("Gmail") || name.includes("Mail")) return "mail";
  return "layers";
};

const Row = ({ ariaHidden }) => (
  <div
    className="flex shrink-0 items-center"
    aria-hidden={ariaHidden || undefined}
  >
    {CAPS.map(([label, def]) => (
      <span
        key={label}
        title={def}
        className="mx-3 inline-flex cursor-help items-center gap-2 whitespace-nowrap text-[var(--color-text-secondary)] transition-colors hover:text-primary-dark"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-brand" />
        <span className="text-[15px] font-medium">{label}</span>
      </span>
    ))}
  </div>
);

const CapabilityMarquee = () => {
  const trackRef = useRef(null);

  // Velocity-reactive marquee: a GSAP ticker drives the track, and Lenis scroll
  // velocity speeds it up / tilts it and even reverses it with scroll direction.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    track.style.animation = "none"; // take over from the CSS marquee
    const half = track.scrollWidth / 2;
    const xTo = gsap.quickSetter(track, "x", "px");
    const skewTo = gsap.quickSetter(track, "skewX", "deg");

    let x = 0;
    let vel = 0;
    let skew = 0;
    const unsub = subscribeLenis((lenis) => {
      if (lenis) lenis.on("scroll", (e) => (vel = e.velocity || 0));
    });

    const tick = (_t, deltaMs) => {
      const v = gsap.utils.clamp(-45, 45, vel);
      const move = (0.6 + v * 0.5) * (deltaMs / 16.667);
      x = gsap.utils.wrap(-half, 0, x - move);
      xTo(x);
      skew += (gsap.utils.clamp(-6, 6, -v * 0.25) - skew) * 0.1;
      skewTo(skew);
      vel *= 0.9; // settle back to the gentle base drift
    };
    gsap.ticker.add(tick);
    return () => {
      gsap.ticker.remove(tick);
      unsub();
    };
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-[var(--color-border)] bg-bg-layout py-10">
      <div className="fj-marquee relative">
        {/* edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-bg-layout to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-bg-layout to-transparent" />
        <div ref={trackRef} className="fj-marquee-track">
          <Row />
          <Row ariaHidden />
        </div>
      </div>

      <Container>
        <div className="mt-9 flex flex-col items-center gap-4 border-t border-[var(--color-border-secondary)] pt-8 sm:flex-row sm:justify-between">
          <span className="fj-eyebrow text-xs font-semibold text-[var(--color-text-tertiary)]">
            Works with the tools you already use
          </span>
          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
            {INTEGRATIONS.map((name) => (
              <span
                key={name}
                className="flex items-center gap-2 text-sm font-medium text-[var(--color-text-secondary)]"
              >
                <Icon
                  name={getIntegrationIcon(name)}
                  size={16}
                  className="text-brand"
                />
                {name}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CapabilityMarquee;
