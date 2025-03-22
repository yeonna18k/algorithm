function solution(rsp) {
    var answer = '';
    return rsp.toString().split("").map(n => Number(n)===0 ? Number(n)+5 : (Number(n)===2 ? Number(n)-2 : Number(n)-3)).join("");
}