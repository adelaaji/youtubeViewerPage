import React, { Component } from "react";
import EdiText from "react-editext";
import { connect } from "react-redux";
import * as VideosActions from "../actions/videosActions";

class VideoViewer extends Component {
  state = {};
  onSave = val => {
    this.props.updateComment(this.props.item.itemId, val);
  };
  render() {
    const { item } = this.props;
    return (
      <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
        <div className="card h-100 ">
          <img
            className="card-img-top"
            src={item.itemDetails.snippet.thumbnails.high.url}
            alt="Card  cap"
          />
          <div className="card-body">
            <h5 className="card-title text-danger">
              {item.itemDetails.snippet.title}
            </h5>
            <p className="card-text text-secondary">
              {item.itemDetails.snippet.description}
            </p>

            <EdiText
              type="text"
              value={item.itemComment !== "" ? item.itemComment : "Add note!"}
              onSave={this.onSave}
            />
            {/* <a href="#" className="btn btn-primary">
              Play video
            </a> */}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { searchResult: state.videosReducers };
};

const mapDispatchToProps = dispatch => {
  return {
    updateComment: (id, comment) => {
      dispatch(VideosActions.updateComment(id, comment));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoViewer);
