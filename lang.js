const translations = {
  ru: {
    home_title: "Главная",
    nav_home: "Главная",
    nav_about: "О нас",
    nav_services: "Услуги",
    nav_contact: "Контакты",
    welcome: "Добро пожаловать",
    home_text: "Это главная страница вашего сайта."
  },
  en: {
    home_title: "Home",
    nav_home: "Home",
    nav_about: "About",
    nav_services: "Services",
    nav_contact: "Contact",
    welcome: "Welcome",
    home_text: "This is the homepage of your website."
  }
};

const switchLang = (lang) => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
};

document.addEventListener('DOMContentLoaded', () => {
  const langSelect = document.getElementById('languageSwitcher');
  langSelect.addEventListener('change', (e) => {
    switchLang(e.target.value);
  });
});
