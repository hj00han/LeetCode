/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    returnValue = init;
    return {
        increment: function(){
            returnValue++;
            return returnValue;
        },
        decrement: function(){
            returnValue--;
            return returnValue;
        },
        reset: function(){
            returnValue = init;
            return init;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */