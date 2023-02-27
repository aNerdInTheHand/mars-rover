const assert = require('assert')
const calculateOrientation = require('../../src/helpers/calculateOrientation')

describe('helpers/calculateOrientation', () => {
  describe('Turn left', () => {
    it('should return West if current orientation is North', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'N',
        direction: 'L'
      })
      assert.equal(orientation, 'W')
    })
    it('should return South if current orientation is West', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'W',
        direction: 'L'
      })
      assert.equal(orientation, 'S')
    })
    it('should return East if current orientation is South', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'S',
        direction: 'L'
      })
      assert.equal(orientation, 'E')
    })
    it('should return North if current orientation is East', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'E',
        direction: 'L'
      })
      assert.equal(orientation, 'N')
    })
  })
  describe('Turn right', () => {
    it('should return East if current orientation is North', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'N',
        direction: 'R'
      })
      assert.equal(orientation, 'E')
    })
    it('should return South if current orientation is East', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'E',
        direction: 'R'
      })
      assert.equal(orientation, 'S')
    })
    it('should return West if current orientation is South', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'S',
        direction: 'R'
      })
      assert.equal(orientation, 'W')
    })
    it('should return North if current orientation is West', () => {
      const orientation = calculateOrientation({
        currentOrientation: 'W',
        direction: 'R'
      })
      assert.equal(orientation, 'N')
    })
  })
})