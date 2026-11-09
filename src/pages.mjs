import {
  site, stats, profiles, contests, education, experience, projects, skills,
} from "./data.mjs";
import { sectionTitle, tag, link, button, card, profileCard } from "./templates.mjs";

/* ---------- shared fragments used on more than one page ---------- */

const projectCard = (p) =>
  card(
    `<h3 class="mb-2 text-xl font-semibold text-white">${p.name}</h3>
     <p class="mb-3 text-gray-300">${p.summary}</p>
     <ul class="mb-4 list-disc space-y-1 pl-6 text-gray-300">${p.points.map((x) => `<li>${x}</li>`).join("")}</ul>
     <div class="mb-4 flex flex-wrap gap-2">${p.tools.map(tag).join("")}</div>
     <div class="flex gap-5">${p.live ? link(p.live, "Live demo →") : ""}${link(p.repo, "GitHub repo →")}</div>`
  );

const contestRow = (c) =>
  `<li class="flex flex-col gap-1 border-b border-gray-800 py-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between">
    <div>
      <span class="font-semibold text-gray-200">${c.url ? link(c.url, c.name) : c.name}</span>
      ${c.featured ? '<span class="ml-2 rounded bg-accent px-1.5 py-0.5 text-[10px] font-bold uppercase text-global-bg">Regional</span>' : ""}
      <div class="text-xs text-gray-500">${c.detail} · Team ${c.team}</div>
    </div>
    <div class="shrink-0 text-accent">Rank ${c.rank}${c.outOf ? ` <span class="text-gray-500">/ ${c.outOf}</span>` : ""}</div>
  </li>`;

const profileTile = (p) =>
  `<a href="${p.url}" target="_blank" rel="noopener noreferrer" class="group block rounded-lg border border-accent/30 bg-surface p-4 transition hover:border-accent">
    <div class="flex items-baseline justify-between">
      <span class="font-semibold text-gray-200">${p.platform}</span>
      <span class="text-xs text-gray-500 group-hover:text-accent">${p.handle} ↗</span>
    </div>
    <div class="mt-2 text-3xl font-bold text-accent">${p.rating}</div>
    <div class="text-xs text-gray-400">max rating · ${p.title === p.top ? p.top : `${p.title} · ${p.top}`}</div>
    <div class="text-[11px] text-gray-600">among ${p.of}</div>
  </a>`;

const statTile = (s) =>
  `<div class="rounded-lg border border-gray-800 bg-surface px-4 py-3 text-center">
    <div class="text-2xl font-bold text-accent">${s.value}</div>
    <div class="text-xs text-gray-400">${s.label}</div>
  </div>`;

const timeline = (items) =>
  `<ol class="space-y-6 border-l border-accent/40 pl-6">${items
    .map(
      (e) => `<li class="relative">
        <span class="absolute -left-[31px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent"></span>
        <div class="text-xs text-gray-500">${e.period}</div>
        <h3 class="font-semibold text-gray-200">${e.role || e.degree}</h3>
        <div class="text-accent">${e.org || e.school}</div>
        <p class="mt-1 text-gray-400">${e.text || e.note}</p>
      </li>`
    )
    .join("")}</ol>`;

/* ---------- pages ---------- */

