import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Heading that reveals word-by-word from behind a mask as it scrolls into view.
 * `parts` is an array of { text, className } so a gradient accent can ride along
 * (e.g. [{ text: "Pay for outcomes," }, { text: "not seats.", className: "fj-grad-brand" }]).
 * Reduced-motion users get the plain heading, fully visible.
 */
export const SplitWords = ({ as: Tag = "h2", parts = [], className }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const words = el.querySelectorAll("[data-word]");
    const ctx = gsap.context(() => {
      gsap.set(words, { yPercent: 115, opacity: 0 });
      gsap.to(words, {
        yPercent: 0,
        opacity: 1,
        duration: 0.9,
        ease: "power4.out",
        stagger: 0.055,
        scrollTrigger: { trigger: el, start: "top 82%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  let key = 0;
  return (
    <Tag ref={ref} className={className}>
      {parts.map((part) =>
        String(part.text)
          .split(" ")
          .map((w) => (
            <span
              key={key++}
              className="inline-block overflow-hidden align-bottom leading-[1.06]"
            >
              <span
                data-word
                className={"inline-block " + (part.className || "")}
              >
                {w}&nbsp;
              </span>
            </span>
          )),
      )}
    </Tag>
  );
};

export default SplitWords;
