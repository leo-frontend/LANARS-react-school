import {ADD_SELECT, ADD_VIDEOS, CLEAR_SELECT, GET_VIDEOS, REMOVE_SELECT, SET_VIDEOS} from './constants';

export const getVideos = () => ({ type: GET_VIDEOS });
export const setVideos = (videos) => ({ type: SET_VIDEOS, payload: videos });
export const addVideos = (videos) => ({ type: ADD_VIDEOS, payload: videos });

export const addSelect = (id) => ({ type: ADD_SELECT, payload: id });
export const removeSelect = (id) => ({ type: REMOVE_SELECT, payload: id });
export const clearSelects = () => ({ type: CLEAR_SELECT });
