import React, {useEffect} from 'react';

import {theme} from '../styles/theme';

const App = (): JSX.Element => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhoto([]));
    dispatch(getAlbum([]));
  }, []);


  return (
    <div className="App">
    </div>
  );
};

export default App;
