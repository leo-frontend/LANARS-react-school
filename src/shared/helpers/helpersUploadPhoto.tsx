import {IPhoto} from '../interfaces';

const getDataURL = (dataURL: string) => {
  return dataURL.replace('data:', '').replace(/^.+,/, '');
};

export const uploadPhoto = (files:  File, callback: (data: IPhoto) => void): void => {
  const reader = new FileReader();
  reader.readAsDataURL(files);
  reader.onloadend = () => {
    const imgURL = getDataURL(reader.result as string);
    const data = {
      image: imgURL,
      description: '',
      size: files.size,
      date: files.lastModified,
      type: files.type,
    };
    callback(data);
  };
};
