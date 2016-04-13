import * as types from '../actions/ActionTypes';

const initialState = {
  index: 0
};

export default function Home ( state = initialState , action = {}) {

  switch (action.type) {
    case types.INDEX_LIST:
      return {...action}
      break;
    default:
    return state;
  }

}
