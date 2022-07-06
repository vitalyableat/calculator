import {CURRENT_STATE, SCOREBOARD} from "../../consts";

export const memoryOperations = (type, memory) => {
  switch (type) {
    case "MC":
      return 0
    case "M+": {
      if (!CURRENT_STATE.signAmount) {
        return memory + Number(SCOREBOARD.value)
      } else {
        console.log("error")
        return memory
      }
    }
    case "M-": {
      if (!CURRENT_STATE.signAmount) {
        return memory - Number(SCOREBOARD.value)
      } else {
        console.log("error")
        return memory
      }
    }
    case "MR": {
      SCOREBOARD.value = String(memory)
      return memory
    }
  }
}