import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { useRef, useState } from "react";
import { FUNNEL } from "../content";
import { Icon } from "../icons";
import {
  RevealBoard,
  ScreeningBoard,
  SequenceBoard,
  SourcingBoard,
} from "../mocks";
import { Container } from "../primitives";
import { BrowserMockup } from "../primitives/atmosphere";

const BOARDS = [SourcingBoard, RevealBoard, SequenceBoard, ScreeningBoard];

/** Render a description, wrapping any `highlights` phrases in a brand accent. */
const renderDesc = (desc, highlights) => {
  if (!highlights?.length) return desc;
  const escaped = highlights.map((h) =>
    h.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const re = new RegExp(`(${escaped.join("|")})`, "gi");
  return desc.split(re).map((part, i) =>
    highlights.some((h) => h.toLowerCase() === part.toLowerCase()) ? (
      <span key={i} className="font-semibold text-primary-dark">
        {part}
      </span>
    ) : (
      part
    ),
  );
};

const StoryFunnel = () => {
  const reduce = useReducedMotion();
  const ref = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(
      FUNNEL.length - 1,
      Math.max(0, Math.floor(p * FUNNEL.length)),
    );
    setActive(i);
  });

  const Board = BOARDS[active];

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative bg-bg-base"
      style={{ height: reduce ? "auto" : "360vh" }}
    >
      <div
        className={
          reduce
            ? "py-24"
            : "sticky top-0 flex min-h-screen items-center overflow-hidden py-20"
        }
      >
        <Container className="relative w-full">
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
            {/* Sticky narrative rail */}
            <div>
              <span className="fj-eyebrow mb-3 block text-xs font-semibold text-brand">
                One continuous journey
              </span>
              <h2 className="fj-display mb-8 max-w-md text-[clamp(1.7rem,1.2rem+1.6vw,2.5rem)] text-primary-dark">
                AI takes you from first search to booked interview
              </h2>
              <ol className="flex flex-col gap-2">
                {FUNNEL.map((s, i) => {
                  const on = i === active;
                  return (
                    <li key={s.step}>
                      <button
                        onClick={() => {
                          const el = ref.current;
                          if (!el) return;
                          // Land in the MIDDLE of step i's scroll range so the
                          // scroll-spy resolves to exactly this step. Progress is
                          // mapped over (sectionHeight - viewportHeight).
                          const range = el.offsetHeight - window.innerHeight;
                          const p = (i + 0.5) / FUNNEL.length;
                          window.scrollTo({
                            top: el.offsetTop + p * range,
                            behavior: "smooth",
                          });
                        }}
                        className="w-full cursor-pointer text-left"
                        aria-current={on}
                      >
                        <div className="flex items-baseline gap-4">
                          <span
                            className={
                              "fj-tabular text-sm font-semibold transition-colors " +
                              (on
                                ? "text-brand"
                                : "text-[var(--color-text-quaternary)]")
                            }
                          >
                            {s.step}
                          </span>
                          <span
                            className={
                              "fj-display text-[clamp(1.8rem,1.2rem+1.8vw,2.6rem)] transition-colors " +
                              (on
                                ? "text-primary-dark"
                                : "text-[var(--color-text-quaternary)]/50")
                            }
                          >
                            {s.title}
                          </span>
                        </div>
                        <AnimatePresence initial={false}>
                          {on && (
                            <motion.div
                              initial={
                                reduce ? false : { height: 0, opacity: 0 }
                              }
                              animate={{ height: "auto", opacity: 1 }}
                              exit={reduce ? {} : { height: 0, opacity: 0 }}
                              transition={{ duration: 0.4, ease: "easeInOut" }}
                              className="overflow-hidden pl-9"
                            >
                              <p className="max-w-md pt-3 text-[15px] leading-relaxed text-[var(--color-text-secondary)]">
                                {renderDesc(s.desc, s.highlights)}
                              </p>
                              <div className="mt-3 flex flex-wrap gap-1.5">
                                {s.tags.map((t) => (
                                  <span
                                    key={t}
                                    className="rounded-full bg-primary-bg px-2.5 py-1 text-[11px] font-medium text-brand"
                                  >
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </button>
                      <div className="mt-3 h-px w-full bg-[var(--color-border-secondary)]" />
                    </li>
                  );
                })}
              </ol>
            </div>

            {/* Swapping product board */}
            <div className="relative min-w-0">
              <div className="fj-mesh-soft absolute -inset-10" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={reduce ? {} : { opacity: 0, y: -16, scale: 0.98 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <BrowserMockup>
                    <Board />
                  </BrowserMockup>
                  <div className="mt-4 flex items-center gap-2 text-xs text-[var(--color-text-tertiary)]">
                    <Icon name="bolt" size={14} className="text-brand" />
                    Live in the GetMyInterview workspace
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default StoryFunnel;
