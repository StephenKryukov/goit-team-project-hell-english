(() => {
  const darkTheme = document.querySelector('[dark-theme]');
  const darkThemeText = document.querySelector('[data-theme-text]');
  const darkThemeButton = document.querySelector('[dark-theme-button]');
  const darkThemeShadow = document.querySelector('[dark-theme-shadow]');

  darkThemeButton.addEventListener('click', () => {
    darkThemeButton.classList.toggle('is-open-button');

    darkTheme.classList.toggle('dark-theme');
    darkThemeText.classList.toggle('dark-theme-text');
    darkThemeShadow.classList.toggle('dark-theme-shadow');
  });
})();
