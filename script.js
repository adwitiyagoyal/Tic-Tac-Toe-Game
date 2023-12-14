let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let  newGame = document.querySelector(".new");
let resultsContainer = document.querySelector(".winner");
let results = document.querySelector(".result")


let chanceX = true;

const winningPattern =[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

boxes.forEach((box) => {
    box.addEventListener("click" , () => {
        if(chanceX){
            box.innerText = 'X';
            chanceX = !chanceX;
        }
        else{
            box.innerText = 'O';
            chanceX = !chanceX;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for(let pattern of winningPattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

       if(pos1 !='' && pos2 !='' && pos3 !=''){
        if(pos1 === pos2 && pos2 === pos3){
            displayResult(pos1);
            diasbleBtn();
        }
       }
    }
}

const displayResult = ((winner) => {
    results.innerText = `Congratulation , Winner is ${winner}`;
    resultsContainer.classList.remove("hide");
})

const diasbleBtn = (() => {
    for(box of boxes){
        box.disabled = true;
    }
})

const resetGame = (() => {
    for(box of boxes){
        box.disabled = false;
        box.innerText='';
    }
    resultsContainer.classList.add("hide");
    chanceX = true;
})

newGame.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);
