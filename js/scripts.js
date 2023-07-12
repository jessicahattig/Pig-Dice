//Business Logic - Player

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = 0;
  }
};

// Player.prototype.equals = function (otherPlayer) {
//   return this.name === otherPlayer.name;
// };

// Player.prototype.setScoreToZero = function () {
//   this.score = 0;
// };


// //Business Logic - Game
// class Game() {
//   this.players = [];
// };

// Game.prototype.addPlayer = function (player) {
//   if (this.players.length < 2) {
//     this.players.push(player);
//     player.setScoreToZero();
//   }
// };

// Game.prototype.roll = function () {
//   const randomNumber = Math.floor(Math.random() * 6) + 1;
//   const currentPlayer = this.players[0];
//   if (randomNumber !== 1) {
//     currentPlayer.score += randomNumber;
//   }
//   return currentPlayer.score;
// };



