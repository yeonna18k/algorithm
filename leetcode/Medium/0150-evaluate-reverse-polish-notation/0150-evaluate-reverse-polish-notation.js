/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];

    const operations = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => (a / b) | 0,
    }
    
    for (let token of tokens) {
        if (operations[token]) {
            const b = stack.pop();
            const a = stack.pop();
            stack.push(operations[token](a, b))
        } else {
            stack.push(parseInt(token))
        }
    }
    return stack[0];
};