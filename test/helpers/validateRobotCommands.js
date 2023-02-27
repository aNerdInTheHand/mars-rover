const assert = require('assert')
const C = require('../../src/constants')
const errorMessages = C.messages.error
const initValidateRobotCommands = require('../../src/helpers/validateRobotCommands')
const validateRobotCommands = initValidateRobotCommands({ C })

describe('helpers/validateRobotCommands', () => {
  describe('Errors', () => {
    it('should throw an error if no brackets are used', () => {
      assert.throws(
        () => validateRobotCommands({ input: '0, 0, N LFRRR' }),
        Error(errorMessages.robotCommandInvalid)
      )
    })
    it('should throw an error if no commas are used', () => {
      assert.throws(
        () => validateRobotCommands({ input: '(0 0 N) LFRRR' }),
        Error(errorMessages.robotCommandInvalid)
      )
    })
    it('should throw an error if negative numbers are used', () => {
      assert.throws(
        () => validateRobotCommands({ input: '(-10, 0, N) LFRRR' }),
        Error(errorMessages.robotCommandInvalid)
      )
    })
    it('should throw an error if either co-ordinate is a float', () => {
      assert.throws(
        () => validateRobotCommands({ input: '(0.6, 0, N) LFRRR' }),
        Error(errorMessages.robotCommandInvalid)
      )
    })
    it('should throw an error if either co-ordinate exceeds the boundary', () => {
      assert.throws(
        () => validateRobotCommands({
          boundaryX: 9,
          boundaryY: 9,
          input: '(10, 0, N) LFRRR'
        }),
        Error(errorMessages.robotOutOfBounds)
      )
    })
  })
  describe('No errors', () => {
    it('should not throw an error with valid input', () => {
      assert.doesNotThrow(
        () => validateRobotCommands({
          boundaryX: 5,
          boundaryY: 5,
          input: '(5, 5, N) FFFFFFFFFFFFFFFF'
        }),
        Error()
      )
    })
  })
})