const d = require("./data");
const { link } = require("./layout");
const { heading, ext, button, card, chip } = require("./components");

const socialCard = `
<section class="mx-auto max-w-xs flex-shrink-0 rounded-lg bg-[#212326] p-6 text-gray-300 shadow-lg sm:mx-0">
  <img src="/assets/images/static/profile.png" alt="Portrait of ${d.profile.name}" class="mb-4 h-72 w-full rounded-md border-2 border-[#2abc89] object-cover" />
  <h3 class="mb-3 text-lg font-semibold">Find me on</h3>
  <div class="flex space-x-4">
    ${d.social
      .map(
        (s) =>
          `<a href="${s.href}" ${s.href.startsWith("http") ? 'target="_blank" rel="noopener noreferrer"' : ""}><img src="/assets/images/social/${s.icon}" alt="${s.label}" class="h-10 w-10 grayscale hover:filter-none" /></a>`
      )
      .join("\n")}
  </div>
</section>`;

const statGrid = `
<div class="grid grid-cols-2 gap-4 sm:grid-cols-4">
  ${d.stats
    .map(
      (s) => `<div class="rounded-lg border border-gray-800 bg-[#212326] p-4 text-center">
        <div class="text-2xl font-bold text-[#2abc89]">${s.value}</div>
        <div class="mt-1 text-xs text-gray-400">${s.label}</div></div>`
    )
    .join("")}
</div>`;

const judgeTable = `
<div class="grid gap-4 sm:grid-cols-2">
  ${d.judges
    .map(
      (j) => `<div class="rounded-lg border border-gray-800 bg-[#212326] p-4">
        <div class="flex items-baseline justify-between">
          <span class="font-semibold text-gray-200">${j.site}</span>
          ${ext(j.url, `@${j.handle}`, `${link} text-xs`)}
        </div>
        <div class="mt-2 text-gray-400">Peak rating <strong class="text-[#2abc89]">${j.rating}</strong>${j.rank ? ` · ${j.rank}` : ""}</div>
        <div class="text-xs text-gray-500">${j.percentile} of ${j.users}+ users</div></div>`
    )
    .join("")}
</div>`;

const home = () => ({
  title: `${d.profile.name} | Competitive Programmer`,
  active: null,
  content: `
<div class="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
  <section class="flex-1 space-y-6">
    <h1 class="text-5xl font-bold text-[#c9c9c9]">Hello</h1>
    <p class="max-w-md font-mono text-base leading-relaxed text-gray-400">
      <span class="text-3xl">I’m ${d.profile.name},</span><br />${d.profile.intro}
    </p>
    <div class="flex flex-wrap gap-3">
      ${button("/Resume.pdf", "My Resume", "download")}
      ${button("/projects/", "See projects")}
    </div>
  </section>
  ${socialCard}
</div>

<section class="mt-12">
  ${heading("By the numbers")}
  ${statGrid}
  <p class="mt-4 text-gray-400">More on my <a class="${link}" href="/about/">contests, ratings and leadership</a>.</p>
</section>`,
});

const about = () => ({
  title: `About | ${d.profile.name}`,
  active: "/about/",
  description: `About ${d.profile.name}: education, competitive programming profiles, contest results and leadership experience.`,
  content: `
<section class="mb-16">
  ${heading("About me")}
  <p class="leading-relaxed text-gray-400">${d.profile.intro}</p>
  <p class="mt-3 text-gray-500">📍 ${d.profile.location}</p>
</section>

<section class="mb-16">
  ${heading("Education")}
  ${card(`<div class="flex flex-col justify-between gap-1 sm:flex-row">
    <h3 class="font-semibold text-white">${d.education.degree}</h3>
    <span class="text-gray-400">${d.education.period}</span></div>
    <p class="text-gray-300">${d.education.school}</p>
    <p class="mt-2 text-gray-400">${d.education.detail}</p>`)}
</section>

<section class="mb-16">
  ${heading("Problem solving")}
  ${statGrid}
  <div class="mt-4">${judgeTable}</div>
  <p class="mt-4 text-gray-400">Solved <strong>1500+</strong> data structure and algorithm problems across online judges and took part in <strong>100+</strong> online contests.</p>
</section>

<section class="mb-16">
  ${heading("Contest achievements")}
  <ul class="space-y-3">
    ${d.contests
      .map(
        (c) => `<li class="flex flex-col gap-1 border-l-2 border-[#2abc89] pl-3 sm:flex-row sm:justify-between">
          <span><strong class="text-gray-200">${c.rank}</strong>${c.of ? ` of ${c.of}` : ""} · ${c.event}
          <span class="text-gray-500">(Team ${c.team})</span></span>
          ${ext(c.url, "Standings →", `${link} whitespace-nowrap`)}</li>`
      )
      .join("")}
  </ul>
</section>

<section>
  ${heading("Leadership")}
  <div class="space-y-6">
    ${d.experience
      .map(
        (e) => card(`<div class="flex flex-col justify-between gap-1 sm:flex-row">
          <h3 class="font-semibold text-white">${e.role}</h3><span class="text-gray-400">${e.period}</span></div>
          <p class="text-[#2abc89]">${e.org}</p><p class="mt-2 text-gray-300">${e.text}</p>`)
      )
      .join("")}
  </div>
</section>`,
});

