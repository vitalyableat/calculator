export class PowCommand {
  constructor(valueToPow) {
    this.valueToPow = valueToPow
  }

  execute(currentValue) {
    return currentValue ** this.valueToPow
  }

  undo(currentValue) {
    return currentValue ** (1 / this.valueToPow)
  }
}