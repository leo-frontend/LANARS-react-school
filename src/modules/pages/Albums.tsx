import { Divider, Box, Typography, Grid } from '@mui/material';
import CardAlbum from 'modules/components/CardAlbum';
import { useAppSelector } from 'shared/hooks';
import NoAlbums from './NoAlbums';

export const Albums: React.FC = () => {
  const albums = useAppSelector((album) => album.albums.albums);
  return (
    albums.length > 0 ?
      <Box sx={{width: '100%', p: 0 }}>
        <Typography
          mt="14px"
          ml="14px"
          mb="16px"
          lineHeight={'1.5rem'}
          fontSize={'1.375rem'}
          fontWeight={500}
          color="primary.dark"
        >
          Albums
        </Typography>

        <Divider />

        <Box sx={{ mr: '46px' }}>
          <Grid container rowSpacing={4} columnSpacing={3}>
            {albums.map((album, index) => (
              <Grid item xs key={index}>
                <CardAlbum />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box> : <NoAlbums />
  );
};
