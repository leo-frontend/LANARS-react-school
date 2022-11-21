import API from './API';
import image from '../../assets/images/placeholders/3029022.jpg';

export function firstInit(): void {
  if (!localStorage.getItem('firstInit')) {
    const img = new Image();
    img.src = image;
    img.onload = (event) => {
        // eslint-disable-next-line no-console
        console.log(event);
    };
    // localStorage.setItem('firstInit', 'true');
    // eslint-disable-next-line no-console
    console.log(img);
    API.get('/api/photos').then((result) => {
      // eslint-disable-next-line no-console
      console.log(result);
    });
  }
}