export const pages = [
  {
    path: "/",
    file: "index.html",
    title: "Home",
    body: `
      <div class="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
        <section class="flex-1 space-y-6">
          <p class="text-xs text-accent">~/sobhan <span class="text-gray-500">$</span> whoami</p>
          <h1 class="text-5xl font-bold text-gray-200">Hello</h1>
          <p class="max-w-md text-base leading-relaxed text-gray-400">
            <span class="text-3xl text-gray-200">I’m ${site.name},</span><br />
            a Computer Science &amp; Engineering student and competitive programmer from Dhaka.
            I enjoy algorithms, data structures and problem solving, compete on Codeforces, LeetCode,
            CodeChef and AtCoder, and have represented my university at ICPC Dhaka Regional and
            several inter-university contests.
          </p>
          <div class="flex flex-wrap gap-3">
            ${button("/Resume.pdf", "My Resume", { primary: true, download: true })}
            ${button("/contact/", "Get in touch")}
          </div>
        </section>
        ${profileCard()}
      </div>

      <section class="mt-14" aria-label="Highlights">
        <div class="grid grid-cols-2 gap-3 sm:grid-cols-4">${stats.map(statTile).join("")}</div>
      </section>

      <section class="mt-14">
        ${sectionTitle("Contest ratings")}
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">${profiles.map(profileTile).join("")}</div>
        <p class="mt-4">${link("/achievements/", "All achievements →", false)}</p>
      </section>

      <section class="mt-14">
        ${sectionTitle("Featured projects")}
        <div class="space-y-6">${projects.map(projectCard).join("")}</div>
      </section>`,
  },

  {
    path: "/about/",
    file: "about/index.html",
    title: "About",
    description: `About ${site.fullName}: CSE student at National University, former General Secretary of the Programming Club at Tejgaon College.`,
    body: `
      <div class="flex flex-col-reverse gap-8 md:flex-row md:items-start md:justify-between">
        <section class="flex-1 space-y-6">
          <h1 class="text-5xl font-bold text-gray-200">About me</h1>
          <p class="max-w-md text-base leading-relaxed text-gray-400">
            <span class="text-3xl text-gray-200">${site.fullName}</span><br />
            I’m studying Computer Science and Engineering at National University and spend most of my
            time on algorithms and data structures. I’ve solved over 1500 problems, taken part in
            100+ online contests, and compete in onsite contests with my team.
          </p>
          <p class="max-w-md leading-relaxed text-gray-400">
            Outside contests I build small web projects with Flask and JavaScript, and I enjoy
            teaching: I coached juniors in C, data structures and algorithms, and later helped lead
            the Programming Club at Tejgaon College.
          </p>
          <div class="flex flex-wrap gap-3">
            ${button("/Resume.pdf", "My Resume", { primary: true, download: true })}
            ${button("/contact/", "Get in touch")}
          </div>
        </section>
        ${profileCard()}
      </div>

      <section class="mt-14">
        ${sectionTitle("Education")}
        ${timeline(education)}
      </section>

      <section class="mt-14">
        ${sectionTitle("Volunteer &amp; leadership")}
        ${timeline(experience)}
      </section>`,
  },

  {
    path: "/skills/",
    file: "skills/index.html",
    title: "Skills",
    description: `Technical skills of ${site.fullName}: C++, C, Python, JavaScript, SQL, React, Flask, Node, Express, MySQL and MongoDB.`,
    body: `
      <section>
        <h1 class="sr-only">Skills</h1>
        ${sectionTitle("Technical skills")}
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">${skills
          .map((g) =>
            card(
              `<h3 class="mb-4 text-lg font-semibold text-accent">${g.title}</h3>
               <ul class="space-y-2">${g.items
                 .map(
                   (i) =>
                     `<li class="flex items-center">${
                       i.icon
                         ? `<img src="${i.icon}" class="mr-2 h-5 w-5" alt="" width="20" height="20" />`
                         : '<span class="mr-2 text-accent" aria-hidden="true">▹</span>'
                     }${i.name}</li>`
                 )
                 .join("")}</ul>`
            )
          )
          .join("")}</div>
      </section>`,
  },

  {
    path: "/projects/",
    file: "projects/index.html",
    title: "Projects",
    description: `Projects by ${site.fullName}: Watchlist (Flask + TMDb) and Merge Sort Visualizer (Python).`,
    body: `
      <section>
        <h1 class="sr-only">Projects</h1>
        ${sectionTitle("Projects")}
        <div class="space-y-6">${projects.map(projectCard).join("")}</div>
        <p class="mt-8 text-gray-400">More on ${link(site.links.github, "GitHub →")}</p>
      </section>`,
  },

  {
    path: "/achievements/",
    file: "achievements/index.html",
    title: "Achievements",
    description: `Competitive programming profile of ${site.fullName}: Codeforces 1368, LeetCode 1789, CodeChef 1603, AtCoder 702, ICPC Dhaka Regional 2023 and IUPC results.`,
    body: `
      <section>
        <h1 class="sr-only">Achievements</h1>
        ${sectionTitle("Problem solving")}
        <p class="mb-6 max-w-xl text-gray-400">
          Over <strong class="text-gray-200">1500</strong> data structure and algorithm problems solved and
          <strong class="text-gray-200">100+</strong> online contests. Ratings below are my highest.
        </p>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">${profiles.map(profileTile).join("")}</div>
      </section>

      <section class="mt-14">
        ${sectionTitle("Onsite contests")}
        ${card(`<ul>${contests.map(contestRow).join("")}</ul>`)}
        <p class="mt-3 text-xs text-gray-500">Teams: TC_ERROR_PROOF (2023), TC_Phoenix (2025–2026).</p>
      </section>`,
  },

  {
    path: "/contact/",
    file: "contact/index.html",
    title: "Contact",
    description: `Contact ${site.fullName} — email, LinkedIn, GitHub.`,
    body: `
      <section class="mb-10">
        <div class="flex flex-col gap-6 rounded-lg border border-gray-800 bg-global-bg/60 p-4 sm:flex-row sm:items-start sm:justify-between sm:p-6">
          <div class="max-w-xl">
            <h1 class="text-4xl font-bold text-accent">Say hello.</h1>
            <p class="mt-2 text-sm uppercase text-gray-400">
              Feel free to drop me a message anytime.<br />I would love to hear from you.
            </p>
            <dl class="mt-5 space-y-3 text-gray-300">
              ${[
                ["Email", `mailto:${site.email}`, site.email],
                ["LinkedIn", site.links.linkedin, "linkedin.com/in/sobhanmridha"],
                ["GitHub", site.links.github, "github.com/SobhanMridha"],
                ["Facebook", site.links.facebook, "facebook.com/md.sobhanmridha"],
              ]
                .map(
                  ([k, href, text]) =>
                    `<div><dt class="text-xs text-gray-400">${k}</dt><dd>${link(href, text, !href.startsWith("mailto"))}</dd></div>`
                )
                .join("")}
              <div><dt class="text-xs text-gray-400">Location</dt><dd>${site.location}</dd></div>
            </dl>
            <div class="pt-5">${button(`mailto:${site.email}?subject=Hello%20Sobhan`, "Email me", { primary: true })}</div>
          </div>
          <img src="/assets/images/static/me.jpg" width="1024" height="1024" alt="${site.name}" class="w-full border-2 border-accent sm:w-72" />
        </div>
      </section>`,
  },
];
