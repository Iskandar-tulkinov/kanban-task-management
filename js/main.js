const THEME_TOGGLER_BUTTON = '.theme-toggler';

const localSTheme = localStorage.getItem('theme');
let themeToSet = localSTheme;

if (!localSTheme) {
  themeToSet = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

document.documentElement.setAttribute('data-theme', themeToSet);

function init() {
  const elRoot = document.documentElement;
  const elThemeTogglerButton = document.querySelector(THEME_TOGGLER_BUTTON);

  function setInitialCirclePosition() {
    // Set the initial position of the circle based on the current theme
    const elCircle = elThemeTogglerButton.querySelector('.circle');
    if (elCircle) {
      const currentTheme = elRoot.getAttribute('data-theme');
      if (currentTheme === 'light') {
        elCircle.style.left = '0';
        elCircle.style.right = 'auto';
      } else {
        elCircle.style.left = 'auto';
        elCircle.style.right = '0';
      }
    }
  }

  function switchTheme() {
    let dataTheme = elRoot.getAttribute('data-theme');
    let newTheme = dataTheme === 'light' ? 'dark' : 'light';

    elRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Adjust the position of the circle based on the new theme
    const elCircle = elThemeTogglerButton.querySelector('.circle');
    if (elCircle) {
      if (newTheme === 'light') {
        elCircle.style.left = '0';
        elCircle.style.right = 'auto';
      } else {
        elCircle.style.left = 'auto';
        elCircle.style.right = '0';
      }
    }
  }

  if (elThemeTogglerButton) {
    setInitialCirclePosition();
    elThemeTogglerButton.addEventListener('click', switchTheme);
  }
}

document.addEventListener('DOMContentLoaded', init);
