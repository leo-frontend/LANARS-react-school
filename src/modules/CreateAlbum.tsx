import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

import {
  Box,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  IconButton,
  ImageListItem,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import PhotoAlbumOutlinedIcon from '@mui/icons-material/PhotoAlbumOutlined';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
import CloseIcon from '@mui/icons-material/Close';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import {AllPath} from '../shared/constants/path';
import {colors} from '../styles/variables';
import AddPhoto from '../shared/components/AddPhoto';
import {useAppDispatch, useAppSelector} from '../shared/hooks/redux_hooks';
import {getPhoto} from '../shared/store/photoSlice';
import {addAlbum} from '../shared/store/albumSlice';


const CreateAlbum = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {photo} = useAppSelector(state => state);
  const [filled, setFilled] = useState<string>('');
  const [photos, setPhotos] = useState<Array<number>>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isModalConfirm, setModalConfirm] = useState<boolean>(false);
  const [isRender, setIsRender] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number>(0);


  useEffect(() => {
    dispatch(getPhoto([...photos]));
  }, [isRender]);

  const hendlerId = (id: number) => {
    setModalConfirm(!isModalConfirm);
    setDeleteId(id);
  };

  const modalAgree = () => {
    setModalConfirm(!isModalConfirm);
    setPhotos((prevState) => prevState.filter(item => item !== deleteId));
    setIsRender(!isRender);
  };

  const modalCloseOpen = () => setModalConfirm(!isModalConfirm);

  const handleOpen = () => setIsOpen(!isOpen);

  const createAlbum = () => {
    const album = {
      title: filled,
      description: 'description',
      photos,
      date: Date.now(),
    };
    dispatch(addAlbum(album));
  };

  return (
    <Box>
      <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', m: '16px 40px'}}>
        <Box sx={{display: 'flex', width: '80%'}}>
          <Link style={{textDecoration: 'none', color: 'inherit'}} to={AllPath.ALBUM}>
            <IconButton size="large" edge="start" color="inherit">
              <ArrowBackIcon/>
            </IconButton>
          </Link>
          <TextField
            value={filled}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => setFilled(event.target.value)}
            sx={{width: '100%', fontSize: 14}}
            label="Add title"
            variant="standard"/>
        </Box>
        {filled &&
          <Stack direction="row" spacing={2}>
            <AddPhoto isOpen={isOpen} handleOpen={handleOpen} setPhotos={setPhotos}/>
            <Box>
              <Button variant="text" color="primary" onClick={handleOpen}>
                <AddPhotoAlternateOutlinedIcon/>
                <Typography variant="button" component="div" sx={{pl: 1}}>ADD PHOTO</Typography>
              </Button>
            </Box>
            <Link style={{textDecoration: 'none', color: 'inherit'}} to={AllPath.ALBUM}>
              <Button
                variant="contained"
                color="primary"
                onClick={createAlbum}
              >
                CREATE
              </Button>
            </Link>
          </Stack>
        }
      </Box>
      {photos.length === 0 ?
        <Stack spacing={4} sx={{alignItems: 'center', justifyContent: 'center', height: '80vh'}}>
          <PhotoAlbumOutlinedIcon sx={{color: colors.light.colorIcon, width: 160, height: 168}}/>
          <Typography component="span">
            Album is empty
          </Typography>
          {filled &&
            <Button variant="text" color="primary" onClick={handleOpen}>
              <AddPhotoAlternateOutlinedIcon/>
              <Typography variant="button" component="div" sx={{pl: 1}}>ADD PHOTO</Typography>
            </Button>}
        </Stack> :
        <Box sx={{display: 'flex', flexWrap: 'wrap', gap: 1, m: '24px 40px'}}>
          {photo.photos.map((item) => (
            <ImageListItem
              key={item.id}
              sx={{position: 'relative', cursor: 'pointer'}}
              onClick={() => hendlerId(Number(item.id))}
            >
              <img
                style={{borderRadius: 8, width: 142, height: 142}}
                src={`data:${item.type};base64,${item.image}`}
                alt={item.description}/>
              <Checkbox
                sx={{position: 'absolute', top: '5px', right: '5px', color: '#fff'}}
                icon={<DeleteOutlineOutlinedIcon/>}
                value={item.id}/>
            </ImageListItem>
          ))}
        </Box>
      }
      <Dialog open={isModalConfirm} onClose={modalCloseOpen}>
        <DialogTitle sx={{display: 'flex', justifyContent: 'space-between'}}>
          <Typography sx={{fontWeight: 600}} component="span">
            Cancel creating album
          </Typography>
          <CloseIcon sx={{cursor: 'pointer'}} onClick={() => setModalConfirm(!isModalConfirm)}/>
        </DialogTitle>
        <Divider/>
        <DialogContent>
          <DialogContentText>
            <Typography component="span">
              Are you sure you want to cancel creating this album?
            </Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="text" onClick={() => setModalConfirm(!isModalConfirm)}>Cancel</Button>
          <Button variant="contained" onClick={() => modalAgree()} autoFocus>Agree</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default CreateAlbum;
