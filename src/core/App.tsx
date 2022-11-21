import './App.scss';
import React, { useEffect } from 'react';
import API from './services/API';
import { firstInit } from './services/fistInit';

const App = (): JSX.Element => {
  // const title = 'LANARS react school';

  // TODO: you may remove this after the first init of the app
  useEffect(() => {
    firstInit();
  }, []);

  return (
    <div className="App">
      <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange={({target}) => {
        if (!target.files) {
          return;
        }
        // eslint-disable-next-line no-console
        console.log(target.files);
        const reader = new FileReader();
        reader.addEventListener('load', () => {
          const uploadedImage = reader.result;
          API.post('/api/photos', {image: uploadedImage}).then((result) => {
            // eslint-disable-next-line no-console
            console.log(result);
          });
          // document.querySelector('#display-image').style.backgroundImage = `url(${uploadedImage})`;
        });
        reader.readAsDataURL(target.files[0] as Blob);
      }}/>
    </div>
  );
};

export default App;
