// import axios from "axios";
// import API_KEY from "../utils/index.js";

// class DataSource {
//   static searchMovie(keyword) {
//     return axios(`http://www.omdbapi.com/?apikey=${API_KEY}&s=${keyword}`)
//       .then((response) => {
//         return response.json();
//       })
//       .then((responseJson) => {
//         if (responseJson.movies) {
//           return Promise.resolve(responseJson.movies);
//         } else {
//           return Promise.reject(`${keyword} IS NOT FOUND`);
//         }
//       });
//   }
// }

// export default DataSource;
