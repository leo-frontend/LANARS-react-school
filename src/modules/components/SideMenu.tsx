/* eslint-disable @typescript-eslint/naming-convention */
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {ImageOutlined, PhotoAlbumOutlined } from '@mui/icons-material';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  MemoryRouter,
  Route,
  Routes,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { ListItemButton } from '@mui/material';
import { theme } from 'styles/theme';
import { routes } from 'routes';
import { forwardRef, useState } from 'react';


function Router(props: { children?: React.ReactNode }) {
  const { children } = props;
  if (typeof window === 'undefined') {
    return <StaticRouter location="/AllPhotos">{children}</StaticRouter>;
  }

  return (
    <MemoryRouter initialEntries={['/AllPhotos']} initialIndex={0}>
      {children}
    </MemoryRouter>
  );
}

interface IListItemLinkProps {
  icon: React.ReactElement;
  primary: string;
  to: string;
}

const Link = forwardRef<HTMLAnchorElement, RouterLinkProps>(function Link(
  itemProps,
  ref,
) {
  return <RouterLink ref={ref} {...itemProps} role={undefined} />;
});

function ListItemLink(props: IListItemLinkProps) {
  const { icon, primary, to } = props;
  const [selectedIndex, setSelectedIndex] = useState(1);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number,
  ) => {
    setSelectedIndex(index);
  };

  return (
    <li>
      <ListItemButton component={Link}
        to={to}
        sx={{
          p: 0,
          width: '164px',
          height: '48px',
          pt: '12px',
          pb: '12px',
          pl: '20px',
          pr: '20px',
        }}
        selected = {selectedIndex === 0}
        onClick={(event: any) => handleListItemClick(event, 0)}
      >
        <ListItemIcon sx={{minWidth: '38px'}}>{icon}</ListItemIcon>
        <ListItemText primaryTypographyProps={{
          color: theme.palette.primary.dark,
          fontSize: 16,
          fontWeight: 500,
          lineHeight: '24px',
          letterSpacing:'0.2px',
        }}
        primary={primary} />
      </ListItemButton>
    </li>
  );
}

export const SideMenu: React.FC = () => {
  return (
    <Router>
      <Box sx={{ width: '100%', pt: 8, display: 'flex' }}>
        <Paper elevation={0}>
          <List sx={{
            mr: '142px',
            width: 164,
            '&& .Mui-selected, && .MuiButtonBase-root:hover': {
              bgcolor: theme.palette.secondary.main,
              color: theme.palette.primary.main,
              borderRadius: '44px',
              '& .MuiSvgIcon-root, & .MuiTypography-root': {
                color: theme.palette.primary.main,
              },
            },
          }}
          >
            <ListItemLink to="/AllPhotos" primary="All photos" icon={<ImageOutlined />} />
            <ListItemLink to="/Albums" primary="Albums" icon={<PhotoAlbumOutlined />} />
          </List>
        </Paper>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />}/>
          ))}
        </Routes>
      </Box>
    </Router>
  );
};
