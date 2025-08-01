/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const simple = path.split("/")
    const stack = [];

    for (const s of simple) {
            if (s === '' || s === '.') {
                continue;
            } 
            else if (s === '..') {
                if (stack.length > 0) {
                    stack.pop();
                }
            } 
            else {
                stack.push(s);
            }
        }
    return '/' + stack.join("/");
};