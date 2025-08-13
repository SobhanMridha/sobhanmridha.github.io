document.addEventListener("DOMContentLoaded", () => {
  const page = document.querySelector(".page-transition");

  if (page) page.classList.add("active");

  document.querySelectorAll("a").forEach((link) => {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        if (page) page.classList.remove("active");
        setTimeout(() => {
          window.location = link.href;
        }, 70); 
      });
    }
  });
});
