const assert = require('assert')
const C = require('../../src/constants')
const errorMessages = C.messages.error
const initValidateGrid = require('../../src/helpers/validateGrid')
const validateGrid = initValidateGrid({ C })

describe('helpers/validateGrid', () => {
  describe('Errors', () => {
    it('should throw an error if m < 0 and n >= 0', () => {
      assert.throws(
        () => validateGrid({ m: -1, n: 0 }),
        Error(errorMessages.gridInputInvalid)
      )
    })
    it('should throw an error if m < 0 and n < 0', () => {
      assert.throws(
        () => validateGrid({ m: -1, n: -1000 }),
        Error(errorMessages.gridInputInvalid)
      )
    })
    it('should throw an error if m >= 0 and n < 0', () => {
      assert.throws(
        () => validateGrid({ m: 1, n: -1 }),
        Error(errorMessages.gridInputInvalid)
      )
    })
    it('should throw an error if either parameter is a float', () => {
      assert.throws(
        () => validateGrid({ m: 1.5, n: 1 }),
        Error(errorMessages.gridInputInvalid)
      )
    })
    it('should throw an error if either parameter is a string', () => {
      assert.throws(
        () => validateGrid({ m: 1, n: '1' }),
        Error(errorMessages.gridInputInvalid)
      )
    })
  })
})