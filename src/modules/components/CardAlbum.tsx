import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material';
import { useAppSelector } from 'shared/hooks';

const CardAlbum: React.FC = () => {

  const albums = useAppSelector((album) => album.albums.albums);
  const photos = useAppSelector((photo) => photo.photos);
  const coverImage = photos.photos[0].image;

  return (
    <Card variant="outlined" sx={{ maxWidth: 280, mt: 2, border: 'none' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="280"
          src={`data:image/jpeg;base64,${coverImage}`}
          alt="Album cover"
          sx={{ borderRadius: 2 }}/>
        <CardContent sx={{ p: 0, pt: 2 }}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            color="primary.dark"
            fontWeight={500}
            fontSize={16}
            marginBottom={1}
          >
            {albums.map(album => album.description)}
          </Typography>
          <Typography variant="body2" color="primary.dark">
            {albums.map(album => album.photos.length)} images
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardAlbum;
