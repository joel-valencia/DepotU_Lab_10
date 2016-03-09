# Slow Calculator
Today's lab will explore the use of callback functions.
Callbacks were created to address concerns of synchronous vs asynchronous code execution:
* synchronous- The browser will wait for your code to finish executing before moving on to the next line
* asynchronous- The browser will start your code executing, and then immediately move on to the next line

When we perform tasks that take a while to complete (i.e. making a network request), we should always use *asynchronous* code.

Example:
```
someAsynchronousFunction(arg, callback);
```
In particular, the callback usually looks like this:
```
someAsynchronousFunction(arg, function(err, result) {
    // This part executes when the callback is 'called' when the async function finishes
});
```
If any errors were generated, they will be available in the first parameter `err`. Otherwise, the result can be found in the second parameter `result`. Of course you can name those parameters anything you would like. It is just common practice to name the first one `err` and the second one `result`.

# Lab Exercise
For this lab, you need not concern yourself with how to create an asynchronous function. They have been provided for you in a file called `david.js`.

We will be building a slow calculator. Each function described below will take a random amount of time from 1-10 seconds to execute. At that point, whatever callback you pass in will be executed. The callback should have two parameters, the first being an error that may be supplied as a string, and the second being the result of the function if it is successful.

The functions are:
 * add
 ```
 davidsLib.add(num1, num2, callback);
 ```
 * subtract
 ```
 davidsLib.subtract(num1, num2, callback);
 ```
 * multiply
 ```
 davidsLib.multiply(num1, num2, callback);
 ```
 * divide
 ```
 davidsLib.divide(num1, num2, callback);
 ```
 
 **Requirements**
 1. Put two input boxes on your page with type `number`.
 2. Have 4 buttons on your page labeled Add, Subtract, Multiply, and Divide.
 3. Clicking one of the buttons should get the values of the two input boxes, and call the respective function described above.
 4. In your callback, you should display an alert with the error message if there is one; otherwise, display an alert with the result.
 
 **Extra Credit**
 * Implement a way to indicate to the user that something is happening, so they aren't confused by a lack of visible indication that a calculation is happening.
     (i.e. Style the button in some way while work is happening)