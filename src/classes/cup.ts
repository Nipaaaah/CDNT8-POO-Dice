import { Dice } from './dice';

export class Cup {
  private _value: number;
  private _dices: Dice[];

  // Constructor
  constructor(nb_dices: number) {
    this._value = 0;
    this._dices = [];

    // Create new dices and add them to the cup
    for (let i = 0; i < nb_dices; i++) {
      let dice = new Dice();
      this._dices.push(dice);
    }
  }

  // Getter
  public get_value = () => {
    return this._value;
  }

  // Throw the cup
  // Take the sum of the dices values to make the value of the cup
  // Shows the value of the cup
  public throw = () => {
    this._value = 0;

    this._dices.map(d => {
      d.throw();
      let value = d.get_value();
      this._value += value;
    })

    this.show_score();
  }

  // Shows the value of the cup
  public show_score = () => {
    console.log(`Cup = ${this._value}`);
  }
}