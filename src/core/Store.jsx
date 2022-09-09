import React, {useEffect, useReducer} from 'react';
import CtxStore from '../shared/contexts/store';
import { reducer } from '../shared/store/reducer';
import {getVideos, setVideos} from '../shared/store/actions';
import API from './services/API';

const initialState = {
  videos: [],
  loading: false,
};




const StoreContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    /*API.get('/api/videos?').then((values) => {
      console.log(values);
    });*/
  }, []);

  return (
    <CtxStore.Provider value={{ state, dispatch }}>
      {children}
    </CtxStore.Provider>
  );
};

export default StoreContext;
