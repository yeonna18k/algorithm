function solution(array) {
    console.log(array.toString().split(""))
    return array.toString().split("").filter(e => parseInt(e) === 7).length;
}