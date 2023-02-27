const calculateOrientation = ({ C }) => ({
  currentOrientation,
  direction
}) => {
  const currentOrientationIndex = C.commands.directions.indexOf(currentOrientation)

  const orientationIndex = direction === C.commands.left
    ? currentOrientationIndex - 1
    : currentOrientationIndex === 3
      ? 0 // temporary workaround for looping back to start of directions array
      : currentOrientationIndex + 1

  return C.commands.directions.at(orientationIndex)
}

module.exports = calculateOrientation
