/**
 * Marketing design-system primitives.
 * Bespoke, token-based (brand / primary-dark / primary-light / bg tokens),
 * fully responsive, accessible. No Ant Design.
 */
import cn from "classnames";
import { motion, useReducedMotion } from "framer-motion";
import { Icon } from "../icons";

/* ── Motion ──────────────────────────────────────────────────────────── */

/** Shared scroll-reveal wrapper. Respects prefers-reduced-motion. */
export const Reveal = ({
  as = "div",
  delay = 0,
  y = 16,
  className,
  children,
  ...rest
}) => {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] ?? motion.div;
  return (
    <MotionTag
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={reduce ? {} : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
};

/* ── Layout ──────────────────────────────────────────────────────────── */

export const Container = ({ className, children }) => (
  <div className={cn("mx-auto w-full max-w-[1200px] px-5 sm:px-8", className)}>
    {children}
  </div>
);

const SECTION_BG = {
  base: "bg-bg-base",
  layout: "bg-bg-layout",
  dark: "bg-primary-dark text-white",
};

export const Section = ({ id, bg = "base", className, children }) => (
  <section
    id={id}
    className={cn(
      "relative w-full overflow-hidden py-20 sm:py-28",
      SECTION_BG[bg],
      className,
    )}
  >
    {children}
  </section>
);

/* ── Typography ──────────────────────────────────────────────────────── */

export const Eyebrow = ({ children, className, tone = "brand" }) => (
  <span
    className={cn(
      "inline-block text-[13px] font-semibold uppercase tracking-[0.14em]",
      tone === "brand" ? "text-brand" : "text-white/60",
      className,
    )}
  >
    {children}
  </span>
);

export const SectionHeading = ({
  eyebrow,
  title,
  lead,
  align = "center",
  tone = "light",
  className,
}) => (
  <div
    className={cn(
      "flex flex-col gap-4",
      align === "center" ? "items-center text-center" : "items-start text-left",
      className,
    )}
  >
    {eyebrow && (
      <Eyebrow tone={tone === "dark" ? "muted" : "brand"}>{eyebrow}</Eyebrow>
    )}
    <h2
      className={cn(
        "font-bold tracking-tight",
        "text-[clamp(2rem,1.4rem+2.6vw,3rem)] leading-[1.1]",
        tone === "dark" ? "text-white" : "text-primary-dark",
      )}
    >
      {title}
    </h2>
    {lead && (
      <p
        className={cn(
          "max-w-2xl text-[clamp(1rem,0.95rem+0.4vw,1.18rem)] leading-relaxed",
          tone === "dark"
            ? "text-white/70"
            : "text-[var(--color-text-secondary)]",
        )}
      >
        {lead}
      </p>
    )}
  </div>
);

/* ── Button ──────────────────────────────────────────────────────────── */

const BTN_BASE =
  "inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:opacity-50 disabled:cursor-not-allowed";

const BTN_SIZES = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[15px]",
  lg: "h-12 px-7 text-base",
};

const BTN_VARIANTS = {
  primary:
    "bg-brand text-white shadow-[0_1px_2px_rgba(0,34,246,0.24)] hover:brightness-110 hover:-translate-y-px active:translate-y-0",
  secondary:
    "bg-transparent text-primary-dark border border-[var(--color-border)] hover:border-primary-dark/40 hover:bg-black/[0.02]",
  ghost: "bg-transparent text-primary-dark hover:bg-black/[0.04]",
  inverse:
    "bg-white text-primary-dark hover:bg-white/90 hover:-translate-y-px shadow-sm",
  "inverse-ghost":
    "bg-transparent text-white border border-white/25 hover:bg-white/10",
};

export const Button = ({
  variant = "primary",
  size = "md",
  icon,
  iconPosition = "end",
  className,
  children,
  ...rest
}) => (
  <button
    className={cn(BTN_BASE, BTN_SIZES[size], BTN_VARIANTS[variant], className)}
    {...rest}
  >
    {icon && iconPosition === "start" && <Icon name={icon} size={18} />}
    {children}
    {icon && iconPosition === "end" && <Icon name={icon} size={18} />}
  </button>
);

/* ── Surfaces & chips ────────────────────────────────────────────────── */

/** Decorative cyan glow used sparingly behind hero / CTA. */
export const Glow = ({ className }) => (
  <div
    aria-hidden="true"
    className={cn(
      "pointer-events-none absolute rounded-full bg-primary-light/50 blur-[120px]",
      className,
    )}
  />
);
