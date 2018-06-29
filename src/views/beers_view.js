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
    const beerItem = this.createItem(beer.name, beer.tagline);
    this.container.appendChild(beerItem);
  });
};

BeersView.prototype.createItem = function (name, tagline) {
  const itemList = document.createElement('ul');
  itemList.textContent = name;

  const tag = document.createElement('li');
  tag.textContent = tagline;
  itemList.appendChild(tag);


  return itemList;
};

module.exports = BeersView;
