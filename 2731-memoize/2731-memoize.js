/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let cached = {};
    return function(...args) {
        if(args.length > 0){
            let key = JSON.stringify(args)
            if(!(key in cached)){
                cached[key] = fn(...args);
            }
            return cached[key];
        }
        else{
            return Object.keys(cached).length;
        }
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */