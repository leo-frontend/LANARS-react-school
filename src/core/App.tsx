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
      {photo.photos.map(item => (
        <div key={item.date}>
          {item.id}
          <img src={item.image} alt={item.type}/>
        </div>
      ))}
      {album.album.map(item => (
        <div key={item.date}>
          {item.title}
          <div>{item.photos}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
