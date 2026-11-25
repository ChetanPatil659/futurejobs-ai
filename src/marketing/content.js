/**
 * Marketing site content — single source of truth.
 *
 * Every line here is grounded in the FutureJobs.ai codebase (see PRODUCT_ANALYSIS.md).
 * No invented features, integrations, pricing, customers, or statistics.
 * Items needing team confirmation are marked with a TODO comment.
 */

/** Homepage <title> prefix; the router appends the brand, the build plugin uses it for crawlers. */
export const HOME_PAGE_TITLE =
  "AI Recruiting Platform for Sourcing, Outreach and Screening";

export const RECRUITER_COUNT = "2,500+";
export const ACTIVE_JOBS_COUNT = "6,000+";
export const PROFILES_PROCESSED_COUNT = "11,000+";

export const HERO = {
  eyebrow: "The AI recruiting operating system",
  titleLead: "Everything recruiting needs.",
  titleOne: "One",
  titleAccent: "AI workspace.",
  subtitle:
    "Source exceptional talent, enrich and engage candidates, automate outreach, and hire faster - all in one intelligent platform.",
  primaryCta: "Start for free",
  secondaryCta: "Book a demo",
  // TODO: confirm exact trial terms with the team before publishing "14-day".
  trust: ["No credit card", "Free to start", "Cancel anytime"],
  socialProof: `Trusted by ${RECRUITER_COUNT} recruitment specialists worldwide`,
};

/** Landing-page live demo — paste a JD, see matching talent instantly. */
export const TALENT_PREVIEW = {
  eyebrow: "Try it live",
  title: "Find top candidates in seconds",
  lead: "Paste a job description and instantly discover matching talent.",
  placeholder:
    "Paste a job description here - e.g. “Senior Backend Engineer, 5+ years, Node.js & AWS, based in New York…”",
  cta: "Find matching talent",
  loading: "Reading the role and searching 800M+ profiles…",
  emptyTitle: "No matches surfaced for that JD",
  emptyBody:
    "Try a more detailed description - role, seniority, skills and location all help.",
  gateCta: "Sign up to reveal all matches",
  disclaimer:
    "Preview results. Contact details and full matches unlock on sign-up.",
};

/** Vision / mission — the one-person recruiting company, human-in-the-loop. */
export const VISION = {
  eyebrow: "Our vision",
  title: "One recruiter. A whole AI team.",
  body: "We're building a world where one recruiter runs an entire desk - AI agents handle the busywork while you stay in control and focus on relationships.",
  points: [
    {
      icon: "shield",
      title: "You're always in control",
      desc: "A human stays in the loop at every step - every move is yours to approve.",
    },
    {
      icon: "bolt",
      title: "AI agents do the heavy lifting",
      desc: "Sourcing, outreach, screening and scheduling - handled efficiently, around the clock.",
    },
    {
      icon: "heart",
      title: "You focus on engagement",
      desc: "Spend your time on real conversations and relationships, not busywork.",
    },
  ],
  // Illustrative "AI team" panel — sample data, not live metrics.
  you: { name: "You", role: "Engagement & decisions" },
  agents: [
    {
      icon: "trend",
      name: "Sales Agent",
      task: "6 new clients engaged",
      status: "Running",
    },
    {
      icon: "search",
      name: "Sourcing Agent",
      task: "Found 312 matches",
      status: "Running",
    },
    {
      icon: "send",
      name: "Outreach Agent",
      task: "128 messages sent",
      status: "Running",
    },
    {
      icon: "chat",
      name: "Screening Agent",
      task: "47 candidates screened",
      status: "Running",
    },
    {
      icon: "calendar",
      name: "Scheduling Agent",
      task: "12 calls booked",
      status: "Done",
    },
  ],
};

/** Fragmentation story — the disconnected tools recruiters juggle today. */
export const FRAGMENTATION = {
  eyebrow: "The problem",
  title: "Recruiting today is in pieces",
  lead: "You source in one tool, find contacts in another, email from Gmail, schedule in Calendar, track in spreadsheets, and chase reminders by hand. Nothing talks to anything.",
  tools: [
    "Sourcing tool",
    "Contact finder",
    "Gmail",
    "Google Calendar",
    "Spreadsheets",
    "Manual reminders",
    "Notes app",
    "Separate CRM",
  ],
  punchline: "FutureJobs replaces all of it with one intelligent workspace.",
};

