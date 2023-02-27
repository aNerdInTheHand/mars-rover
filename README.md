# mars-rover

Command line program to move Mars rover robots around a grid.

## Running instructions

### Prerequisites

You will need `Node 18.0.0` or higher installed to run the program.

Clone the repository to your local machine.

### Running

To run the unit tests, run:

```
npm test
```

To run the interactive command line program, run:

```
npm start
```

### Inputs

The program takes an initial input specifying a grid size, `m n`.

Subsequent inputs are in the format `(x, y, d) FFLFFRLLF`, where `x` and `y` are starting grid co-ordinates for a robot, `d` is a direction equal to one of `NESW` and the subsequent string is a list of instructions to move a robot left, right or forwards.

The final position of the robot will be logged to the console. If the robot has strayed from the bounds of the grid originally set, the last valid position will be returned, including the word `LOST`.