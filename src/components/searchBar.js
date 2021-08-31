class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set submitForm(event) {
     this._submitForm = event;
     this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#searchMovieList").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
      <form name="movie" id="formMovie" type="submit">
        <label for="search"></label>
        <input
          placeholder="Search..."
          id="searchMovieList"
          name="search"
          type="search"
        />
        <button
          id="searchButtonMovie"
          form="movie"
          type="submit"
          value="submit"
        >
          Search
        </button>
      </form>`;

    this.shadowDOM
      .querySelector("#searchButtonMovie")
      .addEventListener("click", this._clickEvent);
    this.shadowDOM
      .querySelector("#formMovie")
      .addEventListener("submit", this._submitForm);
  }
}

customElements.define("search-bar", SearchBar);
