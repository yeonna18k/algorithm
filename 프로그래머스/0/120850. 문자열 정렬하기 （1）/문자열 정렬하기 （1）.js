function solution(my_string) {
    return my_string.split("").map(s => Number(s)).filter(s => Number.isInteger(s) === true).sort((a, b) => a-b);
}