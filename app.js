let gameSeq = [];
let userSeq = [];
let btns = ["Blue","Aqua","brown","cadetblue"];
let started = false;
let level = 0;
p = document.querySelector("p");
document.addEventListener("keypress",function(){
    if(started == false){
        console.log("Game started");
        started = true;
        levelup();
        
    }
});
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(() => {
        btn.classList.remove("flash");
    }, 250); 
};
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
};
function levelup(){
    userSeq =[];
    level++;
    p.innerText = `level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameSeq.push(randcolor);
    console.log(gameSeq);
    gameFlash(randbtn);

};
function checkAns(idx){
    if(userSeq[idx]==gameSeq[idx]){
        if(userSeq.length==gameSeq.length){
            setTimeout(levelup,1000);             
        }
    }
    else{
        p.innerText = `Game Over!.Your score was ${level}.Press any key to Restart`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){document.querySelector("body").style.backgroundColor = "Black";
    },250);  
        reset(); 
    }
    
};
function btnPress(){
    let btn = this;
    userFlash(btn);
    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length-1);
};


let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
