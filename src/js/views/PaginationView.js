class PaginationView {
  #loadMoreBtn = document.querySelector('.load-more-btn');

  showLoadMore() {
    this.#loadMoreBtn.classList.remove('load-more-btn--hidden');
  }

  hideLoadMore() {
    this.#loadMoreBtn.classList.add('load-more-btn--hidden');
  }

  bindOnLoadMoreClickHandler(handler) {
    this.#loadMoreBtn.addEventListener('click', handler);
  }
}

export default new PaginationView();
