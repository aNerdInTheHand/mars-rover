const validateGrid = ({ x, y }) => {
  if (x < 0 || y < 0) throw RangeError()
}

module.exports = validateGrid