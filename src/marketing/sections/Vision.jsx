import { Container, Reveal } from "../primitives";
import { Icon } from "../icons";
import { VISION } from "../content";

/* The "AI team" panel — you in control at the top, agents handling the work below. */
const AgentTeam = () => (
  <div className="relative rounded-3xl border border-[var(--color-border)] bg-bg-container p-5 fj-window sm:p-6">
    {/* You — in control */}
    <div className="rounded-2xl border border-brand/25 bg-primary-bg/40 p-4">
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand text-white">
            <Icon name="user" size={20} />
          </span>
          <div>
            <p className="text-sm font-bold text-primary-dark">{VISION.you.name}</p>
            <p className="text-[11px] text-[var(--color-text-tertiary)]">{VISION.you.role}</p>
          </div>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-bg-container px-2.5 py-1 text-[11px] font-semibold text-brand">
          <Icon name="shield" size={13} /> In control
        </span>
      </div>
      <p className="mt-3 flex items-center gap-1.5 border-t border-brand/15 pt-3 text-[11px] text-[var(--color-text-secondary)]">
        <Icon name="check" size={13} className="text-brand" />
        Human in the loop - you approve every move
      </p>
    </div>

    {/* Handoff label */}
    <div className="my-3 flex items-center gap-3">
      <span className="h-px flex-1 bg-[var(--color-border)]" />
      <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
        Delegated to AI agents
      </span>
      <span className="h-px flex-1 bg-[var(--color-border)]" />
    </div>

    {/* Agents */}
    <div className="space-y-2">
      {VISION.agents.map((a) => {
        const done = a.status === "Done";
        return (
          <div
            key={a.name}
            className="flex items-center gap-3 rounded-xl border border-[var(--color-border)] bg-bg-base p-3"
          >
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary-bg text-brand">
              <Icon name={a.icon} size={17} />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[13px] font-semibold text-primary-dark">{a.name}</p>
              <p className="fj-tabular truncate text-[11px] text-[var(--color-text-tertiary)]">{a.task}</p>
            </div>
            <span
              className={
                "inline-flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-semibold " +
                (done
                  ? "bg-[var(--color-success-bg)] text-[var(--color-success-text)]"
                  : "bg-primary-bg text-brand")
              }
            >
              <span
                className={
                  "h-1.5 w-1.5 rounded-full " +
                  (done ? "bg-[var(--color-success-text)]" : "animate-pulse bg-brand")
                }
              />
              {a.status}
            </span>
          </div>
        );
      })}
    </div>
  </div>
);

const Vision = () => (
  <section
    id="vision"
    className="fj-aurora-soft relative overflow-hidden py-16 sm:py-24"
  >
    <div className="fj-bloom right-[-60px] top-10 h-[320px] w-[320px]" style={{ background: "rgba(141,245,246,0.22)" }} />
    <Container className="relative">
      <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        {/* Narrative */}
        <Reveal>
          <span className="fj-eyebrow text-xs font-semibold text-brand">{VISION.eyebrow}</span>
          <h2 className="fj-display mt-3 text-[clamp(2.1rem,1.4rem+2.8vw,3.6rem)] text-primary-dark">
            {VISION.title}
          </h2>
          <p className="mt-5 max-w-xl text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            {VISION.body}
          </p>
          <ul className="mt-7 flex flex-col gap-4">
            {VISION.points.map((p) => (
              <li key={p.title} className="flex items-start gap-3.5">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary-bg text-brand">
                  <Icon name={p.icon} size={18} />
                </span>
                <div>
                  <p className="text-[15px] font-semibold text-primary-dark">{p.title}</p>
                  <p className="text-[14px] leading-relaxed text-[var(--color-text-secondary)]">{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* AI team visual */}
        <Reveal delay={0.1} y={28}>
          <AgentTeam />
        </Reveal>
      </div>
    </Container>
  </section>
);

export default Vision;
