const translations = {
  ru: {
    pageTitle: "Позиционирование и оформление - Мария Коренева",
    back: "← Вернуться к примерам решений",
    backHref: "index.html#projects",
    kicker: "ПОЗИЦИОНИРОВАНИЕ И ОФОРМЛЕНИЕ",
    title: "Позиционирование и оформление социальных сетей",
    intro: "Примеры того, как можно представить специалиста или компанию в социальных сетях и оформить контент под задачи и аудиторию.",
    caseTitle: "Позиционирование и оформление социальных сетей",
    profilesTitle: "Примеры оформления профилей",
    storiesTitle: "Примеры визуального оформления контента",
    featuresTitle: "Что можно сделать:",
    features: [
      "Выделить сильные стороны и особенности специалиста или компании",
      "Показать, почему стоит обратиться именно к вам",
      "Подстроить оформление социальных сетей под целевую аудиторию",
      "Создать визуальное оформление для публикаций и сторис",
      "Определить, о чем говорить с аудиторией в социальных сетях",
      "Подготовить основу для дальнейшего ведения социальных сетей"
    ],
    telegramAlt: "Пример оформления профиля Telegram",
    maxAlt: "Пример оформления профиля MAX",
    storyAlt: "Пример оформления сторис"
  },
  en: {
    pageTitle: "Positioning and Presentation - Maria Koreneva",
    back: "← Back to Solutions",
    backHref: "index.html?lang=en#projects",
    kicker: "POSITIONING AND PRESENTATION",
    title: "Positioning and Social Media Presentation",
    intro: "Examples of how a specialist or company can be presented on social media and how content can be designed for specific goals and audiences.",
    caseTitle: "Positioning and Social Media Presentation",
    profilesTitle: "Profile presentation examples",
    storiesTitle: "Content design examples",
    featuresTitle: "What can be done:",
    features: [
      "Highlight the strengths and distinctive features of a specialist or company",
      "Show why potential clients should choose you",
      "Adapt social media presentation to the target audience",
      "Create visual designs for posts and stories",
      "Define what to communicate to your audience on social media",
      "Create a foundation for ongoing social media management"
    ],
    telegramAlt: "Telegram profile presentation example",
    maxAlt: "MAX profile presentation example",
    storyAlt: "Content design example"
  }
};

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
  document.querySelector("[data-case-title]").textContent = content.caseTitle;
  document.querySelector("[data-profiles-title]").textContent = content.profilesTitle;
  document.querySelector("[data-stories-title]").textContent = content.storiesTitle;
  document.querySelector("[data-features-title]").textContent = content.featuresTitle;
  document.querySelector("[data-profile='telegram']").alt = content.telegramAlt;
  document.querySelector("[data-profile='max']").alt = content.maxAlt;

  const list = document.querySelector("[data-features]");
  list.replaceChildren(...content.features.map((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    return item;
  }));

  document.querySelectorAll("[data-story]").forEach((image) => {
    image.alt = `${content.storyAlt} ${image.dataset.story}`;
  });

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });

  if (updateUrl) {
    history.replaceState(null, "", lang === "en" ? "positioning.html?lang=en" : "positioning.html");
  }
}

document.querySelectorAll("[data-lang]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

const initialLanguage = new URLSearchParams(location.search).get("lang");
setLanguage(initialLanguage === "en" ? "en" : "ru", false);
