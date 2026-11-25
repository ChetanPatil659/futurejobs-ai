import { Table } from "antd";

import { CREDITS } from "../content";
import { Icon } from "../icons";
import { Button, Container, Reveal } from "../primitives";
import { DotGrid, Mesh } from "../primitives/atmosphere";

const LEDGER = [
  { r: "Sourcing session created", a: -5 },
  { r: "Reveal email · 12 contacts", a: -24 },
  { r: "WhatsApp response received", a: -2 },
  { r: "Plan renewal", a: +500, add: true },
];

const Ledger = () => (
  <div className="overflow-hidden rounded-2xl border border-[var(--color-border)] bg-bg-container fj-window">
    <div className="flex items-center justify-between bg-primary-dark px-6 py-5 text-white">
      <div>
        <p className="text-xs uppercase tracking-wider text-white/55">
          Workspace balance
        </p>
        <p className="fj-tabular mt-1 text-3xl font-bold">
          1,284{" "}
          <span className="text-base font-medium text-white/60">credits</span>
        </p>
      </div>
      <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
        <Icon name="bolt" size={20} className="text-[var(--cyan)]" />
      </span>
    </div>
    <div className="divide-y divide-[var(--color-border-secondary)]">
      {LEDGER.map((l) => (
        <div
          key={l.r}
          className="flex items-center justify-between px-6 py-3.5"
        >
          <span className="text-sm text-[var(--color-text-secondary)]">
            {l.r}
          </span>
          <span
            className={
              "fj-tabular text-sm font-semibold " +
              (l.add ? "text-[var(--color-success-text)]" : "text-primary-dark")
            }
          >
            {l.add ? "+" : ""}
            {l.a}
          </span>
        </div>
      ))}
    </div>
    <div className="bg-bg-layout px-6 py-3 text-xs text-[var(--color-text-tertiary)]">
      Every credit, logged - with the reason and who spent it.
    </div>
  </div>
);

const USAGE_COLUMNS = [
  {
    title: CREDITS.usage.actionLabel,
    dataIndex: "action",
  },
  {
    title: CREDITS.usage.creditsLabel,
    dataIndex: "credits",
  },
];

const CreditUsageTable = () => (
  <div className="flex flex-col gap-4">
    <h3 className="text-lg font-semibold text-primary-dark">
      {CREDITS.usage.title}
    </h3>
    <Table
      columns={USAGE_COLUMNS}
      dataSource={CREDITS.usage.rows}
      rowKey="action"
      pagination={false}
    />
  </div>
);

const CreditModel = ({ onBookDemo }) => (
  <section
    id="pricing"
    className="relative overflow-hidden bg-bg-layout py-24 sm:py-32"
  >
    <DotGrid />
    <Mesh soft />
    <Container className="relative">
      <div className="grid items-center gap-14 lg:grid-cols-[1fr_1fr]">
        <Reveal className="flex flex-col items-start gap-5">
          <span className="fj-eyebrow text-xs font-semibold text-brand">
            {CREDITS.eyebrow}
          </span>
          <h2 className="fj-display text-[clamp(2rem,1.4rem+2.6vw,3.4rem)] text-primary-dark">
            {CREDITS.title}
          </h2>
          <p className="max-w-md text-[1.05rem] leading-relaxed text-[var(--color-text-secondary)]">
            {CREDITS.desc}
          </p>
          <ul className="flex flex-col gap-3">
            {CREDITS.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-[15px] text-primary-dark"
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-bg text-brand">
                  <Icon name="check" size={14} />
                </span>
                {p}
              </li>
            ))}
          </ul>
          <Button
            variant="primary"
            size="lg"
            icon="arrowRight"
            onClick={onBookDemo}
            className="mt-2"
          >
            {CREDITS.cta}
          </Button>
        </Reveal>

        <Reveal delay={0.12} y={28}>
          <Ledger />
        </Reveal>
      </div>
      <Reveal className="mt-16">
        <CreditUsageTable />
      </Reveal>
    </Container>
  </section>
);

export default CreditModel;
