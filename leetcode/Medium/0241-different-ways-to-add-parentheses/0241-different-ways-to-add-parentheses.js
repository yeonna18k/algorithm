/**
 * @param {string} expression
 * @return {number[]}
 */
var diffWaysToCompute = function(expression) {
     const memo = new Map();

    const calculate = (expr) => {
        if (memo.has(expr)) {
            return memo.get(expr);
        }

        const results = [];
        let isNumber = true;

        for (let i = 0; i < expr.length; i++) {
            const char = expr[i];

            if (char === '+' || char === '-' || char === '*') {
                isNumber = false;

                const leftResults = calculate(expr.substring(0, i));
                const rightResults = calculate(expr.substring(i + 1));

                for (const leftVal of leftResults) {
                    for (const rightVal of rightResults) {
                        if (char === '+') {
                            results.push(leftVal + rightVal);
                        } else if (char === '-') {
                            results.push(leftVal - rightVal);
                        } else if (char === '*') {
                            results.push(leftVal * rightVal);
                        }
                    }
                }
            }
        }

        if (isNumber) {
            results.push(parseInt(expr));
        }

        memo.set(expr, results);
        return results;
    };

    return calculate(expression);
};