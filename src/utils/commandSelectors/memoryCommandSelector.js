import {CALCULATOR, SCOREBOARD} from "../../const";

export const memoryCommandSelector = (command) => {
  switch (command) {
    case "MC":
      CALCULATOR.resetMemory()
      break
    case "M+":
      CALCULATOR.changeMemory(Number(SCOREBOARD.value))
      break
    case "M-":
      CALCULATOR.changeMemory(-Number(SCOREBOARD.value))
      break
    case "MR":
      SCOREBOARD.value = String(CALCULATOR.memory)
      break
  }
}