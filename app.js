let gameSeq = [];
let userSeq = [];

let start = false;
let level = 0;

let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];

document.addEventListener("dblclick", function () {
    if (start == false) {
        console.log("Double-click detected");

        start = true;
        levelUp();
    }
});

function btnflash(btn) {
    btn.classList.add("flshbtn");

    setTimeout(() => {
        btn.classList.remove("flshbtn");
    }, 250);
}

function levelUp() {
    userSeq = [];  // Clear user sequence for the new level
    level++;
    h2.innerHTML = `Level ${level}`;

    // Generate the random button
    let randomIndx = Math.floor(Math.random() * 4);  // Should be 4, not 3
    let randomColor = btns[randomIndx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    gameSeq.push(randomColor);
    console.log(gameSeq);

    btnflash(randomBtn);
}

function checkAns(idx) {
    if (userSeq[idx] == gameSeq[idx]) {
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Double-click to restart.`;  // Fixed the typo and added restart prompt
        restart()
    }
}

function useGame() {
    console.log("Button was pressed");

    let btn = this;
    btnflash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

// Access all buttons
let allBtn = document.querySelectorAll(".btn");

for (let btn of allBtn) {
    btn.addEventListener("click", useGame);
}

function restart(){
    start = false;
    gameSeq = [];
    userSeq = [];
    level = 0 ;
}
