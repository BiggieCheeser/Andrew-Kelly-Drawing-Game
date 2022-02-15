import {width, canvas, ctx, drawTriangle } from './canvas'

export let controlBox : HTMLDivElement = document.querySelector('#controls');
controlBox.style.width = `${width}px`

export function makeButton (name : string) {
  let button = document.createElement("button");
  button.innerText = name;
  controlBox.appendChild(button);
  return button;
}

export function makeButton2 (name : string) {
  let button = document.createElement("button");
  button.innerText = name;
  controlBox.appendChild(button);
  return button;
}

import {drawSquare} from "./canvas";


