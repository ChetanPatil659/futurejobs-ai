/**
 * Product UI mockups — the centerpiece. Built in markup (no screenshots) so they
 * stay crisp at any scale. Each "board" mirrors a real FutureJobs surface and
 * renders inside an app shell with a sidebar + topbar for product realism.
 */
import { Icon } from "./icons";

/* ── Shared app shell ────────────────────────────────────────────────── */
const NAV = ["search", "send", "chat", "layers", "doc"];

const AppShell = ({ active = 0, title, children }) => (
  <div className="flex min-h-[420px] bg-bg-base">
    {/* sidebar */}
    <aside className="hidden w-14 shrink-0 flex-col items-center gap-1 border-r border-[var(--color-border)] bg-bg-layout py-4 sm:flex">
      <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
        <Icon name="bolt" size={16} />
      </span>
      {NAV.map((n, i) => (
        <span
          key={n}
          className={
            "flex h-9 w-9 items-center justify-center rounded-lg " +
            (i === active
              ? "bg-primary-bg text-brand"
              : "text-[var(--color-text-tertiary)]")
          }
        >
          <Icon name={n} size={18} />
        </span>
      ))}
    </aside>
    {/* main */}
    <div className="min-w-0 flex-1">
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3.5">
        <span className="font-semibold text-primary-dark">{title}</span>
        <span className="flex items-center gap-2">
          <span className="hidden rounded-full bg-primary-bg px-2.5 py-1 text-[11px] font-medium text-brand sm:inline">
            AI on
          </span>
          <span className="h-7 w-7 rounded-full bg-[var(--color-text-secondary)]/15" />
        </span>
      </div>
      {children}
    </div>
  </div>
);

const Stars = ({ n }) => (
  <span className="inline-flex items-center gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <Icon
        key={i}
        name="star"
        size={12}
        className={i < n ? "text-brand" : "text-[var(--color-border)]"}
      />
    ))}
  </span>
);

/* ── 1 · Sourcing workspace ──────────────────────────────────────────── */
const ROWS = [
  {
    i: "PN",
    n: "Priya Nair",
    r: "Senior Backend Engineer · Payments",
    l: "Bengaluru",
    s: 5,
    m: 92,
  },
  {
    i: "TB",
    n: "Tom Beckett",
    r: "Backend Lead · B2B SaaS",
    l: "London",
    s: 4,
    m: 88,
  },
  {
    i: "WC",
    n: "Wei Chen",
    r: "Staff Engineer · Fintech",
    l: "Singapore",
    s: 4,
    m: 85,
  },
  {
    i: "SO",
    n: "Sara Owusu",
    r: "Senior SWE · Distributed systems",
    l: "Berlin",
    s: 3,
    m: 79,
  },
  {
    i: "DK",
    n: "Diego Castro",
    r: "Backend Engineer · Go, K8s",
    l: "Lisbon",
    s: 4,
    m: 83,
  },
];

