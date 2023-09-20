function isSolved(board) {
  let winAreas = [
    [
      [0, 0],
      [0, 1],
      [0, 2],
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2],
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0],
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1],
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2],
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2],
    ],
    [
      [0, 2],
      [1, 1],
      [2, 0],
    ],
  ];

  for (let i = 0; i < winAreas.length; i++) {
    // check if X won
    let isXwon = winAreas[i].every((pos) => {
      console.log(board[pos[0]][pos[1]]);
      return board[pos[0]][pos[1]] == 1;
    });
    if (isXwon) return 1;

    // check if O won
    let isOwon = winAreas[i].every((pos) => {
      return board[pos[0]][pos[1]] == 2;
    });
    if (isOwon) return 2;
  }

  // check if board is not yet finished
  for (let i = 0; i < board.length; i++) {
    if (board[i].includes(0)) {
      return -1;
    }
  }

  // it's draw
  return 0;
}
