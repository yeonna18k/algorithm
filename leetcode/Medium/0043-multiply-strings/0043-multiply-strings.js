/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    if (num1 === "0" || num2 === "0") {
        return "0";
    }

    let carry = 0;
    const result = new Array(num1.length + num2.length).fill(0)

    for (let i = num1.length - 1; i >= 0; i--) {
        const digit1 = parseInt(num1[i]);

        for (let j = num2.length - 1; j >= 0; j--) {
            const digit2 = parseInt(num2[j]);

            const pos1 = i + j;
            const pos2 = i + j + 1;

            const product = digit1 * digit2;

            const totalSum = product + result[pos2];

            result[pos1] += Math.floor(totalSum / 10);
            result[pos2] = totalSum % 10;

        }
    }
    let start = 0;
    while (start < result.length && result[start] === 0) {
        start++;
    }

    if (start === result.length) {
        return "0"
    }

    return result.slice(start).join("");
};