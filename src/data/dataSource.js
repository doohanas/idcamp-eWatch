import movies from "./movies.js";

class DataSource {
  static searchMovie(keyword) {
    return new Promise((resolve, reject) => {
      const showMovies = movies.filter((movie) =>
        movie.title.toUpperCase().includes(keyword.toUpperCase())
      );
      if (showMovies.length) {
        resolve(showMovies);
      } else {
        reject(`${keyword} is not found`);
      }
    });
  }
}

export default DataSource;
