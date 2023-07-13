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

Player.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}


//Business Logic - Game
function Game() {
  this.currentId = 1;
  this.players = [];
};

AddressBook.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
};

Game.prototype.addPlayer = function (player) {
  player.id = this.assignId();
  this.player[player.id] = player;
 if (this.players.length < 2) {
  this.players.push(player);
  player.setScoreToZero();
 }
};

Game.prototype.roll = function () {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  const currentPlayer = this.players[0];
    if (randomNumber !== 1) {
      currentPlayer.score += randomNumber;
    }
    return currentPlayer.score;
};

