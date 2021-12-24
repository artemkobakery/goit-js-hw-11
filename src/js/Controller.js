import GalleryView from './views/GalleryView';
import SearchFormView from './views/SearchFormView';
import Model from './Model';

class Controller {
  constructor() {
    SearchFormView.bindOnFormSubmitHandler(this.onFormSubmitHandler);
  }

  onFormSubmitHandler(query) {
    GalleryView.renderSpinner();
    Model.fetchData(query).then(data => {
      console.log(data);
      GalleryView.render(data);
    });
  }
}

export default new Controller();
