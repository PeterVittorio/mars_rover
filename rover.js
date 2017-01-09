var myRover = {
  position: [0,0],
  direction: 'N',
};

var newRover = {
  position: [0,0],
  direction: 'N',
};

function Create2DArray(rows,columns) {
   var RoverGrid = [];
   for (var i = 0; i < rows; i++) {
       RoverGrid[i] = [];
       for (var j = 0; j < columns; j++) {
         RoverGrid[i][j]= [];
       }
   } return RoverGrid;
}
var Grid = Create2DArray(10,10);

// Creating obstacles on the Grid//
Grid[2][4] = 'rock';
Grid[4][1] = 'rock';

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      if (rover.position[1]>10) {
        rover.position[1] = 0;
      }
      break;
    case 'E':
      rover.position[0]++
      if (rover.position[0]>10) {
        rover.position[0] = 0;
      }
      break;
    case 'S':
      rover.position[1]--
      if (rover.position[1]<0) {
        rover.position[1] = 0;
      }
      break;
    case 'W':
      rover.position[0]--
      if (rover.position[0]<0) {
        rover.position[0] = 0;
      }
      break;
    };
  }

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      if (rover.position[1]<0) {
        rover.position[1] = 0;
      }
      break;
    case 'E':
      rover.position[0]--
      if (rover.position[1]<0) {
        rover.position[1] = 0;
      }
      break;
    case 'S':
      rover.position[1]++
      if (rover.position[0]>10) {
        rover.position[0] = 0;
      }
      break;
    case 'W':
      rover.position[0]++
      if (rover.position[0]>10) {
        rover.position[0] = 0;
      }
      break;
    };
  }

function turnLeft(rover) {
    if (newRover.direction == 'N') {
        newRover.direction = 'W';
      } else if (newRover.direction == 'W') {
        newRover.direction = 'S';
      } else if (newRover.direction == 'S') {
        newRover.direction = 'E';
      } else if (newRover.direction = 'E') {
        newRover.direction = 'N';
      }
  };

function turnRight(rover) {
  if (newRover.direction == 'N') {
      newRover.direction = 'E';
    } else if (newRover.direction == 'E') {
               newRover.direction = 'S';
    } else if (newRover.direction == 'S') {
              newRover.direction = 'W';
    } else if (newRover.direction = 'W') {
              newRover.direction = 'N';
      }
  };

while (input != 'exit') {
  var input = prompt('Please input the rover movement through the following commands f (forward),b (backward),l (left),r (right), or e to exit')
    for (var i = 0; i < input.length; i++) {
      if (input[i]=='f') {
        goForward(newRover);
        console.log("New Rover Position: [" + newRover.position[0] + ", " + newRover.position[1] + "]")
      } else if (input[i]=='b') {
          goBackwards(newRover);
          console.log("New Rover Position: [" + newRover.position[0] + ", " + newRover.position[1] + "]")
        } else if (input[i]=='l') {
          turnLeft(newRover);
          console.log("New Rover Position: [" + newRover.position[0] + ", " + newRover.position[1] + "], "+newRover.direction)
        } else if (input[i]=='r') {
          turnRight(newRover);
          console.log("New Rover Position: [" + newRover.position[0] + ", " + newRover.position[1] + "], "+newRover.direction)
        } else if (input[i]== 'e') {
          console.log("Goodbye Neil, please come back soon!!");
          input = 'exit';
        }
    if (Grid[newRover.position[0]][newRover.position[1]] != Grid[2][4] || Grid[newRover.position[0]][newRover.position[1]] != Grid[4][1]) {
    Grid[newRover.position[0]][newRover.position[1]]= 'R';
  } else {
    console.log('Your rover has hit a '+Grid[newRover.position[0]][newRover.position[1]]+' at coordinates [ '+newRover.position[0] + ", " + newRover.position[1] + "], "+newRover.direction)
    input = 'exit';
  }
   }
}

function resetPos() {
  newRover = myRover;
}

function createRover(position, direction) {
  this.position = position;
  this.direction = direction;
}
