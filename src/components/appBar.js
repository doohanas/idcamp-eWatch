class AppBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
      <div class="navbar_container">
        <h2>eWatch</h2>
      </div>
      `;
  }
}

customElements.define("app-bar", AppBar);
