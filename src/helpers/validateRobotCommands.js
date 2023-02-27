const validateRobotCommands = ({ C }) => ({
  boundaryX,
  boundaryY,
  input
}) => {
  if (!input.match(C.validation.robotCommandRegex)) {
    throw Error(C.messages.error.robotCommandInvalid)
  }
  const [x, y, _] = input
    .match(C.validation.initialPositionRegex)[1]
    .split(', ')
  
  if (x > boundaryX || y > boundaryY) {
    throw Error(C.messages.error.robotCommandInvalid)
  }
}

module.exports = validateRobotCommands