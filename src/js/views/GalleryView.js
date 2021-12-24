import { Notify } from 'notiflix/build/notiflix-notify-aio';

class GalleryView {
  #gallery = document.querySelector('.gallery');
  #messageTypes = {
    success: Notify.success,
    error: Notify.failure,
  };

  render(data) {
    if (data.hits.length === 0) {
      this.renderMessage('Nothing to show', 'error');
      return;
    }

    const markup = this.#generateMarkup(data);
    this.#gallery.innerHTML = '';
    this.#gallery.insertAdjacentHTML('afterbegin', markup);
    this.renderMessage(`Found ${data.total.toString()} images`, 'success');
  }

  renderMessage(message, type) {
    this.#messageTypes[type](message);
  }

  #generateMarkup(data) {
    return data.hits
      .map(el => {
        return `
      <div class="gallery__card photo-card" id=${el.id}>
      <img
        class="photo-card__img"
        src="${el.webformatURL}"
        alt="${el.tags}"
        loading="lazy"
      />
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
