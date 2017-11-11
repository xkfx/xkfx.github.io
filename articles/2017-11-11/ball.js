// Create the canvas
var canvas = document.createElement("canvas"); // 创建一个画布
var ctx = canvas.getContext("2d"); // 可以把ctx理解成一支画笔！
canvas.width = 1024;
canvas.height = 768;
document.body.appendChild(canvas);

// DRAW THE BALL
ctx.fillStyle="crimson";
ctx.beginPath();
ctx.arc(300,400,250,0,Math.PI*2,true);
//绘制弧线，使用arc(x,y,radius,startAngle,endAngle,counterclockwise)方法  
//以(x,y)为圆心绘制一条弧线，弧线半径为radius，起始和结束角度（用弧度表示）分别为startAngle  
//和endAngle。最后一个参数表示是否按逆时针方向计算，值为false表示顺时针方向计算。
//内容来自http://blog.csdn.net/qq_27626333/article/details/51595138！
ctx.closePath();
ctx.fill();