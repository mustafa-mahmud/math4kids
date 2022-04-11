import Sum from './Sum';

export default class UI extends Sum {
  constructor() {
    super();

    this.addCL.add();
    this.subCL.sub();
    this.mulCL.mul();
    this.divCL.div();
  }
}
