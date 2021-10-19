export default class CVArticle extends HTMLElement {
  constructor() {
    super();
  }

  async connectedCallback() {
    const res = await fetch(`./partials/${this.id}.html`);
    const data = await res.text();
    this.innerHTML = data;
  }
}