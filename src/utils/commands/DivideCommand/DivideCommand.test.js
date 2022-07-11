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
  })
  test('-21 / -0.5', () => {
    CALCULATOR.resetValue(-21)
    CALCULATOR.executeCommand(new DivideCommand(-0.5))
    expect(CALCULATOR.value).toBe(42)
  })
  test('42 / 0', () => {
    CALCULATOR.resetValue(42)
    CALCULATOR.executeCommand(new DivideCommand(0))
    // Error "Division by 0" is handled
  })
})