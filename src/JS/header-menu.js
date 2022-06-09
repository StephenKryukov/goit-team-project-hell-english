(() => {
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const mobileMenuRef = document.querySelector('[data-menu]');
  const headerLogoRef = document.querySelector('[header-logo]');

  menuBtnRef.addEventListener('click', () => {
    const expanded =
      menuBtnRef.getAttribute('aria-expanded') === 'true' || false;

    menuBtnRef.classList.toggle('is-open');
    menuBtnRef.setAttribute('aria-expanded', !expanded);

    mobileMenuRef.classList.toggle('is-open');
    headerLogoRef.classList.toggle('is-open');
  });
})();

(() => {
  const ulList = document.querySelector('[data-ul-list]');

  const mobileMenu = document.querySelector('[data-menu]');
  const menuBtnRef = document.querySelector('[data-menu-button]');
  const headerLogoRef = document.querySelector('[header-logo]');

  ulList.addEventListener('click', () => {
    mobileMenu.classList.remove('is-open');
    menuBtnRef.classList.remove('is-open');
    headerLogoRef.classList.remove('is-open');
  });
})();
