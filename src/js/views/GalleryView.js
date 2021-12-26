class GalleryView {
  #gallery = document.querySelector('.gallery');

  render(data) {
    const markup = this.#generateMarkup(data);
    this.#gallery.insertAdjacentHTML('beforeend', markup);
  }

  resetView() {
    this.#gallery.innerHTML = '';
  }

  renderSpinner() {
    this.#gallery.innerHTML = `
    <div class="spinner">
      <i class="fas fa-spinner"></i>
    </div>
    `;
  }

  #generateMarkup(data) {
    return data.hits
      .map(el => {
        return `
        <div class="gallery__card photo-card" id="${el.id}">
          <img class="photo-card__img" src="${el.webformatURL}" alt="${el.tags}" loading="lazy" />
          <ul class="photo-card__info">
            <li class="photo-card__info-item">
              <p class="photo-card__info-item-name">Likes</p>
              <p class="photo-card__info-item-value">${el.likes}</p>
            </li>
            <li class="photo-card__info-item">
              <p class="photo-card__info-item-name">Views</p>
              <p class="photo-card__info-item-value">${el.views}</p>
            </li>
            <li class="photo-card__info-item">
              <p class="photo-card__info-item-name">Comments</p>
              <p class="photo-card__info-item-value">${el.comments}</p>
            </li>
            <li class="photo-card__info-item">
              <p class="photo-card__info-item-name">Downloads</p>
              <p class="photo-card__info-item-value">${el.downloads}</p>
            </li>
          </ul>
        </div>`;
      })
      .join('');
  }
}

export default new GalleryView();
