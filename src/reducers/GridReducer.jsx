export default (state = {}, payload) => {
  switch (payload.type) {
    case "ORDER_VIDEOS":
      return payload.data;
    default:
      return state;
  }
};
