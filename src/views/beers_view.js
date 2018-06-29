const PubSub = require("../helpers/pub_sub.js");

const BeersView = function(container){
  this.container = container;
};
// listen to click, publish clicked beer id to beers

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe("Beers:all-beers-loaded", (event) => {
    const beers = event.detail;
    console.log(beers);
    this.populate(beers);
  });
};

BeersView.prototype.populate = function (beers) {
  beers.forEach((beer, index) => {
    const beerItem = this.createItem(beer.name, index);
    this.container.appendChild(beerItem);
  });
};

BeersView.prototype.createItem = function (name, index) {
  const item = document.createElement('li');
  item.textContent = name;
  item.value = index;
  return item;
};

module.exports = BeersView;
