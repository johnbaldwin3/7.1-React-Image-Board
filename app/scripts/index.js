var $ = require('jquery');
var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');

var ImageCollection = require('./models/image_models.js').ImageCollection;

var ImagePage = require('./components/form.jsx').ImagePage;

var images = new ImageCollection();



console.log(images.url);
ReactDOM.render(
  React.createElement(ImagePage, {images}),
  document.getElementById('app')
)

//any attribute doesn't need string
