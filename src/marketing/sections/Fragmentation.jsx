import { motion, useReducedMotion } from "framer-motion";
import { Container } from "../primitives";
import { Icon } from "../icons";
import { FRAGMENTATION as F } from "../content";

/* Scattered, disconnected tools — deliberately messy, muted, off-grid. */
const SCATTER = [
  { t: "Sourcing tool", ic: "search", x: "4%", y: "6%", r: -7 },
  { t: "Contact finder", ic: "mail", x: "54%", y: "0%", r: 5 },
  { t: "Gmail", ic: "send", x: "30%", y: "26%", r: -2 },
  { t: "Calendar", ic: "calendar", x: "70%", y: "30%", r: 8 },
  { t: "Spreadsheets", ic: "grid", x: "2%", y: "48%", r: 6 },
  { t: "Manual reminders", ic: "bell", x: "40%", y: "56%", r: -6 },
  { t: "Separate CRM", ic: "layers", x: "72%", y: "66%", r: 4 },
  { t: "Notes app", ic: "doc", x: "16%", y: "76%", r: -4 },
];

const Fragmentation = () => {
  const reduce = useReducedMotion();
  return (
    <section className="relative overflow-hidden bg-bg-base py-24 sm:py-32">
      <div className="fj-dotgrid opacity-60" />
      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Copy */}
          <div>
            <span className="fj-eyebrow text-xs font-semibold text-[var(--color-error-text)]">{F.eyebrow}</span>
            <h2 className="fj-display mt-4 text-[clamp(2.2rem,1.4rem+3vw,3.8rem)] text-primary-dark">
              Recruiting today is{" "}
              <span className="text-[var(--color-text-quaternary)] line-through decoration-[var(--color-error)]/40 decoration-2">in pieces</span>
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
              {F.lead}
            </p>
            <div className="mt-7 flex items-start gap-3 rounded-2xl border border-brand/20 bg-primary-bg/50 p-4">
              <Icon name="spark" size={20} className="mt-0.5 shrink-0 text-brand" />
              <p className="text-[15px] font-semibold text-primary-dark">{F.punchline}</p>
            </div>
          </div>

          {/* Scattered tools */}
          <div className="relative h-[340px] w-full sm:h-[400px]">
            {/* broken connectors */}
            <svg aria-hidden="true" className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[["12,14","38,34"],["60,8","78,38"],["38,34","48,64"],["12,56","26,82"],["48,64","78,72"]].map((p, i) => (
                <line key={i} x1={p[0].split(",")[0]} y1={p[0].split(",")[1]} x2={p[1].split(",")[0]} y2={p[1].split(",")[1]} stroke="rgba(16,29,87,0.14)" strokeWidth="0.4" strokeDasharray="1.5 1.5" />
              ))}
            </svg>
            {SCATTER.map((s, i) => (
              <motion.div
                key={s.t}
                initial={reduce ? false : { opacity: 0, scale: 0.9 }}
                whileInView={reduce ? {} : { opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{ left: s.x, top: s.y, rotate: `${s.r}deg` }}
                className="absolute flex items-center gap-2 rounded-xl border border-[var(--color-border)] bg-bg-container px-3 py-2 shadow-sm"
              >
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-bg-layout text-[var(--color-text-tertiary)]">
                  <Icon name={s.ic} size={15} />
                </span>
                <span className="text-[13px] font-medium text-[var(--color-text-secondary)]">{s.t}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Fragmentation;
