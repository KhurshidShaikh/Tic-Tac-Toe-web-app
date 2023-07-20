document.addEventListener('DOMContentLoaded', function () {
let winnaudio=new Audio('success-1-6297.mp3');
let tapaudio=new Audio('snd_fragment_retrievewav-14728.mp3');
let box=document.getElementsByClassName('box');
let reset=document.getElementById('reset');
var show = document.getElementById('show');
let user="X";
let computer="O";
let turn=user;
let boxes = Array.from(box)
var filled=0;
var gameover=false;
function restart(){
boxes.forEach(function(element){
    show.innerHTML="New Game";
element.innerText="";
element.style.backgroundColor="white";
element.addEventListener("click",game);
gameover=false;
turn =user;
filled=0;
});
}

function computermove(){
  if(gameover){
    return;
  }
var emptyBoxes = [];
  for (var i = 0; i < boxes.length; i++) {
    if (boxes[i].innerHTML === "") {
      emptyBoxes.push(i);
    }
  }
  if (emptyBoxes.length === 0) {
    return;
  }
  var random=Math.floor(Math.random()*emptyBoxes.length);
  let randombox=emptyBoxes[random];
    if(turn==computer &&  boxes[randombox].innerHTML==""){
    boxes[randombox].innerHTML=computer;
    tapaudio.play();
    emptyBoxes.splice(random, 1);
    turn=user;
    filled++;
 
}
  
}
function checkwin(){
    var win = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];

    win.forEach((e)=>{
    if(boxes[e[0]].innerHTML===boxes[e[1]].innerHTML && boxes[e[1]].innerHTML===boxes[e[2]].innerHTML && boxes[e[0]].innerHTML!==""){ 
      if(boxes[e[0]].innerHTML==user){
            //user wins
            show.innerHTML="You Win !";
        }
        else{
            //comp wins
            show.innerHTML="Computer Win !";
        }
        boxes[e[0]].style.backgroundColor="lightgreen"; 
        boxes[e[1]].style.backgroundColor="lightgreen"; 
        boxes[e[2]].style.backgroundColor="lightgreen"; 
        winnaudio.play(); 
        gameover=true;
        boxes.forEach(function (element){
          element.removeEventListener("click",game);
        });
      }

    });
    if(filled==9 && !gameover){
      show.innerHTML="It's a Draw";
  }  


}

function game(){
  if(this.innerText=="" && turn==user){
    this.innerText=user;
    tapaudio.play();
    turn=computer;
    filled++;
    }
    checkwin();
    if(!gameover){
    computermove();
    checkwin();
    }
}





boxes.forEach(function (element){
element.addEventListener("click",game);
});

reset.addEventListener("click",restart);



});