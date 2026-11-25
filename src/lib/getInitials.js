// Splits on whitespace or "@" so callers can pass an email as a name fallback
// (e.g. guest-only accounts that never collected a name) and still get 2 initials.
// `name` is coerced via `|| ""`, not a default param, since callers commonly
// pass an explicit `null` (an orphaned/deleted user's name) - a default param
// only covers `undefined`, not `null`.
const getInitials = (name, fallback = "?") =>
  (name || "")
    .trim()
    .split(/\s+|@/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("") || fallback;

export default getInitials;
