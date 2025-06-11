function solution(wallpaper) {
    let result = [];

    for (let i = 0; i < wallpaper.length; i++) {
        for (let j = 0; j < wallpaper[i].length; j++) {
            if (wallpaper[i][j] === "#") result.push([i, j])
        }
    }
    
    let minX = result[0][0];
    let minY = result[0][1];    
    let maxX = result[0][0];
    let maxY = result[0][1];
    
    for (let k = 0; k < result.length; k++) {
       if (result[k][0] < minX) minX = result[k][0];
        if (result[k][1] < minY) minY = result[k][1];  // 수정
        if (result[k][0] > maxX) maxX = result[k][0];
        if (result[k][1] > maxY) maxY = result[k][1];  // 수정
    }
    
    console.log(minY, maxY)
    return [minX, minY, (maxX + 1), (maxY + 1)];
}