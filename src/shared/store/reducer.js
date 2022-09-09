import {GET_VIDEOS, SET_VIDEOS} from './constants';

export const reducer = (state, action) => {
  switch (action.type) {
    case GET_VIDEOS: return {
      ...state,
      loading: true,
    };
    case SET_VIDEOS: return {
      ...state,
      loading: false,
      videos: action.payload,
    };
    default: return state;
  }
};
