        let canvas = document.getElementById('content');
        let ctx = canvas.getContext('2d');

       

        // clearRect(x,y,width,height) => cut out the part of canvas which we want
        let x =20
        let dx =5;
        let y=100;
        let dy =5;
        function moveBall() {
                ctx.beginPath();
                ctx.clearRect(0,0,canvas.width,canvas.height);
                ctx.arc(x,y,20,0,Math.PI*2,false);
                ctx.fill();
                x += dx;
                y += dy;
                if(x >canvas.width || x<0){
                    dx =-dx
                }
                if(y>canvas.height || y<0){
                    dy =-dy
                }
            
           
            requestAnimationFrame(moveBall);
        }
        moveBall();

        