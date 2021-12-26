import axios from 'axios';

class Model {
  #state = {
    query: '',
    data: {},
    currentPage: 1,
    perPage: 40,
  };

  #BASE_URL = 'https://pixabay.com/api/';
  #key = '12270561-313095db349b3989d6b7a9d44';

  async fetchData() {
    const { data } = await axios.get(`${this.#BASE_URL}?key=${this.#key}&q=${
      this.#state.query
    }&page=${this.#state.currentPage}&per_page=${
      this.#state.perPage
    }&image_type=photo&orientation=horizontal&safesearch=true
    `);

    this.#state.data = data;
    this.#incrementPage();
    return this.#state.data;
  }

  isValidData(data) {
    return data.length === 0 ? false : true;
  }

  set query(query) {
    this.#state.query = query;
  }

  get resPerPage() {
    return this.#state.perPage;
  }

  #incrementPage() {
    this.#state.currentPage += 1;
  }

  resetPage() {
    this.#state.currentPage = 1;
  }
}

export default new Model();
