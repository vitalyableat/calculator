export class ModCommand {
  execute(currentValue) {
    return currentValue / 100
  }

  undo(currentValue) {
    return currentValue * 100
  }
}