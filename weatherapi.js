const {fetchData} = require('./async2');

// Getting current temperature using weather API
async function getCurrentWeather() {
    try {
        const weatherAPI = await fetchData("https://api.weather.gov/points/37.6626,-77.4851");
        const forecastData = await fetchData(weatherAPI["properties"]["forecast"]);

        // Prints current temperature
        console.log(`The current temperature is ${forecastData["properties"]["periods"][0]["temperature"]} degrees.`);
    } catch(error) {
        console.log(`Something went wrong... ${error}`);
    }
}

getCurrentWeather();