/**
 * Landing-page live demo: paste a JD → matching talent rendered inline.
 *
 * Calls the public, IP-rate-limited backend preview endpoint (zero Crustdata
 * credits). Renders up to 10 clear profile cards; any additional matches are
 * teased behind a blurred, sign-up-gated overlay.
 */
import { Avatar as AntAvatar, Typography } from "antd";
import cn from "classnames";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";

import getInitials from "../../lib/getInitials";

import { useJdTalentPreview } from "../../lib/useJdTalentPreview";
import { TALENT_PREVIEW as C } from "../content";
import { Icon } from "../icons";
import {
  Button,
  Container,
  Reveal,
  Section,
  SectionHeading,
} from "../primitives";

const MIN_JD_LENGTH = 30;

const formatConnections = (n) => {
  if (!n && n !== 0) return null;
  return `${Number(n).toLocaleString()} connections`;
};

/* ── Avatar with graceful fallback (licdn URLs can expire / block hotlinks) ── */
const Avatar = ({ src, name }) => (
  <AntAvatar
    src={src}
    alt={name}
    size={48}
    imgProps={{ loading: "lazy", referrerPolicy: "no-referrer" }}
    className="shrink-0 bg-primary-bg text-sm font-semibold text-brand ring-1 ring-[var(--color-border)]"
  >
    {getInitials(name)}
  </AntAvatar>
);

