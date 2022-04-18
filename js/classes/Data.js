import { maxMin } from './config';

class Data {
  static allData = {
    maxMin,
    status: '+',
    totalNums: 2,
    question: [],
    answer: null,
    possibleAns: [],
    randomIndex: [],
    result: {
      totalClicked: 0,
      wrong: 0,
      correct: 0,
    },
  };
}

export default Data;
