import { TESTIMONIALS } from "../content";
import { Container, Reveal } from "../primitives";
import { DotGrid } from "../primitives/atmosphere";

const Avatar = ({ name, big }) => (
  <span
    className={
      (big ? "h-12 w-12 text-base" : "h-10 w-10 text-sm") +
      " flex items-center justify-center rounded-full bg-primary-bg font-semibold text-brand"
    }
  >
    {name
      .split(" ")
      .map((w) => w[0])
      .join("")}
  </span>
);

const Testimonials = () => {
  const [feat, ...rest] = TESTIMONIALS;
  return (
    <section className="fj-aurora-soft relative overflow-hidden py-24 sm:py-32">
      <DotGrid />
      <Container className="relative">
        <Reveal className="max-w-2xl">
          <span className="fj-eyebrow mb-5 block text-xs font-semibold text-brand">
            Proven by individuals
          </span>
          <h2 className="fj-display text-[clamp(2rem,1.4rem+2.6vw,3.2rem)] text-primary-dark">
            The future of job hunting, already happening
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Featured */}
          <Reveal className="h-full">
            <figure className="flex h-full flex-col justify-between rounded-3xl bg-primary-dark p-9 text-white sm:p-11 fj-window">
              <blockquote className="fj-display text-[clamp(1.4rem,1rem+1.6vw,2rem)] font-medium leading-snug tracking-tight text-white/95">
                “{feat.quote}”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3">
                <Avatar name={feat.name} big />
                <div>
                  <p className="font-semibold">{feat.name}</p>
                  <p className="text-sm text-white/55">
                    {feat.role} · {feat.location}
                  </p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Supporting */}
          <div className="flex flex-col gap-6">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={0.1 + i * 0.08} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-bg-container p-7 fj-float">
                  <blockquote className="text-[15px] leading-relaxed text-primary-dark">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-3">
                    <Avatar name={t.name} />
                    <div>
                      <p className="text-sm font-semibold text-primary-dark">
                        {t.name}
                      </p>
                      <p className="text-xs text-[var(--color-text-tertiary)]">
                        {t.role} · {t.location}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
