function setAlarm(name, delayInSec) {
    return new Promise((resolve, reject) => {
        if (delayInSec < 0) {
            throw new error("Time input can't be negative.");
        }
        setTimeout(() => {
            resolve(`Wake up, ${name}!`);
        }, delayInSec * 1000);
    })
}

// Calling function using parameters from terminal
setAlarm(process.argv[2], parseInt(process.argv[3]))
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(`Couldn't set alarm: ${error}`);
    })