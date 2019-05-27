import { YTService } from "../Services/YoutubeServices";
import arrayMove from "array-move";

export function getVideos(channelId = "UCjzHeG1KWoonmf9d5KBvSiw") {
  return dispatch => {
    let allItems = [];
    return YTService()
      .getVideosByChannelId(channelId, 20)
      .then(response => {
        console.log("::", response);

        // eslint-disable-next-line array-callback-return
        response.data.items.map(item => {
          if (item.id.videoId !== undefined) {
            let customItem = {
              itemDetails: item,
              itemId: item.id.videoId,
              itemComment: ""
            };
            return allItems.push(customItem);
          }
        });

        let channelInfo = {
          channelId: channelId,
          items: allItems
        };
        localStorage.setItem("channelId", JSON.stringify(channelInfo));
        dispatch(loadData(channelInfo));
      });
  };
}

export function loadData(data) {
  return {
    type: "LOAD_VIDEOS",
    data: data
  };
}

export function reorderGrid(channel, list, oldIndex, newIndex) {
  return dispatch => {
    console.log("Before Order", list);
    let newOrder = arrayMove(list, oldIndex, newIndex);

    let channelInfo = {
      channelId: channel,
      items: newOrder
    };
    localStorage.setItem("channelId", JSON.stringify(channelInfo));

    dispatch(loadData(channelInfo));
  };
}

export function getFromStorage() {
  return dispatch => {
    let data = localStorage.getItem("channelId");
    let jsonData = JSON.parse(data);
    dispatch(loadData(jsonData));
  };
}

export function updateComment(id, comment) {
  return dispatch => {
    console.log("updated", id, comment);
    let items = [];
    const data = localStorage.getItem("channelId");
    const jsonData = JSON.parse(data);
    console.log("json DATA", jsonData);

    // eslint-disable-next-line array-callback-return
    jsonData.items.map(item => {
      if (item.itemId === id) {
        item.itemComment = comment;
      } else {
        item = { ...item };
      }
      items.push(item);
    });

    let updatedData = { ...jsonData, items };

    localStorage.setItem("channelId", JSON.stringify(updatedData));
    dispatch(loadData(updatedData));
  };
}
