const robotIsLost = ({
  boundaryX,
  boundaryY,
  currentX,
  currentY
}) => (
  currentX < 0 ||
  currentY < 0 ||
  currentX > boundaryX ||
  currentY > boundaryY
)

module.exports = robotIsLost
