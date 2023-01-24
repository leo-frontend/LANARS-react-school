import React, {useEffect} from 'react';

import {Box, ImageListItem, Stack} from '@mui/material';

import {getPhoto} from '../shared/store/photoSlice';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';
import NotFound from '../shared/components/NotFound';
import UploadButton from 'shared/components/UploadButton/UploadButton';


const Photos = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {photo} = useAppSelector(state => state);

  useEffect(() => {
    dispatch(getPhoto([]));
  }, []);


  return (
    <>
      {photo.photos.length === 0 ?
        <NotFound name="photo" svgSwitch={true}/> :
        <Stack>
          <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3}}>
            {photo.photos.map((item) => (
              <ImageListItem key={item.id}>
                <img
                  style={{borderRadius: 8, width: 142, height: 142}}
                  src={`data:${item.type};base64,${item.image}`}
                  alt={item.description}/>
              </ImageListItem>
            ))}
          </Box>
          <Box sx={{display: 'flex', justifyContent: 'flex-end', pr: 5}}>
            <UploadButton nameBtn="Upload photo"/>
          </Box>
        </Stack>
      }
    </>
  );
};
export default Photos;
