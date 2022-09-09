import {GET_VIDEOS, SET_VIDEOS} from './constants';

export const getVideos = () => ({ type: GET_VIDEOS });
export const setVideos = (videos) => ({ type: SET_VIDEOS, payload: videos });
