import React from 'react';

import {Box, Button, Divider, Grid, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SwapVertIcon from '@mui/icons-material/SwapVert';

import {MyLink} from 'styles/styles.';


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
        <Typography variant={'h1'} component={'h4'}>
          Albums
        </Typography>
        <Box>
          <MyLink to={'/albums/createAlbum'}>
            <Button variant="text">
              <AddIcon/>
              <Typography variant={'button'}>
                CREATE ALBUM
              </Typography>
            </Button>
          </MyLink>
          <Button variant="text">
            <SwapVertIcon/>
            <Typography variant={'button'}>
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
