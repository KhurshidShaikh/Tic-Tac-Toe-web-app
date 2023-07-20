document.addEventListener('DOMContentLoaded', function () {
let winnaudio=new Audio('success-1-6297.mp3');
let tapaudio=new Audio('snd_fragment_retrievewav-14728.mp3');
    var box = document.getElementsByClassName('box');
    var reset = document.getElementById('reset');
    var show = document.getElementById('show');
    var win = [[0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ];
    let boxes = Array.from(box)
    let x = "X";
    let o = "O";
    let turn = x;
    let filled = 0;
    let iswin = false;
    function restart() {                   //restarts the game
        show.innerText = "New Game";
        boxes.forEach(function (element) {
            element.addEventListener("click", play)
            element.innerText = "";
            element.style.backgroundColor="white";
            turn = x;
            filled = 0;
            iswin = false;
        });
    }

    function play() {
        if (this.innerText == "" && turn == x) {
            this.innerText = turn;
            tapaudio.play();
            turn = o;
            show.innerText = "O Turn";
            filled++;
        }
        if (this.innerText == "" && turn == o) {
            this.innerText = "O";
            tapaudio.play();
            turn = x;
            show.innerText = "X Turn";
            filled++;
        }
        //wiining condition
        win.forEach((e) => {
            if (boxes[e[0]].innerText === boxes[e[1]].innerText && boxes[e[1]].innerText === boxes[e[2]].innerText && boxes[e[0]].innerText != "") {
                iswin = true;
                if (boxes[e[0]].innerText == x) {
                    show.innerText = "X HAS WON";
                }
                else {
                    show.innerText = "O HAS WON";
                }
                boxes[e[0]].style.backgroundColor="lightgreen"; 
                boxes[e[1]].style.backgroundColor="lightgreen"; 
                boxes[e[2]].style.backgroundColor="lightgreen";     
                winnaudio.play(); 
                //loop for stop playing after winning
                boxes.forEach(function (element) {
                    element.removeEventListener("click", play)
                });

            }

            //draw condition
            if (filled == 9 && boxes[e[0]].innerText != boxes[e[1]].innerText && boxes[e[1]].innerText != boxes[e[2]].innerText && boxes[e[0]].innerText != "") {
                show.innerText = "DRAW";

            }
        });


    }


    boxes.forEach(function (element) {
        element.addEventListener("click", play);
    });
    reset.addEventListener("click", restart);

});
