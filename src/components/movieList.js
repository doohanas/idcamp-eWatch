import "./movieItem.js";

class MovieList extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movies(movies) {
    this._movies = movies;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = "";
    this._movies.map((movie) => {
      const movieItemElement = document.createElement("movie-item");
      movieItemElement.movie = movie;
      this.shadowDOM.appendChild(movieItemElement);
    });
  }

  renderError() {
    this.shadowDOM.innerHTML = "";
    this.shadowDOM.innerHTML += `<h2 class="placeholder">Your Movies Not Found</h2>`;
  }
}

customElements.define("movie-list", MovieList);
