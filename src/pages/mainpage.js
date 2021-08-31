import "../components/appBar.js";
import "../components/searchBar.js";
import DataSource from "../data/dataSource.js";

const mainpage = () => {
  const searchMovieList = document.querySelector("search-bar");
  const moviesList = document.querySelector("#moviesList");

  const handleSearchMovie = async () => {
    try {
      const movie = await DataSource.searchMovie(searchMovieList.value);
      render(movie);
    } catch (error) {
      alert(error);
    }
  };

   const handleSubmitForm = (event) => {
    event.preventDefault();
    handleSearchMovie();
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


  searchMovieList.clickEvent = handleSearchMovie;
  searchMovieList.submitForm = handleSubmitForm;
};

export default mainpage;
