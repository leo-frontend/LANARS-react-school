import './App.scss';
import React from 'react';
import Routes from '../shared/components/routes';
import StoreContext from './Store.jsx';

const App = () => {


  return (
    <StoreContext>
      <Routes />
    </StoreContext>
  );
};

export default App;
