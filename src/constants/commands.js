module.exports = {
  directions: ['N', 'E', 'S', 'W'],
  forward: 'F',
  left: 'L',
  orientationMapping: {
    N: {
      axis: 'y',
      value: 1
    },
    E: {
      axis: 'x',
      value: 1
    },
    S: {
      axis: 'y',
      value: -1
    },
    W: {
      axis: 'x',
      value: -1
    }
  },
  right: 'R'
}