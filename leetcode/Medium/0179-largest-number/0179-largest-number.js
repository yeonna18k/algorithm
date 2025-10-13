/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
    const str = nums.map(num => num.toString());

    str.sort((a, b) => {
        const order1 = b + a;
        const order2 = a + b;
        return order1 - order2;
    })
    if (str[0] === '0') {
        return '0';
    }
    return str.join("");
};