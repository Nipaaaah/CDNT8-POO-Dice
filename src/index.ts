import { Game } from "./classes/game";

// Create a new game
// Params: number of turns, number of dices
const game: Game = new Game(2, 2);

game.init_game();
game.start_game();
game.show_winner();