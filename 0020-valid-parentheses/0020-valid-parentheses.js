/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    let opening = ['(', '{', '['];
    let closing = [')', '}', ']'];

    for(let char of s){
        if(opening.includes(char)){
            stack.push(char);
        } else{
            let match = stack.pop()
            if(opening.indexOf(match) !== closing.indexOf(char)){
                return false
            }
        }
    }

    return stack.length === 0;
};