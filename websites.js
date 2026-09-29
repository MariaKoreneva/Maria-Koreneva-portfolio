(() => {
  const demoResumeUrl = 'https://mariakoreneva.github.io/Demo-resume/';
  // Все будущие внешние проекты портфолио также должны открываться через demo-viewer.html
  // с передачей URL проекта, страницы возврата и текущего языка.
  const demoViewerHref = (projectUrl, lang) => {
    const back = lang === 'en' ? 'websites.html?lang=en' : 'websites.html';
    const query = new URLSearchParams({ url: projectUrl, back, lang: lang === 'en' ? 'en' : 'ru' });
    return `demo-viewer.html?${query.toString()}`;
  };
  const screenshots = [
    { ru: 'DemoResume.jpg', en: 'DemoResumeENG.jpg' },
    { ru: 'Sportup.jpg', en: 'Sportup.jpg' },
    { ru: 'Portfolio.jpg', en: 'PortfolioEng.jpg' }
  ];

  const translations = {
    ru: {
      pageTitle: 'Сайты и лендинги - Мария Коренева',
      back: '← Вернуться к примерам решений',
      backHref: 'index.html#projects',
      kicker: 'САЙТЫ И ЛЕНДИНГИ',
      title: 'Веб-решения под разные задачи',
      intro: 'Сайты, лендинги, онлайн-резюме, портфолио и веб-платформы - от идеи до готового решения.',
      projects: [
        {
          title: 'Онлайн-резюме специалиста',
          description: 'Персональный сайт с опытом, навыками и образованием.',
          benefitsTitle: 'Почему такой формат удобен:',
          benefits: [
            'Выделяет резюме среди других кандидатов',
            'Можно показать больше, чем в обычном резюме',
            'Работодателю достаточно отправить одну ссылку'
          ],
          button: 'Посмотреть сайт →',
          note: 'Демонстрационный проект. Персональные данные и сведения о профессиональном опыте вымышлены.',
          screenshotAlt: 'Онлайн-резюме специалиста'
        },
        {
          title: 'SPORT UP - спортивная веб-платформа',
          description: 'Веб-платформа для поиска возможностей для занятий спортом в городах Ирана.',
          benefitsTitle: 'Почему такой формат удобен:',
          benefits: [
            'Помогает искать варианты занятий по городу и виду спорта',
            'Объединяет информацию о спортивных объектах и тренерах в одном месте',
            'Упрощает выбор подходящего места и специалиста для занятий',
            'Позволяет перейти от поиска к выбору тренировки внутри одной платформы',
            'Русская и персидская версии делают платформу доступной для разной аудитории'
          ],
          screenshotAlt: 'SPORT UP - спортивная веб-платформа'
        },
        {
          title: 'Персональный сайт-портфолио',
          description:
            'Персональный сайт для представления специалиста, его услуг, опыта и примеров работ в одном пространстве.',
          benefitsTitle: 'Почему такой формат удобен:',
          benefits: [
            'Помогает сразу показать, чем занимается специалист и чем может быть полезен',
            'Объединяет информацию об услугах, опыте и примерах работ в одном месте',
            'Позволяет подробно показать проекты, не перегружая главную страницу',
            'Дает потенциальному клиенту несколько способов быстро связаться со специалистом',
            'Русская и английская версии позволяют представить специалиста разной аудитории'
          ],
          screenshotAlt: 'Персональный сайт-портфолио'
        }
      ]
    },
    en: {
      pageTitle: 'Websites and Landing Pages - Maria Koreneva',
      back: '← Back to Solutions',
      backHref: 'index.html?lang=en#projects',
      kicker: 'WEBSITES AND LANDING PAGES',
      title: 'Web solutions for different needs',
      intro: 'Websites, landing pages, online resumes, portfolios, and web platforms - from idea to finished solution.',
      projects: [
        {
          title: 'Online Resume',
          description: 'A personal website presenting professional experience, skills, and education.',
          benefitsTitle: 'Why this format works:',
          benefits: [
            'Helps the resume stand out from other candidates',
            'Allows you to present more than a traditional resume',
            'Employers only need one link to view the key information'
          ],
          button: 'View website →',
          note: 'Demo project. All personal details and professional experience shown here are fictional.',
          screenshotAlt: 'Online Resume'
        },
        {
          title: 'SPORT UP - Sports Web Platform',
          description: 'A web platform for finding opportunities to participate in sports in cities across Iran.',
          benefitsTitle: 'Why this format works:',
          benefits: [
            'Helps users find sports opportunities by city and type of sport',
            'Brings information about sports facilities and coaches together in one place',
            'Makes it easier to choose a suitable place and coach',
            'Allows users to move from searching to choosing a training option within one platform',
            'Russian and Persian versions make the platform accessible to different audiences'
          ],
          screenshotAlt: 'SPORT UP - Sports Web Platform'
        },
        {
          title: 'Personal Portfolio Website',
          description:
            'A personal website that presents a specialist, their services, experience, and project examples in one place.',
          benefitsTitle: 'Why this format works:',
          benefits: [
            'Clearly shows what the specialist does and how they can help',
            'Brings services, experience, and project examples together in one place',
            'Allows projects to be presented in detail without overloading the main page',
            'Gives potential clients several ways to quickly contact the specialist',
            'Russian and English versions make it possible to present the specialist to different audiences'
          ],
          screenshotAlt: 'Personal Portfolio Website'
        }
      ]
    }
  };

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

    document.querySelectorAll('[data-project]').forEach((card, index) => {
      const project = t.projects[index];
      card.querySelector('[data-project-title]').textContent = project.title;
      card.querySelector('[data-description]').textContent = project.description;
      card.querySelector('[data-benefits-title]').textContent = project.benefitsTitle;
      card.querySelector('[data-benefits]').innerHTML = project.benefits
        .map((benefit) => `<div class="benefit">${benefit}</div>`)
        .join('');
      const screenshot = card.querySelector('[data-screenshot]');
      screenshot.src = screenshots[index][lang];
      screenshot.alt = project.screenshotAlt;

      const button = card.querySelector('[data-button]');
      if (button) {
        button.textContent = project.button;
        button.href = demoViewerHref(demoResumeUrl, lang);
      }

      const note = card.querySelector('[data-note]');
      if (note) {
        note.textContent = project.note;
      }
    });

    document.querySelectorAll('[data-lang]').forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.lang === lang));
      button.onclick = () => {
        history.replaceState(null, '', `websites.html${button.dataset.lang === 'en' ? '?lang=en' : ''}`);
        render(button.dataset.lang);
      };
    });
  };

  render(new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru');
})();
