import React, { Component } from "react";
import { connect } from "react-redux";
import * as VideosActions from "../actions/videosActions";
import SearchBlock from "../components/SearchBlock";
import SearchGrid from "../components/SearchGrid";
class SearchPage extends Component {
  state = {};

  componentWillMount() {
    var channelResult = localStorage.getItem("channelId");

    if (channelResult !== null) {
      this.props.getFromStorage();
    } else {
      this.props.getVideos();
    }
  }
  render() {
    return (
      <React.Fragment>
        <div className="page-wrapper">
          <header className="header">
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="card mt-4 p-5">
                    <SearchBlock
                      getVideos={channel => this.props.getVideos(channel)}
                      result={this.props.searchResult}
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className="search-result">
            <SearchGrid
              result={this.props.searchResult}
              reorder={(channel, items, prev, next) =>
                this.props.reorderGrid(channel, items, prev, next)
              }
            />
          </section>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return { searchResult: state.videosReducers };
};

const mapDispatchToProps = dispatch => {
  return {
    getVideos: id => {
      dispatch(VideosActions.getVideos(id));
    },
    getFromStorage: () => {
      dispatch(VideosActions.getFromStorage());
    },
    reorderGrid: (channel, items, prev, next) => {
      dispatch(VideosActions.reorderGrid(channel, items, prev, next));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchPage);
