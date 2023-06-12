window.onload = inicio;
function inicio(){
    btn1.addEventListener("click", jugada);
    btn2.addEventListener("click", jugada);
    btn3.addEventListener("click", jugada);
    btn4.addEventListener("click", jugada);
    btn5.addEventListener("click", jugada);
    btn6.addEventListener("click", jugada);
    btn7.addEventListener("click", jugada);
    btn8.addEventListener("click", jugada);
    btn9.addEventListener("click", jugada);
    btn1.style.backgroundImage = null;
    btn2.style.backgroundImage = null;
    btn3.style.backgroundImage = null;
    btn4.style.backgroundImage = null;
    btn5.style.backgroundImage = null;
    btn6.style.backgroundImage = null;
    btn7.style.backgroundImage = null;
    btn8.style.backgroundImage = null;
    btn9.style.backgroundImage = null;
    btn1.style.backgroundImage = 1;
    btn2.style.backgroundImage = 2;
    btn3.style.backgroundImage = 3;
    btn4.style.backgroundImage = 4;
    btn5.style.backgroundImage = 5;
    btn6.style.backgroundImage = 6;
    btn7.style.backgroundImage = 7;
    btn8.style.backgroundImage = 8;
    btn9.style.backgroundImage = 9;
    document.getElementById("turno").style.backgroundImage = x;
    bool = 0;
    turn = 0;
}
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const btn5 = document.getElementById("btn5");
const btn6 = document.getElementById("btn6");
const btn7 = document.getElementById("btn7");
const btn8 = document.getElementById("btn8");
const btn9 = document.getElementById("btn9");
var x = "url('x.png')";
var o = "url('O.png')";
var bool = 0;
var turn = 0;
function jugada(){
    if(bool == 0){ 
        this.style.backgroundImage = x;
        this.removeEventListener("click", jugada);
        document.getElementById("turno").style.backgroundImage = o;
        bool = 1;
    }else if(bool == 1){ 
        this.style.backgroundImage = o;
        this.removeEventListener("click", jugada);
        document.getElementById("turno").style.backgroundImage = x;
        bool = 0;
    };
    if (turn >= 4){fin()}
    turn++;
    console.log("done");
}
const v = "#60f542";
function fin(){
    if (btn1.style.backgroundImage === btn2.style.backgroundImage && btn2.style.backgroundImage === btn3.style.backgroundImage){remove(); console.log("win x");}
    if (btn4.style.backgroundImage === btn5.style.backgroundImage && btn5.style.backgroundImage === btn6.style.backgroundImage){remove(); console.log("win x");}
    if (btn7.style.backgroundImage === btn8.style.backgroundImage && btn8.style.backgroundImage === btn9.style.backgroundImage){remove(); console.log("win x");}
    if (btn1.style.backgroundImage === btn4.style.backgroundImage && btn4.style.backgroundImage === btn7.style.backgroundImage){remove(); console.log("win x");}
    if (btn2.style.backgroundImage === btn5.style.backgroundImage && btn5.style.backgroundImage === btn8.style.backgroundImage){remove(); console.log("win x");}
    if (btn3.style.backgroundImage === btn6.style.backgroundImage && btn6.style.backgroundImage === btn9.style.backgroundImage){remove(); console.log("win x");}
    if (btn3.style.backgroundImage === btn5.style.backgroundImage && btn5.style.backgroundImage === btn7.style.backgroundImage){remove(); console.log("win x");}
    if (btn1.style.backgroundImage === btn5.style.backgroundImage && btn5.style.backgroundImage === btn9.style.backgroundImage){remove(); console.log("win x");}
}
function remove(){
    btn1.removeEventListener("click", jugada);
    btn2.removeEventListener("click", jugada);
    btn3.removeEventListener("click", jugada);
    btn4.removeEventListener("click", jugada);
    btn5.removeEventListener("click", jugada);
    btn6.removeEventListener("click", jugada);
    btn7.removeEventListener("click", jugada);
    btn8.removeEventListener("click", jugada);
    btn9.removeEventListener("click", jugada);
}