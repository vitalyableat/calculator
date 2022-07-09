/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {PercentageCommand} from "./PercentageCommand";

describe('PercentageCommand', () => {
  test('42', () => {
    CALCULATOR.resetValue(42)
    CALCULATOR.executeCommand(new PercentageCommand())
    expect(CALCULATOR.value).toBe(0.42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(42)
  })
  test('-42', () => {
    CALCULATOR.resetValue(-42)
    CALCULATOR.executeCommand(new PercentageCommand())
    expect(CALCULATOR.value).toBe(-0.42)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(-42)
  })
  test('0', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new PercentageCommand(0))
    expect(CALCULATOR.value).toBe(0)
    CALCULATOR.undo()
    expect(CALCULATOR.value).toBe(0)
  })
})