const validateGrid = ({
  C
}) => ({ m, n }) => {
  if (
    (!Number.isInteger(m) || !Number.isInteger(n))
    || (m < 0 || n < 0)
  ) throw Error(C.messages.error.gridInputInvalid)
}

module.exports = validateGrid