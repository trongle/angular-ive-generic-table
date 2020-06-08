export interface ButtonInterface {
  name:string;
  callback: CallableFunction;
  attributes: any
}

export class Button implements ButtonInterface {
  name;
  callback;
  attributes;

  constructor(name: string, attributes: any, callback: CallableFunction) {
    this.name = name;
    this.attributes = attributes;
    this.callback = callback;
  }
}