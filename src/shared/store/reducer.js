import {ADD_SELECT, ADD_VIDEOS, CLEAR_SELECT, GET_VIDEOS, REMOVE_SELECT, SET_VIDEOS} from './constants';

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
    case ADD_VIDEOS: return {
      ...state,
      videos: [...state.videos, ...action.payload],
    };
    case ADD_SELECT: return {
      ...state,
      selected: [...state.selected, action.payload],
    };
    case REMOVE_SELECT: return {
      ...state,
      selected: state.selected.filter((sel) => sel !== action.payload),
    };
    case CLEAR_SELECT: return {
      ...state,
      selected: [],
    };
    default: return state;
  }
};
