const translations = {
  ru: {
    pageTitle: "Персональные ИИ-помощники - Мария Коренева",
    back: "← Вернуться к примерам решений",
    backHref: "index.html#projects",
    kicker: "ПЕРСОНАЛЬНЫЕ ИИ-ПОМОЩНИКИ",
    title: "ИИ-помощники под конкретные рабочие задачи",
    intro: "Персональный ИИ-помощник настраивается под конкретного специалиста, его задачи, аудиторию и особенности работы. Ему не нужно каждый раз заново объяснять контекст - достаточно поставить задачу и получить результат с учетом заданных настроек.",
    close: "× Закрыть",
    modalLabel: "Демонстрация работы помощника",
    assistants: [
      {
        title: "Контент-планировщик",
        imageAlt: "Контент-планировщик",
        note: "В примере помощнику достаточно короткого запроса. Другие заданные настройки он уже учитывает сам.",
        listTitle: "Что берет на себя:",
        benefits: [
          "Придумывает темы для постов",
          "Составляет план постов под вашу аудиторию и выбранные социальные сети",
          "Учитывает ваши задачи и особенности работы",
          "Экономит время на подготовке плана публикаций",
          "Не нужно каждый раз заново объяснять, для кого и о чем вы пишете",
          "Снижает расходы на специалиста, который составляет план публикаций"
        ],
        button: "▶ Посмотреть, как работает помощник"
      },
      {
        title: "Генератор идей",
        imageAlt: "Генератор идей",
        note: "В примере помощнику достаточно описать мысль или жизненную ситуацию. Он сам превращает ее в идеи для постов с учетом вашей аудитории и стиля.",
        listTitle: "Что берет на себя:",
        benefits: [
          "Превращает ваши мысли и жизненные ситуации в темы для постов",
          "Подбирает идеи под вашу целевую аудиторию",
          "Учитывает ваш стиль и особенности работы",
          "Предлагает несколько вариантов, как раскрыть одну и ту же мысль",
          "Помогает находить темы в обычных событиях и ситуациях",
          "Экономит время на поиске идей для постов"
        ],
        button: "▶ Посмотреть, как работает помощник"
      },
      {
        title: "Копирайтер постов",
        imageAlt: "Копирайтер постов",
        note: "В примере помощнику достаточно указать тему и целевую аудиторию. Другие заданные настройки он уже учитывает сам.",
        listTitle: "Что берет на себя:",
        benefits: [
          "Пишет готовые посты на заданную тему",
          "Учитывает особенности вашей аудитории",
          "Выстраивает текст так, чтобы он был понятным и интересным вашим читателям",
          "Пишет в вашем стиле и учитывает ваши требования к текстам",
          "Экономит время на написании и доработке постов",
          "Снижает расходы на специалиста, который пишет тексты"
        ],
        button: "▶ Посмотреть, как работает помощник"
      }
    ]
  },
  en: {
    pageTitle: "Personal AI Assistants - Maria Koreneva",
    back: "← Back to Solutions",
    backHref: "index.html?lang=en#projects",
    kicker: "PERSONAL AI ASSISTANTS",
    title: "AI assistants for specific work tasks",
    intro: "A personal AI assistant is configured for a specific professional, their tasks, audience, and way of working. You do not need to explain the context from scratch every time - simply give it a task and receive a result based on the predefined settings.",
    close: "× Close",
    modalLabel: "Assistant demonstration",
    assistants: [
      {
        title: "Content Planner",
        imageAlt: "Content Planner",
        note: "In this example, a short request is enough for the assistant. It already takes all other predefined settings into account.",
        listTitle: "What it handles:",
        benefits: [
          "Suggests topics for posts",
          "Creates a post plan tailored to your audience and selected social media platforms",
          "Takes your tasks and way of working into account",
          "Saves time when preparing a publication plan",
          "No need to explain who you write for and what you write about every time",
          "Reduces the cost of hiring a specialist to prepare a publication plan"
        ],
        button: "▶ See how the assistant works"
      },
      {
        title: "Idea Generator",
        imageAlt: "Idea Generator",
        note: "In this example, the assistant only needs a thought or a real-life situation. It turns it into post ideas tailored to your audience and style.",
        listTitle: "What it can do:",
        benefits: [
          "Turns your thoughts and real-life situations into post topics",
          "Suggests ideas for your target audience",
          "Takes your style and the specifics of your work into account",
          "Suggests several ways to develop the same thought",
          "Helps you find post ideas in everyday events and situations",
          "Saves time searching for new post ideas"
        ],
        button: "▶ See how the assistant works"
      },
      {
        title: "Post Copywriter",
        imageAlt: "Post Copywriter",
        note: "In this example, the assistant only needs a topic and target audience. It already takes the other predefined settings into account.",
        listTitle: "What it can do:",
        benefits: [
          "Writes complete posts on a given topic",
          "Takes the characteristics of your audience into account",
          "Structures the text so it is clear and engaging for your readers",
          "Writes in your style and follows your requirements for the text",
          "Saves time on writing and editing posts",
          "Reduces the cost of hiring a specialist to write content"
        ],
        button: "▶ See how the assistant works"
      }
    ]
  }
};

const modal = document.querySelector("[data-video-modal]");
const video = document.querySelector("[data-demo-video]");
const closeButton = document.querySelector("[data-video-close]");
let activeButton = null;

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
  closeButton.textContent = content.close;
  modal.setAttribute("aria-label", content.modalLabel);

  document.querySelectorAll("[data-assistant]").forEach((card, index) => {
    const assistant = content.assistants[index];
    card.querySelector("[data-assistant-title]").textContent = assistant.title;
    card.querySelector("[data-assistant-image]").alt = assistant.imageAlt;
    card.querySelector("[data-note]").textContent = assistant.note;
    card.querySelector("[data-list-title]").textContent = assistant.listTitle;
    const list = card.querySelector("[data-benefits]");
    list.replaceChildren(...assistant.benefits.map((benefit) => {
      const item = document.createElement("li");
      item.textContent = benefit;
      return item;
    }));
    card.querySelector("[data-demo-button]").textContent = assistant.button;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  if (updateUrl) {
    history.replaceState(null, "", lang === "en" ? "ai-assistants.html?lang=en" : "ai-assistants.html");
  }
}

function openVideo(button) {
  activeButton = button;
  video.src = button.dataset.video;
  video.currentTime = 0;
  modal.hidden = false;
  modal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  closeButton.focus();
  video.play().catch(() => {});
}

function closeVideo() {
  video.pause();
  video.currentTime = 0;
  video.removeAttribute("src");
  video.load();
  modal.hidden = true;
  modal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  activeButton?.focus();
  activeButton = null;
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll("[data-demo-button]").forEach((button) => {
  button.addEventListener("click", () => openVideo(button));
});

closeButton.addEventListener("click", closeVideo);
modal.addEventListener("click", (event) => {
  if (event.target === modal) closeVideo();
});

const initialLanguage = new URLSearchParams(location.search).get("lang");
setLanguage(initialLanguage === "en" ? "en" : "ru", false);
