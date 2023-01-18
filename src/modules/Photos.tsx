import React, {useEffect} from 'react';

import {Container, ImageList, ImageListItem} from '@mui/material';

import {getPhoto} from '../shared/store/photoSlice';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';
import NotFound from '../shared/components/NotFound';


const Photos = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {photo} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(getPhoto([]));
  }, []);


  return (
    <Container sx={{mt: 3}}>
      {photo.photos.length === 0 ?
        <NotFound name="photo" svgSwitch={true}/> :
        <>
          <ImageList cols={6} gap={8} rowHeight={152}>
            {photo.photos.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  style={{borderRadius: 8, width: 152}}
                  src={`data:${item.type};base64,${item.image}`}
                  alt={item.description}/>
              </ImageListItem>
            ))}
          </ImageList>
        </>
      }
    </Container>
  );
};
export default Photos;
