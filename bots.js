(() => {
  const botUrl = 'https://mariakoreneva.github.io/Web-bot-manager/';
  // Все будущие внешние проекты портфолио также должны открываться через demo-viewer.html
  // с передачей URL проекта, страницы возврата и текущего языка.
  const demoViewerHref = (projectUrl, lang) => {
    const back = lang === 'en' ? 'bots.html?lang=en' : 'bots.html';
    const query = new URLSearchParams({ url: projectUrl, back, lang: lang === 'en' ? 'en' : 'ru' });
    return `demo-viewer.html?${query.toString()}`;
  };
  const trainerImage = 'Manager trainer bot.jpg';

  const translations = {
    ru: {
      pageTitle: 'Боты - Мария Коренева',
      back: '← Вернуться к примерам решений',
      backHref: 'index.html#projects',
      kicker: 'БОТЫ',
      title: 'Боты для автоматизации общения и рабочих процессов',
      intro:
        'Боты могут брать на себя часть повторяющихся действий, помогать пользователю находить нужную информацию и вести его по заданному сценарию.',
      modalLabel: 'Демонстрация работы бота',
      modalClose: '× Закрыть',
      cases: [
        {
          caseTitle: 'Веб-бот менеджер-консультант',
          screenshotAlt: 'Веб-бот менеджер-консультант',
          infoTitle: 'Что дает бизнесу или эксперту:',
          benefits: [
            'Отвечает на типовые вопросы клиентов без участия специалиста',
            'Помогает клиенту самостоятельно найти нужную услугу или информацию',
            'Знакомит с услугами и направлениями работы',
            'Ведет клиента к следующему действию - обращению к специалисту',
            'Снижает время на повторяющееся общение с клиентами',
            'Может работать с обращениями, когда специалист занят или не на связи'
          ],
          value:
            'Экономит время специалиста и снижает расходы на часть повторяющихся задач по общению с клиентами.',
          externalButton: 'Посмотреть бота →'
        },
        {
          caseTitle: 'Интерактивный бот-тренажер',
          caseDesc:
            'Интерактивный тренажер для обучения и оценки сотрудников на основе смоделированных рабочих ситуаций.',
          screenshotAlt: 'Интерактивный бот-тренажер',
          infoTitle: 'Что дает бизнесу или эксперту:',
          benefits: [
            'Позволяет обучать сотрудников на практических рабочих ситуациях',
            'Дает возможность отрабатывать решения без риска для реальной работы',
            'Предлагает сотруднику разные рабочие ситуации и показывает, к чему приводят его решения',
            'Формирует итоговый результат прохождения',
            'Снижает время руководителя или наставника на проведение типовых тренировочных заданий',
            'Позволяет использовать один тренажер для обучения разных сотрудников'
          ],
          value:
            'Экономит время руководителя, наставника или корпоративного тренера и снижает расходы на повторяющиеся этапы обучения сотрудников.',
          howTitle: 'Как работает бот:',
          howSteps: [
            '① Сотрудник получает рабочую ситуацию',
            '② Выбирает вариант решения',
            '③ Видит последствия своего выбора',
            '④ Получает итоговый результат'
          ],
          videoButton: '▶ Посмотреть бота'
        }
      ]
    },
    en: {
      pageTitle: 'Bots - Maria Koreneva',
      back: '← Back to Solutions',
      backHref: 'index.html?lang=en#projects',
      kicker: 'BOTS',
      title: 'Bots for automating communication and work processes',
      intro:
        'Bots can take over repetitive tasks, help users find the information they need, and guide them through predefined workflows.',
      modalLabel: 'Bot demonstration',
      modalClose: '× Close',
      cases: [
        {
          caseTitle: 'Web Bot Manager and Consultant',
          screenshotAlt: 'Web Bot Manager and Consultant',
          infoTitle: 'What it offers businesses and professionals:',
          benefits: [
            'Answers frequently asked client questions without requiring the specialist\'s involvement',
            'Helps clients find the service or information they need on their own',
            'Introduces clients to services and areas of work',
            'Guides clients toward the next step - contacting the specialist',
            'Reduces time spent on repetitive client communication',
            'Can handle client inquiries when the specialist is busy or unavailable'
          ],
          value:
            'Saves the specialist time and reduces the cost of repetitive client communication tasks.',
          externalButton: 'View the bot →'
        },
        {
          caseTitle: 'Interactive Training Bot',
          caseDesc:
            'An interactive bot for training and evaluating employees based on simulated workplace situations.',
          screenshotAlt: 'Interactive Training Bot',
          infoTitle: 'What it offers businesses and professionals:',
          benefits: [
            'Helps train employees through practical workplace situations',
            'Allows employees to practice decisions without risk to real work processes',
            'Presents different workplace situations and shows the consequences of employees\' decisions',
            'Provides a final result at the end of the training',
            'Reduces the time managers or mentors spend on repetitive training tasks',
            'Allows the same training bot to be used with different employees'
          ],
          value:
            'Saves managers, mentors, or corporate trainers time and reduces the cost of repetitive employee training tasks.',
          howTitle: 'How the Bot Works:',
          howSteps: [
            '① The employee receives a workplace situation',
            '② Chooses a course of action',
            '③ Sees the consequences of the decision',
            '④ Receives a final result'
          ],
          videoButton: '▶ View the Bot'
        }
      ]
    }
  };

  const modal = document.querySelector('[data-video-modal]');
  const video = document.querySelector('[data-demo-video]');
  const closeButton = document.querySelector('[data-video-close]');
  const openButton = document.querySelector('[data-video-open]');
  let activeButton = null;

  const closeVideo = () => {
    video.pause();
    video.currentTime = 0;
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    activeButton?.focus();
    activeButton = null;
  };

  const openVideo = () => {
    activeButton = openButton;
    video.currentTime = 0;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    closeButton.focus();
    video.play().catch(() => {});
  };

  openButton.addEventListener('click', openVideo);
  closeButton.addEventListener('click', closeVideo);
  modal.addEventListener('click', (event) => {
    if (event.target === modal) closeVideo();
  });

  const render = (lang) => {
    const t = translations[lang];
    document.documentElement.lang = lang;
    document.title = t.pageTitle;
    document.querySelectorAll('[data-back]').forEach((link) => {
      link.textContent = t.back;
      link.href = t.backHref;
    });
    document.querySelector('[data-kicker]').textContent = t.kicker;
    document.querySelector('[data-title]').textContent = t.title;
    document.querySelector('[data-intro]').textContent = t.intro;
    modal.setAttribute('aria-label', t.modalLabel);
    closeButton.textContent = t.modalClose;

    document.querySelectorAll('[data-case]').forEach((section, index) => {
      const item = t.cases[index];
      section.querySelector('[data-case-title]').textContent = item.caseTitle;
      section.querySelector('[data-screenshot-alt]').alt = item.screenshotAlt;
      section.querySelector('[data-info-title]').textContent = item.infoTitle;
      section.querySelector('[data-benefits]').innerHTML = item.benefits
        .map((benefit) => `<li>${benefit}</li>`)
        .join('');

      if (index === 0) {
        const externalButton = section.querySelector('[data-external-button]');
        externalButton.textContent = item.externalButton;
        externalButton.href = demoViewerHref(botUrl, lang);
        section.querySelector('[data-value]').textContent = item.value;
      } else {
        section.querySelector('[data-case-desc]').textContent = item.caseDesc;
        section.querySelector('[data-value]').textContent = item.value;
        section.querySelector('[data-how-title]').textContent = item.howTitle;
        section.querySelector('[data-how-steps]').innerHTML = item.howSteps
          .map((step) => `<li>${step}</li>`)
          .join('');
        openButton.textContent = item.videoButton;
        section.querySelector('[data-screenshot-alt]').src = trainerImage;
      }
    });

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
      btn.onclick = () => {
        if (!modal.hidden) closeVideo();
        history.replaceState(null, '', `bots.html${btn.dataset.lang === 'en' ? '?lang=en' : ''}`);
        render(btn.dataset.lang);
      };
    });
  };

  render(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru');
})();
