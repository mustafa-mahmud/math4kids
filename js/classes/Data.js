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
      const num = this.between();
      if (!this.arr.includes(num)) this.arr.push(num);
      this.randomTwoNums();
    }
  }
}

export default new Data();
