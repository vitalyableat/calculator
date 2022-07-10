/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {SubtractCommand} from "./SubtractCommand";

describe('SubtractCommand', () => {
  test('44 - 2', () => {
    CALCULATOR.resetValue(44)
    CALCULATOR.executeCommand(new SubtractCommand(2))
    expect(CALCULATOR.value).toBe(42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(44)
  })
  test('43.8 - 1.8', () => {
    CALCULATOR.resetValue(43.8)
    CALCULATOR.executeCommand(new SubtractCommand(1.8))
    expect(CALCULATOR.value).toBe(42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(43.8)
  })
  test('-42 - 0', () => {
    CALCULATOR.resetValue(-42)
    CALCULATOR.executeCommand(new SubtractCommand(0))
    expect(CALCULATOR.value).toBe(-42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(-42)
  })
})