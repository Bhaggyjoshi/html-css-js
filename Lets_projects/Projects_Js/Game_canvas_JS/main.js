        let score = 0;
        let scoreCounter = setInterval(()=>{
            score++;
            if(score == 50){
                dx = 6;
                dy =6;
                paddleSpeed = 30;
            }
            document.getElementById('score').innerText = score;
        },500)

        


        let canvas = document.getElementById('content');
        let ctx = canvas.getContext('2d');

       

        // clearRect(x,y,width,height) => cut out the part of canvas which we want
        let x =Math.floor(Math.random()*1000);
        let dx =3;
        let y=100;
        let dy =3;
        let paddleX = Math.floor(Math.random()*canvas.width-100);;
        let paddleY = canvas.height-30;

        let paddleSpeed = 10;
        function moveBall() {
            let anim =  requestAnimationFrame(moveBall);
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.arc(x,y,15,0,Math.PI*2,false);
                ctx.fill();
                x += dx;
                y += dy;
                if ((x>=paddleX && x<=(paddleX+200)) && y>=paddleY) {
                    dy = -dy;
                }

                if(x >canvas.width || x<0){
                    dx =-dx
                }
                if( y<0){
                    dy =-dy
                }
                if(y>=canvas.height){
                    cancelAnimationFrame(anim);
                    clearInterval(scoreCounter);
                }

                
                // creating paddle
                ctx.beginPath();
                ctx.fillStyle= "black";
                ctx.fillRect(paddleX,paddleY,200,20);
                ctx.fill();
           
           
        }
        moveBall();

        window.onkeydown = function (event) {
            // stopping paddle to move outside of canavas
            if(paddleX >= 0 && paddleX+200 <= canvas.width){
                if(event.keyCode == 37){
                    // moving paddle to left
                    paddleX -= paddleSpeed;
                }else if(event.keyCode == 39){
                    // moving paddle to right
                    paddleX += paddleSpeed;
                }
            }
            else if (paddleX <0) {
                paddleX =0;
            }else if (paddleX+200 >= canvas.width) {
                paddleX = canvas.width-200;
            }

            // console.log(event)
            
        }