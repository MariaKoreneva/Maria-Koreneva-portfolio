const translations = {
  ru: {
    pageTitle: "Онлайн-инструменты - Мария Коренева",
    back: "← Вернуться к примерам решений",
    backHref: "index.html#projects",
    kicker: "ОНЛАЙН-ИНСТРУМЕНТЫ",
    title: "Интерактивные решения для бизнеса и продвижения",
    intro: "Онлайн-инструменты помогают привлечь внимание к продукту или услуге, вовлечь аудиторию, выделиться среди конкурентов и получить данные для дальнейшего продвижения.",
    projects: [
      {
        title: "Интерактивная игра «Успей до 18»",
        description: "Интерактивная игра, которая в игровом формате показывает, сколько времени можно сэкономить на рабочих задачах с помощью ИИ.",
        benefitsTitle: "Для чего можно использовать:",
        benefits: [
          "Привлечь внимание к продукту или услуге необычным форматом",
          "Вовлечь аудиторию во взаимодействие",
          "Наглядно показать ценность продукта вместо обычного рассказа о нем",
          "Использовать как интерактивный лид-магнит"
        ],
        button: "Попробовать игру →",
        alts: ["Интерактивная игра Успей до 18"]
      },
      {
        title: "Калькулятор времени психолога",
        description: "Интерактивный калькулятор, который помогает специалисту увидеть, сколько времени уходит на рабочие задачи и какую его часть можно освободить с помощью ИИ.",
        benefitsTitle: "Для чего можно использовать:",
        benefits: [
          "Использовать как полезный лид-магнит для потенциальных клиентов",
          "Помочь человеку самостоятельно увидеть проблему и получить персональный результат",
          "Наглядно показать пользу предлагаемого продукта или услуги",
          "Подвести аудиторию к следующему шагу - консультации, заявке или продукту"
        ],
        button: "Открыть калькулятор →",
        alts: ["Калькулятор времени психолога"]
      },
      {
        title: "Опрос с админ-панелью",
        description: "Онлайн-опрос с отдельной админ-панелью для сбора и просмотра ответов аудитории.",
        benefitsTitle: "Для чего можно использовать:",
        benefits: [
          "Изучать потребности, запросы и интересы целевой аудитории",
          "Проводить кастдевы и собирать обратную связь",
          "Проверять гипотезы перед созданием или запуском продукта",
          "Собирать результаты в одном месте для последующего анализа"
        ],
        labels: ["Опрос для пользователя", "Админ-панель"],
        buttons: ["Пройти опрос →", "Открыть админ-панель →"],
        demoTitle: "Демо-доступ к админ-панели",
        demoText: "Логин: demo\nПароль: Demo123456789",
        alts: ["Страница онлайн-опроса", "Админ-панель опроса"]
      }
    ]
  },
  en: {
    pageTitle: "Online Tools - Maria Koreneva",
    back: "← Back to Solutions",
    backHref: "index.html?lang=en#projects",
    kicker: "ONLINE TOOLS",
    title: "Interactive solutions for business and promotion",
    intro: "Online tools help attract attention to a product or service, engage the audience, stand out from competitors, and collect data for further promotion.",
    projects: [
      {
        title: "Interactive Game “Make It Before 18”",
        description: "An interactive game that shows, in a playful format, how much time can be saved on work tasks with the help of AI.",
        benefitsTitle: "How it can be used:",
        benefits: [
          "Attract attention to a product or service with an unusual format",
          "Engage the audience through interaction",
          "Demonstrate the value of a product instead of simply describing it",
          "Use it as an interactive lead magnet"
        ],
        button: "Try the game →",
        alts: ["Interactive game Make It Before 18"]
      },
      {
        title: "Time Calculator for Psychologists",
        description: "An interactive calculator that helps professionals see how much time they spend on work tasks and how much of it could be freed up with the help of AI.",
        benefitsTitle: "How it can be used:",
        benefits: [
          "Use it as a useful lead magnet for potential clients",
          "Help users identify the problem themselves and receive a personalized result",
          "Clearly demonstrate the value of a product or service",
          "Guide the audience toward the next step - a consultation, inquiry, or product"
        ],
        button: "Open calculator →",
        alts: ["Time Calculator for Psychologists"]
      },
      {
        title: "Survey with Admin Panel",
        description: "An online survey with a separate admin panel for collecting and viewing audience responses.",
        benefitsTitle: "How it can be used:",
        benefits: [
          "Explore the needs, requests, and interests of the target audience",
          "Conduct customer development research and collect feedback",
          "Test hypotheses before creating or launching a product",
          "Keep responses in one place for further analysis"
        ],
        labels: ["User survey", "Admin panel"],
        buttons: ["Take the survey →", "Open admin panel →"],
        demoTitle: "Demo access to the admin panel",
        demoText: "Login: demo\nPassword: Demo123456789",
        alts: ["Online survey page", "Survey admin panel"]
      }
    ]
  }
};

