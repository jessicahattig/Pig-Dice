//Business Logic - Player

function Player(name, score) {
  this.name = name;
  this.score = 0;
  this.id = 0;
}

Player.prototype.equals = function (otherPlayer) {
  return this.id === otherPlayer.id;
};

Player.prototype.setScoreToZero = function () {
  this.score = 0;
};

//Business Logic - Game
function Game() {
  this.currentPlayerIndex= 0;
  this.players = [];
};

  Game.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.players[player.id] = player;
 if (this.players.length < 2) {
  this.players.push(player);
  player.setScoreToZero();
 }
};

Game.prototype.roll = function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const currentPlayer = this.players[this.currentPlayerIndex];
    if (randomNumber !== 1) {
      currentPlayer.score += randomNumber;
    }

    this.currentPlayerIndex = (this.currentPlayerIndex + 1) % this.players.length;
    return currentPlayer.score;
};

