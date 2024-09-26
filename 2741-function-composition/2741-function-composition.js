/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let pr = x
        for(let i = functions.length - 1; i >= 0; i--){
            pr = functions[i](pr);            
        }
        return pr;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */