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
      <style>
        * {
         margin: 0;
         padding: 0;
         box-sizing: border-box;
        }
        :host {
          display: block;
          width: 100vw;
          height: 40px;
          background-color: #3db2ff;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);          
        }
        .navbar_container {
          padding: 10px 100px;
        }
      </style>

      <div class="navbar_container">
        <p>eWatch</p>
      </div>
      `;
  }
}

customElements.define("app-bar", AppBar);
