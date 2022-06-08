(() => {
  const darkTheme = document.querySelector('[dark-theme]');
  const darkTheme1 = document.querySelector('[dark-theme1]');
  const darkTheme2 = document.querySelector('[dark-theme2]');
  const darkTheme3 = document.querySelector('[dark-theme3]');
  const darkTheme4 = document.querySelector('[dark-theme4]');
  const darkTheme5 = document.querySelector('[dark-theme5]');
  const darkTheme6 = document.querySelector('[dark-theme6]');
  const darkTheme7 = document.querySelector('[dark-theme7]');
  const darkTheme8 = document.querySelector('[dark-theme8]');
  const darkTheme9 = document.querySelector('[dark-theme9]');
  const darkThemeText = document.querySelector('[data-theme-text]');
  const darkThemeButton = document.querySelector('[dark-theme-button]');
  const darkThemeShadow = document.querySelector('[dark-theme-shadow]');

  darkThemeButton.addEventListener('click', () => {
    darkThemeButton.classList.toggle('is-open-button');

    darkTheme.classList.toggle('dark-theme');
    darkTheme1.classList.toggle('dark-theme');
    darkTheme2.classList.toggle('dark-theme');
    darkTheme3.classList.toggle('dark-theme');
    darkTheme4.classList.toggle('dark-theme');
    darkTheme5.classList.toggle('dark-theme');
    darkTheme6.classList.toggle('dark-theme');
    darkTheme7.classList.toggle('dark-theme');
    darkTheme8.classList.toggle('dark-theme');
    darkTheme9.classList.toggle('dark-theme');
    darkThemeText.classList.toggle('dark-theme-text');
    darkThemeShadow.classList.toggle('dark-theme-shadow');
  });
})();
