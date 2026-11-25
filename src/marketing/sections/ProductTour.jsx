/**
 * Product tour — each capability of the recruiting OS gets its own premium
 * showcase, every one a distinct composition (no repeated heading+screenshot).
 */
import { Icon } from "../icons";
import {
  CommandCenterBoard,
  FloatingMatch,
  IntegrationsBoard,
  OutreachChannels,
  ProfileDrawer,
  ReminderCard,
  RevealBoard,
  SequenceBoard,
  SignalsCard,
  SourcingBoard,
} from "../mocks";
import { Container, Reveal } from "../primitives";
import { BrowserMockup } from "../primitives/atmosphere";

const Points = ({ items, tone = "light" }) => (
  <ul className="mt-6 flex flex-col gap-3">
    {items.map((p) => (
      <li
        key={p}
        className={
          "flex items-start gap-3 text-[15px] " +
          (tone === "dark" ? "text-white/85" : "text-primary-dark")
        }
      >
        <span
          className={
            "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full " +
            (tone === "dark"
              ? "bg-white/10 text-[var(--cyan)]"
              : "bg-primary-bg text-brand")
          }
        >
          <Icon name="check" size={14} />
        </span>
        {p}
      </li>
    ))}
  </ul>
);

const Eyebrow = ({ children }) => (
  <span className="fj-eyebrow inline-flex items-center gap-2 text-[13px] font-bold text-brand">
    <span className="h-1 w-5 rounded-full bg-brand" />
    {children}
  </span>
);

/* ── 1 · DASHBOARD — bento command center ────────────────────────────── */
export const DashboardScene = () => (
  <section
    id="dashboard"
    className="fj-aurora-soft relative overflow-hidden py-16 sm:py-20"
  >
    <div className="fj-spotlight" />
    <Container className="relative">
      <Reveal className="mx-auto max-w-2xl text-center">
        <Eyebrow>Dashboard</Eyebrow>
        <h2 className="fj-display mt-3 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
          Your recruiting <span className="fj-grad-brand">command center</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
          Workspace analytics, AI-generated summaries, pipeline and credit
          trends, and what needs your attention - the moment you log in.
        </p>
      </Reveal>
      <Reveal delay={0.12} y={28} className="mx-auto mt-10 max-w-6xl">
        <BrowserMockup url="futurejobs.ai">
          <CommandCenterBoard />
        </BrowserMockup>
      </Reveal>
    </Container>
  </section>
);

/* ── 2 · CANDIDATE INTELLIGENCE — split, layered cards ───────────────── */
export const IntelligenceScene = () => (
  <section
    id="intelligence"
    className="relative overflow-hidden bg-bg-base py-24 sm:py-32"
  >
    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>Candidate intelligence</Eyebrow>
          <h2 className="fj-display mt-4 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
            Browse an AI-powered talent graph
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            Describe the role - type it or say it. AI returns ranked candidates
            with a match score, skills, experience, and a career timeline, ready
            to act on.
          </p>
          <Points
            items={[
              "AI match score on every candidate",
              "Skills, experience & timeline at a glance",
              "Boolean, manual & similar-profile search",
            ]}
          />
        </Reveal>
        <Reveal delay={0.1} y={28} className="relative min-w-0 lg:-mr-10">
          <BrowserMockup url="futurejobs.ai">
            <SourcingBoard />
          </BrowserMockup>
          <div className="absolute -left-6 -bottom-8 z-20 hidden w-56 sm:block">
            <FloatingMatch />
          </div>
        </Reveal>
      </div>
    </Container>
  </section>
);

/* ── 3 · AI PROFILE — reversed split with annotations ────────────────── */
export const ProfileScene = () => (
  <section
    id="profile"
    className="fj-aurora-soft relative overflow-hidden py-24 sm:py-32"
  >
    <div
      className="fj-bloom right-0 top-1/4 h-[360px] w-[360px]"
      style={{ background: "rgba(141,245,246,0.28)" }}
    />
    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <Reveal y={28} className="order-2 mx-auto w-full max-w-sm lg:order-1">
          <ProfileDrawer />
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <Eyebrow>AI candidate profile</Eyebrow>
          <h2 className="fj-display mt-4 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
            An AI recruiting copilot for every profile
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            Open anyone and get an instant, AI-generated read - highlights,
            skills summary, and experience analysis - plus one-click reveal,
            message, and remind, without leaving the profile.
          </p>
          <Points
            items={[
              "AI-generated highlights & overview",
              "Skills and experience analysis",
              "One-click reveal, message & remind",
            ]}
          />
        </Reveal>
      </div>
    </Container>
  </section>
);

