import { AppBar, SvgIcon, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { theme } from 'styles/theme';
import { ReactComponent as reactIcon } from '../../assets/icons/react-logo.svg';


const Header: React.FC = () => {
  return (
    <Box sx={{display: 'flex', flexGrow: 1, alignItems: 'center' }}>
      <AppBar sx={{
        backgroundColor: theme.palette.primary.contrastText,
        color: theme.palette.primary.dark,
        paddingLeft: 2,
        paddingRight: 2,
        boxShadow: 'none',
        borderBottom: '1px solid #E5EDF2',
      }}
      position="fixed"
      >
        <Toolbar>
          <SvgIcon component={reactIcon} inheritViewBox sx={{mr: 2, width: 40, height: 40}}/>
          <Typography variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: 'none', sm: 'block' },
              fontWeight: 500,
              fontSize: 22,
              lineHeight: '24px'}
            }
          >
        React school
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
