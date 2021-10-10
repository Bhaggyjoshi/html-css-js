// // Prequesites


// let canvas = document.getElementById('content');
// let ctx = canvas.getContext('2d');
// // ctx.moveTo(300,300);
// // ctx.lineTo(600,300);
// // ctx.lineTo(600,600);
// // ctx.lineTo(300,600);
// // ctx.closePath();

// // ctx.moveTo(400,400);
// // ctx.lineTo(700,400);
// // ctx.lineTo(700,650);
// // ctx.lineTo(400,650);
// // ctx.closePath();

// // ctx.moveTo(300,300);
// // ctx.lineTo(400,400);

// // ctx.moveTo(600,300);
// // ctx.lineTo(700,400);

// // ctx.moveTo(300,600);
// // ctx.lineTo(400,650);

// // ctx.moveTo(600,600);
// // ctx.lineTo(700,650);







// // ctx.beginPath();
// // ctx.arc(300,300,80,0,Math.PI*2,false);


// // ctx.arc(200,200,80,0,Math.PI*2,false);
// // ctx.beginPath();

// // ctx.moveTo(50,50);
// // ctx.lineTo(50,700);
// // ctx.lineTo(1000,700);

// // ctx.stroke();

// // ctx.beginPath();
// // ctx.moveTo(50,700);

// // let demo = [300,400,100,500,150,200,350];

// // let xL=200;

// // for (let i = 0; i < demo.length; i++) {

// //     let yL= 700-demo[i];
    
// //     ctx.lineTo(xL,yL);
// //     ctx.fillText(demo[i],xL,yL-25);
// //     xL +=100;
    
// // }


// // ctx.stroke();


// // ctx.moveTo(50,700);
// // let xP=200;

// // for (let i = 0; i < demo.length; i++) {
// //     ctx.beginPath(); //new one will not create a path with previous one, everytime there is new path
// //     let yP= 700-demo[i];
// //     ctx.arc(xP,yP,6,0,Math.PI*2,false);
// //     xP +=100;
// //     ctx.stroke();
// // }


// // BAR graph
// // ctx.beginPath();
// // xV = 10;
// // ctx.strokeStyle = "lightgreen";
// // for (let i = 0; i < 130; i++) {
// //     ctx.moveTo(xV,0);
// //     ctx.lineTo(xV, canvas.height);
    
// //     xV+=10;
// // }
// // ctx.stroke();

// // ctx.beginPath();
// // yH = 10;
// // ctx.strokeStyle = "lightgreen";
// // for (let i = 0; i < 80; i++) {
// //     ctx.moveTo(0,yH);
// //     ctx.lineTo(canvas.width, yH);
    
// //     yH+=10;
// // }
// // ctx.stroke();



// // ctx.beginPath();



// // ctx.moveTo(50,50);
// // ctx.lineTo(50,700);
// // ctx.lineTo(1000,700);
// // ctx.strokeStyle = "gray"
// // ctx.stroke();

// // ctx.beginPath();


// // let demo = [300,400,100,500,150,200,350];

// // let xL=200;
// // ctx.moveTo(200,700);
// // for (let i = 0; i < demo.length; i++) {

// //     let yL= 700-demo[i];
   
// //     ctx.lineTo(xL,yL);
    
// //     ctx.fillText(demo[i],xL-10,yL-20);
// //     xL +=100;
// //     ctx.moveTo(xL,700);
    
// // }
// // ctx.lineWidth = 30;
// // ctx.strokeStyle = 'blue';

// // ctx.stroke();

// // pie chart
// let data = [
//     {
//         subject:"C++",
//         marks :56,
//         color: "red"
//     },
//     {
//         subject:"Web Technolgy",
//         marks :90,
//         color: "yellow"
//     },
//     {
//         subject:"JAVA",
//         marks :98,
//         color: "green"
//     },
//     {
//         subject:"Python",
//         marks :89,
//         color: "blue"
//     },
//     {
//         subject:"C",
//         marks :69,
//         color: "#00ffff"
//     },
//     {
//         subject:"Data Science",
//         marks :72,
//         color: "magenta"
//     }

// ]
// let totalMarks = 0;
// data.map((subject)=>{
//     totalMarks += subject.marks;
// })
// console.log(totalMarks)
// // find angle using marks => (math.pi*2*marks)/totalmarks
// // 
// let startAngle = 0;
// for (let i = 0; i < data.length; i++) {
//     let endAngle = (Math.PI* 2 * data[i].marks) / totalMarks;
//     endAngle += startAngle;
//     ctx.beginPath();
//     ctx.moveTo(650, 400);
//     ctx.fillStyle = data[i].color;
//     ctx.strokeStyle= "white";
//     ctx.lineWidth = "6";
//     ctx.arc(650, 400,250,startAngle,endAngle,false);
    
//     ctx.closePath();
//     ctx.fill();
//     ctx.stroke();
        
//     startAngle = endAngle;
// }
// // doughnut chart
// ctx.beginPath();
// ctx.moveTo(canvas.width/2,canvas.heigth/2);
// ctx.fillStyle = "white";
// ctx.arc(650,400, 150,0,Math.PI*2,false);
// ctx.fill();
// ctx.stroke();