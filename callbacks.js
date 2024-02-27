function printToConsole(string) {
    console.log("Hello world. " + string);
}

// Callback function
function doSomething(string, callback) {
    callback(string);
}

doSomething("We live in a twilight world.", printToConsole);