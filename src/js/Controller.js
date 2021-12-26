import GalleryView from './views/GalleryView';
import SearchFormView from './views/SearchFormView';
import Model from './Model';
import PaginationView from './views/PaginationView';
import AlertView from './views/AlertView';

class Controller {
  constructor() {
    SearchFormView.bindOnFormSubmitHandler(this.onFormSubmitHandler);
    PaginationView.bindOnLoadMoreClickHandler(this.onLoadMoreClickHandler);
  }

  onFormSubmitHandler(query) {
    GalleryView.renderSpinner();
    Model.resetPage();
    Model.query = query;
    PaginationView.hideLoadMore();
    Model.fetchData().then(data => {
      if (!Model.isValidData(data.hits)) {
        AlertView.renderMessage(
          'Sorry, there are no images matching your search query. Please try again.',
          'error',
        );
        GalleryView.resetView();
        return;
      }
      AlertView.renderMessage(`Hooray! We found ${data.totalHits.toString()} images`, 'success');
      GalleryView.resetView();
      GalleryView.render(data);

      if (!(data.hits.length < Model.resPerPage)) {
        PaginationView.showLoadMore();
      }
    });
  }

  onLoadMoreClickHandler() {
    Model.fetchData().then(data => {
      if (!Model.isValidData(data.hits)) {
        AlertView.renderMessage(
          "We're sorry, but you've reached the end of search results.",
          'info',
        );
        PaginationView.hideLoadMore();
        return;
      }
      GalleryView.render(data);
    });
  }
}

export default new Controller();
