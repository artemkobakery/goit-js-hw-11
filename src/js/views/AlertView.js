import { Notify } from 'notiflix/build/notiflix-notify-aio';

class AlertView {
  #DURATION = 3000;
  #messageTypes = {
    success: Notify.success,
    error: Notify.failure,
    info: Notify.info,
    warning: Notify.warning,
  };

  renderMessage(message, type) {
    this.#messageTypes[type](message, {
      timeOut: this.#DURATION,
    });
  }
}

export default new AlertView();