const externalDemos = {
  game: 'https://mariakoreneva.github.io/igra-uspey-do-18/',
  calculator: 'https://mariakoreneva.github.io/Psychological-calculator/',
  survey: 'https://mariakoreneva.github.io/survey-research-platform/',
  surveyAdmin: 'https://mariakoreneva.github.io/survey-research-platform/admin/'
};

// Все будущие внешние проекты портфолио также должны открываться через demo-viewer.html
// с передачей URL проекта, страницы возврата и текущего языка.
function demoViewerHref(projectUrl, lang) {
  const back = lang === 'en' ? 'online-tools.html?lang=en' : 'online-tools.html';
  const query = new URLSearchParams({ url: projectUrl, back, lang: lang === 'en' ? 'en' : 'ru' });
  return `demo-viewer.html?${query.toString()}`;
}

function setLanguage(language, updateUrl = true) {
  const lang = language === "en" ? "en" : "ru";
  const content = translations[lang];

  document.documentElement.lang = lang;
  document.title = content.pageTitle;
  document.querySelectorAll("[data-back]").forEach((link) => {
    link.textContent = content.back;
    link.href = content.backHref;
  });
  document.querySelector("[data-kicker]").textContent = content.kicker;
  document.querySelector("[data-title]").textContent = content.title;
  document.querySelector("[data-intro]").textContent = content.intro;

  document.querySelectorAll("[data-project]").forEach((card, index) => {
    const project = content.projects[index];
    card.querySelector("[data-project-title]").textContent = project.title;
    card.querySelector("[data-description]").textContent = project.description;
    card.querySelector("[data-benefits-title]").textContent = project.benefitsTitle;
    card.querySelector("[data-benefits]").innerHTML = project.benefits
      .map((benefit) => `<div class="benefit">${benefit}</div>`)
      .join("");
    card.querySelectorAll("[data-screenshot]").forEach((image, imageIndex) => {
      image.alt = project.alts[imageIndex];
    });

    if (index < 2) {
      const button = card.querySelector("[data-button]");
      button.textContent = project.button;
      button.href = demoViewerHref(index === 0 ? externalDemos.game : externalDemos.calculator, lang);
    } else {
      card.querySelectorAll("[data-label]").forEach((label, labelIndex) => {
        label.textContent = project.labels[labelIndex];
      });
      card.querySelectorAll("[data-button]").forEach((button, buttonIndex) => {
        button.textContent = project.buttons[buttonIndex];
        button.href = demoViewerHref(
          buttonIndex === 0 ? externalDemos.survey : externalDemos.surveyAdmin,
          lang
        );
      });
      card.querySelector("[data-demo-title]").textContent = project.demoTitle;
      card.querySelector("[data-demo-text]").textContent = project.demoText;
    }
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  if (updateUrl) {
    const url = lang === "en" ? "online-tools.html?lang=en" : "online-tools.html";
    history.replaceState(null, "", url);
  }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const initialLanguage = new URLSearchParams(location.search).get("lang");
setLanguage(initialLanguage === "en" ? "en" : "ru", false);
