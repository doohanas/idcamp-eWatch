class SearchBar extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  set clickEvent(event) {
    this._clickEvent = event;
    this.render();
  }

  set submitForm(event) {
    this._submitForm = event;
    this.render();
  }

  get value() {
    return this.shadowDOM.querySelector("#search_movie_list").value;
  }

  render() {
    this.shadowDOM.innerHTML = `
    <style>
      #form_movie {
        width: 350px;
        margin: 20px auto;
        display: flex;
        justify-content: center;      
      }
      #search_movie_list {
        flex-direction: row;
        position: relative;
        width: 150px;
        height: 40px;
        box-sizing: border-box;
        margin-right: 5px;
        padding: 5px 10px;
        border: 1px solid #3db2ff;
        border-radius: 5px;
        transition: width .5s ease-in-out;   
      }
      #search_movie_list:focus {
        width: 250px;
      }
      #search_button_movie {
        background-color: #3db2ff;
        width: 70px;
        height: 35px;
        border-radius: 5px;
        border: none;
        cursor: pointer;
        box-shadow: 0px 5px #8FC1D4;  
      }
      #search_button_movie:hover {
        background-color: #046fb6;
      }
      #search_button_movie:active {
        background-color: #046fb6;
        box-shadow: 0 5px #666;
        transform: translateY(5px);
      }
    </style>

    <form name="movie" id="form_movie" type="submit">
      <label for="search"></label>
      <input
        placeholder="Search"
        id="search_movie_list"
        name="search"
        type="search"
        required
      />
      <button
        id="search_button_movie"
        class="button_search"
        form="movie"
        type="submit"
        value="submit"
      >
        <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 13 3 C 7.4889971 3 3 7.4889971 3 13 C 3 18.511003 7.4889971 23 13 23 C 15.396508 23 17.597385 22.148986 19.322266 20.736328 L 25.292969 26.707031 A 1.0001 1.0001 0 1 0 26.707031 25.292969 L 20.736328 19.322266 C 22.148986 17.597385 23 15.396508 23 13 C 23 7.4889971 18.511003 3 13 3 z M 13 5 C 17.430123 5 21 8.5698774 21 13 C 21 17.430123 17.430123 21 13 21 C 8.5698774 21 5 17.430123 5 13 C 5 8.5698774 8.5698774 5 13 5 z"/></svg>
      </button>
    </form>`;

    this.shadowDOM
      .querySelector("#search_button_movie")
      .addEventListener("click", this._clickEvent);
    this.shadowDOM
      .querySelector("#form_movie")
      .addEventListener("submit", this._submitForm);
  }
}

customElements.define("search-bar", SearchBar);
