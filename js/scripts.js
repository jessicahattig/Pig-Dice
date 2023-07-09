function Player(name) {
  this.name = name;
}

Player.prototype.equals = function (otherPlayer) {
  return this.name === otherPlayer.name;
};

const player1 = new Player('Player 1');
const player1Set = new Player('Player 1');

// if (player1.equals(player1Set)) {
//   console.log('Player 1 is equal to Player 1');
//   } else {
//   console.log('Player 1 is not equal to Player 1')
//   }




