# mars-rover 🚙

Command line program to move Mars rover robots around a grid.

## Running instructions 🏃

### Prerequisites 🧇

You will need `Node 18.0.0` or higher installed to run the program.

Clone the repository to your local machine.

### Running 👟

To run the unit tests, run:

```
npm test
```

To run the interactive command line program, run:

```
npm start
```

### Inputs 🔤

The program takes an initial input specifying a grid size, `m n`.

Subsequent inputs are in the format `(x, y, d) FFLFFRLLF`, where `x` and `y` are starting grid co-ordinates for a robot, `d` is a direction equal to one of `NESW` and the subsequent string is a list of instructions to move a robot left, right or forwards.

The final position of the robot will be logged to the console. If the robot has strayed from the bounds of the grid originally set, the last valid position will be returned, including the word `LOST`.

## Developer Notes 💻

![devloper](https://thenewstack.io/wp-content/uploads/2016/03/IAmDevloper-car.png)

This was a fun challenge doing something a little bit different, and it's definitely not the finished article. With that said, here are some observations on my approach.

### General Approach 🤔

I started thinking about this task away from the computer initially, throwing a few ideas around in my head while I was busy with other things. When I sat down to start working on it, I had a pretty good idea of the requirements.

This allowed me to start with some of the more basic helper functions, all of which were written in a TDD style, as the requirements were clear and easily separable.

### Code Style 🤵

I prefer to use a functional style where I can and have made use of higher order functions in my code. I find this can be more readable and almost always makes testing easier, though I ended up not stubbing any of my functions in this exercise due to time constraints.

I use [standardjs](https://standardjs.com/) for code linting and [Mocha js](https://mochajs.org/) for testing. Both are built into a simple CI pipeline using [Github actions](https://mochajs.org/).

### What Next? 🔮

Whilst I wanted to demonstrate how I like to write code, I didn't have too long to spend on this task, and my first step if I continued this project would certainly be to refactor the `src/moveRobot.js` file in which my main logic lives. I wrote a series of `if/else` statements, with nesting, in order to get the tests passing, but would have preferred to have had time to do something much neater. I also mutated some variables which I would always avoid in production code, preferring to return new values. For the sake of testing I also returned a value, which was not required for the program. This could be tested instead by stubbing `console.log` (or any other logger).

I would also like to implement some neater error formatting. I would wrap the error handling in a middleware-type function that caught and formatted errors before returning them to the user in a way that did not interrupt the program.

I would also increase my test coverage, and use a tool such as Istanbul for code coverage reporting.