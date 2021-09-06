import "Components/appBar.js";
import "Components/searchBar.js";
import "Components/movieList.js";
import DataSource from "Data/dataSource.js";

const mainpage = () => {
  const searchMovieList = document.querySelector("search-bar");
  const moviesList = document.querySelector("movie-list");

  const handleSearchMovie = async () => {
    try {
      const movie = await DataSource.searchMovie(searchMovieList.value);
      render(movie);
    } catch (error) {
      alert("Sorry, check your movie once again");
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
