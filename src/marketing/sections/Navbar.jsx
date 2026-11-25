import cn from "classnames";
import { useEffect, useState } from "react";
import { APP_NAME_FULL } from "../../lib/brand";
import { Icon } from "../icons";
import { subscribeLenis } from "../lenisBus";
import { Button } from "../primitives";

const NavLink = ({ children, onClick, dark }) => (
  <button
    onClick={onClick}
    className={cn("text-[15px] font-medium transition-colors", {
      "text-white/75 hover:text-white": dark,
      "text-primary-dark/80 hover:text-primary-dark": !dark,
    })}
  >
    {children}
  </button>
);

const Navbar = ({ links = [], onStartFree, onSeeHow }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide the bar when scrolling down, reveal it when scrolling up (Lenis direction).
  useEffect(() => {
    const handler = ({ scroll, direction }) =>
      setHidden(scroll > 140 && direction === 1);
    const unsub = subscribeLenis((lenis) => lenis?.on("scroll", handler));
    return unsub;
  }, []);

  // The hero is a light luminous scene, so the bar uses dark content throughout.
  const dark = false;

  return (
    <header
      className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", {
        "border-b border-[var(--color-border)] bg-bg-base/80 backdrop-blur-xl":
          scrolled,
        "border-b border-transparent bg-transparent": !scrolled,
        "-translate-y-full": hidden && !open,
        "translate-y-0": !(hidden && !open),
      })}
    >
      <nav className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-5 sm:h-18 sm:px-8">
        <a
          href="/"
          aria-label={`${APP_NAME_FULL} home`}
          className="flex items-center gap-2.5"
        >
          <img
            src="/logo.png"
            alt={`${APP_NAME_FULL} logo`}
            className="h-8 w-auto object-contain sm:h-9"
          />
          <span className="text-[19px] font-bold tracking-tight text-primary-dark">
            Futurejobs<span className="text-brand">AI</span>
          </span>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <NavLink key={l.label} onClick={l.onClick} dark={dark}>
              {l.label}
            </NavLink>
          ))}
          <Button
            variant={dark ? "inverse-ghost" : "ghost"}
            size="sm"
            onClick={onSeeHow}
          >
            Book a demo
          </Button>
          <Button
            variant={dark ? "inverse" : "primary"}
            size="sm"
            onClick={onStartFree}
          >
            Start for free
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-lg md:hidden",
            dark ? "text-white" : "text-primary-dark",
          )}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {/* Mobile sheet */}
      {open && (
        <div className="border-t border-[var(--color-border)] bg-bg-base md:hidden">
          <div className="flex flex-col gap-1 px-5 py-4">
            {links.map((l) => (
              <button
                key={l.label}
                onClick={() => {
                  setOpen(false);
                  l.onClick?.();
                }}
                className="rounded-lg px-2 py-3 text-left text-base font-medium text-primary-dark hover:bg-black/[0.04]"
              >
                {l.label}
              </button>
            ))}
            <div className="mt-2 flex flex-col gap-2">
              <Button
                variant="secondary"
                onClick={() => {
                  setOpen(false);
                  onSeeHow?.();
                }}
              >
                Book a demo
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  setOpen(false);
                  onStartFree?.();
                }}
              >
                Start for free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
