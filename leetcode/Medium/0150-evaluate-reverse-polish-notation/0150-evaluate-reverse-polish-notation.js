/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const stack = [];
    let calNum;
    
    for (let token of tokens) {
        if (token === '+' || token === '-' || token === '*' || token === '/') {

            if (token === '+') calNum = stack.at(-2) + stack.at(-1)
            if (token === '-') calNum = stack.at(-2) - stack.at(-1)
            if (token === '*') calNum = stack.at(-2) * stack.at(-1)
            if (token === '/') {
                calNum = stack.at(-2) / stack.at(-1)
                calNum = calNum > 0 ? Math.floor(calNum) : Math.ceil(calNum)
            }

            stack.pop();
            stack.pop();
            stack.push(calNum)
        } else {
            stack.push(Number(token))
        }
    }
    return stack[0];
};