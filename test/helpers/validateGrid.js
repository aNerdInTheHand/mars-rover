const assert = require('assert')
const errorMessages = require('../../src/constants').messages.error
const validateGrid = require('../../src/helpers/validateGrid')

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