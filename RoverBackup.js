var myRover = {
  position: [0,0],
  direction: 'N',
};

var newRover = {
  position: [0,0],
  direction: 'N',
};

function goForward(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]++
      break;
    case 'E':
      rover.position[0]++
      break;
    case 'S':
      rover.position[1]--
      break;
    case 'W':
      rover.position[0]--
      break;
    };
  }

function goBackwards(rover) {
  switch(rover.direction) {
    case 'N':
      rover.position[1]--
      break;
    case 'E':
      rover.position[0]--
      break;
    case 'S':
      rover.position[1]++
      break;
    case 'W':
      rover.position[0]++
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

while (newRover.position != myRover.position) {

var input = prompt('Please input the rover movement through the following commands f (forward),b (backward),l (left),r (right), or e to exit');
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
      resetPos();
      console.log("Goodbye Neil, please come back soon!!")
    };
}
}
function resetPos() {
  newRover = myRover;
}

function Create2DArray(rows,columns) {
   var RoverGrid = new Array(rows);
   for (var i = 0; i < rows; i++) {
       RoverGrid[i] = new Array(columns);
   }
   return RoverGrid;
}
var Grid = Create2DArray(10,10);
