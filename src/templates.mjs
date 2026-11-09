import { site, nav, social } from "./data.mjs";

/* ---------- small reusable pieces ---------- */

export const sectionTitle = (text) =>
  `<h2 class="mb-6 border-b-2 border-accent pb-2 text-2xl font-bold text-gray-200 sm:text-3xl">${text}</h2>`;

export const tag = (t) =>
  `<span class="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 text-xs text-accent">${t}</span>`;

export const link = (href, label, external = true) =>
  `<a href="${href}"${external ? ' target="_blank" rel="noopener noreferrer"' : ""} class="font-semibold text-accent underline-offset-4 hover:underline">${label}</a>`;

export const button = (href, label, { primary = false, download = false } = {}) =>
  `<a href="${href}"${download ? " download" : ""} class="inline-flex h-10 items-center justify-center whitespace-nowrap border border-accent px-6 text-xs font-medium uppercase tracking-wider transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-global-bg ${
    primary
      ? "bg-accent text-global-bg hover:bg-transparent hover:text-accent"
      : "bg-surface text-global-text hover:bg-accent hover:text-global-bg"
  }">${label}</a>`;

export const card = (inner, extra = "") =>
  `<div class="rounded-lg border border-accent/30 bg-surface p-5 shadow-md ${extra}">${inner}</div>`;

export const socialIcons = () =>
  `<div class="flex gap-4">${social
    .map(
      (s) =>
        `<a href="${s.href}" aria-label="${s.label}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}><img src="${s.icon}" class="h-10 w-10 grayscale transition hover:filter-none" alt="${s.label}" width="40" height="40" /></a>`
    )
    .join("")}</div>`;

export const profileCard = () =>
  `<aside class="mx-auto w-full max-w-xs shrink-0 rounded-lg bg-surface p-6 text-gray-300 shadow-lg md:mx-0">
    <img src="/assets/images/static/profile.webp" width="677" height="728" class="mb-4 h-72 w-full rounded-md border-2 border-accent object-cover" alt="Portrait of ${site.name}" />
    <h3 class="mb-3 text-lg font-semibold">Find me on</h3>
    ${socialIcons()}
  </aside>`;

/* ---------- layout ---------- */

const header = (path) => {
  const links = nav
    .map((n) => {
      const active = path === n.href;
      return `<a href="${n.href}"${active ? ' aria-current="page"' : ""} class="px-4 py-3 text-accent underline-offset-4 hover:underline sm:py-0 ${
        active ? "font-bold underline" : ""
      }">${n.label}</a>`;
    })
    .join("");
  return `<header class="relative mb-14 flex items-center justify-between sm:mb-20">
    <div class="flex items-center gap-2">
      <a href="/" aria-label="Home" class="grayscale hover:filter-none">
        <img src="/assets/images/static/Hello.gif" alt="" width="80" height="80" class="mr-3 h-10 w-10 sm:mr-0 sm:h-20 sm:w-20" />
      </a>
      <div>
        <a href="/" class="text-xl font-bold sm:text-2xl">${site.name}</a>
        <nav id="site-nav" aria-label="Main" class="absolute left-0 right-0 top-full z-50 mt-2 hidden flex-col rounded-md bg-global-bg/95 py-3 shadow backdrop-blur-sm sm:static sm:-ms-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-x sm:divide-accent sm:bg-transparent sm:py-0 sm:shadow-none">${links}</nav>
      </div>
    </div>
    <button id="menu-toggle" class="text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:hidden" aria-label="Toggle menu" aria-expanded="false" aria-controls="site-nav">
      <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path></svg>
    </button>
  </header>`;
};

const footer = () =>
  `<footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center font-semibold text-gray-400 sm:flex-row sm:justify-between sm:text-xs">
    <div>© ${site.fullName} ${new Date().getFullYear()}</div>
    <nav aria-label="Footer" class="flex flex-wrap justify-center gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500">${nav
      .map((n) => `<a class="px-3 py-2 hover:text-gray-200 hover:underline sm:py-0" href="${n.href}">${n.label}</a>`)
      .join("")}</nav>
  </footer>`;

export const layout = ({ path, title, description, body }) => {
  const fullTitle = path === "/" ? `${site.name} — ${site.role}` : `${title} · ${site.name}`;
  const desc = description || site.description;
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${fullTitle}</title>
    <meta name="description" content="${desc}" />
    <meta name="theme-color" content="#1D1F20" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="${fullTitle}" />
    <meta property="og:description" content="${desc}" />
    <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
    <link href="/assets/css/output.css" rel="stylesheet" />
    <script src="/assets/js/main.js" defer></script>
  </head>
  <body class="mx-auto flex min-h-screen max-w-3xl flex-col bg-global-bg px-4 pt-10 font-mono text-sm font-normal text-global-text antialiased sm:px-8 sm:pt-16">
    <a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-2 focus:z-50 focus:bg-accent focus:px-3 focus:py-1 focus:text-global-bg">Skip to content</a>
    ${header(path)}
    <main id="main" class="fade-in">
${body}
    </main>
    ${footer()}
  </body>
</html>
`;
};
