import { useEffect, useRef } from "react";
import {
  animate,
  useInView,
  useMotionValue,
  useReducedMotion,
  useTransform,
  motion,
} from "framer-motion";
import { Container, Reveal } from "../primitives";
import { STATS } from "../content";

/** Counts up to the numeric part of `value` (preserving commas + suffix) when scrolled into view. */
const CountUp = ({ value, className }) => {
  const reduce = useReducedMotion();
  const match = String(value).match(/^([\d,]+)(.*)$/);
  const target = match ? parseInt(match[1].replace(/,/g, ""), 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const count = useMotionValue(0);
  const text = useTransform(count, (v) => Math.round(v).toLocaleString("en-US") + suffix);

  useEffect(() => {
    if (!match) return;
    if (reduce) {
      count.set(target);
      return;
    }
    if (inView) {
      const controls = animate(count, target, {
        duration: 1.6,
        ease: [0.22, 1, 0.36, 1],
      });
      return controls.stop;
    }
  }, [inView, reduce, target, match, count]);

  // Non-numeric values fall back to plain text.
  if (!match) return <span className={className}>{value}</span>;
  return (
    <motion.span ref={ref} className={className}>
      {text}
    </motion.span>
  );
};

const Impact = () => (
  <section className="fj-rainbow relative overflow-hidden py-20 sm:py-28">
    {/* soft floating light blooms for extra depth */}
    <div className="fj-bloom -left-20 top-10 h-[280px] w-[280px]" style={{ background: "rgba(0,34,246,0.12)" }} />
    <div className="fj-bloom right-[-40px] bottom-0 h-[300px] w-[300px]" style={{ background: "rgba(157,123,255,0.18)" }} />

    <Container className="relative">
      <Reveal className="mx-auto max-w-3xl text-center">
        <span className="fj-eyebrow mb-5 block text-xs font-semibold text-brand">
          Proof at scale
        </span>
        <h2 className="fj-display text-[clamp(2rem,1.4rem+2.8vw,3.6rem)] text-primary-dark">
          A platform thousands{" "}
          <span className="fj-grad-rainbow">already run on.</span>
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-10 sm:grid-cols-3">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.1} className="text-center">
            <CountUp
              value={s.value}
              className="fj-tabular block text-[clamp(3rem,2rem+4vw,5.5rem)] font-bold leading-none text-primary-dark"
            />
            <div className="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--color-text-tertiary)]">
              {s.label}
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  </section>
);

export default Impact;
