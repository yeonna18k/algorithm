function solution(lines) {
    const map = new Map();
    let count = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const [start, end] = lines[i];
        
        for (let j = start + 1; j <= end; j++) {
            if (map.has(j)) {
                const pointCount = map.get(j);
                if (pointCount < 2) {
                    count++;
                }
                map.set(j, pointCount + 1);
            } else {
                map.set(j, 1)
            }
        }   
    }
    return count;
}