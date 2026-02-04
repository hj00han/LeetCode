/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let newS = '';

    function isLetter(c) {
        return /[a-zA-Z]/.test(c);
    }
    function isNumber(c) {
        //return /0-9/.test(c);
        return c >= '0' && c <= '9';
    }

    for (let i = 0; i < s.length; i++){
        if (isLetter(s[i]) || isNumber(s[i])){
            newS += s[i].toLowerCase();
        }
    }

    return newS === newS.split('').reverse().join('');
};