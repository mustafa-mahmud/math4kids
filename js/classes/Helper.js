import Data from './Data';
import { maxMin } from './config';

class Helper {
  between() {
    return (
      Math.floor(
        Math.random() * (Data.allData.maxMin[0] - Data.allData.maxMin[1] + 1)
      ) + Data.allData.maxMin[1]
    );
  }

  randomNums(propertyName = 'question') {
    const looping = propertyName === 'question' ? 2 : Data.allData.totalNums;

    if (Data.allData[propertyName].length < looping) {
      const num = Math.abs(this.between());

      if (
        !Data.allData[propertyName].includes(num) &&
        Data.allData.answer !== num
      ) {
        Data.allData[propertyName].push(num);
      }

      this.randomNums(propertyName);
    } else {
      Data.allData[propertyName] = Data.allData[propertyName].sort(
        (a, b) => b - a
      );
    }
  }

  initData(level = 2, status = '+') {
    let newMaxMin = null;

    if (Data.allData.answer) {
      newMaxMin = [Data.allData.answer + 5, Data.allData.answer - 5];
    }

    Data.allData = {
      ...Data.allData,
      maxMin: newMaxMin ? newMaxMin : [maxMin[0] * level, maxMin[1] * level],
      status,
      totalNums: level,
    };
  }

  getRandomIndex() {
    const looping = Data.allData.possibleAns.length;

    if (Data.allData.randomIndex.length < looping) {
      const index = Math.floor(Math.random() * looping);

      if (!Data.allData.randomIndex.includes(index)) {
        Data.allData.randomIndex.push(index);
      }

      this.getRandomIndex();
    }
  }
}

export default new Helper();
