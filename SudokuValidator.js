function validSolution(board){
    for(let i = 0; i < board.length; i++){
      for(let k = 1; k < board.length+1; k++){
        if(board[i].includes(k) != true ){
          return false
        }
      }
    }
    
    for(let i = 0; i < board.length; i+=3){
        for(let k = 0; k < board.length; k +=3){
          let result = 0;
          result += board[i].slice(k, k+3).reduce((a,b) =>{return a + b})
          result += board[i+1].slice(k, k+3).reduce((a,b) =>{return a + b})
          result += board[i+2].slice(k, k+3).reduce((a,b) =>{return a + b})
          console.log(result);
          if(result != 45){
            return false
          }
        }
    }
    return true
  }

  validSolution([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
  ]);