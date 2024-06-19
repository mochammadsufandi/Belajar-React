class logicBoard {
    static nextValueSquare(array) {
        return array.filter(Boolean).length % 2 === 0 ?'O' : 'X';
    }
    static calculateWinner(arr) {
        const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
            return arr[a];
          }
        }
        return null;
      }
    static gameStatus(winner,array,nextValue) {
      return winner ? `Winner : ${winner}` : array.every(Boolean) ? `Game is Draw` : `Next Turn : ${nextValue}`;
    }
}


module.exports = {logicBoard};