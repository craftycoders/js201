// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'

function rockPaperScissors(player1, player2){
    //rock, scissors  = 1
    //rock, paper = 2
    //scissors, rock = 2
    //scissors, paper = 1
    //paper, scissors = 2
    //paper, rock = 1

    if (player1 === player2){
        return 'draw';
    } else if ((player1 === 'rock' && player2 === 'scissors') || (player1 === 'scissors' && player2 === 'paper') || (player1 === 'paper' && player2 === 'rock')) {
        return 'player 1'
    }    
    return 'player 2'
   
}