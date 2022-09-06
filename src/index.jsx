import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import App from './core/App.jsx';
import reportWebVitals from './reportWebVitals';
import Storage from 'core/services/back-end/Storage';

(async () => {
  await Storage.createObjectStore(['albums', 'videos']);
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root'),
  );

  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
})();


