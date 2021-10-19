import fetchTranslations from "./fetchTranslations.js";

await fetchTranslations();

const langSelect = document.getElementById("lang-select");
langSelect.addEventListener("change", async () => {
  const lang = langSelect.value;
  await fetchTranslations(lang);
});