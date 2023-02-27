const validateRobotCommands = ({ C }) => ({
  boundaryX,
  boundaryY,
  input
}) => {
  if (!input.match(C.validation.robotCommandRegex)) {
    throw Error(C.messages.error.robotCommandInvalid)
  }
  const [x, y, _] = input // eslint-disable-line no-unused-vars
    .match(/\((.*?)\)/)[1]
    .split(', ')

  if (x > boundaryX || y > boundaryY) {
    throw Error(C.messages.error.robotOutOfBounds)
  }
}

module.exports = validateRobotCommands
