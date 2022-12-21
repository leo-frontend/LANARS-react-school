import React, {useEffect} from 'react';

import {addPhoto, deletePhoto, getPhoto, updatePhoto} from '../shared/store/photoSlice';
import {addAlbum, deleteAlbum, getAlbum, updateAlbum} from '../shared/store/albumSlice';
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
      <button onClick={() => {
        const newPhoto = {
          date: 12312313123,
          description: 'string',
          id: 6,
          image: 'string',
          size: 2,
          type: 'string',
        };
        dispatch(addPhoto(newPhoto));
      }
      }
      >add photo
      </button>
      <button onClick={() => {
        const newAlbum = {
          date: 2134512,
          description: 'This album was auto-generated',
          id: 4,
          photos: [1, 2, 3, 4, 5, 6, 7],
          title: 'The first album',
        };
        dispatch(addAlbum(newAlbum));
      }
      }
      >add album
      </button>
      <button onClick={() => {
        const allId = photo.photos.map(item => item.id);
        dispatch(deletePhoto(allId));
      }}
      >delete all photos
      </button>
      <button onClick={() => {
        const allId = album.album.map(item => item.id);
        dispatch(deleteAlbum(allId));
      }}
      >delete all albums
      </button>
      {photo.photos.map(item => (
        <div
          key={item.date}
          style={{
            display: 'flex',
            padding: '20px',
          }
          }
        >
          <button onClick={() => dispatch(deletePhoto([6]))}>delete</button>
          <button onClick={() => {
            const upPhoto = {
              date: 6666,
              description: 'description',
              id: 6,
              image: 'image',
              size: 6666,
              type: 'aSD',
            };
            dispatch(updatePhoto(upPhoto));
          }
          }
          >edit photo
          </button>
          <div>{item.id}</div>
          <div>{item.size}</div>
          <div>{item.type}</div>
        </div>
      ))}
      {album.album.map(item => (
        <div
          key={item.date}
          style={{
            display: 'flex',
            padding: '20px',
          }
          }
        >
          <button onClick={() => dispatch(deleteAlbum([4]))}>delete</button>
          <button onClick={() => {
            const upAlbum = {
              date: 12121212121212,
              description: 'This album was232323',
              id: 1,
              photos: [1, 2, 3, 4, 5, 6, 7],
              title: 'The first album',
            };
            dispatch(updateAlbum(upAlbum));
          }
          }
          >edit album
          </button>
          <div>{item.id}</div>
          <div>{item.description}</div>
          <div>{item.title}</div>
        </div>
      ))}
    </div>
  );
};

export default App;
