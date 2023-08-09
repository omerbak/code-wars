function mazeRunner(maze, directions) {
  let maxX = maze[0].length - 1;
  let maxY = maze.length - 1;
  let currentPosition;
  for (let i = 0; i < maze.length; i++) {
    if (maze[i].includes(2)) {
      currentPosition = [maze[i].indexOf(2), i];
      break;
    }
  }
  for (let i = 0; i < directions.length; i++) {
    if (directions[i] === "N") {
      currentPosition[1] -= 1;
    } else if (directions[i] === "S") {
      currentPosition[1] += 1;
    } else if (directions[i] === "W") {
      currentPosition[0] -= 1;
    } else if (directions[i] === "E") {
      currentPosition[0] += 1;
    }
    if (
      currentPosition[1] < 0 ||
      currentPosition[0] < 0 ||
      currentPosition[1] > maxY ||
      currentPosition[0] > maxX
    ) {
      return "Dead";
    } else if (maze[currentPosition[1]][currentPosition[0]] === 3) {
      return "Finish";
    } else if (maze[currentPosition[1]][currentPosition[0]] === 1) {
      return "Dead";
    }
  }

  return "Lost";
}
