function solution(hp) {
    let ant = parseInt(hp / 5);
    return (hp % 5 === 0 ? ant : hp % 5 % 2 !== 0 ? ant+=1 : ant+=2);
}