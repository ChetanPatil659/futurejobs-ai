import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "../icons";

/**
 * Floating page furniture:
 *  - a right-edge section rail with scroll-spy (highlights the current section)
 *  - a back-to-top button that appears once you've scrolled down
 */
const FloatingNav = ({ items = [] }) => {
  const [active, setActive] = useState(items[0]?.id);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = items.map((i) => document.getElementById(i.id)).filter(Boolean);
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.5, 1] },
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, [items]);

  const go = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    window.scrollTo({
      top: el.getBoundingClientRect().top + window.scrollY - 72,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Section rail (desktop) */}
      <nav
        aria-label="On this page"
        className="fixed right-5 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 lg:flex"
      >
        {items.map((it) => {
          const on = active === it.id;
          return (
            <button
              key={it.id}
              onClick={() => go(it.id)}
              aria-current={on}
              className="group flex items-center justify-end gap-2.5"
            >
              <span
                className={
                  "whitespace-nowrap rounded-full bg-bg-base/90 px-2.5 py-1 text-[11px] font-medium shadow-sm backdrop-blur transition-opacity duration-200 " +
                  (on
                    ? "text-brand opacity-100"
                    : "text-[var(--color-text-secondary)] opacity-0 group-hover:opacity-100")
                }
              >
                {it.label}
              </span>
              <span
                className={
                  "h-2 rounded-full transition-all duration-300 " +
                  (on
                    ? "w-6 bg-brand"
                    : "w-2 bg-[var(--color-border)] group-hover:bg-[var(--color-text-tertiary)]")
                }
              />
            </button>
          );
        })}
      </nav>

      {/* Back to top */}
      <AnimatePresence>
        {showTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 10 }}
            transition={{ duration: 0.2 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white shadow-[0_8px_24px_-6px_rgba(0,34,246,0.5)] transition-transform hover:-translate-y-0.5"
          >
            <Icon name="arrowUp" size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingNav;