/* ── 4 · SIGNALS — feed composition ──────────────────────────────────── */
export const SignalsScene = () => {
  const types = [
    "Funding rounds",
    "Headcount growth",
    "Layoffs",
    "Leadership changes",
    "Hiring spikes",
    "Tenure & job moves",
  ];
  return (
    <section
      id="signals"
      className="relative overflow-hidden bg-bg-base py-24 sm:py-32"
    >
      <div className="fj-dotgrid opacity-60" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <Eyebrow>Signals</Eyebrow>
            <h2 className="fj-display mt-4 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
              Reach out at the perfect moment
            </h2>
            <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
              AI reads company and candidate signals - funding, growth, layoffs,
              leadership changes, tenure - and tells you whether now is the time
              to reach out, or whether to hold.
            </p>
            <div className="mt-7 flex flex-wrap gap-2">
              {types.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-[var(--color-border)] bg-bg-container px-3 py-1.5 text-[13px] font-medium text-[var(--color-text-secondary)]"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.1} y={28} className="mx-auto w-full max-w-md">
            <SignalsCard />
          </Reveal>
        </div>
      </Container>
    </section>
  );
};

/* ── 5 · CONTACT DISCOVERY — focused tinted band ─────────────────────── */
export const ContactScene = () => (
  <section
    id="contact"
    className="relative overflow-hidden bg-primary-bg/40 py-16 sm:py-24"
  >
    <div className="fj-mesh-soft" />
    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[0.88fr_1.12fr]">
        <Reveal>
          <Eyebrow>Contact discovery</Eyebrow>
          <h2 className="fj-display mt-3 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
            Verified emails & phone numbers, instantly
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            Find personal and work emails and direct phone numbers right inside
            the workspace - individually or in bulk, with policies that only
            spend on hits. No extra tools, no exports.
          </p>
          <Points
            items={[
              "Personal & work emails, direct phones",
              "Reveal one-by-one or in bulk",
              "Spend only on hits - never on misses",
            ]}
          />
        </Reveal>
        <Reveal delay={0.1} y={28} className="min-w-0 lg:-mr-6">
          <BrowserMockup url="futurejobs.ai">
            <RevealBoard />
          </BrowserMockup>
        </Reveal>
      </div>
    </Container>
  </section>
);

/* ── 6 · OUTREACH — channels + sequence ──────────────────────────────── */
export const OutreachScene = () => (
  <section
    id="outreach"
    className="fj-aurora-soft relative overflow-hidden py-16 sm:py-24"
  >
    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]">
        <Reveal>
          <Eyebrow>Multi-channel outreach</Eyebrow>
          <h2 className="fj-display mt-3 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
            Reach candidates everywhere - from one place
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            Email, your own Gmail, WhatsApp, and AI voice calls - sent as
            automated, personalized sequences. No context switching, no
            copy-paste.
          </p>
          <div className="mt-7">
            <OutreachChannels />
          </div>
        </Reveal>
        <Reveal delay={0.1} y={28} className="min-w-0 lg:-mr-6">
          <BrowserMockup url="futurejobs.ai">
            <SequenceBoard />
          </BrowserMockup>
        </Reveal>
      </div>
    </Container>
  </section>
);

/* ── 7 · INTEGRATIONS — connected hub grid ───────────────────────────── */
export const IntegrationsScene = () => (
  <section
    id="integrations"
    className="relative overflow-hidden bg-bg-base py-16 sm:py-24"
  >
    <div className="fj-dotgrid opacity-50" />
    <Container className="relative">
      <Reveal className="mx-auto mb-10 max-w-2xl text-center">
        <Eyebrow>Integrations</Eyebrow>
        <h2 className="fj-display mt-3 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
          Plugs into the tools you already live in
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
          Connect Gmail, Google Calendar, Google Drive, and WhatsApp in a click
          - then everything stays in sync, automatically.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mx-auto max-w-2xl">
        <IntegrationsBoard />
      </Reveal>
    </Container>
  </section>
);

/* ── 8 · REMINDERS — calm split ──────────────────────────────────────── */
export const RemindersScene = () => (
  <section
    id="reminders"
    className="fj-aurora-soft relative overflow-hidden py-24 sm:py-32"
  >
    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal
          delay={0.05}
          y={28}
          className="order-2 mx-auto w-full max-w-sm lg:order-1"
        >
          <ReminderCard />
        </Reveal>
        <Reveal className="order-1 lg:order-2">
          <Eyebrow>Smart reminders</Eyebrow>
          <h2 className="fj-display mt-4 text-[clamp(2.15rem,1.4rem+2.8vw,3.5rem)] text-primary-dark">
            Never let a follow-up slip
          </h2>
          <p className="mt-5 max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            Set a reminder on any candidate and FutureJobs helps you pick the
            right moment - then keeps it in sync with your Google Calendar so
            nothing is forgotten.
          </p>
          <Points
            items={[
              "Reminders on any candidate or sequence",
              "AI suggests the best time to reach out",
              "Auto-synced with Google Calendar",
            ]}
          />
        </Reveal>
      </div>
    </Container>
  </section>
);
