let app : HTMLDivElement = document.querySelector('#app');
export let canvas = document.createElement('canvas');
export let ctx = canvas.getContext('2d');
export let width = 1000;
export let height = 1000;
canvas.width = width;
canvas.height = height;
app.style.width = `${width}px`;
app.style.height = `${height}px`;
canvas.style.width = `${width}px`;
canvas.style.height = `${height}px`;

canvas.style.backgroundColor = "white"

app.appendChild(canvas);

export function drawTriangle(x,y){
  ctx.beginPath();
  ctx.moveTo(x,y)
  ctx.lineTo(x,y+10)
  ctx.lineTo(x+10,y)
  ctx.lineTo(x,y)
  ctx.fill();
}

export function drawCircle(x,y){
  ctx.beginPath();
  ctx.arc(x,y,5,0,Math.PI*2,)
  ctx.fill();
}

export function drawSquare( x , y ){
  ctx.beginPath();
  ctx.moveTo(x,y);
  ctx.lineTo(x+10,y);
  ctx.lineTo(x+10,y+10);
  ctx.lineTo(x,y+10)
  ctx.lineTo(x,y);
  ctx.fill();
}

ctx.stroke();