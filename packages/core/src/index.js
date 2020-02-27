import React from 'react';
import ReactDOM from 'react-dom';

import App from './app/Container';
import AppBody from './app/Body';
import AppFooter from "./ui/AppFooter";

const MyApp = () => {
  return (
    <App>
      <AppBody />
      <AppFooter />
    </App>
  );
};

ReactDOM.render(<MyApp/>, document.getElementById('root'));

console.log(process.env.NODE_ENV);
