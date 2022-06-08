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
    darkThemeShadow.classList.toggle('dark-theme-shadow');
  });
})();

(() => {
  const darkThemeText = document.querySelector('[data-theme-text]');
  const darkThemeText1 = document.querySelector('[data-theme-text1]');
  const darkThemeText2 = document.querySelector('[data-theme-text2]');
  const darkThemeText3 = document.querySelector('[data-theme-text3]');
  const darkThemeText4 = document.querySelector('[data-theme-text4]');
  const darkThemeText5 = document.querySelector('[data-theme-text5]');
  const darkThemeButton = document.querySelector('[dark-theme-button]');

  darkThemeButton.addEventListener('click', () => {
    darkThemeButton.classList.toggle('is-open-button');

    darkThemeText.classList.toggle('dark-theme-text');
    darkThemeText1.classList.toggle('dark-theme-text');
    darkThemeText2.classList.toggle('dark-theme-text');
    darkThemeText3.classList.toggle('dark-theme-text');
    darkThemeText4.classList.toggle('dark-theme-text');
    darkThemeText5.classList.toggle('dark-theme-text');
  });
})();

(() => {
  const darkThemeLogo = document.querySelector('[dark-theme-logo]');
  const darkThemeLogo2 = document.querySelector('[dark-theme-logo-two]');
  const darkThemeButton = document.querySelector('[dark-theme-button]');

  darkThemeButton.addEventListener('click', () => {
    darkThemeButton.classList.toggle('is-open-button');

    darkThemeLogo.classList.toggle('dark-theme-logo');
    darkThemeLogo2.classList.toggle('is-open');
  });
})();
