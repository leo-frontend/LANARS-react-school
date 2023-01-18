import React from 'react';
import {Link} from 'react-router-dom';

import {Box, Button, Divider, Grid, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import {AllPath} from '../constants/path';


const HeaderAlbums = (): JSX.Element => {
  return (
    <Grid item xs={12}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        m: 3,
        mb: 2,
      }}
      >
        <Typography variant="h1" component="h4">
          Albums
        </Typography>
        <Box>
          <Link style={{textDecoration: 'none'}} to={AllPath.CREATE_ALBUM}>
            <Button variant="text">
              <AddIcon/>
              <Typography variant="button">
                CREATE ALBUM
              </Typography>
            </Button>
          </Link>
          <Button variant="text">
            <SwapVertIcon/>
            <Typography variant="button">
              BY DATE ADDED
            </Typography>
          </Button>
        </Box>
      </Box>
      <Divider/>
    </Grid>
  );
};

export default HeaderAlbums;
