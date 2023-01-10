import React, {useEffect} from 'react';

import {getPhoto} from '../shared/store/photoSlice';
import {getAlbum} from '../shared/store/albumSlice';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {photo, album} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(getPhoto([]));
    dispatch(getAlbum([]));
  }, []);


  return (
    <div className="App">
    </div>
  );
};

export default App;
