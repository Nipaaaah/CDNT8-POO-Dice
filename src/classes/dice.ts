export class Dice {
  private _value: number;

  // Constructor
  constructor() {
    this._value = 0;
  }

  // Getter
  public get value() {
    return this._value;
  }

  // Changed the value of the dice to a number between 1 and 6
  public throw = () => {
    this._value = Math.floor(Math.random() * 6 + 1);
  }
}