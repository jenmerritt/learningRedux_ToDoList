import { ADD_ITEM, DATA_LOADED } from "../constants/action-types";

const initialState = {
  items: [{
      id: 1,
      title: "yo, get this thing done!"
  }],
  remoteArticles: []
};

function rootReducer(state = initialState, action) {
  if (action.type === ADD_ITEM) {
    return Object.assign({}, state, {
      items: state.items.concat(action.payload)
    });
  }
  if (action.type === DATA_LOADED) {
    return Object.assign({}, state, {
      remoteArticles: state.remoteArticles.concat(action.payload)
    });
  }
  return state;
}

export default rootReducer;