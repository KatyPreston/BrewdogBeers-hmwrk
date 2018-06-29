const Beers = require("./models/beers.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");

  const beers = new Beers();
  beers.getData();

});
