import CVArticle from "./CVArticle.js";
import fetchTranslations from "./fetchTranslations.js";

customElements.define("cv-article", CVArticle);

await fetchTranslations();

const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", async () => {
  const lang = langSelect.value;
  await fetchTranslations(lang);
});