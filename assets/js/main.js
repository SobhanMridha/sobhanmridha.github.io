// Mobile menu toggle (the only JavaScript the site needs).
(() => {
  const btn = document.getElementById("menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!btn || !nav) return;
  const set = (open) => {
    nav.classList.toggle("hidden", !open);
    nav.classList.toggle("flex", open);
    btn.setAttribute("aria-expanded", String(open));
  };
  btn.addEventListener("click", () => set(btn.getAttribute("aria-expanded") !== "true"));
  document.addEventListener("keydown", (e) => e.key === "Escape" && set(false));
  document.addEventListener("click", (e) => {
    if (!nav.contains(e.target) && !btn.contains(e.target)) set(false);
  });
})();
