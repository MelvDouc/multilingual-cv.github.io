export default async function fetchTranslations() {
  const { lang } = document.documentElement;
  const res = await fetch(`./translations.json`);
  const data = await res.json();
  document.querySelectorAll("[data-trl]").forEach(element => {
    const key = element.getAttribute("data-trl");
    element.innerHTML = data[key][lang];
  });
}