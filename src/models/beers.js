const PubSub = require("../helpers/pub_sub.js");
const Request = require("../helpers/request.js");

const Beers = function(){
  this.data = [];
};


Beers.prototype.getData = function (beer) {
  const url = `https://api.punkapi.com/v2/beers`;
  const request = new Request(url);
  const handleRequestComplete = (responseData) => {
    this.data = responseData;
    PubSub.publish("Beers:all-beers-loaded", this.data);
    console.log(this.data);
  };

  request.get()
    .then(handleRequestComplete)
    .catch(error => console.error(error));
}



module.exports = Beers;
