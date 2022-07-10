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
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(5)
  })
  test('0!', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new FactorialCommand())
    expect(CALCULATOR.value).toBe(1)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(0)
  })
  test('-5!', () => {
    CALCULATOR.resetValue(-5)
    CALCULATOR.executeCommand(new FactorialCommand())
    expect(CALCULATOR.value).toBe(-120)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(-5)
  })
  test('2.5!', () => {
    CALCULATOR.resetValue(2.5)
    // error "Should be integer"
  })
})