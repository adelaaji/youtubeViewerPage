import React, { Component } from "react";
//import ypi from "youtube-channel-videos";
class Search extends Component {
  state = {};

  componentDidMount() {
    var that = this;
    var API_key = "AIzaSyC4cGxmfD2dNJwTagWQNmQIo7cRBGxjbCU";
    var channelID = "UC8Szh5ZJeGFBWyqKyTCVPpA";
    var maxResults = 20;
    var url =
      "https://www.googleapis.com/youtube/v3/search?key=" +
      API_key +
      "&channelId=" +
      channelID +
      "&part=snippet,id&order=date&maxResults=" +
      maxResults;

    fetch(url)
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(data) {
        console.log("DATA", data);

        that.setState({ videos: data.items, loading: false });
      })
      .catch(error => {
        console.error(error);
      });
  }

  //   componentWillMount() {
  //     ypi.channelVideos(
  //       "AIzaSyC4cGxmfD2dNJwTagWQNmQIo7cRBGxjbCU",
  //       "UCsvMopMspsGw89AWim0FMfw",
  //       function(channelItems) {
  //         console.log("Items", channelItems);
  //       }
  //     );
  //AIzaSyC4cGxmfD2dNJwTagWQNmQIo7cRBGxjbCU
  // }
  render() {
    return (
      <React.Fragment>
        <h1>ADel</h1>
      </React.Fragment>
    );
  }
}

export default Search;
