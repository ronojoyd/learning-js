// Calling the fetch() api and returning a Promise object
const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
  
// Prints the current state of Promise
console.log(fetchPromise);

// Registering a handler function to the Promise using then()
// Once the fetch() operation completes, the Promise object will call the handler function, passing in the Response object
fetchPromise
  .then((response) => {
    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  // In this case, the returned Promise object from the first then() takes on the state of the Promise returned by the callback.
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.log(`Something went wrong. Womp Womp: ${error}`);
  });

console.log("Started request…");