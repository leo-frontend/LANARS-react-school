import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';

import {Card, CardContent, CardMedia, Grid, styled, Typography} from '@mui/material';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

import {getAlbum} from '../shared/store/albumSlice';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';
import NotFound from '../shared/components/NotFound';
import HeaderAlbums from '../shared/components/HeaderAlbums';
import {colors} from '../styles/variables';


const BlankAlbum = styled(CardMedia)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 8,
  height: 280,
  backgroundColor: colors.light.bgAlbumNotFound,
}));


const Albums = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {album} = useAppSelector(state => state.album);

  useEffect(() => {
    dispatch(getAlbum([]));
  }, []);

  return (
    <Grid container direction="row">
      <HeaderAlbums/>
      {album.length === 0
        ? <NotFound name="album" svgSwitch={false}/>
        : album.map((item) => (
          <Grid key={item.id} item xs={4} sx={{mt: 2}}>
            <Link style={{textDecoration: 'none'}} to={`/albums/${item.id}`}>
              <Card sx={{maxWidth: 280, boxShadow: 'none', cursor: 'pointer'}}>
                {item.photos[0] && typeof item.photos[0] === 'string' ?
                  <CardMedia
                    sx={{borderRadius: '8px'}}
                    component="img"
                    height="280"
                    image={item.photos[0]}
                    alt={item.title}/> :
                  <BlankAlbum>
                    <InsertPhotoOutlinedIcon sx={{color: colors.light.colorIcon, width: 168, height: 168}}/>
                  </BlankAlbum>}
                <CardContent sx={{p: 0}}>
                  <Typography variant="h5" component="div">
                    {item.description}
                  </Typography>
                  <Typography variant="subtitle1">
                    {item.photos.length} images
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
    </Grid>
  );
};

export default Albums;