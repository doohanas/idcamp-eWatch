import DataSource from "../data/dataSource.js";

const mainpage = () => {
  const FormMovie = document.querySelector("#formMovie");
  const searchMovie = document.querySelector("#searchMovie");
  const searchButtonElement = document.querySelector("#searchButton");
  const moviesList = document.querySelector("#moviesList");

  const searchMovieList = async () => {
    try {
      const movie = await DataSource.searchMovie(searchMovie.value);
      render(movie);
      console.log(movie);
    } catch (error) {
      alert(error);
    }
  };

  const submitFormMovie = (event) => {
    event.preventDefault();
    searchMovieList();
  };

  const render = (movies) => {
    moviesList.innerHTML = "";
    movies.map((movie) => {
      const { title, year, poster } = movie;
      const movieElement = document.createElement("div");
      movieElement.setAttribute("class", "movie");

      movieElement.innerHTML = `
                <img class="movie_image" src=${poster} alt=${title}>
                <div class="movie_info">
                    <h3>${title}</h3>
                    <p>${year}</p>
                </div>
            `;

      moviesList.appendChild(movieElement);
    });
  };

  FormMovie.addEventListener("submit", submitFormMovie);
  searchButtonElement.addEventListener("click", searchMovieList);
};

export default mainpage;
