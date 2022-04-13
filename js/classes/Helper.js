import { maxMin } from './config';

export default class Helper {
  static arr = [];
  static tempArr = maxMin;

  between() {
    return (
      Math.floor(Math.random() * (Helper.tempArr[0] - Helper.tempArr[1] + 1)) +
      Helper.tempArr[1]
    );
  }

  randomTwoNums() {
    if (Helper.arr.length < 2) {
      const num = this.between();
      if (!Helper.arr.includes(num)) Helper.arr.push(num);
      this.randomTwoNums();
    }

    return Helper.arr;
  }
}
