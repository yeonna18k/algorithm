function solution(my_string) {
    return my_string.replace(/[a-zA-Z]/g, " ").split(" ").map(v => v * 1).reduce((cur, acc) => cur + acc, 0);
}