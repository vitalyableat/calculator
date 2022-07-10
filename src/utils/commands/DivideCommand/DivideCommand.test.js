/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {DivideCommand} from "./DivideCommand";

describe('DivideCommand', () => {
  test('84 / 2', () => {
    CALCULATOR.resetValue(84)
    CALCULATOR.executeCommand(new DivideCommand(2))
    expect(CALCULATOR.value).toBe(42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(84)
  })
  test('21 / 0.5', () => {
    CALCULATOR.resetValue(21)
    CALCULATOR.executeCommand(new DivideCommand(0.5))
    expect(CALCULATOR.value).toBe(42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(21)
  })
  test('42 / 0', () => {
    CALCULATOR.resetValue(42)
    CALCULATOR.executeCommand(new DivideCommand(0))
    // error "Division by 0"
    expect(CALCULATOR.value).toBe(Infinity)
    CALCULATOR.undo()
    // error "No more history with this number"
    expect(CALCULATOR.value).toBe(NaN)
  })
})