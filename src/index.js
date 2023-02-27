const readline = require('node:readline')
const C = require('./constants')
const initValidateGrid = require('./helpers/validateGrid')
const validateGrid = initValidateGrid({ C })

const readInput = async () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  let gridSize

  rl.setPrompt(C.messages.prompts.gridPrompt)
  rl.prompt()

  rl.on('line', input => {
    if (!gridSize) {
      const [m, n] = input.split(' ')
      validateGrid({ m: Number(m), n: Number(n) })
      gridSize = input
      console.log(`Grid size set to ${input}`)
      rl.setPrompt(C.messages.prompts.robotPrompt)
    }
    else {
      console.log(`Robot command set to ${input}`)
    }
    rl.prompt()
  })
}

readInput()