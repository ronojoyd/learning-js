const axios = require("axios");

// Making a GET request to apple.com
axios
    .get("https://apple.com/")
    .then(res => {
        console.log(`Status Code: ${res.status}`);
        console.log(res);
    })
    .catch(err => {
        console.error(err);
    })