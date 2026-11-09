const { link } = require("./layout");

const heading = (text) =>
  `<h2 class="mb-8 border-b-2 border-[#2abc89] pb-2 text-3xl font-bold text-gray-300">${text}</h2>`;

const ext = (href, text, cls = link) =>
  `<a href="${href}" target="_blank" rel="noopener noreferrer" class="${cls}">${text}</a>`;

const button = (href, label, attrs = "") => `
<a href="${href}" ${attrs} class="inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap border border-[#2abc89] bg-[#212326] px-6 py-3 font-mono font-medium uppercase tracking-wider text-[#c9c9c9] transition-all duration-300 hover:bg-[#2abc89] hover:text-[#1D1F20] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#2abc89] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D1F20]">${label}</a>`;

const card = (inner, cls = "") =>
  `<div class="rounded-lg border border-[#2abc89]/40 bg-[#212326] p-6 shadow-lg ${cls}">${inner}</div>`;

const chip = (t) =>
  `<span class="rounded-sm border border-[#2abc89]/50 px-2 py-0.5 text-xs text-[#2abc89]">${t}</span>`;

module.exports = { heading, ext, button, card, chip };
