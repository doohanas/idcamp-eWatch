import img from "Assets/tv.png";
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
          height: 50px;
          color: white;
          box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);          
        }
        .appBar_container {
          display: flex;
        }
        .logo_ewatch {
          margin: 5px 0px 0px 120px;
        }
        .navbar_container {
          padding: 15px 0px 0px 0px;
          font-size: 1.5rem;
          color: #EEEDED; 
        }
      </style>
      <div class="appBar_container">
        <img class="logo_ewatch" src=${img} alt="LOGO" width="40px" height="40px">
      <div class="navbar_container">
        <p>eWatch</p>
      </div>
      </div>
      `;
  }
}

customElements.define("app-bar", AppBar);
