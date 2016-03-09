var num1 = null;
var num2 = null;

function getNums() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
}

function callback(err, result) {
        if (err) {
            alert("Error!");
        } else {
            alert("Result: " + result);
        }
}

function add() {
    getNums();
    davidsLib.add(num1, num2, function(err, result) {
        callback(err, result);
    });
}

function subtract() {
    getNums();
    davidsLib.subtract(num1, num2, function(err, result) {
        callback(err, result);
    });
}

function multiply() {
    getNums();
    davidsLib.multiply(num1, num2, function(err, result) {
        callback(err, result);
    });
}

function divide() {
    getNums();
    davidsLib.divide(num1, num2, function(err, result) {
        callback(err, result);
    });
}
