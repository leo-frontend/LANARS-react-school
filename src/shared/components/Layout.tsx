import React from 'react';
import {Outlet} from 'react-router';

import {Box} from '@mui/material';

import Header from './Header';
import SideMenu from './SideMenu';


const Layout = (): JSX.Element => {
  return (
    <>
      <Header/>
      <Box sx={{
        display: 'grid',
        gridTemplateColumns: '346px 1038px',
        p: 0,
      }}
      >
        <SideMenu/>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;

