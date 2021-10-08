// Prequesites


let canvas = document.getElementById('content');
let ctx = canvas.getContext('2d');
// ctx.moveTo(300,300);
// ctx.lineTo(600,300);
// ctx.lineTo(600,600);
// ctx.lineTo(300,600);
// ctx.closePath();

// ctx.moveTo(400,400);
// ctx.lineTo(700,400);
// ctx.lineTo(700,650);
// ctx.lineTo(400,650);
// ctx.closePath();

// ctx.moveTo(300,300);
// ctx.lineTo(400,400);

// ctx.moveTo(600,300);
// ctx.lineTo(700,400);

// ctx.moveTo(300,600);
// ctx.lineTo(400,650);

// ctx.moveTo(600,600);
// ctx.lineTo(700,650);







// ctx.beginPath();
// ctx.arc(300,300,80,0,Math.PI*2,false);


// ctx.arc(200,200,80,0,Math.PI*2,false);
ctx.beginPath();

ctx.moveTo(50,50);
ctx.lineTo(50,700);
ctx.lineTo(1000,700);

ctx.stroke();

ctx.beginPath();
ctx.moveTo(50,700);

let demo = [300,400,100,500,150,200,350];

let xL=200;

for (let i = 0; i < demo.length; i++) {

    let yL= 700-demo[i];
    
    ctx.lineTo(xL,yL);
    ctx.fillText(demo[i],xL,yL-25);
    xL +=100;
    
}


ctx.stroke();


ctx.moveTo(50,700);
let xP=200;

for (let i = 0; i < demo.length; i++) {
    ctx.beginPath(); //new one will not create a path with previous one, everytime there is new path
    let yP= 700-demo[i];
    ctx.arc(xP,yP,6,0,Math.PI*2,false);
    xP +=100;
    ctx.stroke();
}

