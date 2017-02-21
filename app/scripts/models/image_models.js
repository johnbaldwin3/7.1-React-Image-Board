var Backbone = require('backbone');


var Image = Backbone.Model.extend({
  idAttribute: '_id',
  defaults : {
    url : 'https://unsplash.it/200',
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
