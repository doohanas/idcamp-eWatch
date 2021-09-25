const axios = require("axios");
import { API_KEY } from "Utils/index.js";

class DataSource {
  static searchMovie(keyword, year) {
    const KEYWORD = keyword;
    const YEAR_TITLE = year;
    console.log(typeof KEYWORD);
    console.log(typeof YEAR_TITLE);

    return axios
      .get(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${KEYWORD}&y=${YEAR_TITLE}`
      )
      .then((response) => {
        return response.data;
      })
      .then((responseJson) => {
        if (responseJson.Search) {
          return Promise.resolve(responseJson.Search);
        } else {
          return Promise.reject(`${keyword} IS NOT FOUND`);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }
}

export default DataSource;
