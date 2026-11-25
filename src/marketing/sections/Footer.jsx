import { useState } from "react";
import themeConfig from "../../lib/brand";
import { APP_NAME_FULL, LINKS as APP_ROUTES } from "../../lib/brand";
import { Icon } from "../icons";
import { Container } from "../primitives";

const IconLink = ({ href, label, name }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] bg-bg-container text-[var(--color-text-secondary)] transition-colors hover:border-brand/40 hover:text-brand"
  >
    <Icon name={name} size={16} />
  </a>
);

const Footer = ({ links = [] }) => {
  const year = new Date().getFullYear();
  const legal = themeConfig.legal ?? {};
  const email = themeConfig.supportEmail;
  const phoneDigits = (themeConfig.contactPhone || "").replace(/[^\d]/g, "");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e) => {
    e.preventDefault();
    const addr = new FormData(e.currentTarget).get("email");
    const to = themeConfig.contactEmail || email;
    if (addr && to) {
      window.location.href = `mailto:${to}?subject=Keep me posted on FutureJobs&body=Please add ${addr} to product updates.`;
    }
    setSubscribed(true);
  };

  return (
    <footer className="relative w-full bg-[#f6f7ff]">
      <Container className="py-16 sm:py-20">
        {/* Top — brand statement + columns */}
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1.3fr]">
          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-2.5 self-start">
              <img
                src="/logo.png"
                alt={`${APP_NAME_FULL} logo`}
                className="h-9 w-auto object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-primary-dark">
                Futurejobs<span className="text-brand">AI</span>
              </span>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[var(--color-text-secondary)]">
              One AI. One workspace. Everything recruiters need - sourcing,
              outreach, calling and analytics in a single intelligent platform.
            </p>
            <div>
              <span className="fj-eyebrow mb-2.5 block text-[11px] font-semibold text-[var(--color-text-tertiary)]">
                Get in touch
              </span>
              <div className="flex items-center gap-3">
                {email && (
                  <IconLink
                    href={`mailto:${email}`}
                    label={`Email us - ${email}`}
                    name="mail"
                  />
                )}
                {phoneDigits && (
                  <IconLink
                    href={`https://wa.me/${phoneDigits}`}
                    label="Message us on WhatsApp"
                    name="whatsapp"
                  />
                )}
                {themeConfig.calendlyUrl && (
                  <IconLink
                    href={themeConfig.calendlyUrl}
                    label="Book a demo"
                    name="calendar"
                  />
                )}
              </div>
            </div>
          </div>

          {/* Product */}
          <nav aria-label="Product" className="flex flex-col gap-3.5">
            <span className="fj-eyebrow text-[11px] font-semibold text-[var(--color-text-tertiary)]">
              Product
            </span>
            {links.map((l) => (
              <button
                key={l.label}
                onClick={l.onClick}
                className="w-fit text-[15px] text-[var(--color-text-secondary)] transition-colors hover:text-primary-dark"
              >
                {l.label}
              </button>
            ))}
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="flex flex-col gap-3.5">
            <span className="fj-eyebrow text-[11px] font-semibold text-[var(--color-text-tertiary)]">
              Company
            </span>
            <a
              href={APP_ROUTES.PRIVACY_POLICY}
              className="w-fit text-[15px] text-[var(--color-text-secondary)] no-underline transition-colors hover:text-primary-dark"
            >
              Privacy Policy
            </a>
            <a
              href={APP_ROUTES.TERMS_AND_CONDITIONS}
              className="w-fit text-[15px] text-[var(--color-text-secondary)] no-underline transition-colors hover:text-primary-dark"
            >
              Terms &amp; Conditions
            </a>
            {email && (
              <a
                href={`mailto:${email}`}
                className="w-fit text-[15px] text-[var(--color-text-secondary)] no-underline transition-colors hover:text-primary-dark"
              >
                {email}
              </a>
            )}
            {legal.privacyEmail && (
              <a
                href={`mailto:${legal.privacyEmail}`}
                className="w-fit text-[15px] text-[var(--color-text-secondary)] no-underline transition-colors hover:text-primary-dark"
              >
                Privacy &amp; Grievances
              </a>
            )}
          </nav>

          {/* Newsletter + CTA */}
          <div className="flex flex-col gap-4">
            <span className="fj-eyebrow text-[11px] font-semibold text-[var(--color-text-tertiary)]">
              Stay in the loop
            </span>
            {subscribed ? (
              <p className="flex items-center gap-2 text-sm text-primary-dark">
                <Icon name="check" size={16} className="text-brand" /> Thanks -
                check your mail client.
              </p>
            ) : (
              <form
                onSubmit={onSubscribe}
                className="flex items-center gap-2 rounded-full border border-[var(--color-border)] bg-bg-container p-1 pl-4 shadow-sm focus-within:border-brand/50"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="you@company.com"
                  className="min-w-0 flex-1 bg-transparent text-sm text-primary-dark outline-none placeholder:text-[var(--color-text-quaternary)]"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand text-white transition-transform hover:-translate-y-px"
                >
                  <Icon name="arrowRight" size={15} />
                </button>
              </form>
            )}
            <p className="text-xs leading-relaxed text-[var(--color-text-tertiary)]">
              Product updates, occasionally. No spam.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col gap-3 border-t border-[var(--color-border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[var(--color-text-tertiary)]">
            © {year} {legal.companyName || APP_NAME_FULL}. All rights reserved.
          </p>
          {legal.address && (
            <p className="max-w-md text-xs leading-relaxed text-[var(--color-text-quaternary)] sm:text-right">
              {legal.registeredName && (
                <>
                  <span className="font-semibold text-[var(--color-text-tertiary)]">
                    {legal.registeredName}
                  </span>
                  <br />
                </>
              )}
              {legal.address}
            </p>
          )}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
