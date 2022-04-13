import Data from './Data';

export default class Sum {
  doMath(status) {
    Data.randomTwoNums();
    console.log(Data.arr);
    /* if (status === 'add') console.log('123');
    if (status === 'subtract') console.log('456');
    if (status === 'multiply') console.log('789');
    if (status === 'divide') console.log('147'); */
  }
}
