

import {ctx, canvas} from './canvas';
import {makeButton} from './controls';

let sampleButton = makeButton("Square");
let Button = makeButton("Triangle");
let Button3 = makeButton("Circle");
let clearButton = makeButton("Clear");
let Button4 = makeButton("Blue");
let Button5 = makeButton("Red");
let Button6 = makeButton("Black");
let Button7 = makeButton ("Lean");
let Button8 = makeButton ("Yellow")
let Button9 = makeButton ("Green")
let Button10 = makeButton ("Orange")
let Button11 = makeButton ("Pink")
let Button12 = makeButton ("Erase")


import {drawSquare} from './canvas';
import {drawTriangle} from './canvas';
import {drawCircle} from './canvas'

Button3.addEventListener(
  "click",
  function (event){
    tool =drawCircle
  }
)

Button4.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "blue"
    ctx.fillStyle = "blue"
  }
)

Button5.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "red"
    ctx.fillStyle = "red"
  }
)

Button6.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "black"
    ctx.fillStyle = "black"
  }
)

Button7.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "purple"
    ctx.fillStyle = "purple"
  }
)

Button8.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "Yellow"
    ctx.fillStyle = "Yellow"
  }
)

Button9.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "Green"
    ctx.fillStyle = "Green"
  }
)

Button10.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "Orange"
    ctx.fillStyle = "Orange"
  }
)

Button11.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "Pink"
    ctx.fillStyle = "Pink"
  }
)

Button12.addEventListener(
  "click",
  function (event){
    ctx.strokeStyle = "White"
    ctx.fillStyle = "White"
  }
)

Button.addEventListener(
  "click",
  function (event){
    tool = drawTriangle
  }
);

sampleButton.addEventListener(
  "click",
  function (event){
    tool = drawSquare
  }
);

clearButton.addEventListener(
  "click",
  function () {
    ctx.clearRect(
      0,0,canvas.width,canvas.height
    )
  }
)

let tool = null;

canvas.addEventListener(
  "mousemove",
  function (event){
    if (event.buttons ===1 && tool) {
      tool (event.offsetX,event.offsetY);
      ctx.stroke();
    }
  }
);






ctx.stroke();

