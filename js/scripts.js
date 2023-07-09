//Business Logic - Player

function Player(name, totalScore, currentScore) {
  this.name = name;
  this.totalScore = totalScore;
  this.currentScore = currentScore;
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
  const currrentPlayer = this.players[this.currentPlayer];
  if (randomNumber === 1) {
    //this.currentScore += 0
  } else {
    this.currentScore += randomNumber;
  }
  return randomNumber;
};

Game.prototype.

function PlayerSwitch() {
  this.newPlayer.switch();
  return otherPlayer;
}

let newGame = new Game();
let newPlayer = new Player()
Game.addPlayer(newPlayer);
// console.log(Game.addPlayer)

// let newPlayer = new Player("bobby");
// newPlayer.setScoreToZero();



