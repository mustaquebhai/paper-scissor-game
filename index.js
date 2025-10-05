let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg1");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");
const genCompChoice=()=>{
    const options=["paper","rock","scissor"];
    const randomNum=Math.floor(Math.random()*3);
    return options[randomNum];
};
const drawGame=()=>{
    console.log("game draw!");
    msg.innerText="Game Draw!";
    msg.style.backgroundColor="blue";
};
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        console.log("you win");
        msg.innerText="you win !";
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        console.log("you lose");
        msg.innerText="you lose❌";
        msg.style.backgroundColor="red";
    }
};
const playgame=(userChoice)=>{
    console.log("userchoice",userChoice);
    const compChoice=genCompChoice();
    console.log("compchoice",compChoice);
    if(userChoice==compChoice){
        //draw
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissore,paper
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice=="paper"){
            //rock,scissor
            userWin=compChoice==="scissor"?false:true;
        }else if(userChoice=="scissor"){
            //rock,paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin);
    }
};
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener('click',()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playgame(userChoice);
    })
})