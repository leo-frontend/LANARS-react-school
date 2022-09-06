import './App.scss';
import React, {useEffect} from 'react';
import API from './services/API';

const App = () => {
  const title = 'LANARS react school';

  return (
    <div className="App">
      {title}
    </div>
  );
};

export default App;
