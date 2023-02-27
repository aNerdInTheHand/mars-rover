const assert = require('assert')
const sandbox = sinon.createSandbox()
const C = require('../../src/constants')
const initMoveRobot = require('../../src/helpers/moveRobot')

let robotIsLost

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

beforeEach(() => {
  // stub robotIsLost function
  robotIsLost = sinon.stub()
  // this scenario will be called in out of bounds test
  robotIsLost
    .withArgs({
      boundaryX,
      boundaryY,
      currentX: -1,
      currentY: 1
    })
    .returns(false)
  robotIsLost
    .returns(false)
})

afterEach(() => {
  sandbox.restore()
})

describe('helpers/moveRobot', () => {
  const moveRobot = initMoveRobot({
    C,
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