export function orderGrid(items, prev, next) {
  return dispatch => {
    dispatch(orderVideos(""));
  };
}

export function orderVideos(data) {
  return {
    type: "ORDER_VIDEOS",
    data: data
  };
}
