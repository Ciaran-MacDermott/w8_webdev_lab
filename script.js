document.getElementById("play").onclick = function() {
	const choices = ["rock", "paper", "scissors"];
    const userRound = document.getElementById("userRound").value;
    const compChoice = choices[Math.floor(Math.random() * 3)];
	
	//initialiser
    let result = "";

	//merged game winning logic
    if (userRound === compChoice) {
        result = "Tie, refresh the page to play again";
    } else if (
        (userRound === "rock" && compChoice === "scissors") ||
        (userRound === "paper" && compChoice === "rock") ||
        (userRound === "scissors" && compChoice === "paper")
    ) {
        result = "You win";
    } else {
        result =  "You lose sorry";
    }


    alert(result);
};
