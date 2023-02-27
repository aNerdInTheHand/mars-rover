const validateGrid = ({ m, n }) => {
  if (m < 0 || n < 0) throw RangeError()
}

module.exports = validateGrid