/* ── One profile card ────────────────────────────────────────────────── */
const ProfileCard = ({ profile, blurred = false }) => (
  <div
    className={cn(
      "flex h-full flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-bg-container p-5 text-left shadow-[0_1px_3px_rgba(16,29,87,0.04)]",
      blurred && "pointer-events-none select-none blur-[6px]",
    )}
    aria-hidden={blurred || undefined}
  >
    <div className="flex items-start gap-3">
      <Avatar src={profile.profile_picture_url} name={profile.name} />
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-1.5">
          <p className="truncate font-semibold text-primary-dark">
            {profile.name}
          </p>
          {profile.linkedin_profile_url && !blurred && (
            <Typography.Link
              href={profile.linkedin_profile_url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${profile.name} on LinkedIn`}
              className="shrink-0 !text-[var(--color-text-secondary)] transition-colors hover:!text-brand"
            >
              <Icon name="linkedin" size={16} />
            </Typography.Link>
          )}
        </div>
        {profile.headline && (
          <p className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-[var(--color-text-secondary)]">
            {profile.headline}
          </p>
        )}
      </div>
    </div>

    {profile.summary && (
      <p className="line-clamp-3 text-[13px] leading-relaxed text-[var(--color-text-secondary)]">
        {profile.summary}
      </p>
    )}

    <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-[var(--color-text-secondary)]">
      {profile.region && (
        <span className="inline-flex items-center gap-1">
          <Icon name="user" size={13} />
          <span className="truncate">{profile.region}</span>
        </span>
      )}
      {formatConnections(profile.num_of_connections) && (
        <span>{formatConnections(profile.num_of_connections)}</span>
      )}
    </div>
  </div>
);

/* ── Skeleton shown while searching ──────────────────────────────────── */
const SkeletonCard = () => (
  <div className="flex h-full animate-pulse flex-col gap-3 rounded-2xl border border-[var(--color-border)] bg-bg-container p-5">
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full bg-black/[0.06]" />
      <div className="flex-1 space-y-2">
        <div className="h-3 w-2/3 rounded bg-black/[0.06]" />
        <div className="h-2.5 w-full rounded bg-black/[0.05]" />
      </div>
    </div>
    <div className="h-2.5 w-full rounded bg-black/[0.05]" />
    <div className="h-2.5 w-4/5 rounded bg-black/[0.05]" />
  </div>
);

const TalentPreview = ({ onStartFree }) => {
  const reduce = useReducedMotion();
  const [jd, setJd] = useState("");
  const { mutate, data, isPending, isError, isSuccess, reset } =
    useJdTalentPreview();

  const trimmed = jd.trim();
  const canSubmit = trimmed.length >= MIN_JD_LENGTH && !isPending;

  const profiles = data?.profiles ?? [];
  const totalCount = data?.total_count ?? 0;
  const remaining = Math.max(0, totalCount - profiles.length);
  const hasResults = isSuccess && profiles.length > 0;
  const isEmpty = isSuccess && profiles.length === 0;

  const onSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit) return;
    mutate(trimmed);
  };

  return (
    <Section id="try-it" bg="layout">
      <Container>
        <SectionHeading eyebrow={C.eyebrow} title={C.title} lead={C.lead} />

        {/* Input */}
        <Reveal
          as="form"
          onSubmit={onSubmit}
          className="relative mx-auto mt-10 w-full max-w-3xl rounded-3xl border border-[var(--color-border)] bg-bg-container p-3 shadow-[0_8px_30px_rgba(16,29,87,0.06)] transition-colors focus-within:border-brand/40 focus-within:ring-2 focus-within:ring-brand/20 sm:p-4"
        >
          <textarea
            value={jd}
            onChange={(e) => {
              setJd(e.target.value);
              if (isSuccess || isError) reset();
            }}
            placeholder={C.placeholder}
            rows={5}
            className="w-full resize-none rounded-2xl bg-transparent px-3 pt-2 pb-14 text-[15px] leading-relaxed text-primary-dark placeholder:text-[var(--color-text-secondary)]/70 focus:outline-none"
          />
          <Button
            type="submit"
            variant="primary"
            size="sm"
            icon="arrowUp"
            iconPosition="end"
            disabled={!canSubmit}
            className="absolute bottom-3 right-3 shadow-sm sm:bottom-4 sm:right-4"
          >
            {isPending ? "Searching…" : C.cta}
          </Button>
        </Reveal>
        <p className="mx-auto mt-2.5 max-w-3xl px-2 text-center text-xs text-[var(--color-text-secondary)]">
          {C.disclaimer}
        </p>

        {/* Results */}
        <div className="mx-auto mt-10 w-full max-w-5xl">
          {/* Loading */}
          {isPending && (
            <>
              <p className="mb-5 text-center text-sm text-[var(--color-text-secondary)]">
                {C.loading}
              </p>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            </>
          )}

          {/* Error */}
          {isError && !isPending && (
            <p className="text-center text-sm text-red-500">
              Something went wrong generating your preview. Please try again in
              a moment.
            </p>
          )}

          {/* Empty */}
          {isEmpty && !isPending && (
            <div className="rounded-2xl border border-dashed border-[var(--color-border)] bg-bg-container p-8 text-center">
              <p className="font-semibold text-primary-dark">{C.emptyTitle}</p>
              <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
                {C.emptyBody}
              </p>
            </div>
          )}

          {/* Results grid */}
          <AnimatePresence>
            {hasResults && !isPending && (
              <motion.div
                initial={reduce ? false : { opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
              >
                {profiles.map((p, i) => (
                  <motion.div
                    key={p.person_id ?? i}
                    initial={reduce ? false : { opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: reduce ? 0 : Math.min(i * 0.05, 0.4),
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <ProfileCard profile={p} />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Gated overflow teaser */}
          {hasResults && remaining > 0 && !isPending && (
            <div className="relative mt-4">
              <div
                className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
                aria-hidden="true"
              >
                {profiles.slice(0, 3).map((p, i) => (
                  <ProfileCard key={`ghost-${i}`} profile={p} blurred />
                ))}
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-2xl bg-gradient-to-b from-[var(--bg-layout,transparent)]/40 to-bg-layout/90 text-center">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand/10 text-brand">
                  <Icon name="unlock" size={20} />
                </span>
                <p className="max-w-sm px-4 font-semibold text-primary-dark">
                  +{remaining.toLocaleString()} more matching profiles
                </p>
                <Button
                  variant="primary"
                  size="md"
                  icon="arrowRight"
                  onClick={onStartFree}
                >
                  {C.gateCta}
                </Button>
              </div>
            </div>
          )}
        </div>
      </Container>
    </Section>
  );
};

export default TalentPreview;
