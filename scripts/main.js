(() => {
  const currentHash = window.location.hash;
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href === currentHash) {
      link.classList.add("active");
    }
  });

  const copyButtons = document.querySelectorAll("[data-copy-target]");
  copyButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      const targetId = button.getAttribute("data-copy-target");
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (!target) return;

      try {
        await navigator.clipboard.writeText(target.innerText);
        const original = button.textContent;
        button.textContent = "已复制";
        button.classList.add("copied");
        window.setTimeout(() => {
          button.textContent = original;
          button.classList.remove("copied");
        }, 1500);
      } catch {
        button.textContent = "复制失败";
        window.setTimeout(() => {
          button.textContent = "复制";
        }, 1500);
      }
    });
  });

  const checks = document.querySelectorAll("[data-check]");
  checks.forEach((input) => {
    const key = input.getAttribute("data-check");
    if (!key) return;

    const storageKey = `open-notebook-tutorial:${key}`;
    input.checked = localStorage.getItem(storageKey) === "1";

    input.addEventListener("change", () => {
      localStorage.setItem(storageKey, input.checked ? "1" : "0");
    });
  });

  window.addEventListener("hashchange", () => {
    navLinks.forEach((link) => link.classList.remove("active"));
    navLinks.forEach((link) => {
      if (link.getAttribute("href") === window.location.hash) {
        link.classList.add("active");
      }
    });
  });
})();
