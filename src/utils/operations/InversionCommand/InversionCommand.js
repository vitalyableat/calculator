export class InversionCommand {
  execute(currentValue) {
    return -currentValue
  }

  undo(currentValue) {
    return -currentValue
  }
}