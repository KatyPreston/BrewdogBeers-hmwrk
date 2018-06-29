const PubSub = require("../helpers/pub_sub.js");

const BeersView = function(container){
  this.container = container;
};

BeersView.prototype.bindEvents = function () {
  PubSub.subscribe("Beers:all-beers-loaded", (event) => {
    const beers = event.detail;
    console.log(beers);
    this.populate(beers);
  });
};

BeersView.prototype.populate = function (beers) {
  beers.forEach((beer, index) => {
    const beerItem = this.createItem(beer.name, beer.tagline, beer.description);
    this.container.appendChild(beerItem);
  });
};

BeersView.prototype.createItem = function (name, tagline, description, image_url) {
  const itemList = document.createElement("ul");
  this.container.appendChild(itemList);

  const beerName = document.createElement("h3");
  beerName.textContent = name;
  itemList.appendChild(beerName);

  const tag = document.createElement("li");
  tag.textContent = tagline;
  itemList.appendChild(tag);

  const beerDescription = document.createElement("p");
  beerDescription.textContent = description;
  itemList.appendChild(beerDescription);

  return itemList;
};

module.exports = BeersView;
