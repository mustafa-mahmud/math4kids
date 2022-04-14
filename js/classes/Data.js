import { maxMin } from './config';

class Data {
  constructor() {
    this.arr = [];
    this.tempArr = {
      maxMin,
      totalNums: 2,
      notBeInclude: 0,
      status: 'add',
    };
  }

  between() {
    return (
      Math.floor(
        Math.random() * (this.tempArr.maxMin[0] - this.tempArr.maxMin[1] + 1)
      ) + this.tempArr.maxMin[1]
    );
  }

  randomTwoNums() {
    if (this.arr.length < this.tempArr.totalNums) {
      const num = Math.abs(this.between());
      if (!this.arr.includes(num) && num !== this.tempArr.notBeInclude) {
        this.arr.push(num);
      }

      this.randomTwoNums();
    }

    return this.arr.sort((a, b) => b - a);
  }
}

export default new Data();
