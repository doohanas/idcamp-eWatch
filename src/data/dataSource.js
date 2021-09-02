const axios = require("axios");
import { API_KEY } from "../utils/index.js";

class DataSource {
  static searchMovie(keyword) {
    return axios(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`)
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
