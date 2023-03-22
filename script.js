let winCombs = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

let player = "X";
let countForDraw = 0;

const boxes = document.querySelectorAll(".cell");
const resultMessage = document.getElementById("winning-message");
const winningMessageTextElement = document.getElementById("winning-message-text")

boxes.forEach(box => {
    box.addEventListener("click", () => {
        if (box.textContent == "") {
            box.textContent = player;

            if (gameStatus(boxes)) {
                displayResult(player)
            } else if (countForDraw == 8) {
                displayResult("Draw")
            }

            countForDraw++;
            switchTurns()
        }
    })
});

function gameStatus(boxes) {
    for (let comb of winCombs) {
        if (boxes[comb[0]].textContent == boxes[comb[1]].textContent && 
            boxes[comb[1]].textContent == boxes[comb[2]].textContent && 
            boxes[comb[0]].textContent != "") {
            return true;
        }
    }
};

function switchTurns() {
    if (player === "X") {
        player = "O";
    } else {
        player = "X";
    }
};

function resetBtn() {
    resultMessage.classList.remove('show')

    countForDraw = 0;
    boxes.forEach(box => {
        box.textContent = "";
    })
}

function displayResult(result) {
    if (result === "Draw") {
        winningMessageTextElement.textContent = "It's a Draw"
    } else {
        winningMessageTextElement.textContent = `${result}'s Wins!`
    }

    resultMessage.classList.add('show')
};