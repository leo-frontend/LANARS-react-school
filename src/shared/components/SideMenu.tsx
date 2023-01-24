import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import {MenuItem, MenuList, styled} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';

import {AllPath} from '../constants/path';
import {colors} from '../../styles/variables';


const SideMenuBtn = styled(MenuItem)(() => ({
  width: 168,
  margin: 8,
  padding: 8,
  borderRadius: 48,
  color: colors.light.text,
  ['&:hover, &.Mui-selected']: {
    borderRadius: 48,
    color: colors.light.primary,
    backgroundColor: colors.light.bgBtnSideMenu,
  },
}));


const SideMenu = (): JSX.Element => {
  const [route, setRoute] = useState<string>(AllPath.ALL_PHOTO);
  return (
    <MenuList sx={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', p: 4}}>
      <Link style={{display: 'flex', textDecoration: 'none', color: 'inherit'}}  to="/">
        <SideMenuBtn
          selected={route === AllPath.ALL_PHOTO && true}
          onClick={() => setRoute(AllPath.ALL_PHOTO)}
        >
          <InsertPhotoOutlinedIcon sx={{p: '0 8px 0 16px'}}/>
          All photos
        </SideMenuBtn>
      </Link>
      <Link style={{display: 'flex', textDecoration: 'none', color: 'inherit'}} to={AllPath.ALBUM}>
        <SideMenuBtn
          selected={route === AllPath.ALBUM && true}
          onClick={() => setRoute(AllPath.ALBUM)}
        >
          <PhotoAlbumOutlinedIcon sx={{p: '0 8px 0 16px'}}/>
          Albums
        </SideMenuBtn>
      </Link>
    </MenuList>
  );
};

export default SideMenu;
