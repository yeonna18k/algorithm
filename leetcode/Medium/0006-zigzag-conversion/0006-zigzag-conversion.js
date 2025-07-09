var convert = function(s, numRows) {
    if (numRows === 1) return s;
    
    let arr = Array.from({length: numRows}, () => Array(s.length).fill(null));
    
    let down = true;
    let col = 0;
    let row = 0;
    
    for (let i = 0; i < s.length; i++) {
        arr[row][col] = s[i];
        
        if (down) {
            if (row === numRows - 1) {
                // 맨 아래 도달하면 대각선으로 올라가기 시작
                down = false;
                row--;
                col++;
            } else {
                // 계속 아래로
                row++;
            }
        } else {
            if (row === 0) {
                // 맨 위 도달하면 다시 아래로
                down = true;
                row++;
            } else {
                // 계속 대각선으로 위로
                row--;
                col++;
            }
        }
    }
    
    // 결과 문자열 만들기
    let result = '';
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < s.length; j++) {
            if (arr[i][j] !== null) {
                result += arr[i][j];
            }
        }
    }
    
    return result;
};