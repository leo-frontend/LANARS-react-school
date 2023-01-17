import React from 'react';

import {Stack, Typography} from '@mui/material';
import ReportOutlinedIcon from '@mui/icons-material/ReportOutlined';

import {colors} from '../styles/variables';


const NotFoundPage = (): JSX.Element => {

  return (
    <Stack spacing={2} sx={{height: '50vw', alignItems: 'center', justifyContent: 'center'}}>
      <ReportOutlinedIcon sx={{color: '#E5EDF2',width: 200,height: 200}}/>
      <Typography
        variant="h1"
        component="div"
      >
        ERROR
      </Typography>
      <Typography
        variant="body1"
        component="div"
      >
        Page not found
      </Typography>
    </Stack>
  );
};

export default NotFoundPage;
