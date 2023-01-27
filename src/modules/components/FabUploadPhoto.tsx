import { FileUpload } from '@mui/icons-material';
import { Fab} from '@mui/material';
import { getBase64StringFromDataURL } from 'core/services/fistInit';
import { ChangeEvent, useRef } from 'react';
import { useAppDispatch } from 'shared/hooks';
import { uploadPhoto } from 'shared/store/reducers/photoReducerSlice';

const FabUploadPhoto = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const uploadInputRef  = useRef<HTMLInputElement | null>(null);

  const convertToBase64 = (file: Blob) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const fileChangedHandler = async (event: ChangeEvent<HTMLInputElement>) => {
    if(event.target.files) {
      const photos = Array.from(event.target.files);
      for(const photo of photos) {
        const res = await convertToBase64(photo);
        const base64 = getBase64StringFromDataURL(res as string);
        dispatch(uploadPhoto({ date: photo.lastModified, description: photo.name, image: base64, size: photo.size, type: photo.type }));
      }
    }
  };
  return (
    <>
      <Fab
        variant="extended"
        color="primary"
        aria-label="upload-image"
        onClick={() => uploadInputRef.current && uploadInputRef.current.click()}
        sx={{
          position: 'fixed',
          width: 196,
          height: 42,
          p: 1,
          borderRadius: 1,
          bottom: 40,
          right: 40,
          overflow: 'hidden',
          fontSize: 15,
        }}
      >
        <FileUpload sx={{ mr: 2 }} />
        UPLOAD PHOTO
      </Fab>
      <input
        type="file"
        ref={uploadInputRef}
        onChange={fileChangedHandler}
        accept=".webp, .jpeg, .png"
        multiple
        style={{
          position: 'absolute',
          top: '-35px',
          left: 0,
        }}/>
    </>
  );
};

export default FabUploadPhoto;
