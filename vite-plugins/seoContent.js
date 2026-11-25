import {
  AUDIENCES,
  CREDITS,
  FAQ,
  FEATURES,
  FUNNEL,
  HERO,
  HOME_PAGE_TITLE,
} from "../src/marketing/content.js";

const SITE_URL = "https://getmyinterview.shop";
const SITE_NAME = "GetMyInterview";
const TITLE = `${HOME_PAGE_TITLE} | ${SITE_NAME}`;
const DESCRIPTION = `${SITE_NAME} is your AI job search copilot. Find roles that fit you, reach hiring managers directly, follow up on time, and land more interviews.`;
const LOGO_URL = `${SITE_URL}/logo.png`;
const SIGNUP_URL = `${SITE_URL}/signup`;
const SEO_CONTENT_ID = "seo-content";
const HAS_JS_CLASS = "has-js";

const EMPTY_ROOT = '<div id="root"></div>';

const escapeHtml = (text) =>
  text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

const renderItems = (items) =>
  items
    .map(
      ({ title, desc }) =>
        `<li><h3>${escapeHtml(title)}</h3><p>${escapeHtml(desc)}</p></li>`,
    )
    .join("");

// Crawlers that skip JavaScript (GPTBot, ClaudeBot, PerplexityBot) read this;
// browsers hide it and React replaces it on mount.
const buildHomepageHtml = () => `<main id="${SEO_CONTENT_ID}">
<h1>${SITE_NAME}: ${escapeHtml(HERO.eyebrow)}</h1>
<p>${escapeHtml(`${HERO.titleLead} ${HERO.titleOne} ${HERO.titleAccent}`)}</p>
<p>${escapeHtml(HERO.subtitle)}</p>
<h2>How it works</h2>
<ol>${renderItems(FUNNEL)}</ol>
<h2>Features</h2>
<ul>${renderItems(FEATURES)}</ul>
<h2>Who it's for</h2>
<ul>${renderItems(AUDIENCES)}</ul>
<h2>${escapeHtml(CREDITS.title)}</h2>
<p>${escapeHtml(CREDITS.desc)}</p>
<ul>${CREDITS.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
<h3>${escapeHtml(CREDITS.usage.title)}</h3>
<table><thead><tr><th>${escapeHtml(CREDITS.usage.actionLabel)}</th><th>${escapeHtml(CREDITS.usage.creditsLabel)}</th></tr></thead>
<tbody>${CREDITS.usage.rows.map(({ action, credits }) => `<tr><td>${escapeHtml(action)}</td><td>${escapeHtml(credits)}</td></tr>`).join("")}</tbody></table>
<h2>${escapeHtml(FAQ.title)}</h2>
${FAQ.items.map(({ question, answer }) => `<h3>${escapeHtml(question)}</h3><p>${escapeHtml(answer)}</p>`).join("")}
<p><a href="${SIGNUP_URL}">${escapeHtml(HERO.primaryCta)}</a></p>
</main>`;

const STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: LOGO_URL,
    },
    {
      "@type": "SoftwareApplication",
      name: SITE_NAME,
      url: SITE_URL,
      description: DESCRIPTION,
      applicationCategory: "BusinessApplication",
      applicationSubCategory: "Job search software",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        description: HERO.trust.join(", "),
      },
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "FAQPage",
      mainEntity: FAQ.items.map(({ question, answer }) => ({
        "@type": "Question",
        name: question,
        acceptedAnswer: { "@type": "Answer", text: answer },
      })),
    },
  ],
};

const buildLlmsTxt = () => `# ${SITE_NAME}

> ${DESCRIPTION}

${HERO.subtitle}

## How it works

${FUNNEL.map(({ title, desc }) => `- ${title}: ${desc}`).join("\n")}

## Features

${FEATURES.map(({ title, desc }) => `- ${title}: ${desc}`).join("\n")}

## Who it's for

${AUDIENCES.map(({ title, desc }) => `- ${title}: ${desc}`).join("\n")}

## Pricing

${CREDITS.desc}

| ${CREDITS.usage.actionLabel} | ${CREDITS.usage.creditsLabel} |
| --- | --- |
${CREDITS.usage.rows.map(({ action, credits }) => `| ${action} | ${credits} |`).join("\n")}

## FAQ

${FAQ.items.map(({ question, answer }) => `### ${question}\n\n${answer}`).join("\n\n")}

## Links

- [Homepage](${SITE_URL}/)
- [Sign up](${SIGNUP_URL})
- [Privacy policy](${SITE_URL}/privacy-policy)
- [Terms](${SITE_URL}/terms)
`;

const metaTag = (attr, key, content) => ({
  tag: "meta",
  attrs: { [attr]: key, content },
  injectTo: "head",
});

export const seoContent = () => ({
  name: "seo-content",
  transformIndexHtml(html) {
    return {
      html: html.replace(
        EMPTY_ROOT,
        `<div id="root">${buildHomepageHtml()}</div>`,
      ),
      tags: [
        {
          tag: "script",
          children: `document.documentElement.classList.add("${HAS_JS_CLASS}")`,
          injectTo: "head",
        },
        {
          tag: "style",
          children: `.${HAS_JS_CLASS} #${SEO_CONTENT_ID}{display:none}`,
          injectTo: "head",
        },
        { tag: "title", children: TITLE, injectTo: "head" },
        metaTag("name", "description", DESCRIPTION),
        metaTag("property", "og:type", "website"),
        metaTag("property", "og:site_name", SITE_NAME),
        metaTag("property", "og:title", TITLE),
        metaTag("property", "og:description", DESCRIPTION),
        metaTag("property", "og:url", `${SITE_URL}/`),
        metaTag("property", "og:image", LOGO_URL),
        metaTag("name", "twitter:card", "summary"),
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          children: JSON.stringify(STRUCTURED_DATA).replaceAll("<", "\\u003c"),
          injectTo: "head",
        },
      ],
    };
  },
  generateBundle() {
    this.emitFile({
      type: "asset",
      fileName: "llms.txt",
      source: buildLlmsTxt(),
    });
  },
});
