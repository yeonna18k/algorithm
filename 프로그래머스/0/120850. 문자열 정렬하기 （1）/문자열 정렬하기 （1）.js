function solution(my_string) {
    return my_string.split("").map(s => s*1).filter(n => !isNaN(n)).sort((a, b) => a-b);
}