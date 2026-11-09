document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page-transition");
  if (page) page.classList.add("active");

  // Mobile menu
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("navigation-menu");
  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      const open = menu.classList.toggle("hidden") === false;
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Fade out before navigating between internal pages
  document.querySelectorAll("a[href]").forEach((link) => {
    if (link.hostname !== window.location.hostname || link.hasAttribute("download")) return;
    link.addEventListener("click", (e) => {
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.button !== 0) return;
      e.preventDefault();
      if (page) page.classList.remove("active");
      setTimeout(() => (window.location = link.href), 70);
    });
  });
});
