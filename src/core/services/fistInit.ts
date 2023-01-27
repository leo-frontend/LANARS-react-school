import API from './API';
import one from '../../assets/images/placeholders/4k-space-wallpaper-2.jpg';
import two from '../../assets/images/placeholders/8763.jpg';
import three from '../../assets/images/placeholders/3029022.jpg';
import four from '../../assets/images/placeholders/kcTYOU.jpg';
import five from '../../assets/images/placeholders/lt47o5qub95qmqkx.jpg';
import six from '../../assets/images/placeholders/Stunning-Space-Wallpapers-5_4d470f76dc99e18ad75087b1b8410ea9.webp';
import seven from '../../assets/images/placeholders/TwYWpt.webp';


export const getBase64StringFromDataURL = (dataURL: string) => {
  return dataURL?.replace('data:', '').replace(/^.+,/, '');
};

export function firstInit(): void {
  const images = [one, two, three, four, five, six, seven];

  if (!localStorage.getItem('firstInit')) {
    localStorage.setItem('firstInit', 'true');
    API.post('/api/albums', {
      title: 'The first album',
      description: 'This album was auto-generated',
      photos: [1, 2, 3, 4, 5, 6, 7],
    });
    for (const image of images) {
      fetch(image)
        .then((res) => res.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.onloadend = () => {
            const base64 = getBase64StringFromDataURL(reader.result as string);
            const tempFile = new File([blob], 'img');
            API.post('/api/photos', {
              image: base64,
              size: blob.size,
              date: tempFile.lastModified,
              type: blob.type,
            });
          };
          reader.readAsDataURL(blob);
        });
    }
  }
}
