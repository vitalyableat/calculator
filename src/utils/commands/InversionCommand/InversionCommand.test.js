/**
 * @jest-environment jsdom
 */

import {CALCULATOR} from "../../../consts";
import {InversionCommand} from "./InversionCommand";

describe('AddCommand', () => {
  test('42', () => {
    CALCULATOR.resetValue(42)
    CALCULATOR.executeCommand(new InversionCommand())
    expect(CALCULATOR.value).toBe(-42)
  })
  test('-42', () => {
    CALCULATOR.resetValue(-42)
    CALCULATOR.executeCommand(new InversionCommand())
    expect(CALCULATOR.value).toBe(42)
  })
  test('0', () => {
    CALCULATOR.resetValue(0)
    CALCULATOR.executeCommand(new InversionCommand(0))
    expect(CALCULATOR.value).toBe(-0)
  })
})