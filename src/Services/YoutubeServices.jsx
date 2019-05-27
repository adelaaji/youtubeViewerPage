//YoutubeServices
import axios from "axios";
const APIKEY = "AIzaSyDKl7OTzudYuDUIpnllWwloOY6cYMADiaE";
const APIURL = "https://www.googleapis.com/youtube/v3";

export const YTService = () => {
  const url = APIURL + "/search";

  return {
    getVideosByChannelId: (channelId, maxResults) => {
      console.log(
        "URL",
        `${url}?key=${APIKEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
      );

      return axios.get(
        `${url}?key=${APIKEY}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
      );
    }
  };
};
