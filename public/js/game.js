class Game {
  constructor(userChoice, computerChoice) {
    this.p1 = userChoice,
    this.comp = computerChoice
  };

  results() {
    if(this.p1 === this.comp) return "It's a draw!"
    if(this.p1 === 'paper' && this.comp === 'rock') return 'You Win!'
    if(this.p1 === 'rock' && this.comp === 'scissors') return 'You Win!'
    if(this.p1 === 'paper' && this.comp === 'rock') return 'You Win!'
    return 'You Lose!'
  };
};

module.exports = Game;