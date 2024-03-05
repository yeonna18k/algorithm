function solution(s) {
    let mid = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.substr(mid - 1, 2) : s.substr(mid, 1) ;
}