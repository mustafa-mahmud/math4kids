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

  changeLiClass(target) {
    //remove current class
    this.ulEl
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('current'));

    //add current class
    target.classList.add('current');

    return this;
  }

  displayUI(sum, status) {}
}
