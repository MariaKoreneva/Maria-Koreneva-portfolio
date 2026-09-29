(() => {
  const certificates = ['Certificate.jpg'];
  const translations = {
    ru: {
      title: 'Сертификаты — Мария Коренева',
      kicker: 'СЕРТИФИКАТЫ',
      heading: 'Сертификаты',
      back: '← Вернуться назад',
      certificate: 'Сертификат',
      close: 'Закрыть'
    },
    en: {
      title: 'Certificates — Maria Koreneva',
      kicker: 'CERTIFICATES',
      heading: 'Certificates',
      back: '← Back',
      certificate: 'Certificate',
      close: 'Close'
    }
  };

  const grid = document.querySelector('[data-certificate-grid]');
  const lightbox = document.querySelector('.mk-lightbox');
  const lightboxImage = lightbox.querySelector('img');
  const closeButton = lightbox.querySelector('[data-close]');

  const render = (lang) => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.title;
    document.querySelector('[data-kicker]').textContent = t.kicker;
    document.querySelector('[data-heading]').textContent = t.heading;
    document.querySelector('[data-back]').textContent = t.back;
    document.querySelector('[data-back]').href = `index.html${lang === 'en' ? '?lang=en#about' : '#about'}`;
    closeButton.setAttribute('aria-label', t.close);

    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
      button.onclick = () => {
        history.replaceState(null, '', `certificates.html${button.dataset.lang === 'en' ? '?lang=en' : ''}`);
        render(button.dataset.lang);
      };
    });

    grid.innerHTML = certificates.map((src, index) => `
      <button class="mk-certificate-thumb" type="button" data-certificate="${src}" aria-label="${t.certificate} ${index + 1}">
        <img src="${src}" alt="${t.certificate} ${index + 1}">
      </button>
    `).join('');

    grid.querySelectorAll('[data-certificate]').forEach((button, index) => {
      button.addEventListener('click', () => {
        lightboxImage.src = button.dataset.certificate;
        lightboxImage.alt = `${t.certificate} ${index + 1}`;
        lightbox.showModal();
      });
    });
  };

  closeButton.addEventListener('click', () => lightbox.close());
  lightbox.addEventListener('click', (event) => {
    if (event.target === lightbox) lightbox.close();
  });

  render(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru');
})();
