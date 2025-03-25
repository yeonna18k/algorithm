function solution(my_string) {
    return my_string.replace(/[a-zA-Z]/g, " ").split(" ").filter(n => n !== "").reduce((cur, acc) => cur + parseInt(acc), 0);
}