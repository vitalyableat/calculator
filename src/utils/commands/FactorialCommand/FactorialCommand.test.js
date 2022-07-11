/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {FactorialCommand} from "./FactorialCommand";

describe('FactorialCommand', () => {
  test('5!', () => {
    CALCULATOR.resetValue(5)
    CALCULATOR.executeCommand(new FactorialCommand())
    expect(CALCULATOR.value).toBe(120)
  })
  test('0!', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new FactorialCommand())
    expect(CALCULATOR.value).toBe(1)
  })
  test('-5!', () => {
    CALCULATOR.resetValue(-5)
    CALCULATOR.executeCommand(new FactorialCommand())
    expect(CALCULATOR.value).toBe(-120)
  })
  test('2.5!', () => {
    CALCULATOR.resetValue(2.5)
    // Error "Can't find factorial of a real number" is handled
  })
  test('42!', () => {
    CALCULATOR.resetValue(42)
    CALCULATOR.executeCommand(new FactorialCommand())
    // Error "Value is out of range" is handled, setting CALCULATOR.value to 0
    expect(CALCULATOR.value).toBe(0)
  })
})