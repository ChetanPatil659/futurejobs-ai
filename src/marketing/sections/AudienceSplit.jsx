import { AUDIENCES } from "../content";
import { Icon } from "../icons";
import { Container, Reveal, SectionHeading } from "../primitives";
import { NetworkField } from "../primitives/atmosphere";

const SUPPORTING_TILE_ICON_BY_INDEX = { 0: "doc", 1: "layers" };

/* Bento composition — the solo operator (hero audience) gets a featured dark tile. */
const AudienceSplit = () => {
  const [solo, ...rest] = AUDIENCES;
  return (
    <section className="fj-aurora-soft relative overflow-hidden py-24 sm:py-32">
      <Container className="relative">
        <SectionHeading
          align="left"
          eyebrow="Built for how you work"
          title="One platform, whoever you hire for"
          lead="Solo or in a team, in-house or agency - FutureJobs scales to the way you run hiring."
          className="max-w-2xl"
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {/* Featured solo tile */}
          <Reveal className="lg:row-span-2">
            <div className="fj-ink-deep fj-grain relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-8 text-white fj-window">
              <NetworkField className="opacity-30 mix-blend-screen" />
              <div className="relative">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold text-cyan-100/90">
                  {solo.tag}
                </span>
                <h3 className="fj-display mt-6 text-[clamp(1.8rem,1.3rem+1.6vw,2.6rem)]">
                  {solo.title}
                </h3>
              </div>
              <p className="relative mt-6 max-w-sm text-[15px] leading-relaxed text-indigo-100/75">
                {solo.desc}
              </p>
            </div>
          </Reveal>

          {/* Supporting tiles */}
          {rest.map((a, i) => (
            <Reveal key={a.title} delay={0.08 + i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-3xl border border-[var(--color-border)] bg-bg-container p-7 fj-float">
                <div className="flex items-center justify-between">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-bg text-brand">
                    <Icon
                      name={SUPPORTING_TILE_ICON_BY_INDEX[i] ?? "send"}
                      size={20}
                    />
                  </span>
                  <span className="rounded-full bg-bg-layout px-2.5 py-1 text-[11px] font-medium text-[var(--color-text-secondary)]">
                    {a.tag}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-primary-dark">
                  {a.title}
                </h3>
                <p className="mt-2 text-[14px] leading-relaxed text-[var(--color-text-secondary)]">
                  {a.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AudienceSplit;
