function solution(board, moves) {
    let stk = [];
    let count = 0;
    
    for (let i = 0; i < moves.length; i++) {
        let item = moves[i] - 1;
        for (let j = 0; j < board.length; j++) {
            if (board[j][item] !== 0) {
                stk.push(board[j][item]); 
                board[j].splice(item, 1, 0)
                
                if (stk.length > 1) {
                    if (stk[stk.length - 1] === stk[stk.length - 2]) {
                        count += 2;
                        stk.pop()
                        stk.pop()
                    }
                }
                break;
            }
        }
        continue;
    }
    
    return count;
}