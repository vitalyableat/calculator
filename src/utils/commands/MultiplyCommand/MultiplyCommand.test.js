/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {MultiplyCommand} from "./MultiplyCommand";

describe('MultiplyCommand', () => {
  test('21 * 2', () => {
    CALCULATOR.resetValue(21)
    CALCULATOR.executeCommand(new MultiplyCommand(2))
    expect(CALCULATOR.value).toBe(42)
  })
  test('-42 * -1', () => {
    CALCULATOR.resetValue(-42)
    CALCULATOR.executeCommand(new MultiplyCommand(-1))
    expect(CALCULATOR.value).toBe(42)
  })
  test('0 * 42', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new MultiplyCommand(42))
    expect(CALCULATOR.value).toBe(0)
  })
  test('99999999 * 99999999', () => {
      CALCULATOR.resetValue(99999999)
      CALCULATOR.executeCommand(new MultiplyCommand(99999999))
      // Error "Value is out of range" is handled, setting CALCULATOR.value to 0
      expect(CALCULATOR.value).toBe(0)
    })
})