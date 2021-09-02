class MovieItem extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
         <img class="movie_image" src=${this._movie.poster} alt=${this._movie.title}>
            <div class="movie_info">
                <h3>${this._movie.title}</h3>
                <p>${this._movie.year}</p>
            </div>`;
  }
}

customElements.define("movie-item", MovieItem);
