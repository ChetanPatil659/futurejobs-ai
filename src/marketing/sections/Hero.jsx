import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { HERO } from "../content";
import {
  AICallingCard,
  AutomatedOutreachCard,
  CandidateProfileCard,
  HeroDashboard,
  IntegrationsCard,
  ScreeningDonutCard,
} from "../heroMock";
import { Icon } from "../icons";
import { Button, Container } from "../primitives";

gsap.registerPlugin(ScrollTrigger);

const Stars = () => (
  <span
    className="inline-flex items-center gap-0.5"
    aria-label="5 out of 5 stars"
  >
    {Array.from({ length: 5 }).map((_, i) => (
      <svg
        key={i}
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="text-amber-400"
        aria-hidden="true"
      >
        <path d="m12 3 2.6 5.27 5.82.85-4.21 4.1.99 5.8L12 17.77 6.8 19.5l.99-5.8-4.21-4.1 5.82-.85L12 3Z" />
      </svg>
    ))}
  </span>
);

const Hero = ({ onStartFree, onSeeHow }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -60]);
  const yDash = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -40]);

  // GSAP ScrollTrigger parallax on the decorative blooms — depth on scroll.
  useEffect(() => {
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-bloom]").forEach((el, i) => {
        gsap.to(el, {
          yPercent: i % 2 === 0 ? 30 : -24,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, [reduce]);

  return (
    <section
      ref={ref}
      className="fj-aurora relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16"
    >
      <div
        data-bloom
        className="fj-bloom -left-32 top-20 h-[340px] w-[340px]"
        style={{ background: "rgba(0,34,246,0.1)" }}
      />
      <div
        data-bloom
        className="fj-bloom right-[-60px] top-0 h-[320px] w-[320px]"
        style={{ background: "rgba(157,123,255,0.22)" }}
      />
      <div
        data-bloom
        className="fj-bloom bottom-0 left-1/3 h-[300px] w-[420px]"
        style={{ background: "rgba(141,245,246,0.16)" }}
      />

      <Container className="relative">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.84fr)_minmax(0,1.16fr)]">
          {/* Copy */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={reduce ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-20 flex flex-col items-start gap-5"
          >
            <span className="fj-eyebrow inline-flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-white/70 px-3.5 py-1.5 text-[11px] font-semibold text-brand backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              {HERO.eyebrow}
            </span>

            <h1 className="fj-display text-[clamp(2.2rem,1.4rem+2.6vw,3.6rem)] text-primary-dark">
              {HERO.titleLead}
              <br />
              {HERO.titleOne}{" "}
              <span className="fj-grad-brand">{HERO.titleAccent}</span>
            </h1>

            <p className="max-w-md text-[clamp(1.05rem,1rem+0.4vw,1.2rem)] leading-relaxed text-[var(--color-text-secondary)]">
              {HERO.subtitle}
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                variant="primary"
                size="lg"
                icon="arrowRight"
                onClick={onStartFree}
              >
                {HERO.primaryCta}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                icon="calendar"
                iconPosition="start"
                onClick={onSeeHow}
              >
                {HERO.secondaryCta}
              </Button>
            </div>

            {/* trust row */}
            <ul className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {HERO.trust.map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-1.5 text-sm text-[var(--color-text-secondary)]"
                >
                  <Icon name="check" size={16} className="text-brand" />
                  {t}
                </li>
              ))}
            </ul>

            {/* social proof */}
            <div className="mt-1 flex items-center gap-3">
              <div className="flex -space-x-2.5">
                {[
                  { letter: "S", bg: "#10b981" },
                  { letter: "G", bg: "#6366f1" },
                  { letter: "B", bg: "#ff8e0b" },
                ].map((a) => (
                  <span
                    key={a.letter}
                    className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white"
                    style={{ background: a.bg }}
                  >
                    {a.letter}
                  </span>
                ))}
              </div>
              <div>
                <Stars />
                <p className="text-[13px] text-[var(--color-text-secondary)]">
                  {HERO.socialProof}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Product cluster */}
          <div className="relative">
            {/* subtle perspective tilt (desktop only) */}
            <div className="relative lg:[transform:perspective(2000px)_rotateY(-11deg)_rotateX(3deg)]">
              <motion.div
                style={{ y: yDash }}
                initial={reduce ? false : { opacity: 0, scale: 0.97 }}
                animate={reduce ? {} : { opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.85,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative z-10 min-w-0 lg:-mr-6 xl:-mr-12"
              >
                <HeroDashboard />
              </motion.div>

              {/* floating cards — framed at the edges, desktop only */}
              <motion.div
                style={{ y: y1 }}
                className="fj-drift absolute -left-10 top-4 z-40 hidden lg:block"
              >
                <CandidateProfileCard />
              </motion.div>
              <motion.div
                style={{ y: y2 }}
                className="fj-drift-slow absolute -left-8 bottom-28 z-40 hidden xl:block"
              >
                <AICallingCard />
              </motion.div>
              <motion.div
                style={{ y: y1 }}
                className="fj-drift absolute -left-4 bottom-2 z-40 hidden lg:block"
              >
                <AutomatedOutreachCard />
              </motion.div>
              <motion.div
                style={{ y: y2 }}
                className="fj-drift-slow absolute -right-8 top-[26%] z-40 hidden lg:block"
              >
                <IntegrationsCard />
              </motion.div>
              <motion.div
                style={{ y: y1 }}
                className="fj-drift absolute -right-4 bottom-3 z-40 hidden lg:block"
              >
                <ScreeningDonutCard />
              </motion.div>
            </div>
          </div>
        </div>
      </Container>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--paper-2)]" />
    </section>
  );
};

export default Hero;
