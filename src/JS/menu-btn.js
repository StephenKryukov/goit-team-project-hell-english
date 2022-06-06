(() => {
  const closeBtnRef = document.querySelector("[close-btn]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const headerLogoRef = document.querySelector("[header-logo]");

  closeBtnRef.addEventListener("click", () => {
    const expanded =
      closeBtnRef.getAttribute("aria-expanded") === "true" || false;

    closeBtnRef.classList.toggle("is-open");
    closeBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");
    headerLogoRef.classList.toggle("is-open");
  });
})();
