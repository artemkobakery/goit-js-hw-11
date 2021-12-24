class Model {
  #state = {
    query: '',
    data: {},
  };

  #key = '12270561-313095db349b3989d6b7a9d44';

  async fetchData(query) {
    this.#state.query = query;
    const req = await fetch(`https://pixabay.com/api/?key=${this.#key}&q=${query}`);
    const res = await req.json();
    this.#state.data = res;
    return this.#state.data;
  }
}

export default new Model();
