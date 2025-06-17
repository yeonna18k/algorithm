function solution(park, routes) {
    var answer = [];
    let start = [0, 0]
    for (let i = 0; i < park.length; i++) {
        for (let j = 0; j < park[i].length; j++) {
            if (park[i][j] === "S") {
                start = [i, j];
                break;
            }      
        }
    }
    
    const direction = {
        E: [0, 1],
        W: [0, -1],
        S: [1, 0],
        N: [-1, 0]
    }
    
    for (const route of routes) {
        const [d, m] = route.split(" ");
        let [cx, cy] = start;

        let step = 0;
        while(step < parseInt(m)){
            cx += direction[d][0];
            cy += direction[d][1];
            
            if (cx < 0 || cy < 0 || cx >= park.length || cy >= park[0].length || park[cx][cy] === "X") break;
            step++;
        }

        if (step === parseInt(m)) start = [cx, cy];
    }
    return start;
}