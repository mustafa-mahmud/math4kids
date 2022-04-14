import Data from './Data';

export default class Sum {
  getMath(status, level, init) {
    Data.arr = [];
    Data.tempArr = {
      // ...Data.tempArr,
      maxMin: [90, 10],
      totalNums: +level,
      notBeInclude: 50,
      status: status,
    };

    console.log(Data.tempArr);
    Data.arr = Data.randomTwoNums();
    return Data.arr[0] - Data.arr[1];
  }
}
