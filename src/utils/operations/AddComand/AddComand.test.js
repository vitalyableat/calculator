/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {AddCommand} from "./AddCommand";

describe('AddCommand', () => {
  test('40 + 2', () => {
    CALCULATOR.resetValue(40)
    CALCULATOR.executeCommand(new AddCommand(2))
    expect(CALCULATOR.value).toBe(42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(40)
  })
  test('40.2 + 1.8', () => {
    CALCULATOR.resetValue(40.2)
    CALCULATOR.executeCommand(new AddCommand(1.8))
    expect(CALCULATOR.value).toBe(42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(40.2)
  })
  test('-42 + 0', () => {
    CALCULATOR.resetValue(-42)
    CALCULATOR.executeCommand(new AddCommand(0))
    expect(CALCULATOR.value).toBe(-42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(-42)
  })
})