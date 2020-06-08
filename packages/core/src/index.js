import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/Container';
import AppBody from './app/examples/Body';
import useProvideAuth from './useProvideAuth';

import t from './muitheme-override';
const MyApp = () => {
  return (
    <App t={t} useProvideAuth={useProvideAuth}>
      <AppBody />
    </App>
  );
};

ReactDOM.render(<MyApp/>, document.getElementById('root'));

console.log(process.env.NODE_ENV);
