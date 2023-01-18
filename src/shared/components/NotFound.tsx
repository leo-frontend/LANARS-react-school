import React from 'react';
import {Link} from 'react-router-dom';

import {Container, styled, Typography} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';

import {colors} from '../../styles/variables';


const MainBody = styled(Container)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '30vw',
}));

const NotFound = ({name, svgSwitch}: { name: string; svgSwitch: boolean }): JSX.Element => {

  return (
    <MainBody>
      {svgSwitch
        ? <InsertPhotoOutlinedIcon sx={{color: colors.light.colorIcon, width: 280, height: 280}}/>
        : <PhotoAlbumOutlinedIcon sx={{color: colors.light.colorIcon, width: 280, height: 280}}/>
      }
      <Typography
        variant="subtitle1"
        component="div"
        sx={{color: colors.light.textNotFound, textAlign: 'center', m: 2, width: 235}}
      >
        There are no {name}s yet. Please click
        <Link style={{textDecoration: 'none', fontWeight: 600, color: 'inherit'}} to="#"> Upload {name}
        </Link> to add
      </Typography>
    </MainBody>
  );
};

export default NotFound;
