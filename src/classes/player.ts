import { Cup } from './cup';
export class Player {
  private _name: string;
  private _score: number;

  // Constructor
  constructor(name: string) {
    this._name = name;
    this._score = 0;
  }

  // Getters
  get name() {
    return this._name;
  }

  get score() {
    return this._score;
  }

  // Let the player throw the cup, add the value of the cup to its score and shows its score
  play = (cup: Cup) => {
    cup.throw();
    this._score += cup.value;

    console.log(`${this._name} does ${cup.value}.`)
    this.show_score();
    console.log('')
  }

  // Show current score of the player
  show_score = () => {
    console.log(`${this._name} has ${this._score} points.`);
  }
}