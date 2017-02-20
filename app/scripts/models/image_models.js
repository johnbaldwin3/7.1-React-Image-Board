var Backbone = require('backbone');


var Image = Backbone.Model.extend({
  idAttribute: '_id',
  defaults : {
    url : 'www.unsplashit.com',
    caption: 'Picture Info'
  }
});

var ImageCollection = Backbone.Collection.extend({
  model: Image,
  url: 'https://tiny-lasagna-server.herokuapp.com/collections/johnsimages/'
});

module.exports = {
  Image,
  ImageCollection
};
