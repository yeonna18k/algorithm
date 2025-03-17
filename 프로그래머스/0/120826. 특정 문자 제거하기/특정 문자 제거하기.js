function solution(my_string, letter) {
    return [...my_string].filter(l => l !== letter).join("");
}