import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {MenuItem, MenuList, styled} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';

import {AllPath} from '../constants/path';


const SideMenuBtn = styled(MenuItem)(() => ({
  width: 168,
  margin: 8,
  padding: 8,
  borderRadius: 48,
  color: '#3F4A53',
  ['&:hover, &.Mui-selected']: {
    borderRadius: 48,
    color: '#1786ED',
    backgroundColor: '#1D8CF41F',
  },
  ['&.MuiMenuItem-root a']: {
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
  },
}));


const SideMenu = (): JSX.Element => {
  const [route, setRoute] = useState<string>(AllPath.ALL_PHOTO);
  return (
    <MenuList sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 4}}>
      <SideMenuBtn
        selected={route === AllPath.ALL_PHOTO && true}
        onClick={() => setRoute(AllPath.ALL_PHOTO)}
      >
        <Link to="/">
          <InsertPhotoOutlinedIcon sx={{p: '0 8px 0 16px'}}/>
          All photos
        </Link>
      </SideMenuBtn>
      <SideMenuBtn
        selected={route === AllPath.ALBUM && true}
        onClick={() => setRoute(AllPath.ALBUM)}
      >
        <Link to="/albums">
          <PhotoAlbumOutlinedIcon sx={{p: '0 8px 0 16px'}}/>
          Albums
        </Link>
      </SideMenuBtn>
    </MenuList>
  );
};

export default SideMenu;
