export const add = num => ({ type: "add", payload: num }); // action creator
export const minus = num => ({ type: "minus", payload: num }); // action creator

export const counterReducer = function(state = 0, action) {
    const num = action.payload || 1;
    switch (action.type) {
      case "add":
        return state + num;
      case "minus":
        return state - num;
      default:
        return state;
    }
  };