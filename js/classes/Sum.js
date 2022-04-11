import Add from './Add';
import Sub from './Sub';
import Mul from './Mul';
import Div from './Div';

export default class Sum {
  constructor() {
    this.addCL = new Add();
    this.subCL = new Sub();
    this.mulCL = new Mul();
    this.divCL = new Div();
  }
}
