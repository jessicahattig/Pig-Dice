function Player(name, score, totalScore, currentScore) {
  this.name = name;
  this.score = score;
  this.totalScore = totalScore;
  this.currentScore = currentScore;
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

Game.prototype.addPlayer = function(player) {
    //const player = new Player(name);
    player.id = this.assignId();
    this.players[player.id] = player;
    player.setScoreToZero();
    this.players.push(player);
};
 let newGame = new Game();
 let newPlayer = new Player()
 Game.addPlayer(newPlayer);
// console.log(Game.addPlayer)

// let newPlayer = new Player("bobby");
// newPlayer.setScoreToZero();



