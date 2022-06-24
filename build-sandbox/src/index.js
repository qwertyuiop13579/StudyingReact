import Calc from "./calc";
import Log from "./log";

import img from './death-star.png';

const calc = new Calc();
const log = new Log();
log.log(calc.add(4, 5));

const imgEl = document.createElement('img');
imgEl.src = img;
document.body.appendChild(imgEl);