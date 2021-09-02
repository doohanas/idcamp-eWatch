import "../components/appBar.js";
import "../components/searchBar.js";
import "../components/movieList.js";
import DataSource from "../data/dataSource.js";

const mainpage = () => {
  const searchMovieList = document.querySelector("search-bar");
  const moviesList = document.querySelector("movie-list");

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
    moviesList.movies = movies;
  };

  searchMovieList.clickEvent = handleSearchMovie;
  searchMovieList.submitForm = handleSubmitForm;
};

export default mainpage;
