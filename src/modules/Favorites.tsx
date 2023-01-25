import React from 'react';

import {Box, ImageListItem} from '@mui/material';

import {useAppSelector} from "../shared/hooks/redux_hooks";


const Favorites = (): JSX.Element => {
  const {photo} = useAppSelector(state => state);

  return (
    <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3}}>
      {photo.photos.map((item) => item.isFavorite && (
        <ImageListItem key={item.id}>
          <img
            style={{borderRadius: 8, width: 142, height: 142}}
            src={`data:${item.type};base64,${item.image}`}
            alt={item.description}/>
        </ImageListItem>
      ))}
    </Box>
  );
};
export default Favorites;

