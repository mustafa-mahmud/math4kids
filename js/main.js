import './../scss/main.scss';
import UI from './classes/UI';

const ulEl = document.querySelector('ul');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const typeEl = document.getElementById('type');
const addEl = document.getElementById('add');
const selectEl = document.getElementById('level');
const answerOptionEl = document.getElementById('answer-options');
const wrongEl = document.getElementById('wrong');
const clickedEl = document.getElementById('clicked');
const correctEl = document.getElementById('correct');

const uiCL = new UI(
  ulEl,
  num1El,
  num2El,
  typeEl,
  addEl,
  answerOptionEl,
  wrongEl,
  clickedEl,
  correctEl,
  selectEl
);

////////////////
ulEl.addEventListener('click', (e) => {
  const target = e.target;

  uiCL.changeLiClass(target);
  uiCL.initMath();
});

answerOptionEl.addEventListener('click', (e) => {
  const target = e.target.closest('.options');

  if (!target) return;

  const ans = +target.querySelector('h1').getAttribute('data-answer');

  uiCL.checkResult(target, ans);
});

uiCL.initMath();
