const readline = require('node:readline/promises')
const C = require('./constants')
const initCalculateOrientation = require('./helpers/calculateOrientation')
const initMoveRobot = require('./helpers/moveRobot')
const initValidateGrid = require('./helpers/validateGrid')
const initValidateRobotCommands = require('./helpers/validateRobotCommands')

const calculateOrientation = initCalculateOrientation({ C })
const robotIsLost = require('./helpers/robotIsLost')
const validateGrid = initValidateGrid({ C })
const validateRobotCommands = initValidateRobotCommands({ C })
const moveRobot = initMoveRobot({ C, calculateOrientation, robotIsLost })

const readInput = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let gridSize

  if (!gridSize) {
    const input = await rl.question(C.messages.prompts.gridPrompt)
    const [m, n] = input.split(' ')
    validateGrid({ m: Number(m), n: Number(n) })
    gridSize = { m, n }
    console.log(`Grid size set to ${input}`)
  }

  while (true) {
    const input = await rl.question(C.messages.prompts.robotPrompt)

    validateRobotCommands({
      boundaryX: gridSize.m,
      boundaryY: gridSize.n,
      input
    })

    const [x, y, direction] = input
      .match(/\((.*?)\)/)[1]
      .split(', ')

    const commandList = input.split(')')[1].trim()

    moveRobot({
      boundaryX: gridSize.m,
      boundaryY: gridSize.n,
      commandList,
      currentOrientation: direction,
      currentX: x,
      currentY: y
    })
  }
}

readInput()
