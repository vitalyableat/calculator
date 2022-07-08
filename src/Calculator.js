import {MEM_VALUE} from "./consts";

export class Calculator {
  constructor() {
    this.value = 0
    this.history = []
    this.memory = 0
  }

  resetMemory() {
    this.memory = 0
    MEM_VALUE.innerHTML = this.memory
  }

  changeMemory(value) {
    this.memory += value
    MEM_VALUE.innerHTML = this.memory
  }

  resetValue(value) {
    this.value = value
  }

  executeCommand(command) {
    this.value = command.execute(this.value)
    this.history.push(command)
  }

  undo() {
    const command = this.history.pop()
    this.value = command.undo(this.value)
  }
}