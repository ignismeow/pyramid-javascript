let trumpEl = document.getElementById("trumpScore")
let bidenEl = document.getElementById("bidenScore")
let compOne = document.getElementById("compOne")


let trumpScore = 0
let bidenScore = 0

// function newComp(){
//     let firstcomp = prompt("Enter your first competitor:");
//     if (firstcomp != null){
//         compOne.innerHTML = "<h3>{firstcomp}</h3>";
//     }
// }

function trumponePoint(){
    trumpScore += 1
    trumpEl.textContent = trumpScore
}
function trumpthreePoint(){
    trumpScore += 3
    trumpEl.textContent = trumpScore
}
function trumpfivePoint(){
    trumpScore += 5
    trumpEl.textContent = trumpScore
}
function bidenonePoint(){
    bidenScore += 1
    bidenEl.textContent = bidenScore
}
function bidenthreePoint(){
    bidenScore += 3
    bidenEl.textContent = bidenScore
}
function bidenfivePoint(){
    bidenScore += 5
    bidenEl.textContent = bidenScore
}


function resetbtn(){
    trumpEl.textContent = 0
    trumpScore = 0
    bidenScore = 0
    bidenEl.textContent = 0
}