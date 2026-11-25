import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { Icon } from "../icons";
import {
  DashboardBoard,
  IntegrationsBoard,
  ProfileDrawer,
  SequenceBoard,
  SignalsCard,
} from "../mocks";
import { Button, Container } from "../primitives";
import { BrowserMockup } from "../primitives/atmosphere";

/* Small live "AI calling" glass card. */
const AICallingCard = () => (
  <div className="fj-glass-light w-56 rounded-2xl p-4">
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-1.5 text-[11px] font-semibold text-brand">
        <Icon name="phone" size={13} /> AI Calling
      </span>
      <span className="flex items-center gap-1 text-[10px] font-medium text-[var(--color-success-text)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-success-text)]" />{" "}
        Live
      </span>
    </div>
    <div className="mt-3 flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
        PN
      </span>
      <div>
        <p className="text-xs font-semibold text-primary-dark">Priya Nair</p>
        <p className="fj-tabular text-[10px] text-[var(--color-text-tertiary)]">
          On a call · 2:14
        </p>
      </div>
    </div>
    <div className="mt-3 flex h-6 items-center gap-1">
      {[8, 16, 11, 20, 14, 22, 10, 18, 13, 7, 17, 12].map((h, i) => (
        <span
          key={i}
          className="w-full rounded-full bg-brand/60 motion-safe:animate-pulse"
          style={{ height: h, animationDelay: `${i * 0.12}s` }}
        />
      ))}
    </div>
  </div>
);

const CTASection = ({ onStartFree, onBookDemo }) => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end end"],
  });
  const yUp = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? 0 : 60, reduce ? 0 : -40],
  );
  const yDown = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? 0 : 90, reduce ? 0 : -10],
  );
  const rise = useTransform(
    scrollYProgress,
    [0, 1],
    [reduce ? 0 : 40, reduce ? 0 : -20],
  );

  return (
    <section
      ref={ref}
      className="fj-finale relative overflow-hidden pt-28 sm:pt-36"
    >
      {/* Headline */}
      <Container className="relative z-30">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 22 }}
          whileInView={reduce ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto max-w-4xl text-center"
        >
          <span className="fj-eyebrow text-xs font-semibold text-brand">
            Your AI job search copilot
          </span>
          <h2 className="fj-display mt-5 text-[clamp(2.4rem,1.5rem+3.2vw,4.25rem)] text-primary-dark">
            <span className="block">One AI. One workspace.</span>
            <span className="fj-grad-brand block">
              Every interview within reach.
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-[1.1rem] leading-relaxed text-[var(--color-text-secondary)]">
            Sourcing, intelligence, contact discovery, outreach, calling,
            reminders, and analytics - one intelligent platform, replacing the
            tools you juggle today.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              variant="primary"
              size="lg"
              icon="arrowRight"
              onClick={onStartFree}
            >
              Start for free
            </Button>
            <Button variant="secondary" size="lg" onClick={onBookDemo}>
              Book a demo
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Product ecosystem — the artwork */}
      <div className="relative mt-16 h-[420px] sm:mt-20 sm:h-[520px] lg:h-[560px]">
        {/* center — dashboard */}
        <motion.div
          style={{ y: rise }}
          initial={reduce ? false : { opacity: 0, scale: 0.96 }}
          whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 top-0 z-10 w-[680px] max-w-[88vw] -translate-x-1/2"
        >
          <BrowserMockup url="getmyinterview.shop">
            <DashboardBoard />
          </BrowserMockup>
        </motion.div>

        {/* left — AI candidate profile */}
        <motion.div
          style={{ y: yUp }}
          className="fj-drift absolute left-[3%] top-24 z-30 hidden w-64 lg:block xl:left-[8%]"
        >
          <ProfileDrawer />
        </motion.div>

        {/* right — sequences / Gmail outreach */}
        <motion.div
          style={{ y: yDown }}
          className="fj-drift-slow absolute right-[2%] top-28 z-20 hidden w-[400px] lg:block xl:right-[6%]"
        >
          <BrowserMockup url="getmyinterview.shop">
            <div className="max-h-[420px] overflow-hidden">
              <SequenceBoard />
            </div>
          </BrowserMockup>
        </motion.div>

        {/* floating glass cards */}
        <motion.div
          style={{ y: yDown }}
          className="absolute left-[6%] bottom-12 z-40 hidden sm:block"
        >
          <AICallingCard />
        </motion.div>
        <motion.div
          style={{ y: yUp }}
          className="absolute right-[7%] bottom-8 z-40 hidden w-72 md:block"
        >
          <SignalsCard />
        </motion.div>
        <motion.div
          style={{ y: rise }}
          className="absolute left-1/2 bottom-2 z-40 hidden w-[420px] -translate-x-1/2 lg:block"
        >
          <IntegrationsBoard />
        </motion.div>

        {/* fade into footer */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#f6f7ff]" />
      </div>
    </section>
  );
};

export default CTASection;
