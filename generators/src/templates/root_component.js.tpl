import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/app/App';

const render = () => {
  ReactDOM.render(
    <App />
    ,document.getElementById('<%= kebabCaseName %>')
  );
};

render();
