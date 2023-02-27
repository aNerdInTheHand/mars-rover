const ERROR = 'ERROR:'

module.exports = {
  error: {
    gridInputInvalid: `${ERROR} grid input must be in the format m n where m and n are positive integers`
  },
  prompts: {
    gridPrompt: 'Please set a grid size in the format m n, where both are integers equal to or greater than 0\n',
    robotPrompt: 'Please enter robot commands in the format (2, 3, E) LFFRFLF, or Cmd+c to exit\n'
  }
}