import React from 'react'
import ReactDOM from 'react-dom'

import {map} from 'lodash';
import sum from './Container/otherFile.js';

import App from '@groupefungo/react-apollo.core/app/Container';
import AppLayout from "./Container/AppLayout";
import Body from "./Container/Body";

console.log(sum(2, 5));

console.log(map([1, 2], i => i + 1));

const MyApp = () => {
  return (
    <App>
      <Body/>
      <AppLayout/>
    </App>
  );
};

ReactDOM.render(<MyApp/>, document.getElementById('root'));

console.log(process.env.NODE_ENV);
