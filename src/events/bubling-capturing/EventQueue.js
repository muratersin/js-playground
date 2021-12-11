import { getRandomColor } from "../../helpers/colors";

export default class EventQueue {
  constructor() {
    this.elementList = [];
  }

  setupInterval() {
    this.intervalId = setInterval(this.triggerEvent.bind(this), 200);
  }

  clearInterval() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  add(event) {
    this.elementList.push(event.currentTarget);

    if (!this.intervalId) {
      this.setupInterval();
    }
  }

  triggerEvent() {
    if (!this.elementList.length) {
      this.clearInterval();
      return;
    }

    const element = this.elementList.shift();

    if (element.style.border) {
      element.style.border = null;
    } else {
      element.style.border = `2px solid ${getRandomColor()}`;
    }
  }
}
