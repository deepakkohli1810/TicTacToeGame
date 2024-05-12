let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset-btn");
let newGamebtn = document.querySelector("#new-btn");
let msgContianer = document.querySelector(".msg-container"); 
let msg = document.querySelector("#msg")

let turnO = true; 

const winpattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const resetBtn = ()=>{
    turnO = true  ; 
    ensableBtn();
    msgContianer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click", () =>{

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true; 
        checkWinner();
    });
});

const disableBtn = ()=>{
    for(let box of boxes){
        box.disabled = true; 
    }
}

const ensableBtn = ()=>{
    for(let box of boxes){
        box.disabled = false; 
        box.innerText= "";

    }
}

const showWinner = (winner)=>{
    msg.innerText = `Congratulation, Winner is ${winner} `;
    msgContianer.classList.remove("hide");
    disableBtn();

}

const checkWinner = ()=>{
    for(let patterns of winpattern)
    {
            let posVal1 = boxes[patterns[0]].innerText;
            let posVal2 = boxes[patterns[1]].innerText;
            let posVal3 = boxes[patterns[2]].innerText;
          if( posVal1 !="" && posVal2 != "" && posVal3 !="" ){
            if (posVal1 == posVal2 && posVal2 == posVal3){
              
                showWinner(posVal1);
            }
          }
    }

}

reset.addEventListener("click", resetBtn);
newGamebtn.addEventListener("click",resetBtn);