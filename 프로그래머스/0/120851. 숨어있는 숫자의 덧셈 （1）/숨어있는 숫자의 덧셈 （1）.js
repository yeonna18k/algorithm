function solution(my_string) {
    return my_string.replace(/[^0-9]/g, "").split("").reduce((a, c) => a + Number(c), 0);
}