/**
 * Trust-bar stats are taken verbatim from the existing landing page (Home.legacy.jsx).
 * TODO: confirm these are still current before publishing.
 */
export const STATS = [
  { value: RECRUITER_COUNT, label: "Recruitment Specialists" },
  { value: ACTIVE_JOBS_COUNT, label: "Active jobs" },
  { value: PROFILES_PROCESSED_COUNT, label: "Profiles processed daily" },
];

/** The end-to-end funnel — each step maps to a real feature domain. */
export const FUNNEL = [
  {
    step: "01",
    title: "Source",
    desc: "Describe the role in plain words - type it or say it out loud. AI turns it into a structured search. Boolean, manual filters, and similar-profile search are one click away.",
    highlights: ["Boolean", "manual filters", "similar-profile search"],
    tags: ["AI sourcing", "Voice", "Boolean", "Similar"],
  },
  {
    step: "02",
    title: "Reveal",
    desc: "Unlock verified emails and phone numbers individually or in bulk. Choose a reveal policy and only spend on the contacts you actually need.",
    tags: ["Email", "Phone", "Bulk reveal"],
  },
  {
    step: "03",
    title: "Reach out",
    desc: "Launch multi-step sequences across email and WhatsApp - sent from FutureJobs or your own inbox. AI drafts the messages from your job description; you review and send.",
    tags: ["Email", "WhatsApp", "AI calling"],
  },
  {
    step: "04",
    title: "Screen",
    desc: "An AI assistant runs the first screening conversation over WhatsApp, then scores each candidate on competency and cultural fit so you focus on the shortlist.",
    tags: ["AI screening", "Competency", "Culture fit"],
  },
];

/** Feature pillars — capabilities that exist in the product. */
export const FEATURES = [
  {
    icon: "search",
    title: "AI sourcing, your way",
    desc: "Start from a job description, a spoken prompt, a Boolean query, or a profile you already like. Filter on skills, titles, employers, education, and region - and exclude red flags automatically.",
  },
  {
    icon: "unlock",
    title: "Contact reveal that respects your budget",
    desc: "Reveal professional or personal email and phone, one at a time or in bulk, with policies that skip profiles you'd pay for and never use.",
  },
  {
    icon: "send",
    title: "Multi-channel outreach",
    desc: "Build up to five-step sequences across Gmail, email, and WhatsApp with per-step timing. Track opens, clicks, replies, and bounces in one view.",
  },
  {
    icon: "chat",
    title: "Conversational AI screening",
    desc: "Let an AI assistant ask your screening questions over WhatsApp and return a structured scorecard across competency and cultural-fit dimensions.",
  },
  {
    icon: "doc",
    title: "Jobs & resume matching",
    desc: "Post a role, collect resumes - by upload, Google Drive, or inbound applications - and let AI rank every candidate on skills, experience, and qualifications.",
  },
  {
    icon: "layers",
    title: "One pool for every candidate",
    desc: "Sourced, applied, uploaded, or added by hand - every candidate lands in a single searchable pool, shared across your workspace.",
  },
];

/** Audience cards — backed by recruiterType.config.js + workspaces. */
export const AUDIENCES = [
  {
    title: "Solo recruiters",
    desc: "Run a full desk on your own. Source, reach out, and screen at the scale of a team - and build your own brand as a Talent Manager.",
    tag: "Just me",
  },
  {
    title: "In-house teams",
    desc: "Fill requisitions faster without growing headcount. Give every recruiter AI leverage from first search to shortlist.",
    tag: "Company",
  },
  {
    title: "Agencies",
    desc: "Manage many clients and roles from one workspace, with projects to keep every search organized.",
    tag: "Agency",
  },
  {
    title: "Growing workspaces",
    desc: "Invite teammates, share candidate pools and sessions, and control spend with roles and a single credit wallet.",
    tag: "Teams",
  },
];

