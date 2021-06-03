const displayChoice = (value) => {
	document.getElementById("selection").innerHTML = `<br>You have selected ${value}, prepare for battle!`;
}

const emptyName = () => {
	let userInput = document.getElementById("enter-name").value;
	if(userInput === '') {
		alert('Please enter a name.');
		return false;
	}
}
