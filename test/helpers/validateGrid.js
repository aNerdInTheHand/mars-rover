const assert = require('assert')
const C = require('../../src/constants')
const errorMessages = C.messages.error
const initValidateGrid = require('../../src/helpers/validateGrid')
const validateGrid = initValidateGrid({ C })

describe('helpers/validateGrid', () => {
  describe('RangeErrors', () => {
    it('should throw a RangeError if m < 0 and n >= 0', () => {
      assert.throws(
        () => validateGrid({ m: -1, n: 0 }),
        RangeError(errorMessages.gridInputOutOfRange)
      )
    })
    it('should throw a RangeError if m < 0 and n < 0', () => {
      assert.throws(
        () => validateGrid({ m: -1, n: -1000 }),
        RangeError(errorMessages.gridInputOutOfRange)
      )
    })
    it('should throw a RangeError if m >= 0 and n < 0', () => {
      assert.throws(
        () => validateGrid({ m: 1, n: -1 }),
        RangeError(errorMessages.gridInputOutOfRange)
      )
    })
  })
})