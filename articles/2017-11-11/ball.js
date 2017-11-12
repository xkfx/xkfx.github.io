           var screenWidth = document.documentElement.clientWidth;
            var screenHeight = document.documentElement.clientHeight;
            
            var ball = document.createElement("div");
            
            ball.style.width = 124 + "px";
            ball.style.height = 124 + "px";
            
            ball.style.backgroundColor = "coral";
            ball.style.borderRadius = "50%";
            
            var X = Math.random()*screenWidth;
            var Y = Math.random()*screenHeight;
            ball.style.position = "absolute";
            ball.style.left = X + "px";
            ball.style.top = Y + "px";
            
            document.body.appendChild(ball);
            
            function repaint() {
                ball.style.left = X + "px";
                ball.style.top = Y + "px";
            }
            
            function moveUp() {
                Y--;
                repaint();
            }
            
            function moveDown() {
                Y++;
                repaint();
            }
            
            function moveLeft() {
                X--;
                repaint();
            }
            
            function moveRight() {
                X++;
                repaint();
            }
            
            addEventListener("keydown", function (e) {
                if (e.key == "ArrowUp") {
                    moveUp();
                }
                if (e.key == "ArrowDown") {
                    moveDown();
                }
                if (e.key == "ArrowLeft") {
                    moveLeft();
                }
                if (e.key == "ArrowRight") {
                    moveRight();
                }
            }, false);