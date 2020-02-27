import React from 'react'
import ReactDOM from 'react-dom'

import {map} from 'lodash';
import sum from './Container/otherFile.js';
import App from './Container';
import AppBody from './AppBody';
import AppFooter from "@groupefungo/react-apollo.core/ui/AppFooter";

console.log(sum(2, 5));

console.log(map([1, 2], i => i + 1));

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
