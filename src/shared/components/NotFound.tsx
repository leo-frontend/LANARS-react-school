import React from 'react';

import {Container, styled, Typography} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';

import {MyLink} from '../../styles/styles.';


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
        ? <InsertPhotoOutlinedIcon sx={{color: '#E5EDF2', width: 200, height: 200}}/>
        : <PhotoAlbumOutlinedIcon sx={{color: '#E5EDF2', width: 200, height: 200}}/>
      }
      <Typography
        variant="subtitle1"
        component="div"
        sx={{color: '#6C7276', textAlign: 'center', m: 2, width: 235}}
      >
        There are no {name}s yet. Please click
        <MyLink to="#" sx={{fontWeight: 600, color: '#6C7276'}}> Upload {name}
        </MyLink> to add
      </Typography>
    </MainBody>
  );
};

export default NotFound;
