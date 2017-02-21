var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
//
var ImageCollection = require('../models/image_models.js').ImageCollection;

var ImageForm = React.createClass({
  getInitialState: function(){
    return { url:'', caption:''}
  },
  handleURLChange: function(event){
    this.setState({url: event.target.value});
  },//another method for caption
  handleCaptionChange: function(event) {
    this.setState({caption: event.target.value});
    console.log('caption', event.target.value);
  },
  submitImage: function(event){
    event.preventDefault();
    this.props.submitImage(this.state);
    console.log("I've been clicked");
  },
  render: function() {
    return (

      <div  className="col-md-8 col-md-offset-2 form-holder">
        <form onSubmit={this.submitImage}>
          <div className="form-group">
            <label htmlFor="imageUrl">Image URL:</label>
            <input onChange={this.handleURLChange} type="text" className="form-control" id="imageUrl" name="blogTitle" placeholder="Image URL..." value={this.state.url}/>
            <label htmlFor="imageCaption">Image Caption:</label>
            <br></br>
            <textarea onChange={this.handleCaptionChange} id="imageCaption" className="form-control" rows="4" name="blogBody" placeholder="Image Caption..." value={this.state.caption} />
            <button onClick= {this.returnHome} type="submit" className="btn btn-success">Cancel</button>
            <button type="submit" className="btn btn-primary">Save &amp; Submit</button>
          </div>
        </form>
      </div>
    )
  }
});

var ImageListing = React.createClass({

  render: function() {
    var imagesList = this.props.images.map(function(image){
      return (
      <li key={image.cid} className="image-list-item">
        <div className="row">
          <div className="col-sm-8 col-md-8 col-sm-offset-2 col-md-offset-2">
            <div className="thumbnail">
              <img src={image.get('url')} alt="..." />
              <div className="caption">
                <h5>{image.get('caption')}</h5>
                <p><a href="#" className="btn btn-primary" role="button">Edit</a> <a href="#" className="btn btn-default btn-danger" role="button">Delete</a></p>
              </div>
            </div>
          </div>
        </div>
      </li>
    )
    });
    return (
      <ul className="ul-contain">
        {imagesList}
      </ul>
    )

  }

});

var ImagePage = React.createClass({
  componentWillMount: function(){
    var self = this;
    this.props.images.fetch().done(function(){

      self.forceUpdate();

    });

  },
  getInitialState: function(){

    return {collection: this.props.images}
    //this.state.collection is the images collection
  },
  submitImage: function(image){
    this.state.collection.create(image);
    this.setState({collection: this.state.collection});

  },
  render: function() {

    return (
    <div>
      <div className="form-div">
        <ImageForm  submitImage={this.submitImage}/>
      </div>
      <div className="image-div">
        <ImageListing images={this.state.collection} />
      </div>
    </div>
   )
  }
});

module.exports = {
  ImagePage
}
