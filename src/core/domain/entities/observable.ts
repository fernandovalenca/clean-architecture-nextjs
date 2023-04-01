import { Observer } from "./observer";

export class Observable {
  observers: Observer[];

  constructor() {
    this.observers = [];
  }

  register(observer: Observer) {
    this.observers.push(observer);
  }

  unregister(observer: Observer) {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify<T>(event: string, data: T) {
    for (const observer of this.observers) {
      if (observer.event === event) {
        observer.callback(data);
      }
    }
  }
}
