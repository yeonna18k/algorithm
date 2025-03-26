function solution(my_str, n) {
    let answer = [];
    let arr_str = [...my_str]
    while (arr_str.length > 0) {
        answer.push(arr_str.splice(0, n).join(""));
        console.log(arr_str)
    }
    
    return answer;
}