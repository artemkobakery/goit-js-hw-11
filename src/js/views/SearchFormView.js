class SearchFormView {
  #searchForm = document.querySelector('.search-form');
  #searchInput = document.querySelector('.search-form__input');

  getQuery() {
    return this.#searchInput.value;
  }

  bindOnFormSubmitHandler(handler) {
    this.#searchForm.addEventListener('submit', e => {
      e.preventDefault();
      handler(this.getQuery());
    });
  }
}

export default new SearchFormView();
