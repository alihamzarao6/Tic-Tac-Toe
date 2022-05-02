console.log('Welcome to Tic Tac Toe');

let music = new Audio("tunes/music.mp3");
let turnAudio = new Audio("tunes/ting.mp3");
let gameOver = new Audio("tunes/gameover.mp3");
let turn = "X";
let isgameover = false;


// Function to change Turn
const changeTurn = () => {
    return turn === "X" ? "0" : "X";
};

// Function to check for a Win
const checkWin = () => {
    let boxText = document.getElementsByClassName("boxText");
    let wins = [
        [0, 1, 2, 5, 5.7, 180],
        [3, 4, 5, 5, 17.8, 180],
        [6, 7, 8, 5, 29.9, 180],
        [0, 3, 6, -7, 17.8, 90],
        [1, 4, 7, 5, 17.8, 90],
        [2, 5, 8, 17, 17.8, 90],
        [0, 4, 8, 4.8, 17.7, 45],
        [2, 4, 6, 5, 18, -45]
    ]
    wins.forEach(e => {
        if ((boxText[e[0]].innerText === boxText[e[1]].innerText) && (boxText[e[2]].innerText === boxText[e[1]].innerText) && (boxText[e[0]].innerText !== "")) {
            document.querySelector(".info").innerText = boxText[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "200px";
            document.querySelector(".line").style.width = `26vw`;
            document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`;
        }
    });
};

// Game Logic
// music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach((element) => {
    let boxText = element.querySelector(".boxText");
    element.addEventListener('click', () => {
        if (boxText.innerText === "") {
            boxText.innerText = turn;
            turn = changeTurn();
            turnAudio.play();
            checkWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

// Add onclick listener to Reset Buuton
let reset = document.getElementById("reset");
reset.addEventListener('click', () => {
    let boxTexts = document.querySelectorAll(".boxText");
    Array.from(boxTexts).forEach(element => {
        element.innerText = "";
    });
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector(".imgBox").getElementsByTagName("img")[0].style.width = "0"
    document.querySelector(".line").style.width = `0`;



})

