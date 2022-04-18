import Data from './Data';
import Sum from './Sum';

export default class UI extends Sum {
  constructor(
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
  ) {
    super();

    this.ulEl = ulEl;
    this.num1El = num1El;
    this.num2El = num2El;
    this.typeEl = typeEl;
    this.addEl = addEl;
    this.answerOptionEl = answerOptionEl;
    this.wrongEl = wrongEl;
    this.clickedEl = clickedEl;
    this.correctEl = correctEl;
    this.selectEl = selectEl;
  }

  changeLiClass(target) {
    //remove current class
    this.ulEl
      .querySelectorAll('li')
      .forEach((li) => li.classList.remove('current'));

    //add current class
    target.classList.add('current');
  }

  displayUI() {
    this.num1El.textContent = Data.allData.question[0];
    this.num2El.textContent = Data.allData.question[1];
    this.typeEl.textContent = Data.allData.status;
    this.correctEl.textContent = Data.allData.result.correct;
    this.wrongEl.textContent = Data.allData.result.wrong;
    this.clickedEl.textContent =
      Data.allData.result.correct + Data.allData.result.wrong;

    this.answerOptionEl.innerHTML = ``;
    Data.allData.randomIndex.forEach((index) => {
      this.createAnswerOptions(Data.allData.possibleAns[index]);
    });
  }

  createAnswerOptions(ans) {
    const div = document.createElement('div');
    div.classList.add('options');
    div.style.backgroundColor = '#666';
    div.innerHTML = `<h1 data-answer="${ans}">${ans}</h1>`;

    this.answerOptionEl.appendChild(div);
  }

  checkResult(target, ans) {
    const resultBool = Data.allData.answer === ans;

    if (resultBool) {
      target.style.backgroundColor = 'green';
      Data.allData.result.correct++;

      setTimeout(() => {
        this.initMath();
      }, 1000);
    }

    if (!resultBool) {
      target.style.backgroundColor = 'red';
      Data.allData.result.wrong++;

      setTimeout(() => {
        this.initMath();
      }, 1000);
    }

    this.answerOptionEl
      .querySelectorAll('.options')
      .forEach((option) => (option.style.pointerEvents = 'none'));
  }

  getStatus() {
    let status = null;
    this.ulEl.querySelectorAll('li').forEach((li) => {
      if (li.classList.contains('current'))
        status = li.getAttribute('data-status');
    });

    return status;
  }

  initMath() {
    const level = this.selectEl.value;
    const status = this.getStatus();
    this.getMath(level, status);
    this.displayUI();
  }
}
