export class PercentageCommand {
  execute(currentValue) {
    return currentValue / 100
  }

  undo(currentValue) {
    return currentValue * 100
  }
}