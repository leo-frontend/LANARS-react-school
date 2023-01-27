import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import { Box, Typography } from '@mui/material';
import FabUploadPhoto from 'modules/components/FabUploadPhoto';
import { theme } from 'styles/theme';

const NoPhotos: React.FC = () => {
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
      <InsertPhotoOutlinedIcon sx={{ width: 123, height: 123, color: theme.palette.secondary.light }}/>
      <Typography
        maxWidth={242}
        mt={5}
        sx={{fontSize: '1rem', lineHeight: '1.5rem', letterSpacing: '0.2px',textAlign: 'center'}}
        color="primary.light"
      >
        There are no photos yet. Please click <b>Upload photo</b> to add
      </Typography>
      <FabUploadPhoto />
    </Box>
  );
};
export default NoPhotos;
