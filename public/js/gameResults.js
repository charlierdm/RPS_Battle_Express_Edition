class gameResults (userChoice, computerChoice) => {
  constructor() {
    this.p1 = userChoice,
    this.comp = computerChoice
  }

  results() {
    if(p1 === comp) { 
      return "It's a draw!" 
    } else if (p1 === 'paper' && comp === 'rock' || p1 === 'rock' && comp === 'scissors' || p1 === 'paper' && comp === 'rock') {
      return 'You win!'
    } else {
      return 'You Lose!'
    }
  }
}

module.exports = gameResults;