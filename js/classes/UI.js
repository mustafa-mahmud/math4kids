import Sum from './Sum';

export default class UI extends Sum {
  constructor(ulEl, num1El, num2El, typeEl, addEl) {
    super();

    this.ulEl = ulEl;
    this.num1El = num1El;
    this.num2El = num2El;
    this.typeEl = typeEl;
    this.addEl = addEl;
  }

  callMath(e) {
    const target = e?.target ? e.target : this.addEl;
    const status = target.dataset.status;

    this.changeLiClass(target);
    this.ckMathMethod(status);
  }

  changeLiClass(target) {
    //remove current class
    this.ulEl
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('current'));

    //add current class
    target.classList.add('current');
  }

  ckMathMethod(status) {
    if (status === 'add') {
      const sum = this.addCL.add();
      this.displayUI(sum, '+');
    }
    if (status === 'sub') this.subCL.sub();
    if (status === 'mul') this.mulCL.mul();
    if (status === 'div') this.divCL.div();
  }

  displayUI(sum, status) {}
}
