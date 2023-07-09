function Player(name, score) {
  this.name = name;
  this.score = score;
}

Player.prototype.equals = function (otherPlayer) {
  return this.name === otherPlayer.name;
};

Player.prototype.setScoreToZero = function() {
  this.score = 0;
};

const player1 = new Player('Player 1');
const player1Set = new Player('Player 1');

const player2 = new Player('Player 2');
const player2Set = new Player('Player 2');

// game logic //

function Game() {
  this.players = [];
};

Game.prototyope.addPlayer = function(player) {
    const player = new Player(name);
    player.setScoreToZero();
    this.players.push(player);
};
let newGame = new Game();
console.log(Game.addPlayer)




