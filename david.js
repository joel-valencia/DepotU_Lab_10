var davidsLib = (function() {
    function execute(response, callback) {
        var random = Math.floor(Math.random() * 10) + 1;
        setTimeout(function() {
            if (random % 4 === 0) {
                callback('A timeout has occurred.');
            } else {
                callback(null, response);
            }
        }, random * 1000);
    }
    
    function uppercaseString(input, callback) {
        var upper = input.toUpperCase();
        execute(upper, callback);
    }
    
    function divide(op1, op2, callback) {
        if (op2 == 0) {
            alert('You cannot divide by 0!');
            return;
        }
        var result = op1 / op2;
        execute(result, callback);
    }
    
    function add(op1, op2, callback) {
        var result = parseFloat(op1) + parseFloat(op2);
        execute(result, callback);
    }
    
    function subtract(op1, op2, callback) {
        var result = op1 - op2;
        execute(result, callback);
    }
    
    function multiply(op1, op2, callback) {
        var result = op1 * op2;
        execute(result, callback);
    }
    
    return {
        uppercaseString: uppercaseString,
        add: add,
        subtract: subtract,
        multiply: multiply,
        divide: divide
    }
})();