/** Credit model — framed as a benefit. No dollar amounts (TODO: confirm pricing). */
export const CREDITS = {
  eyebrow: "Pricing that follows the work",
  title: "Pay for outcomes, not seats",
  desc: "FutureJobs runs on credits, not per-user fees. You spend on the actions that move a hire forward - revealing a contact, running a sourcing session, sending outreach, matching a resume - and nothing on the rest.",
  points: [
    "One shared wallet across your workspace",
    "A transparent ledger of every credit spent and why",
    "Reveal policies that avoid spending on contacts you can't use",
  ],
  cta: "Talk to us about pricing",
  usage: {
    title: "What uses credits",
    actionLabel: "Action",
    creditsLabel: "Uses credits",
    rows: [
      { action: "Revealing a contact's email or phone", credits: "Yes" },
      { action: "Running a sourcing session", credits: "Yes" },
      { action: "Sending outreach", credits: "Yes" },
      { action: "Matching a resume to a job", credits: "Yes" },
      {
        action: "Adding teammates to your workspace",
        credits: "No - there are no per-user fees",
      },
    ],
  },
};

/**
 * Testimonials — taken from the existing landing page (Home.legacy.jsx).
 * These are existing repo content, not invented.
 */
export const TESTIMONIALS = [
  {
    quote:
      "I took this up as a side hustle - just to explore if I could actually make something work on my own. The platform took care of the heavy stuff. It's flexible, simple, and now part of my weekly rhythm. I just focus on speaking with candidates and let the rest run itself.",
    name: "Arpit M.",
    role: "Talent Manager",
    location: "Bengaluru",
  },
  {
    quote:
      "After being unemployed for a while, I came across FutureJobs and gave it a shot. It gave me structure, some income, and honestly, a bit of confidence back. I didn't think I'd enjoy recruiting, but here I am.",
    name: "Kavita G.",
    role: "Talent Manager",
    location: "Pune",
  },
  {
    quote:
      "I used to run everything manually - tracking jobs, sourcing, screening, chasing feedback. This platform gave me breathing room. It's still me, but now I can focus where it counts - on real conversations and decisions.",
    name: "Daniel J.",
    role: "Talent Manager",
    location: "New Jersey",
  },
];

/** FAQ — answers restate the sections above; also emitted as FAQPage JSON-LD at build. */
export const FAQ = {
  eyebrow: "FAQ",
  title: "Questions recruiters ask",
  items: [
    {
      question: "What is FutureJobs.ai?",
      answer:
        "FutureJobs.ai is an AI recruiting platform that brings sourcing, contact reveal, outreach and candidate screening into one workspace. You describe the role, AI finds matching candidates, and AI agents handle outreach and first-round screening while you approve every step.",
    },
    {
      question: "Who is FutureJobs.ai for?",
      answer:
        "Solo recruiters who want to run a full desk on their own, in-house teams filling requisitions without adding headcount, and agencies managing many clients and roles from one workspace. Teams can invite teammates and share candidate pools and sessions.",
    },
    {
      question: "How does AI candidate sourcing work?",
      answer:
        "Start from a job description, a spoken prompt, a Boolean query or a profile you already like. AI turns it into a structured search that you can refine with filters for skills, titles, employers, education and region.",
    },
    {
      question: "How does FutureJobs.ai pricing work?",
      answer:
        "FutureJobs.ai runs on credits instead of per-user seats. You spend credits only on actions that move a hire forward, such as revealing a contact, running a sourcing session, sending outreach or matching a resume, from one wallet shared across your workspace. It's free to start and no credit card is required.",
    },
    {
      question: "Can I contact candidates by email and WhatsApp?",
      answer:
        "Yes. Build sequences of up to five steps across Gmail, email and WhatsApp, with timing set per step. AI drafts the messages from your job description, you review and send, and opens, clicks, replies and bounces are tracked in one view.",
    },
    {
      question: "How does AI candidate screening work?",
      answer:
        "An AI assistant asks your screening questions over WhatsApp, then returns a structured scorecard that rates each candidate on competency and cultural fit, so you can focus on the shortlist.",
    },
    {
      question: "Which tools does FutureJobs.ai integrate with?",
      answer:
        "Gmail, Google Drive, Google Calendar and WhatsApp. You can send outreach from your own Gmail inbox and collect resumes by upload, from Google Drive or through inbound applications.",
    },
  ],
};

/** Integrations — exactly those in APP_INSTANCE_TYPES_ENUM + outreach channels. */
export const INTEGRATIONS = [
  "Gmail",
  "Google Drive",
  "Google Calendar",
  "WhatsApp",
];
