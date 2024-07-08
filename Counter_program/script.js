const decreaseBtn = document.querySelector("#decreaseBtn");
const increaseBtn = document.querySelector("#increaseBtn");
const resetBtn = document.querySelector("#resetBtn");
const countlabel = document.querySelector("#count");

let count = 0;

increaseBtn.onclick = function () {
    count++;
    countlabel.textContent = count;
}

decreaseBtn.onclick = function () {
    count--;
    countlabel.textContent = count;
}

resetBtn.onclick = function () {
    count = 0;
    countlabel.textContent = count;
}
