import './../scss/main.scss';
import UI from './classes/UI';

const ulEl = document.querySelector('ul');

const ulCL = new UI(ulEl);

////////////////
ulEl.addEventListener('click', (e) => ulCL.callMath(e));