export const SourcingBoard = () => (
  <AppShell active={0} title="Sourcing · Senior backend engineers">
    <div className="flex">
      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-center gap-2 px-5 py-3">
          <span className="flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-bg-layout px-3 py-1.5 text-xs text-[var(--color-text-secondary)]">
            <Icon name="search" size={13} className="text-brand" /> Go ·
            Kubernetes · 5–8 yrs · EMEA + APAC
          </span>
          <span className="rounded-full bg-primary-bg px-2.5 py-1 text-[11px] font-medium text-brand">
            312 matches
          </span>
        </div>
        <div className="divide-y divide-[var(--color-border-secondary)]">
          {ROWS.map((c) => (
            <div key={c.n} className="flex items-center gap-3 px-5 py-3">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-bg text-xs font-semibold text-brand">
                {c.i}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[13.5px] font-semibold text-primary-dark">
                  {c.n}
                </p>
                <p className="truncate text-[11px] text-[var(--color-text-tertiary)]">
                  {c.r} · {c.l}
                </p>
              </div>
              <span className="hidden sm:inline">
                <Stars n={c.s} />
              </span>
              <span className="fj-tabular w-10 shrink-0 text-right text-xs font-bold text-brand">
                {c.m}%
              </span>
              <span className="hidden shrink-0 items-center gap-1 rounded-md bg-bg-layout px-2 py-1 text-[10px] text-[var(--color-text-secondary)] xl:flex">
                <Icon name="mail" size={11} /> Reveal
              </span>
            </div>
          ))}
        </div>
      </div>
      {/* insights rail */}
      <div className="hidden w-52 shrink-0 border-l border-[var(--color-border)] p-4 lg:block">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Match insights
        </p>
        <div className="mt-3 flex items-end gap-1.5">
          {[40, 64, 88, 72, 52, 34].map((h, i) => (
            <span
              key={i}
              className="w-full rounded-t bg-brand/80"
              style={{ height: h }}
            />
          ))}
        </div>
        <p className="mt-2 text-[10px] text-[var(--color-text-tertiary)]">
          Match score distribution
        </p>
        <div className="mt-4 space-y-2">
          {[
            ["Go", 86],
            ["Kubernetes", 71],
            ["Payments", 58],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)]">
                <span>{k}</span>
                <span>{v}%</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-bg-layout">
                <div
                  className="h-full rounded-full bg-cyan-400"
                  style={{ width: `${v}%`, background: "var(--cyan)" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AppShell>
);

/* ── 2 · Outreach sequence ───────────────────────────────────────────── */
const STEPS = [
  { ch: "mail", t: "Email · Intro", w: "Immediately", c: "text-brand" },
  {
    ch: "whatsapp",
    t: "WhatsApp · Follow-up",
    w: "After 2 days",
    c: "text-[var(--color-success-text)]",
  },
  {
    ch: "mail",
    t: "Email · Role details",
    w: "After 4 days · 9:30 AM",
    c: "text-brand",
  },
];

export const SequenceBoard = () => (
  <AppShell active={1} title="Sequence · Backend outreach">
    <div className="flex flex-col gap-6 p-5 lg:flex-row">
      <div className="flex-1">
        <div className="mb-4 flex items-center gap-2">
          <span className="rounded-full bg-[var(--color-success-bg)] px-2.5 py-1 text-[11px] font-semibold text-[var(--color-success-text)]">
            Live
          </span>
          <span className="text-xs text-[var(--color-text-tertiary)]">
            128 enrolled · 3 steps
          </span>
        </div>
        <ol className="relative ml-3 border-l border-[var(--color-border)]">
          {STEPS.map((s, i) => (
            <li key={i} className="relative mb-5 pl-6 last:mb-0">
              <span className="absolute -left-[7px] top-1 h-3.5 w-3.5 rounded-full border-2 border-bg-base bg-brand" />
              <div className="flex items-center gap-2">
                <Icon name={s.ch} size={16} className={s.c} />
                <span className="text-sm font-semibold text-primary-dark">
                  {s.t}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-[var(--color-text-tertiary)]">
                {s.w}
              </p>
              <div className="mt-2 rounded-lg border border-[var(--color-border)] bg-bg-layout p-2.5 text-[11px] leading-relaxed text-[var(--color-text-secondary)]">
                Hi {"{{first_name}}"} - your work on distributed payments caught
                my eye…
              </div>
            </li>
          ))}
        </ol>
      </div>
      <div className="w-full shrink-0 lg:w-56">
        <p className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
          Performance
        </p>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          {[
            ["64%", "Open"],
            ["31%", "Reply"],
            ["1%", "Bounce"],
          ].map(([v, k]) => (
            <div key={k} className="rounded-lg bg-bg-layout py-3">
              <p className="fj-tabular text-base font-bold text-primary-dark">
                {v}
              </p>
              <p className="text-[10px] text-[var(--color-text-tertiary)]">
                {k}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-end gap-1.5">
          {[30, 52, 44, 68, 80, 62, 90].map((h, i) => (
            <span
              key={i}
              className="w-full rounded-t"
              style={{
                height: h,
                background: i === 6 ? "var(--brand)" : "rgba(0,34,246,0.35)",
              }}
            />
          ))}
        </div>
        <p className="mt-2 text-[10px] text-[var(--color-text-tertiary)]">
          Replies, last 7 days
        </p>
      </div>
    </div>
  </AppShell>
);

/* ── 3 · AI screening scorecard ──────────────────────────────────────── */
const CHAT = [
  {
    from: "ai",
    t: "Hi Priya! A couple quick questions about the Senior Backend role 👋",
  },
  { from: "them", t: "Sure, go ahead." },
  {
    from: "ai",
    t: "What's your notice period, and are you open to hybrid in Bengaluru?",
  },
  { from: "them", t: "30 days, and yes - hybrid works for me." },
];

export const ScreeningBoard = () => (
  <AppShell active={2} title="Screening · AI assistant over WhatsApp">
    <div className="flex flex-col gap-5 p-5 lg:flex-row">
      <div className="flex-1">
        <div className="space-y-2.5">
          {CHAT.map((m, i) => (
            <div
              key={i}
              className={
                "flex " + (m.from === "them" ? "justify-end" : "justify-start")
              }
            >
              <span
                className={
                  "max-w-[80%] rounded-2xl px-3 py-2 text-[12px] leading-relaxed " +
                  (m.from === "them"
                    ? "rounded-br-sm bg-brand text-white"
                    : "rounded-bl-sm bg-bg-layout text-primary-dark")
                }
              >
                {m.t}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full shrink-0 rounded-xl border border-[var(--color-border)] bg-bg-layout p-4 lg:w-60">
        <div className="mb-3 flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-bg text-xs font-semibold text-brand">
            PN
          </span>
          <div>
            <p className="text-sm font-semibold text-primary-dark">
              Priya Nair
            </p>
            <p className="text-[10px] text-[var(--color-text-tertiary)]">
              Screening complete
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            ["86", "Competency"],
            ["91", "Culture fit"],
          ].map(([v, k]) => (
            <div key={k} className="rounded-lg bg-bg-base py-3 text-center">
              <p className="fj-tabular text-2xl font-bold text-primary-dark">
                {v}
              </p>
              <p className="text-[10px] text-[var(--color-text-secondary)]">
                {k}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-3 space-y-2">
          {[
            ["Technical", 88],
            ["Communication", 82],
            ["Ownership", 94],
          ].map(([k, v]) => (
            <div key={k}>
              <div className="flex justify-between text-[10px] text-[var(--color-text-secondary)]">
                <span>{k}</span>
                <span>{v}</span>
              </div>
              <div className="mt-1 h-1.5 rounded-full bg-bg-base">
                <div
                  className="h-full rounded-full bg-brand"
                  style={{ width: `${v}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </AppShell>
);

/* ── 4 · Contact reveal ──────────────────────────────────────────────── */
const REVEAL = [
  {
    i: "PN",
    n: "Priya Nair",
    e: "p.nair@stripe.com",
    p: "+91 ·····  4821",
    done: true,
  },
  {
    i: "TB",
    n: "Tom Beckett",
    e: "tom@monzo.com",
    p: "+44 ·····  7730",
    done: true,
  },
  {
    i: "WC",
    n: "Wei Chen",
    e: "revealing…",
    p: "+65 ·····  ····",
    done: false,
  },
];

export const RevealBoard = () => (
  <AppShell active={0} title="Contact reveal · 38 selected">
    <div className="p-5">
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="rounded-lg border border-[var(--color-border)] bg-bg-layout px-3 py-1.5 text-xs font-medium text-primary-dark">
          Policy: Email first, phone fallback
        </span>
        <span className="rounded-full bg-primary-bg px-2.5 py-1 text-[11px] font-medium text-brand">
          Spends only on hits
        </span>
      </div>
      <div className="divide-y divide-[var(--color-border-secondary)] rounded-xl border border-[var(--color-border)]">
        {REVEAL.map((c) => (
          <div key={c.n} className="flex items-center gap-3 px-4 py-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-bg text-xs font-semibold text-brand">
              {c.i}
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-semibold text-primary-dark">
                {c.n}
              </p>
              <p className="fj-tabular flex flex-wrap gap-x-3 text-xs text-[var(--color-text-tertiary)]">
                <span className="inline-flex items-center gap-1">
                  <Icon name="mail" size={11} />
                  {c.e}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Icon name="phone" size={11} />
                  {c.p}
                </span>
              </p>
            </div>
            <span
              className={
                "rounded-full px-2.5 py-1 text-[11px] font-semibold " +
                (c.done
                  ? "bg-[var(--color-success-bg)] text-[var(--color-success-text)]"
                  : "bg-bg-layout text-[var(--color-text-tertiary)]")
              }
            >
              {c.done ? "Revealed" : "···"}
            </span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between rounded-xl bg-bg-layout px-4 py-3">
        <span className="text-xs text-[var(--color-text-secondary)]">
          36 of 38 revealed
        </span>
        <span className="fj-tabular text-sm font-bold text-primary-dark">
          2 skipped · 0 wasted credits
        </span>
      </div>
    </div>
  </AppShell>
);

/* ── Small floating fragments (used as layered, detached UI) ─────────── */
export const FloatingMatch = ({ className }) => (
  <div
    className={
      "fj-float rounded-xl border border-[var(--color-border)] bg-bg-container p-3 " +
      (className || "")
    }
  >
    <div className="flex items-center gap-2">
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-bg text-[11px] font-semibold text-brand">
        PN
      </span>
      <div>
        <p className="text-xs font-semibold text-primary-dark">Priya Nair</p>
        <p className="fj-tabular text-[10px] text-brand">92% match · 5.0</p>
      </div>
    </div>
  </div>
);

/* ── 5 · Dashboard / command center ──────────────────────────────────── */
const KPIS = [
  { k: "Candidates", v: "3,914", d: "+182", icon: "layers" },
  { k: "Contacts revealed", v: "1,260", d: "+47", icon: "mail" },
  { k: "Outreach sent", v: "884", d: "+63", icon: "send" },
  { k: "Reply rate", v: "31%", d: "+4%", icon: "trend" },
];

export const DashboardBoard = () => (
  <AppShell active={-1} title="Dashboard · Acme Talent">
    <div className="p-5">
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {KPIS.map((m) => (
          <div
            key={m.k}
            className="rounded-xl border border-[var(--color-border)] bg-bg-container p-3.5"
          >
            <div className="flex items-center justify-between">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-bg text-brand">
                <Icon name={m.icon} size={16} />
              </span>
              <span className="fj-tabular text-[11px] font-semibold text-[var(--color-success-text)]">
                {m.d}
              </span>
            </div>
            <p className="fj-tabular mt-3 text-2xl font-bold text-primary-dark">
              {m.v}
            </p>
            <p className="text-[11px] text-[var(--color-text-tertiary)]">
              {m.k}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 grid gap-3 lg:grid-cols-[1.5fr_1fr]">
        {/* chart */}
        <div className="rounded-xl border border-[var(--color-border)] bg-bg-container p-4">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-sm font-semibold text-primary-dark">
              Pipeline activity
            </p>
            <span className="rounded-full bg-bg-layout px-2 py-0.5 text-[10px] text-[var(--color-text-tertiary)]">
              Last 30 days
            </span>
          </div>
          <div className="flex h-28 items-end gap-1.5">
            {[34, 48, 40, 62, 55, 78, 70, 88, 72, 96, 84, 100].map((h, i) => (
              <span
                key={i}
                className="w-full rounded-t"
                style={{
                  height: `${h}%`,
                  background: i > 9 ? "var(--brand)" : "rgba(0,34,246,0.28)",
                }}
              />
            ))}
          </div>
        </div>
        {/* AI insight + activity */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-brand/20 bg-primary-bg/60 p-3.5">
            <div className="flex items-center gap-2">
              <Icon name="spark" size={15} className="text-brand" />
              <span className="text-xs font-semibold text-brand">
                AI summary
              </span>
            </div>
            <p className="mt-1.5 text-[12px] leading-relaxed text-primary-dark">
              Reply rate is up 4% this week. 12 candidates show fresh job-change
              signals - worth reaching out today.
            </p>
          </div>
          <div className="rounded-xl border border-[var(--color-border)] bg-bg-container p-3.5">
            {[
              ["Priya replied", "2m"],
              ["Tom - call booked", "1h"],
              ["Sequence launched · 128", "3h"],
            ].map(([t, w]) => (
              <div
                key={t}
                className="flex items-center justify-between py-1.5 text-[12px]"
              >
                <span className="flex items-center gap-2 text-primary-dark">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand" />
                  {t}
                </span>
                <span className="text-[var(--color-text-tertiary)]">{w}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </AppShell>
);

/* ── 6 · AI candidate profile (drawer) ───────────────────────────────── */
export const ProfileDrawer = ({ className }) => (
  <div
    className={
      "overflow-hidden rounded-2xl border border-[var(--color-border)] bg-bg-container fj-window " +
      (className || "")
    }
  >
    <div className="relative bg-bg-layout p-5">
      <div className="flex items-start gap-3">
        <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand text-lg font-semibold text-white">
          PN
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-base font-bold text-primary-dark">Priya Nair</p>
          <p className="text-xs text-[var(--color-text-secondary)]">
            Senior Backend Engineer · Payments
          </p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            Bengaluru, IN · 7 yrs experience
          </p>
        </div>
        <span className="fj-tabular rounded-full bg-primary-bg px-2.5 py-1 text-xs font-bold text-brand">
          92
        </span>
      </div>
      <div className="mt-4 flex gap-2">
        {[
          ["mail", "Reveal"],
          ["send", "Message"],
          ["bell", "Remind"],
        ].map(([ic, l]) => (
          <span
            key={l}
            className="flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-bg-container py-2 text-[11px] font-medium text-primary-dark shadow-sm"
          >
            <Icon name={ic} size={13} className="text-brand" />
            {l}
          </span>
        ))}
      </div>
    </div>
    <div className="flex gap-4 border-b border-[var(--color-border)] px-5">
      {["Overview", "Signals", "Highlights"].map((t, i) => (
        <span
          key={t}
          className={
            "border-b-2 py-2.5 text-xs font-medium " +
            (i === 0
              ? "border-brand text-brand"
              : "border-transparent text-[var(--color-text-tertiary)]")
          }
        >
          {t}
        </span>
      ))}
    </div>
    <div className="space-y-4 p-5">
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Icon name="spark" size={14} className="text-brand" />
          <span className="text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
            AI highlights
          </span>
        </div>
        <ul className="space-y-1.5">
          {[
            "Led payments platform scaling 12× at a Series C fintech",
            "Deep Go + Kubernetes; owned core ledger service",
            "Tenure 3.2 yrs - typical move window approaching",
          ].map((h) => (
            <li
              key={h}
              className="flex gap-2 text-[12px] leading-relaxed text-primary-dark"
            >
              <Icon
                name="check"
                size={14}
                className="mt-0.5 shrink-0 text-brand"
              />
              {h}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
          Top skills
        </p>
        <div className="flex flex-wrap gap-1.5">
          {[
            "Go",
            "Kubernetes",
            "Payments",
            "Distributed systems",
            "PostgreSQL",
          ].map((s) => (
            <span
              key={s}
              className="rounded-full bg-bg-layout px-2.5 py-1 text-[11px] font-medium text-primary-dark"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  </div>
);

/* ── 7 · Signals (Job Change Indicator) ──────────────────────────────── */
export const SignalsCard = ({ className }) => (
  <div
    className={
      "overflow-hidden rounded-2xl border border-[var(--color-border)] bg-bg-container fj-window " +
      (className || "")
    }
  >
    <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3.5">
      <span className="text-sm font-semibold text-primary-dark">
        Job Change Indicator
      </span>
      <span className="flex items-center gap-1.5 rounded-full bg-primary-bg px-2.5 py-1 text-[11px] font-medium text-brand">
        <Icon name="spark" size={12} /> AI
      </span>
    </div>
    <div className="p-5">
      <div className="flex items-center gap-3 rounded-xl border border-[var(--color-success-border)] bg-[var(--color-success-bg)] p-3.5">
        <span className="text-2xl">🟢</span>
        <div>
          <p className="text-sm font-bold text-primary-dark">
            Great time to reach out
          </p>
          <p className="text-[11px] text-[var(--color-text-secondary)]">
            Strong signals suggest she&apos;s open to a move
          </p>
        </div>
      </div>

      <p className="mt-4 mb-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
        Reasons to reach out
      </p>
      <div className="space-y-2">
        {[
          ["Company raised Series C", "High impact", "building"],
          ["Team headcount up 38% in 6 mo", "Medium impact", "trend"],
          ["3.2 yrs in role - move window", "Medium impact", "calendar"],
        ].map(([t, tag, ic]) => (
          <div
            key={t}
            className="flex items-center gap-3 rounded-lg border border-[var(--color-border)] bg-bg-container p-2.5"
          >
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <Icon name={ic} size={14} />
            </span>
            <span className="flex-1 text-[12px] font-medium text-primary-dark">
              {t}
            </span>
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-medium text-emerald-700">
              {tag}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-center text-[10px] text-[var(--color-text-tertiary)]">
        Last checked · 2h ago · these are just signals
      </p>
    </div>
  </div>
);

/* ── 8 · Integrations ────────────────────────────────────────────────── */
const INTEG = [
  { n: "Gmail", ic: "mail", on: true, d: "Send & track from your inbox" },
  {
    n: "Google Calendar",
    ic: "calendar",
    on: true,
    d: "Auto-schedule reminders",
  },
  { n: "Google Drive", ic: "drive", on: true, d: "Pull resumes & files" },
  { n: "WhatsApp", ic: "whatsapp", on: true, d: "Message candidates" },
];

export const IntegrationsBoard = ({ className }) => (
  <div className={"grid grid-cols-1 gap-3 sm:grid-cols-2 " + (className || "")}>
    {INTEG.map((it) => (
      <div
        key={it.n}
        className="fj-float flex items-center gap-3 rounded-2xl border border-[var(--color-border)] bg-bg-container p-4"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary-bg text-brand">
          <Icon name={it.ic} size={20} />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-sm font-semibold text-primary-dark">{it.n}</p>
          <p className="truncate text-[11px] text-[var(--color-text-tertiary)]">
            {it.d}
          </p>
        </div>
        <span className="flex items-center gap-1 rounded-full bg-[var(--color-success-bg)] px-2 py-1 text-[10px] font-semibold text-[var(--color-success-text)]">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-success-text)]" />{" "}
          Connected
        </span>
      </div>
    ))}
    <div className="flex items-center justify-center gap-2 rounded-2xl border border-dashed border-[var(--color-border)] p-4 text-[12px] font-medium text-[var(--color-text-tertiary)] sm:col-span-2">
      <Icon name="plus" size={15} /> More integrations on the way
    </div>
  </div>
);

/* ── 9 · Smart reminder ──────────────────────────────────────────────── */
export const ReminderCard = ({ className }) => (
  <div
    className={
      "overflow-hidden rounded-2xl border border-[var(--color-border)] bg-bg-container fj-window " +
      (className || "")
    }
  >
    <div className="flex items-center gap-2 border-b border-[var(--color-border)] px-5 py-3.5">
      <Icon name="bell" size={16} className="text-brand" />
      <span className="text-sm font-semibold text-primary-dark">
        Set a reminder
      </span>
    </div>
    <div className="space-y-3 p-5">
      <div className="flex items-center gap-3 rounded-xl bg-bg-layout p-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand text-xs font-semibold text-white">
          PN
        </span>
        <div>
          <p className="text-sm font-semibold text-primary-dark">
            Follow up with Priya Nair
          </p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            Senior Backend Engineer
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="rounded-lg border border-[var(--color-border)] p-3">
          <p className="text-[10px] uppercase tracking-wide text-[var(--color-text-tertiary)]">
            When
          </p>
          <p className="mt-1 text-sm font-medium text-primary-dark">
            Thu, 9:30 AM
          </p>
        </div>
        <div className="rounded-lg border border-[var(--color-border)] p-3">
          <p className="text-[10px] uppercase tracking-wide text-[var(--color-text-tertiary)]">
            Channel
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-primary-dark">
            <Icon name="mail" size={13} className="text-brand" /> Email
          </p>
        </div>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-primary-bg/60 px-3 py-2.5">
        <span className="flex items-center gap-2 text-[12px] font-medium text-primary-dark">
          <Icon name="calendar" size={14} className="text-brand" /> Sync to
          Google Calendar
        </span>
        <span className="relative h-5 w-9 rounded-full bg-brand">
          <span className="absolute right-0.5 top-0.5 h-4 w-4 rounded-full bg-white" />
        </span>
      </div>
    </div>
  </div>
);

/* ── 10 · Multi-channel outreach ─────────────────────────────────────── */
export const OutreachChannels = ({ className }) => {
  const ch = [
    { ic: "mail", n: "Email", d: "Personalized, tracked" },
    { ic: "send", n: "Gmail", d: "From your own inbox" },
    { ic: "phone", n: "AI Calling", d: "AI reaches out by voice" },
    { ic: "whatsapp", n: "WhatsApp", d: "Templated messages" },
  ];
  return (
    <div className={"grid grid-cols-2 gap-3 " + (className || "")}>
      {ch.map((c) => (
        <div
          key={c.n}
          className="fj-float rounded-2xl border border-[var(--color-border)] bg-bg-container p-4"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-bg text-brand">
            <Icon name={c.ic} size={18} />
          </span>
          <p className="mt-3 text-sm font-semibold text-primary-dark">{c.n}</p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">{c.d}</p>
        </div>
      ))}
    </div>
  );
};

/* ── 11 · Command center (faithful recreation of the real dashboard) ──── */
const Delta = ({ v, up }) => (
  <span
    className={
      "fj-tabular text-[11px] font-semibold " +
      (up
        ? "text-[var(--color-success-text)]"
        : "text-[var(--color-error-text)]")
    }
  >
    {up ? "↑" : "↓"}
    {v}
  </span>
);

const CC_KPIS = [
  {
    label: "Candidates Sourced",
    value: "3,665",
    d: "29%",
    up: false,
    color: "#0022f6",
    pts: "0,24 12,14 24,20 36,8 48,18 60,10 72,22 84,12 100,16",
  },
  {
    label: "Sessions Created",
    value: "44",
    d: "37%",
    up: false,
    color: "#16a34a",
    pts: "0,20 14,22 28,12 42,18 56,9 70,16 84,11 100,14",
  },
  { label: "Email Reveals", value: "47", d: "40%", up: false },
  { label: "Phone Reveals", value: "110", d: "16%", up: true },
  {
    label: "Credits Used",
    value: "364",
    d: "68%",
    up: false,
    color: "#7c3aed",
    pts: "0,22 12,12 24,18 36,9 48,20 60,11 72,16 84,8 100,14",
  },
];

const CC_INSIGHTS = [
  "3,665 candidates were sourced this period - 29% less than the previous 30 days.",
  "70% of credits were spent on sourcing.",
  "Thursday was the most active day this period.",
  "“Senior Software Engineer” generated the most candidates (168).",
  "Averaging 8.3 credits per sourcing session.",
];

const CC_ACTIVITY = [
  {
    who: "Gaurav Gupta",
    what: "refined a sourcing session",
    tag: "Session",
    t: "15 minutes ago",
    cr: 5,
    ic: "bolt",
  },
  {
    who: "Gaurav Gupta",
    what: "refined a sourcing session",
    tag: "Session",
    t: "18 minutes ago",
    cr: 5,
    ic: "bolt",
  },
  {
    who: "Gaurav Gupta",
    what: "created a sourcing session",
    tag: "Session",
    t: "22 minutes ago",
    cr: 5,
    ic: "bolt",
  },
  {
    who: "Gaurav Gupta",
    what: "revealed a phone via Scout",
    tag: "Phone",
    t: "an hour ago",
    cr: 4,
    ic: "phone",
  },
];

const Donut = () => {
  const segs = [
    { label: "Sourcing", v: 255, pct: 70, c: "#0022f6" },
    { label: "Phone Reveals", v: 64, pct: 18, c: "#7c3aed" },
    { label: "Email Reveals", v: 30, pct: 8, c: "#14b8a6" },
    { label: "Exports", v: 15, pct: 4, c: "#f59e0b" },
  ];
  const r = 34;
  const C = 2 * Math.PI * r;
  let offset = 0;
  return (
    <div className="flex items-center gap-5">
      <svg
        width="104"
        height="104"
        viewBox="0 0 104 104"
        className="shrink-0 -rotate-90"
      >
        {segs.map((s) => {
          const len = (s.pct / 100) * C;
          const dash = `${len} ${C - len}`;
          const el = (
            <circle
              key={s.label}
              cx="52"
              cy="52"
              r={r}
              fill="none"
              stroke={s.c}
              strokeWidth="14"
              strokeDasharray={dash}
              strokeDashoffset={-offset}
            />
          );
          offset += len;
          return el;
        })}
      </svg>
      <div className="min-w-0 flex-1 space-y-1.5">
        {segs.map((s) => (
          <div key={s.label} className="flex items-center gap-2 text-[11px]">
            <span
              className="h-2 w-2 rounded-full"
              style={{ background: s.c }}
            />
            <span className="flex-1 text-[var(--color-text-secondary)]">
              {s.label}
            </span>
            <span className="fj-tabular font-semibold text-primary-dark">
              {s.v}
            </span>
            <span className="fj-tabular w-8 text-right text-[var(--color-text-tertiary)]">
              {s.pct}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const Card = ({ className, children }) => (
  <div
    className={
      "rounded-2xl border border-[var(--color-border)] bg-bg-container p-4 " +
      (className || "")
    }
  >
    {children}
  </div>
);

export const CommandCenterBoard = () => (
  <div className="flex bg-bg-base">
    {/* sidebar */}
    <aside className="hidden w-12 shrink-0 flex-col items-center gap-1.5 border-r border-[var(--color-border)] bg-bg-layout py-4 sm:flex">
      <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
        <Icon name="bolt" size={15} />
      </span>
      {["grid", "search", "send", "layers", "trend", "doc", "chat"].map(
        (n, i) => (
          <span
            key={n}
            className={
              "flex h-8 w-8 items-center justify-center rounded-lg " +
              (i === 0
                ? "bg-primary-bg text-brand"
                : "text-[var(--color-text-tertiary)]")
            }
          >
            <Icon name={n} size={16} />
          </span>
        ),
      )}
    </aside>

    {/* main */}
    <div className="min-w-0 flex-1">
      {/* header */}
      <div className="flex items-center justify-between border-b border-[var(--color-border)] px-5 py-3.5">
        <div>
          <p className="text-[15px] font-bold text-primary-dark">Dashboard</p>
          <p className="text-[11px] text-[var(--color-text-tertiary)]">
            Workspace activity overview
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-0.5 rounded-lg bg-bg-layout p-0.5 sm:flex">
            {["7D", "30D", "90D", "All", "Custom"].map((s) => (
              <span
                key={s}
                className={
                  "rounded-md px-2 py-1 text-[10px] font-medium " +
                  (s === "30D"
                    ? "bg-bg-container text-primary-dark shadow-sm"
                    : "text-[var(--color-text-tertiary)]")
                }
              >
                {s}
              </span>
            ))}
          </div>
          <Icon
            name="bell"
            size={16}
            className="text-[var(--color-text-tertiary)]"
          />
        </div>
      </div>

      <div className="space-y-3.5 p-4 sm:p-5">
        {/* summary + insights */}
        <div className="grid gap-3.5 lg:grid-cols-2">
          <Card>
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
                Workspace summary
              </span>
              <span className="flex items-center gap-1 rounded-full bg-primary-bg px-2 py-0.5 text-[9px] font-medium text-brand">
                <Icon name="bell" size={9} /> Last activity 15 minutes ago
              </span>
            </div>
            <div className="mt-3 flex gap-6">
              {[
                ["3,665", "Candidates Sourced"],
                ["44", "Sessions Created"],
                ["364", "Credits Used"],
              ].map(([v, l]) => (
                <div key={l}>
                  <p className="fj-tabular text-xl font-bold text-primary-dark">
                    {v}
                  </p>
                  <p className="text-[10px] text-[var(--color-text-tertiary)]">
                    {l}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-3 space-y-1 border-t border-[var(--color-border-secondary)] pt-3 text-[11px] text-[var(--color-text-secondary)]">
              <p className="flex gap-1.5">
                <span className="text-brand">•</span> Most active search: Senior
                Software Engineer
              </p>
              <p className="flex gap-1.5">
                <span className="text-brand">•</span> Best day: Jun 3 - 704
                candidates sourced
              </p>
            </div>
          </Card>
          <Card className="border-brand/15 bg-primary-bg/30">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                <Icon name="spark" size={12} /> Insights
              </span>
              <span className="rounded-full bg-bg-container px-2 py-0.5 text-[9px] font-medium text-[var(--color-text-tertiary)]">
                Auto-generated
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5">
              {CC_INSIGHTS.map((t) => (
                <li
                  key={t}
                  className="flex gap-1.5 text-[11px] leading-snug text-primary-dark"
                >
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
          {CC_KPIS.map((k) => (
            <Card key={k.label} className="p-3">
              <div className="flex items-center justify-between">
                <span className="truncate text-[10px] text-[var(--color-text-secondary)]">
                  {k.label}
                </span>
                <Delta v={k.d} up={k.up} />
              </div>
              <p className="fj-tabular mt-1.5 text-xl font-bold text-primary-dark">
                {k.value}
              </p>
              {k.pts ? (
                <svg
                  viewBox="0 0 100 28"
                  preserveAspectRatio="none"
                  className="mt-1.5 h-6 w-full"
                >
                  <polyline
                    fill="none"
                    stroke={k.color}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points={k.pts}
                  />
                </svg>
              ) : (
                <div className="mt-1.5 h-6" />
              )}
            </Card>
          ))}
        </div>

        {/* trend charts */}
        <div className="grid gap-3.5 lg:grid-cols-2">
          {/* sourcing trend (area) */}
          <Card>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
                Candidate sourcing trend
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-md bg-bg-layout px-1.5 py-0.5 text-[9px] font-medium text-primary-dark">
                  Candidates
                </span>
                <Delta v="29%" up={false} />
              </span>
            </div>
            <p className="fj-tabular text-base font-bold text-primary-dark">
              3,665{" "}
              <span className="text-[10px] font-normal text-[var(--color-text-tertiary)]">
                candidates / day
              </span>
            </p>
            <div className="relative mt-1">
              <svg
                viewBox="0 0 320 96"
                className="w-full"
                preserveAspectRatio="none"
                style={{ height: 92 }}
              >
                <defs>
                  <linearGradient id="ccArea" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#ef4444" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path
                  d="M0,86 L40,84 L70,86 L95,20 L120,70 L150,58 L175,22 L200,72 L225,66 L255,78 L285,48 L320,84 L320,96 L0,96 Z"
                  fill="url(#ccArea)"
                />
                <polyline
                  fill="none"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeLinejoin="round"
                  points="0,86 40,84 70,86 95,20 120,70 150,58 175,22 200,72 225,66 255,78 285,48 320,84"
                />
                <circle
                  cx="95"
                  cy="20"
                  r="3.5"
                  fill="#ef4444"
                  stroke="#fff"
                  strokeWidth="1.5"
                />
              </svg>
              <span className="absolute left-[24%] top-0 fj-tabular text-[9px] font-semibold text-[var(--color-error-text)]">
                Peak · 704
              </span>
            </div>
            <div className="mt-1 flex justify-between text-[9px] text-[var(--color-text-quaternary)]">
              {["May 26", "Jun 3", "Jun 11", "Jun 19", "Jun 26"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </Card>

          {/* credit usage (bars) */}
          <Card>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
                Credit usage trend
              </span>
              <span className="flex items-center gap-2">
                <span className="rounded-md bg-bg-layout px-1.5 py-0.5 text-[9px] font-medium text-primary-dark">
                  Daily
                </span>
                <Delta v="68%" up={false} />
              </span>
            </div>
            <p className="fj-tabular text-base font-bold text-primary-dark">
              364{" "}
              <span className="text-[10px] font-normal text-[var(--color-text-tertiary)]">
                avg 11.4 / day
              </span>
            </p>
            <div className="mt-2 flex h-[72px] items-end gap-1.5">
              {[
                [30, "o"],
                [60, "o"],
                [10, "p"],
                [33, "o"],
                [22, "p"],
                [27, "o"],
                [43, "o"],
                [8, "p"],
                [23, "o"],
                [10, "p"],
                [35, "o"],
                [9, "p"],
                [43, "o"],
                [18, "p"],
              ].map(([h, c], i) => (
                <span
                  key={i}
                  className="w-full rounded-t"
                  style={{
                    height: `${h}%`,
                    background: c === "p" ? "#7c3aed" : "#f59e0b",
                  }}
                />
              ))}
            </div>
            <div className="mt-1 flex justify-between text-[9px] text-[var(--color-text-quaternary)]">
              {["May 26", "Jun 3", "Jun 11", "Jun 19", "Jun 26"].map((d) => (
                <span key={d}>{d}</span>
              ))}
            </div>
          </Card>
        </div>

        {/* donut + recent activity */}
        <div className="grid gap-3.5 lg:grid-cols-2">
          <Card>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
              Credit breakdown
            </span>
            <p className="mb-3 text-[11px] text-[var(--color-text-tertiary)]">
              Where credits went this period
            </p>
            <Donut />
          </Card>
          <Card>
            <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
              Recent activity
            </span>
            <div className="mt-2 space-y-2">
              {CC_ACTIVITY.map((a, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-bg text-brand">
                    <Icon name={a.ic} size={13} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="truncate text-[11px] text-primary-dark">
                      <span className="font-semibold">{a.who}</span> {a.what}
                    </p>
                    <p className="text-[9px] text-[var(--color-text-tertiary)]">
                      <span className="rounded bg-bg-layout px-1 py-0.5">
                        {a.tag}
                      </span>{" "}
                      · {a.t}
                    </p>
                  </div>
                  <span className="fj-tabular shrink-0 text-[10px] font-semibold text-[var(--color-text-secondary)]">
                    {a.cr} cr
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
);
