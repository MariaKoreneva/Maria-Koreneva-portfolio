(() => {
  const heroSrc = 'maria-hero.jpg';
  const aboutSrc = 'maria-about.jpg';

  const personalLinks = {
    telegram: 'https://t.me/maria_vadimovna_psy',
    max: 'https://6max.ru/mariakoreneva',
    whatsapp: 'https://wa.me/79183407717',
    email: 'mailto:Maria_koreneva@list.ru'
  };

  const socialGroups = {
    ru: [
      {
        title: 'Психология',
        links: [{ label: 'Telegram', href: 'https://t.me/psychologykoreneva' }]
      },
      {
        title: 'Нейросети для психологов',
        links: [{ label: 'MAX', href: 'https://max.ru/channel_mariakoreneva_ai_psy' }]
      },
      {
        title: 'Университетское сообщество',
        links: [{ label: 'ВКонтакте', href: 'https://vk.ru/kafedra_istorii_rus_gtsolifk' }]
      }
    ],
    en: [
      {
        title: 'Psychology',
        links: [{ label: 'Telegram', href: 'https://t.me/psychologykoreneva' }]
      },
      {
        title: 'AI for Psychologists',
        links: [{ label: 'MAX', href: 'https://max.ru/channel_mariakoreneva_ai_psy' }]
      },
      {
        title: 'University Community',
        links: [{ label: 'VK', href: 'https://vk.ru/kafedra_istorii_rus_gtsolifk' }]
      }
    ]
  };

  const certificateFiles = ['Certificate.jpg', 'Certificate-Vibecoding.jpg'];

  // Все будущие внешние проекты портфолио также должны открываться через demo-viewer.html
  // с передачей URL проекта, страницы возврата и текущего языка.
  const demoViewerHref = (projectUrl, lang, category) => {
    const back =
      lang === 'en'
        ? `index.html?from=demo&lang=en#projects-${category}`
        : `index.html?from=demo#projects-${category}`;
    const query = new URLSearchParams({
      url: projectUrl,
      back,
      lang: lang === 'en' ? 'en' : 'ru'
    });
    return `demo-viewer.html?${query.toString()}`;
  };

  const projectCatalog = {
    ru: {
      categories: [
        {
          id: 'websites',
          title: 'Сайты и лендинги',
          projects: [
            {
              title: 'Онлайн-резюме специалиста',
              desc: 'Персональный сайт с опытом, навыками и образованием.',
              note: 'Демонстрационный проект. Персональные данные и сведения о профессиональном опыте вымышлены.',
              shot: { ru: 'DemoResume.jpg', en: 'DemoResumeENG.jpg' },
              demo: 'https://mariakoreneva.github.io/Demo-resume/',
              demoLabel: 'Посмотреть сайт →'
            },
            {
              title: 'SPORT UP — спортивная веб-платформа',
              desc: 'Веб-платформа для поиска возможностей для занятий спортом в городах Ирана.',
              shot: { ru: 'Sportup.jpg', en: 'Sportup.jpg' }
            }
          ]
        },
        {
          id: 'tools',
          title: 'Онлайн-инструменты',
          projects: [
            {
              title: 'Интерактивная игра «Успей до 18»',
              desc: 'Игра в игровом формате показывает, сколько времени можно сэкономить на рабочих задачах с помощью ИИ.',
              shot: { ru: 'Uspeydo18.jpg', en: 'Uspeydo18.jpg' },
              demo: 'https://mariakoreneva.github.io/igra-uspey-do-18/',
              demoLabel: 'Попробовать игру →'
            },
            {
              title: 'Калькулятор времени психолога',
              desc: 'Интерактивный калькулятор помогает увидеть, сколько времени уходит на рабочие задачи и что можно освободить с помощью ИИ.',
              shot: { ru: 'Psy calculator.jpg', en: 'Psy calculator.jpg' },
              demo: 'https://mariakoreneva.github.io/Psychological-calculator/',
              demoLabel: 'Открыть калькулятор →'
            },
            {
              title: 'Интерактивная анкета для психологов',
              desc: 'Онлайн-анкета для изучения профессиональных потребностей психологов.',
              shot: { ru: 'PsychologySurvey.jpg', en: 'PsychologySurvey.jpg' },
              demo: 'https://mariakoreneva.github.io/opros-psy/site/',
              demoLabel: 'Пройти анкету →'
            }
          ]
        },
        {
          id: 'ai',
          title: 'ИИ-помощники и боты',
          projects: [
            {
              title: 'Контент-планировщик',
              desc: 'ИИ-помощник для составления плана публикаций с учетом заданных настроек.',
              shot: { ru: 'Content-plan.jpg', en: 'Content-plan.jpg' },
              video: 'Content-plan.mp4',
              videoLabel: '▶ Посмотреть, как работает помощник'
            },
            {
              title: 'Генератор идей',
              desc: 'ИИ-помощник для подбора тем и идей под задачи специалиста.',
              shot: { ru: 'Generatoridea.jpg', en: 'Generatoridea.jpg' },
              video: 'Generatoridea.mp4',
              videoLabel: '▶ Посмотреть, как работает помощник'
            },
            {
              title: 'Копирайтер постов',
              desc: 'ИИ-помощник для подготовки текстов постов с учетом заданного контекста.',
              shot: { ru: 'Copywriter.jpg', en: 'Copywriter.jpg' },
              video: 'Copywriter.mp4',
              videoLabel: '▶ Посмотреть, как работает помощник'
            },
            {
              title: 'Веб-бот менеджер-консультант',
              desc: 'Веб-бот знакомит с услугами и ведет пользователя по сценариям общения.',
              shot: { ru: 'WebBot.jpg', en: 'WebBot.jpg' },
              demo: 'https://mariakoreneva.github.io/Web-bot-manager/',
              demoLabel: 'Посмотреть бота →'
            },
            {
              title: 'Интерактивный бот-тренажер',
              desc: 'Интерактивный тренажер для обучения и оценки сотрудников на основе смоделированных рабочих ситуаций.',
              shot: { ru: 'Manager trainer bot.jpg', en: 'Manager trainer bot.jpg' },
              video: 'Manager trainer bot.MP4',
              videoLabel: '▶ Посмотреть бота'
            }
          ]
        },
        {
          id: 'social',
          title: 'Оформление и создание контента для социальных сетей',
          social: true
        }
      ]
    },
    en: {
      categories: [
        {
          id: 'websites',
          title: 'Websites and Landing Pages',
          projects: [
            {
              title: 'Online Resume',
              desc: 'A personal website presenting professional experience, skills, and education.',
              note: 'Demo project. All personal details and professional experience shown here are fictional.',
              shot: { ru: 'DemoResume.jpg', en: 'DemoResumeENG.jpg' },
              demo: 'https://mariakoreneva.github.io/Demo-resume/',
              demoLabel: 'View website →'
            },
            {
              title: 'SPORT UP - Sports Web Platform',
              desc: 'A web platform for finding opportunities to participate in sports in cities across Iran.',
              shot: { ru: 'Sportup.jpg', en: 'Sportup.jpg' }
            }
          ]
        },
        {
          id: 'tools',
          title: 'Online Tools',
          projects: [
            {
              title: 'Interactive Game "Make It Before 18"',
              desc: 'A playful format that shows how much time can be saved on work tasks with AI.',
              shot: { ru: 'Uspeydo18.jpg', en: 'Uspeydo18.jpg' },
              demo: 'https://mariakoreneva.github.io/igra-uspey-do-18/',
              demoLabel: 'Try the game →'
            },
            {
              title: 'Time Calculator for Psychologists',
              desc: 'An interactive calculator that shows how much time goes into work tasks and what could be freed up with AI.',
              shot: { ru: 'Psy calculator.jpg', en: 'Psy calculator.jpg' },
              demo: 'https://mariakoreneva.github.io/Psychological-calculator/',
              demoLabel: 'Open calculator →'
            },
            {
              title: 'Interactive Survey for Psychologists',
              desc: 'An online survey for exploring professional needs of psychologists.',
              shot: { ru: 'PsychologySurvey.jpg', en: 'PsychologySurvey.jpg' },
              demo: 'https://mariakoreneva.github.io/opros-psy/site/',
              demoLabel: 'Take the survey →'
            }
          ]
        },
        {
          id: 'ai',
          title: 'AI Assistants and Bots',
          projects: [
            {
              title: 'Content Planner',
              desc: 'An AI assistant for building a publication plan based on your settings.',
              shot: { ru: 'Content-plan.jpg', en: 'Content-plan.jpg' },
              video: 'Content-plan.mp4',
              videoLabel: '▶ See how the assistant works'
            },
            {
              title: 'Idea Generator',
              desc: 'An AI assistant for finding topics and ideas for a specialist\'s tasks.',
              shot: { ru: 'Generatoridea.jpg', en: 'Generatoridea.jpg' },
              video: 'Generatoridea.mp4',
              videoLabel: '▶ See how the assistant works'
            },
            {
              title: 'Post Copywriter',
              desc: 'An AI assistant for preparing post copy using the context you provide.',
              shot: { ru: 'Copywriter.jpg', en: 'Copywriter.jpg' },
              video: 'Copywriter.mp4',
              videoLabel: '▶ See how the assistant works'
            },
            {
              title: 'Web Bot Manager and Consultant',
              desc: 'A web bot that introduces services and guides users through conversation scenarios.',
              shot: { ru: 'WebBot.jpg', en: 'WebBot.jpg' },
              demo: 'https://mariakoreneva.github.io/Web-bot-manager/',
              demoLabel: 'View the bot →'
            },
            {
              title: 'Interactive Training Bot',
              desc: 'An interactive bot for training and evaluating employees through simulated workplace situations.',
              shot: { ru: 'Manager trainer bot.jpg', en: 'Manager trainer bot.jpg' },
              video: 'Manager trainer bot.MP4',
              videoLabel: '▶ View the Bot'
            }
          ]
        },
        {
          id: 'social',
          title: 'Social Media Design and Content Creation',
          social: true
        }
      ]
    }
  };

  const ui = {
    ru: {
      brand: 'Мария Коренева',
      nav: ['Мои проекты', 'Обо мне', 'Сертификаты', 'Контакты'],
      menu: 'Меню',
      heroRole: 'Промпт-инженер · Вайбкодер',
      heroDesc:
        'Создаю сайты, онлайн-инструменты, ИИ-помощников. Разрабатываю контент и оформляю социальные сети.',
      heroCta: 'Мои проекты',
      projectsKicker: 'МОИ ПРОЕКТЫ',
      projectsTitle: 'Примеры работ',
      aboutKicker: 'ОБО МНЕ',
      aboutTitle: 'Мария Коренева',
      aboutFormula: ['Психология', 'Образование и наука', 'Нейросети'],
      aboutPillars: [
        {
          title: 'ПСИХОЛОГИЯ',
          text: 'Понимаю потребности аудитории и то, что помогает людям принимать решения.'
        },
        {
          title: 'ОБРАЗОВАНИЕ И НАУКА',
          text: 'Анализирую информацию, выделяю главное и объясняю сложное простым языком.'
        },
        {
          title: 'НЕЙРОСЕТИ',
          text: 'Превращаю идеи в работающие цифровые решения.'
        }
      ],
      aboutStatus: 'Психолог · Кандидат педагогических наук · Доцент',
      certKicker: 'МОИ СЕРТИФИКАТЫ',
      certTitle: 'Обучение работе с нейросетями',
      certificate: 'Сертификат',
      contacts: 'КОНТАКТЫ',
      contactsTitle: 'Для связи и сотрудничества',
      footerLegal: 'Индивидуальный предприниматель · ИНН 230908750806',
      self: 'Индивидуальный предприниматель',
      contactsLabels: { telegram: 'Telegram', max: 'MAX', whatsapp: 'WhatsApp', email: 'Email' },
      close: '× Закрыть',
      videoModalLabel: 'Демонстрация работы',
      pageTitle: 'Мария Коренева - портфолио',
      zoomShot: 'Увеличить скриншот'
    },
    en: {
      brand: 'Maria Koreneva',
      nav: ['My Projects', 'About Me', 'Certificates', 'Contacts'],
      menu: 'Menu',
      heroRole: 'Prompt Engineer · Vibe Coder',
      heroDesc:
        'I create websites, online tools, and AI assistants. I develop content and design social media.',
      heroCta: 'My Projects',
      projectsKicker: 'MY PROJECTS',
      projectsTitle: 'Work Examples',
      aboutKicker: 'ABOUT ME',
      aboutTitle: 'Maria Koreneva',
      aboutFormula: ['Psychology', 'Education & Research', 'AI Tools'],
      aboutPillars: [
        {
          title: 'PSYCHOLOGY',
          text: 'I understand audience needs and what helps people make decisions.'
        },
        {
          title: 'EDUCATION & RESEARCH',
          text:
            'I analyze information, identify what matters most, and explain complex ideas in simple terms.'
        },
        {
          title: 'AI TOOLS',
          text: 'I turn ideas into functional digital solutions.'
        }
      ],
      aboutStatus: 'Psychologist · Candidate of Pedagogical Sciences · Associate Professor',
      certKicker: 'MY CERTIFICATES',
      certTitle: 'AI Training & Education',
      certificate: 'Certificate',
      contacts: 'CONTACTS',
      contactsTitle: 'Contact & Collaboration',
      footerLegal: 'Individual Entrepreneur · INN 230908750806',
      self: 'Individual Entrepreneur',
      contactsLabels: { telegram: 'Telegram', max: 'MAX', whatsapp: 'WhatsApp', email: 'Email' },
      close: '× Close',
      videoModalLabel: 'Demonstration',
      pageTitle: 'Maria Koreneva - Portfolio',
      zoomShot: 'Enlarge screenshot'
    }
  };

  const langSwitch =
    '<div class="mk-lang" aria-label="Language"><button type="button" data-lang="ru">RU</button><span>|</span><button type="button" data-lang="en">EN</button></div>';

  let currentLang = 'ru';
  let openAccordionId = null;

  const renderProject = (project, lang, categoryId) => {
    const shotSrc = project.shot[lang];
    const actions = [];
    if (project.demo) {
      actions.push(
        `<a class="mk-button mk-button-primary mk-project-cta" href="${demoViewerHref(
          project.demo,
          lang,
          categoryId
        )}">${project.demoLabel}</a>`
      );
    }
    if (project.video) {
      actions.push(
        `<button type="button" class="mk-button mk-button-primary mk-project-cta" data-video="${project.video}">${project.videoLabel}</button>`
      );
    }
  return `
      <article class="mk-project">
        <h3 class="mk-project-title">${project.title}</h3>
        <p class="mk-project-desc">${project.desc}</p>
        <button type="button" class="mk-project-shot" data-shot="${shotSrc}" data-shot-alt="${project.title}">
          <img src="${shotSrc}" alt="${project.title}" loading="lazy">
        </button>
        ${project.note ? `<p class="mk-project-note">${project.note}</p>` : ''}
        ${actions.length ? `<div class="mk-project-actions">${actions.join('')}</div>` : ''}
      </article>`;
  };

  const renderAboutFormula = (parts) =>
    parts
      .map(
        (part, index) =>
          `${index ? '<span class="mk-about-plus" aria-hidden="true">+</span>' : ''}<span>${part}</span>`
      )
      .join(' ');

  const renderAboutPillars = (pillars) =>
    pillars
      .map(
        (pillar) => `
        <article class="mk-about-pillar">
          <h3>${pillar.title}</h3>
          <p>${pillar.text}</p>
        </article>`
      )
      .join('');

  const renderCategoryPanelContent = (catId, lang) => {
    const cat = projectCatalog[lang].categories.find((c) => c.id === catId);
    if (!cat) return '';
    if (cat.social) {
      return `<div class="mk-social-grid mk-social-grid--accordion">${renderSocial(lang)}</div>`;
    }
    return cat.projects.map((p) => renderProject(p, lang, cat.id)).join('');
  };

  const renderProjectsPicker = (lang) => {
    const catalog = projectCatalog[lang];
    const buttons = catalog.categories
      .map((cat, index) => {
        const open = openAccordionId === cat.id;
        const num = String(index + 1).padStart(2, '0');
        return `
        <button type="button" class="mk-category-card" aria-expanded="${open}" data-accordion-trigger="${cat.id}">
          <span class="mk-category-num">${num}</span>
          <span class="mk-category-title">${cat.title}</span>
          <span class="mk-category-arrow" aria-hidden="true">→</span>
        </button>`;
      })
      .join('');
    const panelBody = openAccordionId ? renderCategoryPanelContent(openAccordionId, lang) : '';
    return `
      <div class="mk-category-picker">
        <div class="mk-category-grid">${buttons}</div>
        <div class="mk-category-panel" data-category-panel ${openAccordionId ? '' : 'hidden'}>${panelBody}</div>
      </div>`;
  };

  const refreshCategoryPanel = (lang) => {
    const panel = document.querySelector('[data-category-panel]');
    if (!panel) return;
    document.querySelectorAll('[data-accordion-trigger]').forEach((btn) => {
      btn.setAttribute('aria-expanded', String(btn.dataset.accordionTrigger === openAccordionId));
    });
    if (!openAccordionId) {
      panel.hidden = true;
      panel.innerHTML = '';
      return;
    }
    panel.hidden = false;
    panel.innerHTML = renderCategoryPanelContent(openAccordionId, lang);
    bindProjectMedia(panel);
  };

  const contactLinks = (lang) => {
    const labels = ui[lang].contactsLabels;
    return Object.entries(personalLinks)
      .map(
        ([key, href]) =>
          `<a class="mk-button mk-button-primary mk-contact-link" href="${href}"${
            key === 'email' ? '' : ' target="_blank" rel="noopener noreferrer"'
          }>${labels[key]}</a>`
      )
      .join('');
  };

  const renderSocial = (lang) =>
    socialGroups[lang]
      .map(
        (group) => `
      <article class="mk-social-card">
        <h3 class="mk-social-card-title">${group.title}</h3>
        <div class="mk-social-actions">
          ${group.links
            .map(
              (link) =>
                `<a class="mk-button mk-button-primary mk-social-cta" href="${link.href}" target="_blank" rel="noopener noreferrer">${link.label}<span class="mk-btn-arrow" aria-hidden="true">→</span></a>`
            )
            .join('')}
        </div>
      </article>`
      )
      .join('');

  const renderCertificates = (lang) =>
    certificateFiles
      .map(
        (src, i) =>
          `<button type="button" class="mk-certificate-thumb" data-certificate="${src}" aria-label="${ui[lang].certificate} ${i + 1}">
        <img src="${src}" alt="${ui[lang].certificate} ${i + 1}" loading="lazy">
      </button>`
      )
      .join('');

  let activeVideoBtn = null;

  const bindProjectMedia = (scope = document) => {
    const videoModal = document.querySelector('[data-video-modal]');
    const video = document.querySelector('[data-demo-video]');
    if (!videoModal || !video) return;

    const openVideo = (btn) => {
      activeVideoBtn = btn;
      video.src = btn.dataset.video;
      video.currentTime = 0;
      videoModal.hidden = false;
      videoModal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
      document.querySelector('[data-video-close]')?.focus();
      video.play().catch(() => {});
    };

    scope.querySelectorAll('[data-video]').forEach((btn) => {
      btn.onclick = () => openVideo(btn);
    });

    const imageDialog = document.querySelector('.mk-shot-lightbox');
    const imageEl = imageDialog?.querySelector('img');
    if (imageDialog && imageEl) {
      scope.querySelectorAll('[data-shot]').forEach((btn) => {
        btn.onclick = () => {
          imageEl.src = btn.dataset.shot;
          imageEl.alt = btn.dataset.shotAlt || '';
          imageDialog.showModal();
        };
      });
    }
  };

  const bindModals = (lang) => {
    const videoModal = document.querySelector('[data-video-modal]');
    const videoClose = document.querySelector('[data-video-close]');
    const imageDialog = document.querySelector('.mk-shot-lightbox');
    const imageClose = imageDialog.querySelector('[data-shot-close]');

    const closeVideo = () => {
      const player = document.querySelector('[data-demo-video]');
      const modal = document.querySelector('[data-video-modal]');
      player.pause();
      player.currentTime = 0;
      player.removeAttribute('src');
      player.load();
      modal.hidden = true;
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
      activeVideoBtn?.focus();
      activeVideoBtn = null;
    };

    bindProjectMedia(document);
    videoClose.onclick = closeVideo;
    videoModal.onclick = (e) => {
      if (e.target === videoModal) closeVideo();
    };
    imageClose.onclick = () => imageDialog.close();
    imageDialog.onclick = (e) => {
      if (e.target === imageDialog) imageDialog.close();
    };

    const certDialog = document.querySelector('.mk-cert-lightbox');
    const certImg = certDialog.querySelector('img');
    const certClose = certDialog.querySelector('[data-cert-close]');
    document.querySelectorAll('[data-certificate]').forEach((btn, i) => {
      btn.onclick = () => {
        certImg.src = btn.dataset.certificate;
        certImg.alt = `${ui[lang].certificate} ${i + 1}`;
        certDialog.showModal();
      };
    });
    certClose.onclick = () => certDialog.close();
    certDialog.onclick = (e) => {
      if (e.target === certDialog) certDialog.close();
    };

    videoModal.onkeydown = (e) => {
      if (e.key === 'Escape' && !videoModal.hidden) closeVideo();
    };
  };

  const bindAccordion = (lang) => {
    document.querySelectorAll('[data-accordion-trigger]').forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.accordionTrigger;
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        openAccordionId = expanded ? null : id;
        refreshCategoryPanel(lang);
      };
    });
  };

  const clearDemoReturnFromUrl = () => {
    const params = new URLSearchParams(location.search);
    params.delete('from');
    const qs = params.toString();
    history.replaceState(null, '', qs ? `index.html?${qs}` : 'index.html');
  };

  const applyDemoReturn = () => {
    const hash = location.hash.replace(/^#/, '');
    const match = hash.match(/^projects-(websites|tools|ai|social)$/);
    if (match) openAccordionId = match[1];
    return Boolean(match);
  };

  const normalizeProjectHashOnLoad = () => {
    const hash = location.hash.replace(/^#/, '');
    if (!/^projects-(websites|tools|ai|social)$/.test(hash)) return;
    const params = new URLSearchParams(location.search);
    const qs = params.toString();
    history.replaceState(null, '', qs ? `index.html?${qs}` : 'index.html');
  };

  const syncLangUrl = (lang) => {
    const hash = location.hash;
    const base = lang === 'en' ? 'index.html?lang=en' : 'index.html';
    history.replaceState(null, '', `${base}${hash}`);
  };

  const render = (lang = 'ru') => {
    currentLang = lang;
    const t = ui[lang];
    openAccordionId = null;
    const demoReturnPending = new URLSearchParams(location.search).get('from') === 'demo';
    let scrollToProjectsFromDemo = false;
    if (demoReturnPending) {
      scrollToProjectsFromDemo = applyDemoReturn();
    } else {
      normalizeProjectHashOnLoad();
    }
    document.documentElement.lang = lang;
    document.title = t.pageTitle;

    document.body.innerHTML = `
      <header class="mk-header"><div class="mk-shell mk-header-inner">
        <a class="mk-brand" href="#home">${t.brand}</a>
        <nav class="mk-nav"><a href="#projects">${t.nav[0]}</a><a href="#about">${t.nav[1]}</a><a href="#certificates">${t.nav[2]}</a><a href="#contacts">${t.nav[3]}</a></nav>
        ${langSwitch}
        <button class="mk-menu-button" type="button" aria-label="${t.menu}" aria-expanded="false"><span></span></button>
      </div>
      <div class="mk-mobile-menu">
        <a href="#projects">${t.nav[0]}</a><a href="#about">${t.nav[1]}</a><a href="#certificates">${t.nav[2]}</a><a href="#contacts">${t.nav[3]}</a>
        <div class="mk-mobile-tools">${langSwitch}</div>
      </div></header>
      <main>
        <section class="mk-hero mk-reveal" id="home"><div class="mk-shell mk-hero-grid">
          <div>
            <h1>${t.brand}</h1>
            <p class="mk-hero-role">${t.heroRole}</p>
            <p class="mk-hero-copy">${t.heroDesc}</p>
            <div class="mk-actions mk-hero-actions"><a class="mk-button mk-button-primary mk-hero-cta" href="#projects">${t.heroCta}</a></div>
          </div>
          <div class="mk-photo mk-hero-photo"><img src="${heroSrc}" alt="${t.brand}"></div>
        </div></section>
        <section class="mk-section mk-section-projects mk-reveal" id="projects"><div class="mk-shell">
          <div class="mk-kicker">${t.projectsKicker}</div>
          <h2 class="mk-title mk-projects-title">${t.projectsTitle}</h2>
          ${renderProjectsPicker(lang)}
        </div></section>
        <section class="mk-section mk-section-about mk-reveal" id="about"><div class="mk-shell mk-about-layout">
          <div class="mk-about-left">
            <div class="mk-kicker mk-about-kicker">${t.aboutKicker}</div>
            <div class="mk-about-top">
              <h2 class="mk-title mk-about-name">${t.aboutTitle}</h2>
              <p class="mk-about-status">${t.aboutStatus}</p>
            </div>
            <p class="mk-about-formula">${renderAboutFormula(t.aboutFormula)}</p>
            <div class="mk-about-content">
              <div class="mk-about-pillars">${renderAboutPillars(t.aboutPillars)}</div>
            </div>
          </div>
          <div class="mk-about-photo-slot">
            <div class="mk-photo mk-about-photo"><img src="${aboutSrc}" alt="${t.aboutTitle}"></div>
          </div>
        </div></section>
        <section class="mk-section mk-section-alt mk-reveal" id="certificates"><div class="mk-shell">
          <div class="mk-kicker">${t.certKicker}</div>
          <h2 class="mk-title">${t.certTitle}</h2>
          <div class="mk-certificate-grid">${renderCertificates(lang)}</div>
        </div></section>
        <section class="mk-section mk-contacts mk-reveal" id="contacts"><div class="mk-shell">
          <div class="mk-kicker">${t.contacts}</div>
          <h2 class="mk-title mk-contacts-title">${t.contactsTitle}</h2>
          <div class="mk-contact-grid">${contactLinks(lang)}</div>
        </div></section>
      </main>
      <footer class="mk-footer"><div class="mk-shell mk-footer-inner">
        <div class="mk-footer-brand">${t.brand}</div>
        <div class="mk-footer-legal">${t.footerLegal}</div>
      </div></footer>
      <div class="mk-video-modal" data-video-modal hidden aria-hidden="true" role="dialog" aria-modal="true" aria-label="${t.videoModalLabel}">
        <div class="mk-video-modal-inner">
          <button type="button" class="mk-video-close" data-video-close>${t.close}</button>
          <video class="mk-demo-video" preload="metadata" playsinline data-demo-video></video>
        </div>
      </div>
      <dialog class="mk-dialog mk-shot-lightbox">
        <button type="button" class="mk-dialog-close" data-shot-close aria-label="${t.close}">×</button>
        <img alt="">
      </dialog>
      <dialog class="mk-dialog mk-cert-lightbox">
        <button type="button" class="mk-dialog-close" data-cert-close aria-label="${t.close}">×</button>
        <img alt="">
      </dialog>`;

    document.querySelectorAll('[data-lang]').forEach((btn) => {
      btn.setAttribute('aria-pressed', String(btn.dataset.lang === lang));
      btn.addEventListener('click', () => {
        syncLangUrl(btn.dataset.lang);
        render(btn.dataset.lang);
      });
    });

    const menu = document.querySelector('.mk-mobile-menu');
    const menuBtn = document.querySelector('.mk-menu-button');
    const closeMenu = () => {
      menu.classList.remove('open');
      menuBtn.setAttribute('aria-expanded', 'false');
    };
    menuBtn.addEventListener('click', () => {
      const open = menu.classList.toggle('open');
      menuBtn.setAttribute('aria-expanded', String(open));
    });
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));

    bindAccordion(lang);
    bindModals(lang);

    document.documentElement.classList.add('enhanced');
    const reveal = document.querySelectorAll('.mk-reveal');
    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('mk-visible');
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.1 }
      );
      reveal.forEach((el) => observer.observe(el));
    } else {
      reveal.forEach((el) => el.classList.add('mk-visible'));
    }

    if (scrollToProjectsFromDemo && openAccordionId) {
      const section = document.getElementById('projects');
      section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    if (demoReturnPending) clearDemoReturnFromUrl();
  };

  const initialLang = new URLSearchParams(location.search).get('lang') === 'en' ? 'en' : 'ru';
  render(initialLang);
})();