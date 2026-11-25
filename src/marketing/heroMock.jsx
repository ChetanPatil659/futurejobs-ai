/**
 * Hero showcase mockups — a rich workspace dashboard plus the floating cards that
 * layer around it. Built in markup so they stay crisp; illustrative sample data.
 */
import { Icon } from "./icons";

/* ── tiny inline sparkline ───────────────────────────────────────────── */
const Spark = ({ color, points }) => (
  <svg viewBox="0 0 100 30" preserveAspectRatio="none" className="h-7 w-full">
    <polyline
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      points={points}
    />
  </svg>
);

const KPI = ({ label, value, delta, color, points }) => (
  <div className="rounded-xl border border-[var(--color-border)] bg-bg-container p-3">
    <div className="flex items-center justify-between">
      <span className="text-[11px] text-[var(--color-text-tertiary)]">
        {label}
      </span>
      <span className="fj-tabular text-[10px] font-semibold text-[var(--color-success-text)]">
        ↑{delta}
      </span>
    </div>
    <p className="fj-tabular mt-1 text-xl font-bold text-primary-dark">
      {value}
    </p>
    <div className="mt-1.5">
      <Spark color={color} points={points} />
    </div>
  </div>
);

const SEG = ["7D", "30D", "90D", "All"];

export const HeroDashboard = () => (
  <div className="overflow-hidden rounded-[20px] border border-[var(--color-border)] bg-bg-container fj-window">
    <div className="flex">
      {/* sidebar */}
      <aside className="flex w-12 shrink-0 flex-col items-center gap-1.5 border-r border-[var(--color-border)] bg-bg-layout py-3.5">
        <span className="mb-2 flex h-8 w-8 items-center justify-center rounded-lg bg-brand text-white">
          <Icon name="bolt" size={15} />
        </span>
        {["grid", "search", "send", "layers", "doc", "bell"].map((n, i) => (
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
        ))}
      </aside>

      {/* main */}
      <div className="min-w-0 flex-1 p-3.5 sm:p-4">
        {/* header */}
        <div className="mb-4 flex items-start justify-between">
          <div>
            <h3 className="text-[15px] font-bold text-primary-dark">
              Dashboard
            </h3>
            <p className="text-[11px] text-[var(--color-text-tertiary)]">
              Workspace activity overview
            </p>
          </div>
          <div className="flex items-center gap-0.5 rounded-lg bg-bg-layout p-0.5">
            {SEG.map((s) => (
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
        </div>

        {/* summary + AI insights */}
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--color-border)] bg-bg-container p-3.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
                Workspace summary
              </span>
              <span className="fj-tabular rounded-full bg-[var(--color-success-bg)] px-1.5 py-0.5 text-[9px] font-semibold text-[var(--color-success-text)]">
                ↑32% vs last 30 days
              </span>
            </div>
            <div className="mt-3 flex gap-6">
              <div>
                <p className="fj-tabular text-2xl font-bold text-primary-dark">
                  1,248
                </p>
                <p className="text-[10px] text-[var(--color-text-tertiary)]">
                  Candidates sourced
                </p>
              </div>
              <div>
                <p className="fj-tabular text-2xl font-bold text-primary-dark">
                  243
                </p>
                <p className="text-[10px] text-[var(--color-text-tertiary)]">
                  Sessions created
                </p>
              </div>
            </div>
          </div>
          <div className="rounded-xl border border-brand/20 bg-primary-bg/40 p-3.5">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wide text-brand">
                <Icon name="spark" size={12} /> AI insights
              </span>
              <span className="rounded-full bg-bg-container px-1.5 py-0.5 text-[9px] font-medium text-[var(--color-text-tertiary)]">
                Auto-generated
              </span>
            </div>
            <ul className="mt-2.5 space-y-1.5">
              {[
                "500 candidates were sourced this period",
                "“Java Spring Boot Developer” generated the most candidates (100)",
              ].map((t) => (
                <li
                  key={t}
                  className="flex gap-1.5 text-[11px] leading-snug text-primary-dark"
                >
                  <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-brand" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* KPI row */}
        <div className="mt-3 grid grid-cols-2 gap-3 lg:grid-cols-4">
          <KPI
            label="Candidates Sourced"
            value="1,248"
            delta="32%"
            color="#0022f6"
            points="0,24 16,18 33,22 50,8 66,14 83,5 100,10"
          />
          <KPI
            label="Sessions Created"
            value="243"
            delta="18%"
            color="#16a34a"
            points="0,20 16,22 33,12 50,16 66,9 83,13 100,6"
          />
          <KPI
            label="Email Replies"
            value="128"
            delta="24%"
            color="#16a34a"
            points="0,26 16,20 33,23 50,14 66,18 83,9 100,12"
          />
          <KPI
            label="Meetings Booked"
            value="32"
            delta="12%"
            color="#0022f6"
            points="0,22 16,16 33,19 50,12 66,15 83,8 100,11"
          />
        </div>

        {/* trend chart */}
        <div className="mt-3 rounded-xl border border-[var(--color-border)] bg-bg-container p-4">
          <div className="mb-1 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wide text-[var(--color-text-tertiary)]">
                Candidate sourcing trend
              </p>
              <p className="fj-tabular text-lg font-bold text-primary-dark">
                1,248{" "}
                <span className="text-[10px] font-normal text-[var(--color-text-tertiary)]">
                  candidates / day
                </span>
              </p>
            </div>
          </div>
          <div className="relative">
            <svg
              viewBox="0 0 400 120"
              className="w-full"
              preserveAspectRatio="none"
              style={{ height: 76 }}
            >
              <defs>
                <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0022f6" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0022f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                d="M0,90 L40,70 L80,80 L120,40 L160,55 L200,30 L240,62 L280,45 L320,58 L360,28 L400,42 L400,120 L0,120 Z"
                fill="url(#heroArea)"
              />
              <polyline
                fill="none"
                stroke="#0022f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                points="0,90 40,70 80,80 120,40 160,55 200,30 240,62 280,45 320,58 360,28 400,42"
              />
              <circle
                cx="200"
                cy="30"
                r="4"
                fill="#0022f6"
                stroke="#fff"
                strokeWidth="2"
              />
            </svg>
            {/* tooltip */}
            <div className="absolute left-[42%] top-0 rounded-lg border border-[var(--color-border)] bg-bg-container px-2 py-1 shadow-md">
              <p className="text-[9px] text-[var(--color-text-tertiary)]">
                May 29
              </p>
              <p className="fj-tabular text-[11px] font-bold text-primary-dark">
                128 candidates
              </p>
            </div>
          </div>
          <div className="mt-1 flex justify-between text-[9px] text-[var(--color-text-quaternary)]">
            {["May 12", "May 19", "May 26", "Jun 09"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

/* ── Floating cards ──────────────────────────────────────────────────── */

export const CandidateProfileCard = ({ className }) => (
  <div
    className={
      "fj-glass-light w-[248px] rounded-2xl p-3.5 " + (className || "")
    }
  >
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand to-[var(--peri)] text-sm font-semibold text-white">
        HW
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-bold text-primary-dark">Hafeth Wadi</p>
        <p className="text-xs text-[var(--color-text-tertiary)]">
          Vice President
        </p>
      </div>
      <span className="fj-tabular rounded-full bg-primary-bg px-2 py-1 text-[11px] font-bold text-brand">
        92% match
      </span>
    </div>
    <div className="mt-3 flex flex-wrap gap-1.5">
      {["Java", "Spring Boot", "Microservices", "AWS", "+6"].map((s) => (
        <span
          key={s}
          className="rounded-md bg-bg-layout px-2 py-0.5 text-[10px] font-medium text-[var(--color-text-secondary)]"
        >
          {s}
        </span>
      ))}
    </div>
    <div className="mt-3 space-y-1.5">
      <p className="flex items-center gap-2 text-[11px] text-[var(--color-text-secondary)]">
        <Icon name="mail" size={12} className="text-brand" />{" "}
        hafeth.wadi@ummahp.com
      </p>
      <p className="flex items-center gap-2 text-[11px] text-[var(--color-text-secondary)]">
        <Icon name="phone" size={12} className="text-brand" /> +1 (201) 555-0123
      </p>
    </div>
    <button className="mt-3 flex items-center gap-1 text-[11px] font-semibold text-brand">
      View full profile <Icon name="arrowRight" size={12} />
    </button>
  </div>
);

export const AICallingCard = ({ className }) => (
  <div className={"fj-glass-light w-56 rounded-2xl p-3.5 " + (className || "")}>
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-bg text-brand">
        <Icon name="phone" size={18} />
      </span>
      <div className="flex-1">
        <p className="text-sm font-semibold text-primary-dark">AI Calling</p>
        <p className="text-[11px] text-[var(--color-text-tertiary)]">
          Outbound call
        </p>
      </div>
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-error)] text-white">
        <Icon name="phone" size={14} />
      </span>
    </div>
    <div className="mt-3 flex items-center gap-2">
      <span className="fj-tabular text-[10px] text-[var(--color-text-tertiary)]">
        00:24
      </span>
      <div className="flex h-5 flex-1 items-center gap-[3px]">
        {[7, 13, 9, 17, 11, 19, 8, 15, 10, 18, 12, 6, 14, 9, 16].map((h, i) => (
          <span
            key={i}
            className="w-full rounded-full bg-brand/55 motion-safe:animate-pulse"
            style={{ height: h, animationDelay: `${i * 0.1}s` }}
          />
        ))}
      </div>
    </div>
  </div>
);

export const AutomatedOutreachCard = ({ className }) => (
  <div className={"fj-glass-light w-56 rounded-2xl p-3.5 " + (className || "")}>
    <div className="flex items-center justify-between">
      <span className="text-sm font-semibold text-primary-dark">
        Automated outreach
      </span>
      <span className="flex items-center gap-1 rounded-full bg-[var(--color-success-bg)] px-2 py-0.5 text-[10px] font-semibold text-[var(--color-success-text)]">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[var(--color-success-text)]" />{" "}
        Running
      </span>
    </div>
    <div className="mt-3 flex items-center gap-2">
      {[
        ["mail", "#ea4335"],
        ["linkedin", "#0a66c2"],
        ["phone", "#0022f6"],
      ].map(([ic, c]) => (
        <span
          key={ic}
          className="flex h-9 w-9 items-center justify-center rounded-full bg-bg-layout"
          style={{ color: c }}
        >
          <Icon name={ic} size={16} />
        </span>
      ))}
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-bg text-[11px] font-bold text-brand">
        +2
      </span>
    </div>
  </div>
);

export const IntegrationsCard = ({ className }) => (
  <div className={"fj-glass-light w-56 rounded-2xl p-3.5 " + (className || "")}>
    <p className="mb-3 text-sm font-semibold text-primary-dark">Integrations</p>
    <div className="space-y-2">
      {[
        ["mail", "Gmail", "#ea4335"],
        ["calendar", "Google Calendar", "#1a73e8"],
        ["drive", "Google Drive", "#16a34a"],
      ].map(([ic, n, c]) => (
        <div key={n} className="flex items-center gap-2.5">
          <span
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-bg-layout"
            style={{ color: c }}
          >
            <Icon name={ic} size={15} />
          </span>
          <span className="flex-1 text-[12px] font-medium text-primary-dark">
            {n}
          </span>
          <span className="rounded-full bg-[var(--color-success-bg)] px-2 py-0.5 text-[9px] font-semibold text-[var(--color-success-text)]">
            Connected
          </span>
        </div>
      ))}
    </div>
    <button className="mt-3 flex w-full items-center justify-center gap-1 rounded-lg border border-dashed border-[var(--color-border)] py-1.5 text-[11px] font-medium text-brand">
      <Icon name="plus" size={12} /> More integrations
    </button>
  </div>
);

export const ScreeningDonutCard = ({ className }) => {
  const pct = 86;
  const r = 22;
  const c = 2 * Math.PI * r;
  return (
    <div
      className={
        "fj-glass-light flex w-56 items-center gap-3 rounded-2xl p-3.5 " +
        (className || "")
      }
    >
      <svg width="56" height="56" viewBox="0 0 56 56" className="shrink-0">
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="var(--color-border)"
          strokeWidth="5"
        />
        <circle
          cx="28"
          cy="28"
          r={r}
          fill="none"
          stroke="#0022f6"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          transform="rotate(-90 28 28)"
        />
        <text
          x="28"
          y="32"
          textAnchor="middle"
          className="fj-tabular"
          fontSize="13"
          fontWeight="700"
          fill="#101d57"
        >
          {pct}%
        </text>
      </svg>
      <div>
        <p className="flex items-center gap-1.5 text-[12px] font-semibold text-primary-dark">
          <Icon
            name="check"
            size={13}
            className="text-[var(--color-success-text)]"
          />{" "}
          Screening complete
        </p>
        <p className="mt-0.5 text-sm font-bold text-primary-dark">Top fit</p>
        <p className="text-[10px] text-[var(--color-text-tertiary)]">
          Strong match for this role
        </p>
      </div>
    </div>
  );
};
