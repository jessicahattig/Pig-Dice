//Business Logic - Player

function Player(name, score) {
  this.name = name;
  this.score = 0;
}

Player.prototype.equals = function (otherPlayer) {
  return this.name === otherPlayer.name;
};

Player.prototype.setScoreToZero = function () {
  this.score = 0;
};

//Business Logic - Game
function Game() {
  this.players = [];
  this.playerId = 0;
  this.currentPlayer = 0;
};

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players[player.id] = player;
  player.setScoreToZero();
  this.players.push(player);
};

Game.prototype.assignId = function () {
  return this.playerId++;
};

Game.prototype.roll = function () {
  const randomNumber = Math.floor((Math.random() * 6) + 1);
  const currentPlayer = this.players[this.currentPlayer];
    if (randomNumber === 1) {
    // end turn
    return currentPlayer.score;
  } else {
    currentPlayer.score += randomNumber;
  }
};



