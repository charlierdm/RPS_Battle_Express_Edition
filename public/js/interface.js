const displayChoice = (value) => {
  document.getElementById(
    "selection"
  ).innerHTML = `<br>You have selected ${value}, prepare for battle!`;
};

const emptyName = () => {
  let userInput = document.getElementById("enter-name").value;
  if (userInput === "") {
    alert("Please enter a name.");
  }
};

document.getElementById("button1").addEventListener("click", (event) => {
  emptyName();
  event.preventDefault();
})

document.getElementById("svg1").addEventListener("click", () => {
  displayChoice('rock');
});

document.getElementById("svg2").addEventListener("click", () => {
  displayChoice("paper");
});

document.getElementById("svg3").addEventListener("click", () => {
  displayChoice("scissors");
});


