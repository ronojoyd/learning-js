// Asynchronous functions always return a Promise
// fetchData() performs a fetch request and returns it in JSON format
async function fetchData(url) {
    try {
        // await keyword pauses execution of async function until fetch() is settled
        response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
        }
        return await response.json();
    } catch(error) {
        console.error(`Looks like we had an issue: ${error}`);
    }
}

module.exports = {fetchData};

/* 

const promise = fetchData("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
promise.then((response) => {
    console.log(`Fetch response: ${response[0].name}`);
}) 

*/