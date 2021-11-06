const axios = require("axios");



for (let i = 0; i < 10_000; i++) {
    axios.default.get("https://accessms.kalanju.com/myProfile").then(response => {
    console.log({response});
  })
}