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
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(11)
  })
  test('4 ** 1/2', () => {
    CALCULATOR.resetValue(4)
    CALCULATOR.executeCommand(new PowCommand(1/2))
    expect(CALCULATOR.value).toBe(2)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(4)
  })
  test('0 ** 42', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new PowCommand(42))
    expect(CALCULATOR.value).toBe(0)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(0)
  })
  test('-32 ** 1/5', () => {
    CALCULATOR.resetValue(-32)
    // error "For negative numbers roots are not available"
  })
  test('5 ** 1/0', () => {
    CALCULATOR.resetValue(5)
    // error "Division by 0"
  })
})