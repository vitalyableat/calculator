/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {PowCommand} from "./PowCommand";

describe('PowCommand', () => {
  test('11 ** 2', () => {
    CALCULATOR.resetValue(11)
    CALCULATOR.executeCommand(new PowCommand(2))
    expect(CALCULATOR.value).toBe(121)
  })
  test('4 ** 1/2', () => {
    CALCULATOR.resetValue(4)
    CALCULATOR.executeCommand(new PowCommand(1/2))
    expect(CALCULATOR.value).toBe(2)
  })
  test('0 ** 42', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new PowCommand(42))
    expect(CALCULATOR.value).toBe(0)
  })
  test('42 ** 42', () => {
      CALCULATOR.resetValue(42)
      CALCULATOR.executeCommand(new PowCommand(42))
      // Error "Value is out of range" is handled, setting CALCULATOR.value to 0
      expect(CALCULATOR.value).toBe(0)
    })
  test('-32 ** 1/5', () => {
    CALCULATOR.resetValue(-32)
    CALCULATOR.executeCommand(new PowCommand(1/5))
    // Error "Can't find a root of negative number" is handled
  })
  test('5 ** 1/0', () => {
    CALCULATOR.resetValue(5)
    CALCULATOR.executeCommand(new PowCommand(1/5))
    // Error "Division by 0" is handled
  })
})