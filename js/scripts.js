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

// game logic //
function Game() {
  this.players = {};
  this.playerId = 0;
};

Game.prototype.addPlayer = function (player) {
  //const player = new Player(name);
  player.id = this.assignId();
  this.players[player.id] = player;
  player.setScoreToZero();
  this.players.push(player);
};

Game.prototype.assignId = function () {
  this.playerId += 1;
  return this.playerId;
};

Game.prototype.roll = function(){
  const randomNumber=Math.floor((Math.random()*6)+1);
  this.players[player.id] = player
}

function PlayerSwich(){
  this.newPlayer.swish()
}
let newGame = new Game();
let newPlayer = new Player()
Game.addPlayer(newPlayer);
// console.log(Game.addPlayer)

// let newPlayer = new Player("bobby");
// newPlayer.setScoreToZero();



