import './../scss/main.scss';
import UI from './classes/UI';

const ulEl = document.querySelector('ul');
const num1El = document.getElementById('num1');
const num2El = document.getElementById('num2');
const typeEl = document.getElementById('type');
const addEl = document.getElementById('add');
const selectEl = document.getElementById('level');

const uiCL = new UI(ulEl, num1El, num2El, typeEl, addEl);

////////////////
ulEl.addEventListener('click', (e) => {
  const level = selectEl.value;
  const target = e.target;
  const status = target.closest('li').textContent.toLowerCase();

  uiCL.changeLiClass(target).getMath(status, level, 5);
});

selectEl.addEventListener('change', (e) => {
  const value = e.target.value;
  // console.log(value);
});
