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
  })
  test('43.8 - 1.8', () => {
    CALCULATOR.resetValue(43.8)
    CALCULATOR.executeCommand(new SubtractCommand(1.8))
    expect(CALCULATOR.value).toBe(42)
  })
  test('-42 - 0', () => {
    CALCULATOR.resetValue(-42)
    CALCULATOR.executeCommand(new SubtractCommand(0))
    expect(CALCULATOR.value).toBe(-42)
  })
  test('-9999999999999999999 - -1', () => {
      CALCULATOR.resetValue(-9999999999999999999)
      CALCULATOR.executeCommand(new SubtractCommand(-1))
      // Error "Value is out of range" is handled, setting CALCULATOR.value to 0
      expect(CALCULATOR.value).toBe(0)
    })
})