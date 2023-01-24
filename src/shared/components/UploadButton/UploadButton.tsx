import React, {MutableRefObject, useRef} from 'react';

import {Fab} from '@mui/material';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

import {IPhoto} from '../../interfaces';
import {useAppDispatch} from '../../hooks/redux_hooks';
import {addPhoto} from '../../store/photoSlice';
import {uploadPhoto} from '../../helpers/helpersUploadPhoto';

import * as styles from './styles';

const UploadButton = ({nameBtn}: {nameBtn: string}): JSX.Element => {
  const dispatch = useAppDispatch();
  const filePicker = useRef() as MutableRefObject<HTMLInputElement>;

  const handlerPick = () => {
    filePicker.current.click();
  };

  const handlerChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      const callBack = (data: IPhoto) => {
        dispatch(addPhoto(data));
      };

      for(const file of Array.from(files)){
        uploadPhoto(file, callBack);
      }
    }
  };

  return (
    <>
      <input
        ref={filePicker}
        style={styles.InputHidden}
        onChange={handlerChange}
        multiple
        type="file"
        accept=".png,.webp,.jpg,.jpeg"/>
      <Fab
        sx={{
          position: 'fixed',
          bottom: 40,
          minWidth: 192,
          height: 40,
          borderRadius: '4px'}}
        onClick={handlerPick}
        color="primary"
        variant="extended"
        aria-label="add"
      >
        <FileUploadOutlinedIcon/>
        <span>{nameBtn}</span>
      </Fab>
    </>
  );
};
export default UploadButton;
