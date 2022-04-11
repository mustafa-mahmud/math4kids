import Sum from './Sum';
import { maxNum } from './config';

export default class UI extends Sum {
  constructor(ulEl) {
    super();

    this.ulEl = ulEl;

    this.addCL.add(maxNum);
  }

  callMath(e) {
    const target = e.target;
    const status = target.dataset.status;

    this.changeLiClass(target);

    if (status === 'add') this.addCL.add(maxNum);
    if (status === 'sub') this.subCL.sub(maxNum);
    if (status === 'mul') this.mulCL.mul(maxNum);
    if (status === 'div') this.divCL.div(maxNum);
  }

  changeLiClass(target) {
    //remove current class
    this.ulEl
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('current'));

    //add current class
    target.classList.add('current');
  }
}
