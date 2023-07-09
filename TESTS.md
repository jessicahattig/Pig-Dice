Describe: Player();

Test: Player 1 is equal to Player 1.
Code: 
const player1 = new Player("Player 1")
Expected Output: Player 1.

Test: Player 2 is equal to Player 2.
Code: 
const player2 = new Player("Player 2")
Expected Output: Player 2.

Test: If a player is selected, it should display selected player.
Code:
player2;
Expected Output: ("Player 2")

Describe: Game();

Test: Player 1 and 2 score should start at zero and be assigned a ID.
Code: 
const game = new Game();
const player1 = new Player("Player 1");
game.addPlayer(player1);
const player2 = new Player("Player 2");
game.addPlayer(player2);

player1;

Expected Output: 
Player {name: 'Player 1', totalScore: undefined, currentScore: undefined, id: 0, score: 0}


<!-- 
Test: It should start with player id 0
Code: 

Test: It should generate a random number between 1 and 6. 

Test: It should change turns to the next player by id value when a 1 is rolled. 

Test: It should add the value of any other roll to the player's score.
 -->




<!-- Describe: Game();

Test: Both players start at 0 points. 
Code:  -->





<!-- Game
players
currentplayers
dice value
total score -->
