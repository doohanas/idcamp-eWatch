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
        <style>
          .movie_list {
            background-color: #FFB319;
            margin-bottom: 5px;
            padding: 15px;
            border-radius: 25px;
            width: 300px;
            height: 350px;
            text-align: center;
            box-shadow: 2px 2px 5px grey;
            transition: .5s ease-out;
          }
          .movie_list:hover {
            transform: scale(1.05);
          }
          .movie_image {
            padding-top: 10px;
            width: 200px;
            height: 200px;
            border-radius: 50%;
          }
          :host {
            display: grid;
            width: 350px;
            margin-right: 10px;
            margin-bottom: 15px;
          }
        </style>

        <div class="movie_list"> 
         <img class="movie_image" src=${this._movie.Poster} alt=${this._movie.Title}>
          <div class="movie_info">
              <h3>${this._movie.Title}</h3>
              <p>${this._movie.Type}</p>
              <p>${this._movie.Year}</p>
          </div>
        </div>`;
  }
}

customElements.define("movie-item", MovieItem);
