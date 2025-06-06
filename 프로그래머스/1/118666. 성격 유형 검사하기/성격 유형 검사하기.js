function solution(survey, choices) {
    let scores = {};
    
    for (let i = 0; i < choices.length; i++) {
        const score = choices[i];
        const type = survey[i];
        
        if (score > 4) {
            scores[type[1]] = (scores[type[1]] || 0) + (score - 4)
        } else if (score < 4) {
            scores[type[0]] = (scores[type[0]] || 0) + (Math.abs(score - 4))
            
        }
    }

    const result = [];
    const pairs = [["R", "T"], ["C", "F"], ["J", "M"], ["A", "N"]].map(pair => pair.sort());
    
    pairs.forEach(([type1, type2]) => {
        const score1 = scores[type1] || 0
        const score2 = scores[type2] || 0
        const resultType = score1 >= score2 ? type1 : type2;
        result.push(resultType)
    })
    return result.join("");
}