const skills = () => ({
  title: `Skills | ${d.profile.name}`,
  active: "/skills/",
  description: "Languages, frameworks, databases and tools I work with.",
  content: `
<section class="mx-auto max-w-6xl">
  ${heading("Technical skills")}
  <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
    ${d.skills
      .map(
        (g) => `<section class="rounded-lg border border-[#2abc89] bg-[#212326] p-6 shadow-md">
          <h3 class="mb-4 text-lg font-semibold text-[#2abc89]">${g.title}</h3>
          <ul>${g.items
            .map(
              ([name, icon]) => `<li class="mb-2 flex items-center">${
                icon
                  ? `<img src="/assets/images/skills/${icon}" alt="" class="mr-2 h-5 w-5" />`
                  : `<span class="mr-2 flex h-5 w-5 items-center justify-center text-[#2abc89]">▹</span>`
              }${name}</li>`
            )
            .join("")}</ul></section>`
      )
      .join("")}
  </div>
</section>`,
});

const projects = () => ({
  title: `Projects | ${d.profile.name}`,
  active: "/projects/",
  description: "Selected projects: Watchlist and Merge Sort Visualizer.",
  content: `
<section>
  ${heading("Projects")}
  <div class="space-y-6">
    ${d.projects
      .map(
        (p) => card(`<h3 class="mb-2 text-xl font-semibold text-white">${p.name}</h3>
          <p class="mb-3 text-gray-300">${p.summary}</p>
          <div class="mb-4 flex flex-wrap gap-2">${p.tech.map(chip).join("")}</div>
          <ul class="mb-4 list-disc pl-6 text-gray-300">${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
          <div class="flex gap-4">${p.links.map((l) => ext(l.url, `${l.label} →`, `${link} font-semibold`)).join("")}</div>`)
      )
      .join("")}
  </div>
</section>`,
});

const contact = () => ({
  title: `Contact | ${d.profile.name}`,
  active: "/contact/",
  description: `Get in touch with ${d.profile.name}.`,
  content: `
<section class="mb-24 rounded-lg border border-gray-800 bg-global-bg/60 p-4 sm:p-6">
  <div class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
    <div class="max-w-xl">
      <h2 class="text-4xl font-bold text-[#2abc89]">Say hello.</h2>
      <p class="mt-2 text-sm uppercase text-gray-400">Feel free to drop me a message anytime.<br />I would love to hear from you.</p>
      <p class="mt-2 text-gray-500">📍 ${d.profile.location}</p>
      <div class="mt-4 space-y-3 text-gray-300">
        ${d.contactLinks
          .map(
            (c) => `<div><strong class="block text-xs text-gray-400">${c.label}</strong>
              ${c.href.startsWith("mailto") ? `<a class="${link}" href="${c.href}">${c.text}</a>` : ext(c.href, c.text)}</div>`
          )
          .join("")}
        <div class="pt-2"><a href="mailto:${d.profile.email}" class="inline-block rounded-sm bg-[#2abc89] px-8 py-2 text-xs font-semibold text-black">Email me</a></div>
      </div>
    </div>
    <div class="mt-6 w-full border-2 border-[#2abc89] sm:mt-0 sm:w-96"><img src="/assets/images/static/me.jpg" alt="${d.profile.name}" /></div>
  </div>
</section>`,
});

module.exports = [
  { out: "index.html", ...home() },
  { out: "about/index.html", ...about() },
  { out: "skills/index.html", ...skills() },
  { out: "projects/index.html", ...projects() },
  { out: "contact/index.html", ...contact() },
];
