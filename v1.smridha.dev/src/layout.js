const { profile, nav, social } = require("./data");

const link = "text-[#2abc89] underline-offset-2 hover:underline";

const navLinks = (active, cls) =>
  nav
    .map(
      (n) =>
        `<a class="${cls}${n.href === active ? " underline" : ""}" href="${n.href}">${n.label}</a>`
    )
    .join("\n");

const header = (active) => `
<header class="relative mb-20 flex items-center justify-between">
  <div class="flex gap-2">
    <a class="inline-flex items-center grayscale hover:filter-none sm:relative sm:inline-block" href="/" aria-label="Home">
      <img src="/assets/images/static/Hello.gif" alt="" class="mr-3 h-10 w-10 sm:mr-0 sm:h-20 sm:w-20" />
    </a>
    <div>
      <a href="/" class="text-xl font-bold sm:text-2xl">${profile.name}</a>
      <nav class="hidden sm:-ms-4 sm:mt-1 sm:flex sm:items-center sm:divide-x sm:divide-[#2abc89]" aria-label="Main">
        ${navLinks(active, `${link} px-4`)}
      </nav>
    </div>
  </div>

  <button id="menu-toggle" class="text-[#2abc89] focus:outline-none sm:hidden" aria-label="Toggle menu" aria-expanded="false" aria-controls="navigation-menu">
    <svg class="h-8 w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </button>

  <nav id="navigation-menu" class="absolute left-0 right-0 top-full z-50 mt-2 flex hidden flex-col items-end rounded-md bg-[#212326] py-2 shadow-lg border border-gray-800" aria-label="Mobile">
    ${navLinks(active, `${link} px-4 py-3`)}
  </nav>
</header>`;

const footer = () => `
<footer class="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pb-4 pt-20 text-center font-semibold text-gray-400 sm:flex-row sm:justify-between sm:text-xs">
  <div class="mr-0 sm:mr-4">© ${profile.name} ${new Date().getFullYear()}.</div>
  <nav class="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500" aria-label="Footer">
    ${navLinks(null, "px-3 py-2 hover:text-gray-200 hover:underline sm:py-0")}
  </nav>
</footer>`;

const layout = ({ title, description, active, content }) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <meta name="description" content="${description || profile.tagline}" />
    <link rel="shortcut icon" href="/assets/images/favicon.ico" type="image/x-icon" />
    <link href="/assets/css/output.css" rel="stylesheet" />
    <script src="/assets/js/animation.js" defer></script>
  </head>
  <body class="mx-auto flex min-h-screen max-w-3xl flex-col bg-global-bg px-4 pt-16 font-mono text-sm font-normal text-global-text antialiased sm:px-8">
    ${header(active)}
    <main class="page-transition">
${content}
    </main>
    ${footer()}
  </body>
</html>
`;

module.exports = { layout, link, social };
