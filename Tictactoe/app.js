let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#resetGame");
let newBtn = document.querySelector("#newGame");
let msg = document.querySelector("#msg");
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

const resetGame = () => {
    turnO = true;
    enableBox();
    msgContainer
}

let winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [1, 4, 7],
    [6, 7, 8],
]

box.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {
            box.innerText = "O";
            turnO = false;
        }else {  
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBox = () => {
    for (let boxes of box){
        boxes.disabled = true;
        boxes.innerText = "";
    }
};

const enableBox = () => {
    for (let boxes of box){
        box.disabled = false;
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratualations you are the ${winner}`
    msgContainer.classList.remove("hide");
    diableBox();
}

const checkWinner = () => {
    for(let pattern of winPattern) {
        let pos1val = box[pattern[0]].innerText;
        let pos2val = box[pattern[1]].innerText;
        let pos3val = box[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos2val != "")
            if (pos1val === pos2val === pos3val){
                showWinner();
            }
    }
};

newBtn.addEventListener("Click", resetGame)
resetBtn.addEventListener("Click", resetGame)
