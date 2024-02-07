let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let msgContainer=document.querySelector("#newbtn");
let msg = document.getElementById('msg');
let turn0=true;
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,7],
    [1,4,7],
    [2,6,8],
    [2,4,6],
];
let draw=true;
boxes.forEach((box) => {
  box.addEventListener("click",() =>{
     console.log("box was clicked");
     if(turn0){
        box.innerText="X";
        box.style.color='red';
        turn0=false;
     }else{
        box.innerText="0";
        box.style.color='blue';
        turn0=true;
     }
     box.disabled=true;

     checkWinner();
  })
})
const reset = () => {
    turn0=true;
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
}
const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msg.style.display = 'block'; 
    for(let box of boxes){
        box.disabled=true;
    }
}
const checkWinner = () => {
    for(pattern of winPatterns){
        // console.log(pattern[0], pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]], boxes[pattern[1]],boxes[pattern[2]]);
        if(boxes[pattern[0]].textContent!="" && boxes[pattern[1]].textContent!="" && boxes[pattern[2]].textContent!=""){
            if (boxes[pattern[0]].textContent == boxes[pattern[1]].textContent &&
                boxes[pattern[1]].textContent == boxes[pattern[2]].textContent) {
                // console.log("winner", boxes[pattern[0]].textContent);
                draw=false;
                showWinner(boxes[pattern[0]].textContent);
            }
        }
       
    }
}
if(draw && Array.from(boxes).every(box => box.textContent !== "")){
    msg.innerText='Game is draw';
    msg.style.display = 'block';
}
resetBtn.addEventListener("click",reset);
msgContainer.addEventListener("click",reset);
