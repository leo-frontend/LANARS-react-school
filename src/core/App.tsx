import './App.scss';
import React, { useEffect } from 'react';
import Storage from './services/Storage';

const App = () => {
  const title = 'LANARS';

  useEffect(() => {
    setTimeout(() => {
      console.log(Storage.db);
    }, 1000);
  });

  return (
    <div className="App">
      { title }
    </div>
  );
};

export default App;
