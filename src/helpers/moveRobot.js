const moveRobot = ({
  C,
  calculateOrientation,
  robotIsLost
}) => ({
  boundaryX,
  boundaryY,
  commandList,
  currentOrientation,
  currentX,
  currentY
}) => {
  // mutating variables due to time constraints
  let direction = currentOrientation
  let x = currentX
  let y = currentY
  let outOfBounds = false
  finalPosition = commandList
    .split('')
    .forEach(command => {
      if (outOfBounds) return
      if (command === C.commands.forward) {
        const movement = C.commands.orientationMapping[direction]
        if (movement.axis === 'x') {
          if (robotIsLost({
            boundaryX,
            boundaryY,
            currentX: x + movement.value,
            currentY: y
          })) {
            outOfBounds = true
          } else x = x + movement.value
        }
        else if (movement.axis === 'y') {
          if (robotIsLost({
            boundaryX,
            boundaryY,
            currentX: x,
            currentY: y + movement.value
          })) {
            outOfBounds = true
          } else y = y + movement.value
        }
      } else {
        direction = calculateOrientation({
          currentOrientation: direction,
          direction: command
        })
      }
    })
  return outOfBounds
    ? `(${x}, ${y}, ${direction}) LOST`
    : `(${x}, ${y}, ${direction})`
}

module.exports = moveRobot