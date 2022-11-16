import './App.scss';
import React from 'react';

const App = (): JSX.Element => {
  // const title = 'LANARS react school';

  return (
    <div className="App">
      <input type="file" id="image-input" accept="image/jpeg, image/png, image/jpg" onChange={(event) => {
        const reader = new FileReader();
        // eslint-disable-next-line no-console
        console.log(event.target.files);

        reader.addEventListener('load', () => {
          // const uploadedImage = reader.result;
          // document.querySelector('#display-image').style.backgroundImage = `url(${uploadedImage})`;
        });
        // reader.readAsDataURL(files[0]);
      }}/>
    </div>
  );
};

export default App;
