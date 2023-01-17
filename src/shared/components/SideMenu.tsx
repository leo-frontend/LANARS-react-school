import React from 'react';

import {Box, IconButton, styled, Typography} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';

import {MyLink} from '../../styles/styles.';

const SideMenuBtn = styled(IconButton)(() => ({
  justifyContent: 'start',
  paddingLeft: 16,
  width: 164,
  height: 48,
  color: '#3F4A53',
  ['&:hover, :focus']: {
    borderRadius: '40px',
    color: '#1786ED',
    backgroundColor: '#1D8CF41F',
  },
  ['span']: {
    paddingLeft: 16,
  },
}));

const SideMenu = (): JSX.Element => {
  return (
    <Box sx={{margin: '24px 40px 0 40px'}}>
      <MyLink to="/">
        <SideMenuBtn>
          <InsertPhotoOutlinedIcon/>
          <Typography variant="body1" component="span" >All photos</Typography>
        </SideMenuBtn>
      </MyLink>
      <MyLink to="/albums">
        <SideMenuBtn>
          <PhotoAlbumOutlinedIcon/>
          <Typography variant="body1" component="span" >Albums</Typography>
        </SideMenuBtn>
      </MyLink>
    </Box>
  );
};

export default SideMenu;
