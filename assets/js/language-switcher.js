(function () {
  'use strict';
  var uk = {
    nav: ['Головна', 'Про мене', 'Проєкти', 'Контакти'], heroDescription: 'Unity- та C#-розробник ігор. Створюю чуйний геймплей, підтримувані системи та цілісні інтерактивні враження.', heroAction: 'зв’язатися зі мною',
    aboutTitle: 'про <span class="text-accent">мене</span>', eyebrow: 'Unity та C# розробник ігор', aboutHeading: 'Ігри з чітким <span>геймплеєм.</span>', aboutText: 'Створюю цілісні ігрові досвіди з чуйними механіками, підтримуваною технічною основою та практичним підходом до продакшну.',
    explore: 'Переглянути проєкти', touch: 'Зв’язатися', focus: 'Ключова експертиза', expertise: ['Розробка ігор', 'Геймплейні системи', 'Unity та C#'], profileEyebrow: 'Профіль розробника', profileHeading: 'Про Олександра.', role: 'Unity та C# розробник ігор', profileText: 'Фокусуюся на розробці ігор, геймплейних системах і практичних функціях для реального продакшну.', cv: 'Переглянути CV',
    portfolioTitle: 'вибрані <span class="text-accent">проєкти</span>', personal: 'Особисті проєкти', collaborations: 'Вибрані співпраці', contactTitle: 'давайте <span class="text-accent">поговоримо</span>', contactHeading: 'Працюймо разом.', contactText: 'Відкритий до ролей у розробці ігор на Unity та C#, фриланс-можливостей і співпраці. Давайте обговоримо.', email: 'Пошта', phone: 'Телефон', form: ['ВАШЕ ІМ’Я', 'ВАША ПОШТА', 'ТЕМА', 'ВАШЕ ПОВІДОМЛЕННЯ'], send: 'надіслати повідомлення',
    footerText: 'Unity- та C#-розробник ігор. Створюю ігри, геймплейні системи та інтерактивні враження.', footerCta: 'Працюймо разом', exploreFooter: 'Навігація', contactFooter: 'Контакти', follow: 'Стежте за мною', rights: 'Усі права захищено.'
  };
  var entries = [
    ['text', '#desktop-nav .desktop-nav-element h2', 'nav'], ['text', '#mobile-nav .mobile-nav-element span', 'nav'], ['text', '[data-i18n="hero-description"]', 'heroDescription'], ['text', '[data-i18n="hero-action"]', 'heroAction'],
    ['html', '#about .section-title-primary', 'aboutTitle'], ['text', '#about .studio-intro__copy .studio-eyebrow', 'eyebrow'], ['html', '#about .studio-intro__copy h3', 'aboutHeading'], ['text', '#about .studio-intro__copy > p:not(.studio-eyebrow)', 'aboutText'], ['label', '#about .studio-button--primary', 'explore'], ['text', '#about .studio-button:not(.studio-button--primary)', 'touch'], ['text', '#about .studio-intro__brand .studio-eyebrow', 'focus'], ['text', '#about .studio-intro__brand li span', 'expertise'], ['text', '#about .studio-section-heading .studio-eyebrow', 'profileEyebrow'], ['text', '#about .studio-section-heading h3', 'profileHeading'], ['text', '#about .team-member__role', 'role'], ['text', '#about .team-member__content > p:not(.team-member__role)', 'profileText'], ['label', '#about .team-member__actions a:first-child', 'cv'],
    ['html', '#portfolio .section-title-primary', 'portfolioTitle'], ['text', '#portfolio .portfolio-section-heading:first-child p', 'personal'], ['text', '#portfolio .portfolio-section-heading--secondary h3', 'collaborations'],
    ['html', '#contact .section-title-primary', 'contactTitle'], ['text', '#contact .contact-details h3', 'contactHeading'], ['text', '#contact .contact-details > p', 'contactText'], ['text', '#contact .contact-email small', 'email'], ['text', '#contact .contact-phone small', 'phone'], ['placeholder', '#contact-form input, #contact-form textarea', 'form'], ['text', '#contact-form .contact-submit > span:first-child', 'send'],
    ['text', '.site-footer__brand p', 'footerText'], ['label', '.site-footer__cta', 'footerCta'], ['text', '.site-footer__column:nth-of-type(1) h2', 'exploreFooter'], ['text', '.site-footer__column:nth-of-type(2) h2', 'contactFooter'], ['text', '.site-footer__column:nth-of-type(3) h2', 'follow']
  ];
  var original = [];
  function get(element, type) { return type === 'html' ? element.innerHTML : type === 'placeholder' ? element.placeholder : type === 'label' ? element.firstChild.nodeValue.trim() : element.textContent; }
  function put(element, type, value) { if (type === 'html') element.innerHTML = value; else if (type === 'placeholder') element.placeholder = value; else if (type === 'label') element.firstChild.nodeValue = value + ' '; else element.textContent = value; }
  entries.forEach(function (entry) { original.push(Array.from(document.querySelectorAll(entry[1])).map(function (element) { return get(element, entry[0]); })); });
  function setLanguage(language) {
    var isUkrainian = language === 'uk';
    document.documentElement.lang = isUkrainian ? 'uk' : 'en'; window.portfolioLanguage = isUkrainian ? 'uk' : 'en';
    document.title = isUkrainian ? 'Олександр Марковський — Unity та C# розробник ігор' : 'Oleksandr Markovskiy — Unity & C# Game Developer';
    var description = document.querySelector('meta[name="description"]');
    if (description) description.content = isUkrainian ? 'Персональне портфоліо Олександра Марковського, Unity- та C#-розробника ігор.' : 'Personal portfolio of Oleksandr Markovskiy, a Unity and C# game developer.';
    entries.forEach(function (entry, index) { var values = isUkrainian ? uk[entry[2]] : original[index]; Array.from(document.querySelectorAll(entry[1])).forEach(function (element, itemIndex) { put(element, entry[0], Array.isArray(values) ? values[itemIndex] : values); }); });
    document.querySelectorAll('[data-language]').forEach(function (button) { var active = button.dataset.language === (isUkrainian ? 'uk' : 'en'); button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    var rights = document.querySelector('.site-footer__bottom > span'); if (rights) rights.textContent = '© 2026 Oleksandr Markovskiy. ' + (isUkrainian ? uk.rights : 'All rights reserved.');
    window.localStorage.setItem('portfolio-language', isUkrainian ? 'uk' : 'en'); window.dispatchEvent(new CustomEvent('portfolio:languagechange', { detail: { language: isUkrainian ? 'uk' : 'en' } }));
  }
  document.querySelectorAll('[data-language]').forEach(function (button) { button.addEventListener('click', function () { setLanguage(button.dataset.language); }); });
  setLanguage(window.localStorage.getItem('portfolio-language') || 'en');
})();
