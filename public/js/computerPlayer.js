class ComputerPlayer {
  constructor() {
    this.rps = ['rock', 'paper', 'scissors']
  };

  play() {
    return this.rps[Math.floor(Math.random() * this.rps.length)];
  };

};

module.exports = ComputerPlayer;