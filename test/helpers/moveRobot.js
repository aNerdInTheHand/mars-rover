const assert = require('assert')
const C = require('../../src/constants')

// not stubbing other helper functions due to time constraints
const initCalculateOrientation = require('../../src/helpers/calculateOrientation')
const robotIsLost = require('../../src/helpers/robotIsLost')
const calculateOrientation = initCalculateOrientation({ C })

const initMoveRobot = require('../../src/helpers/moveRobot')

const boundaryX = 3
const boundaryY = 3

const parameters = {
  boundaryX,
  boundaryY,
  currentOrientation: 'N',
  currentX: 0,
  currentY: 1
}

const inBoundsParameters = Object.assign(
  {},
  parameters,
  { commandList: 'FFRFFRF' }
)

const outOfBoundsParameters = Object.assign(
  {},
  parameters,
  { commandList: 'LFFFRF' }
)

describe('helpers/moveRobot', () => {
  const moveRobot = initMoveRobot({
    C,
    calculateOrientation,
    robotIsLost
  })
  describe('Robot in bounds', () => {
    it('should return the final position and orientation of the robot', () => {
      const output = moveRobot(inBoundsParameters)
      const expectedOutput = '(2, 2, S)'
      assert.equal(output, expectedOutput)
    })
  })
  describe('Robot out of bounds', () => {
    it('should return the last valid position and orientation of the robot and LOST', () => {
      const output = moveRobot(outOfBoundsParameters)
      const expectedOutput = '(0, 1, W) LOST'
      assert.equal(output, expectedOutput)
    })
  })
})