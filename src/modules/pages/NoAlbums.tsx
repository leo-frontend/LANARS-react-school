import { PhotoAlbumOutlined, AddPhotoAlternateOutlined } from '@mui/icons-material';
import { Box, Button, Typography } from '@mui/material';
import { theme } from 'styles/theme';

const NoAlbums: React.FC = () => {
  return (
    <Box
      sx={{
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height: '100vh',
      }}
    >
      <PhotoAlbumOutlined sx={{ width: 164, height: 164, color: theme.palette.secondary.light }}/>
      <Typography
        maxWidth={242}
        mt={'22px'}
        mb={4}
        sx={{fontSize: '1rem', lineHeight: '1.5rem', letterSpacing: '0.2px',textAlign: 'center'}}
        color="primary.light"
      >
        Album is empty
      </Typography>
      <Button disabled startIcon={<AddPhotoAlternateOutlined />}>
        ADD PHOTO
      </Button>
    </Box>
  );
};
export default NoAlbums;
