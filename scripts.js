const choices = ["rock", "paper", "scissors"];
let wins = 0;
let losses = 0;
let ties = 0;

document.querySelectorAll('.choice').forEach(item => {
    item.addEventListener('click', function() {
        clearSelection();
        this.classList.add('selected');
        const playerChoice = this.id;
        startComputerTurn(playerChoice);
    });
});

function clearSelection() {
    document.querySelectorAll('.choice').forEach(item => {
        item.classList.remove('selected');
    });
}

function startComputerTurn(playerChoice) {
    const computerChoiceImg = document.getElementById("computer-choice");
    let interval = setInterval(() => {
        const randomChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoiceImg.src = randomChoice + ".png";
    }, 500);

    setTimeout(() => {
        clearInterval(interval);
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        computerChoiceImg.src = computerChoice + ".png";
        determineWinner(playerChoice, computerChoice);
    }, 3000);
}

function determineWinner(playerChoice, computerChoice) {
    const result = document.getElementById("result");

    if (playerChoice === computerChoice) {
        result.textContent = "It's a tie!";
        ties++;
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result.textContent = "You win!";
        wins++;
    } else {
        result.textContent = "You lose!";
        losses++;
    }
    updateScore();
}

function updateScore() {
    document.getElementById("wins").textContent = wins;
    document.getElementById("losses").textContent = losses;
    document.getElementById("ties").textContent = ties;
}

document.getElementById("reset").addEventListener('click', () => {
    wins = 0;
    losses = 0;
    ties = 0;
    updateScore();
    document.getElementById("result").textContent = "Make your move!";
    document.getElementById("computer-choice").src = "question-mark.png";
});
