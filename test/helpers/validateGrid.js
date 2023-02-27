const assert = require('assert')
const validateGrid = require('../../src/helpers/validateGrid')

describe('helpers/validateGrid', () => {
  describe('RangeErrors', () => {
    it('should throw a RangeError if x < 0 and y >= 0', () => {
      assert.throws(
        () => validateGrid({ x: -1, y: 0 }),
        RangeError
      )
    })
    it('should throw a RangeError if x < 0 and y < 0', () => {
      assert.throws(
        () => validateGrid({ x: -1, y: -1000 }),
        RangeError
      )
    })
    it('should throw a RangeError if x >= 0 and y < 0', () => {
      assert.throws(
        () => validateGrid({ x: 1, y: -1 }),
        RangeError
      )
    })
  })
})