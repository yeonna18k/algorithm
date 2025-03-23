function solution(my_string, num1, num2) {
    let arr = my_string.split("");
    let temp_num1 = my_string[num1]
    arr.splice(num1, 1, my_string[num2])
    arr.splice(num2, 1, temp_num1)
    return arr.join("");
}