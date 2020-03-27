import { Cup } from './cup';
import { Player } from './player';

export class Game {
  private _players: Player[];
  private _nb_turns: number;
  private _cup: Cup;

  // Constructor
  constructor(nb_turns: number, nb_dices: number) {
    this._players = [];
    this._nb_turns = nb_turns;
    this._cup = new Cup(nb_dices);
  }

  // Create array of players
  public init_game = () => {
    let bob = new Player('Bob');
    let willy = new Player('Willy');
    let mike = new Player('Mike');

    this._players.push(bob, willy, mike);
  }

  // Start the game and let the players play each turns
  public start_game = () => {
    console.log(`Game starts !  It will last for ${this._nb_turns} turns !`)
    console.log('Players for this game are:');
    this._players.map(p => {
      console.log(p.name);
    })

    console.log('')

    for (let i = 1; i < this._nb_turns + 1; i++) {
      console.log(`Turn ${i}: `)

      this._players.map(p => {
        console.log(`${p.name} throws the cup.`)
        p.play(this._cup);
      })
    }
  }

  // Checks which player has the highest score and displays its name
  public show_winner = () => {
    console.log("End of the game");

    let score = this._players[0].score;
    let winner = this._players[0];

    this._players.map(p => {
      if (p.score > score) {
        score = p.score;
        winner = p;
      }
    })

    console.log(`Winner is: ${winner.name}`)
  }
}