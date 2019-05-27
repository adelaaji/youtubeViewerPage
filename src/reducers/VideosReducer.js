export default (state = {}, payload) => {
  switch (payload.type) {
    case "LOAD_VIDEOS":
      return payload.data;

    default:
      return state;
  }
};
