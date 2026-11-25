import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FEATURES } from "../content";
import { Icon } from "../icons";
import SplitWords from "../motion/SplitWords";
import { Container } from "../primitives";

gsap.registerPlugin(ScrollTrigger);

/**
 * Pinned horizontal feature gallery — the page's signature scroll moment.
 * Desktop: the section pins and the card track scrubs left as you scroll, with
 * snapping between cards. Mobile / reduced-motion: a normal swipeable row (no pin).
 */
const HorizontalShowcase = () => {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add(
      "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
      () => {
        const distance = () => track.scrollWidth - window.innerWidth;
        const tween = gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => "+=" + distance(),
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            snap: {
              snapTo: 1 / (FEATURES.length - 1),
              duration: { min: 0.15, max: 0.35 },
              ease: "power1.inOut",
            },
          },
        });
        return () => tween.kill();
      },
    );
    return () => mm.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="capabilities"
      className="fj-ink-deep relative overflow-hidden"
    >
      <div className="fj-grid" />
      <div className="flex flex-col justify-center py-20 lg:h-screen lg:py-0">
        <Container>
          <div className="max-w-3xl">
            <span className="fj-eyebrow text-xs font-semibold text-[var(--color-primary-light,#8df5f6)]">
              One platform · every capability
            </span>
            <SplitWords
              as="h2"
              className="fj-display mt-4 text-[clamp(2rem,1.4rem+2.8vw,3.4rem)] text-white"
              parts={[
                { text: "Everything a recruiting team does -" },
                { text: "in one workspace.", className: "fj-grad-text" },
              ]}
            />
            <p className="mt-4 hidden text-white/55 lg:block">
              Scroll to move through the stack →
            </p>
          </div>
        </Container>

        <div className="mt-10 overflow-x-auto lg:mt-14 lg:overflow-visible [-ms-overflow-style:none] [scrollbar-width:none]">
          <div
            ref={trackRef}
            className="flex gap-5 px-5 sm:px-8 lg:pl-[max(2rem,calc((100vw-1200px)/2))] lg:pr-[12vw]"
          >
            {FEATURES.map((f, i) => (
              <article
                key={f.title}
                className="fj-glass group relative flex h-[420px] w-[78vw] shrink-0 flex-col justify-between rounded-3xl p-7 sm:w-[58vw] sm:p-8 lg:h-[54vh] lg:w-[33vw] lg:max-w-[440px]"
              >
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-40 blur-3xl"
                  style={{ background: "rgba(141,245,246,0.18)" }}
                />
                <div className="relative">
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-[var(--color-primary-light,#8df5f6)] ring-1 ring-white/15">
                      <Icon name={f.icon} size={22} />
                    </span>
                    <span className="fj-tabular text-sm font-semibold text-white/35">
                      0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-7 text-[1.45rem] font-bold leading-tight text-white">
                    {f.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/65">
                    {f.desc}
                  </p>
                </div>
                <div className="relative mt-6 flex items-center gap-2 text-sm font-semibold text-[var(--color-primary-light,#8df5f6)] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore <Icon name="arrowRight" size={16} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HorizontalShowcase;
