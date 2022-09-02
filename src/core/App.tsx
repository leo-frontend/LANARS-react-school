import './App.scss';
import React, {useEffect} from 'react';
import API from './services/API';

/* eslint no-console: 0 */

const App = () => {
  const title = 'LANARS react school';
  useEffect(() => {
    API.get('/api/albums?ids=1,2,3').catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <div className="App">
      { title }
    </div>
  );
};

export default App;
