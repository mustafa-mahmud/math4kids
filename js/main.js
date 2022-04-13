import './../scss/main.scss';
import UI from './classes/UI';

const ulEl = document.querySelector('ul');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const typeEl = document.getElementById('type');
const addEl = document.getElementById('add');

const uiCL = new UI(ulEl, num1El, num2El, typeEl, addEl);

////////////////
uiCL.callMath();
ulEl.addEventListener('click', (e) => uiCL.callMath(e));
