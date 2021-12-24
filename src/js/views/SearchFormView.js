class SearchFormView {
  #searchForm = document.querySelector('.search-form');
  #searchInput = document.querySelector('.search-form__input');
  #submitBtn = document.querySelector('.search-form__btn-submit');

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
