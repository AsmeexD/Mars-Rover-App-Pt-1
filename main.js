var canvas=document.getElementById("myCanvas");
ctx= canvas.getContext ("2d");

var bgimg = "mars.jpg";
var roverimg ="rover.png";

var roverX = 10;
var roverY = 10;
var roverW = 100;
var roverH =100;

function add(){
    bgimg_Tag = new Image();
    bgimg_Tag.onload = upload_background;
    bgimg_Tag.src = bgimg;


    roverimg_Tag = new Image();
    roverimg_Tag.onload = upload_rover;
    roverimg_Tag.src = roverimg;
}

function upload_background(){
    ctx.drawImage(bgimg_Tag, 0, 0, canvas.width, canvas.height);
}

function upload_rover(){
    ctx.drawImage(roverimg_Tag, roverX,roverY, roverW, roverH);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e){
    ASCIIvalue = e.keyCode;

    if(ASCIIvalue == "37"){
        console.log("left");
        left();
    }
    if(ASCIIvalue == "38"){
        console.log("up");
        up();
    }
    if(ASCIIvalue == "39"){
        console.log("right");
        right();
    }
    if(ASCIIvalue == "40"){
        console.log("down");
        down();
    }
    
}
