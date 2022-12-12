import React, {useEffect} from 'react';

import {getPhoto} from '../shared/store/photoSlice';
import {getAlbum} from '../shared/store/albumSlice';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const photo = useAppSelector(state => state.photo.photos);
  const album = useAppSelector(state => state.album.album);

  useEffect(() => {
    dispatch(getPhoto([]));
    dispatch(getAlbum([]));
  }, []);

  return (
    <div className="App">
      {photo.map(item => (
        <div>
          {item.id}
          <img key={item.image} src={item.image} alt={item.type}/>
        </div>
      ))}
      {album.map(item => (
        <div key={item.title}>
          {item.title}
          <div>{item.photos}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
