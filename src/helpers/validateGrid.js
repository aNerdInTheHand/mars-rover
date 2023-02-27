const validateGrid = ({
  C
}) => ({ m, n }) => {
  if (m < 0 || n < 0) throw RangeError(C.messages.error.gridInputOutOfRange)
}

module.exports = validateGrid