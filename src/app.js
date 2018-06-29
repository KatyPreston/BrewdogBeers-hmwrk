const Beers = require("./models/beers.js");
const BeersView = require("./views/beers_view.js");

document.addEventListener('DOMContentLoaded', () => {
  console.log("JavaScript loaded");

  const beersContainer = document.querySelector("#beers-list");
  const beersView = new BeersView(beersContainer);
  beersView.bindEvents();

  const beers = new Beers();
  beers.getData();
  // change to bindEvents();

});
