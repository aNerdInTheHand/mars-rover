const assert = require('assert')
const robotIsLost = require('../../src/helpers/robotIsLost')

describe('helpers/robotIsLost', () => {
  describe('Robot out of bounds', () => {
    it('should return true if out of bounds to north', () => {
      const lost = robotIsLost({
        boundaryX: 3,
        currentX: 0,
        boundaryY: 3,
        currentY: 4
      })
      assert.equal(lost, true)
    })
    it('should return true if out of bounds to east', () => {
      const lost = robotIsLost({
        boundaryX: 3,
        currentX: 4,
        boundaryY: 3,
        currentY: 3
      })
      assert.equal(lost, true)
    })
    it('should return true if out of bounds to south', () => {
      const lost = robotIsLost({
        boundaryX: 3,
        currentX: -1,
        boundaryY: 3,
        currentY: 3
      })
      assert.equal(lost, true)
    })
    it('should return true if out of bounds to west', () => {
      const lost = robotIsLost({
        boundaryX: 3,
        currentX: 0,
        boundaryY: 3,
        currentY: -1
      })
      assert.equal(lost, true)
    })
  })
  describe('Robot not out of bounds', () => {
    it('should return false if at upper boundary of x and y', () => {
      const lost = robotIsLost({
        boundaryX: 3,
        currentX: 3,
        boundaryY: 3,
        currentY: 3
      })
      assert.equal(lost, false)
    })
    it('should return false if at lower boundary of x and y', () => {
      const lost = robotIsLost({
        boundaryX: 3,
        currentX: 0,
        boundaryY: 3,
        currentY: 0
      })
      assert.equal(lost, false)
    })
  })
})