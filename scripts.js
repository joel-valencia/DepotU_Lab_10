var num1 = null;
var num2 = null;
var wait = "Please wait...";
var numOfButtons = null;
window.onload = function() {
    numOfButtons = document.getElementsByTagName('button').length;
}


function prepare() {
    num1 = document.getElementById('num1').value;
    num2 = document.getElementById('num2').value;
    document.getElementById('messages').innerHTML = wait;
    for (var i = 0; i < numOfButtons; i++) {
        document.getElementsByTagName('button')[i].disabled = true;
    }
}

function callback(err, result) {
    document.getElementById('messages').innerHTML = "";
    for (var i = 0; i < numOfButtons; i++) {
        document.getElementsByTagName('button')[i].disabled = false;
    }
    if (err) {
        alert(err);
    } else {
        alert("Result: " + result);
    }
}

function add() {
    prepare();
    davidsLib.add(num1, num2, function(err, result) {
        callback(err, result);
    });
}

function subtract() {
    prepare();
    davidsLib.subtract(num1, num2, function(err, result) {
        callback(err, result);
    });
}

function multiply() {
    prepare();
    davidsLib.multiply(num1, num2, function(err, result) {
        callback(err, result);
    });
}

function divide() {
    prepare();
    davidsLib.divide(num1, num2, function(err, result) {
        callback(err, result);
    });
}
