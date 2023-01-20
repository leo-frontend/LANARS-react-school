import React from 'react';

import {AppBar, Divider, Toolbar, Typography} from '@mui/material';

import IconReact from './IconReact';

const Header = (): JSX.Element => {
  return (
    <AppBar sx={{boxShadow: 'none'}} position="sticky" color="inherit">
      <Toolbar>
        <IconReact/>
        <Typography variant="h1" component="h1" sx={{mt: 1}}>
          React school
        </Typography>
      </Toolbar>
      <Divider/>
    </AppBar>
  );
};

export default Header;
