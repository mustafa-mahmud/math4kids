import Data from './Data';
import Helper from './Helper';
import { maxMin } from './config';

export default class Sum {
  getMath(level, status) {
    Data.allData.question = [];
    Data.allData.answer = null;
    Helper.initData(level, status);
    //question need = [50,45] (add)
    Helper.randomNums('question');
    //answer need = 95
    this.getAnswer(status);

    Helper.initData(level, status);
    Data.allData.possibleAns = [];
    //possible answer need = [90,95,94] (basic)
    Helper.randomNums('possibleAns');
    Data.allData.possibleAns.push(Data.allData.answer);
    Data.allData.randomIndex = [];
    Helper.getRandomIndex();
  }

  getAnswer(status) {
    if (status === '+')
      Data.allData.answer = Data.allData.question[0] + Data.allData.question[1];
    if (status === '-')
      Data.allData.answer = Data.allData.question[0] - Data.allData.question[1];
    if (status === '*')
      Data.allData.answer = Data.allData.question[0] * Data.allData.question[1];
    if (status === '/') {
      const answer = Data.allData.question[0] / Data.allData.question[1];

      if (!Number.isInteger(answer)) {
        Data.allData.question = [];
        Helper.randomNums();
        this.getAnswer('/');
      } else {
        Data.allData.answer = answer;
      }
    }
  }
}
