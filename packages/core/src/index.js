import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/Container';
import AppBody from './app/Body';

const MyApp = () => {
  return (
    <App>
      <AppBody />
    </App>
  );
};

ReactDOM.render(<MyApp/>, document.getElementById('root'));

console.log(process.env.NODE_ENV);
