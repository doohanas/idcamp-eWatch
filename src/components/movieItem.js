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
         <img class="movie_image" src=${this._movie.Poster} alt=${this._movie.Title}>
            <div class="movie_info">
                <h3>${this._movie.Title}</h3>
                <p>${this._movie.Year}</p>
            </div>`;
  }
}

customElements.define("movie-item", MovieItem);
