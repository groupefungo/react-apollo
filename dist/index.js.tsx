import React from 'react';
import ReactDOM from 'react-dom';
import { map } from 'lodash';
import sum from './Container/otherFile.js';
import App from '@groupefungo/react-apollo.core/app/Container';
import AppLayout from "./Container/AppLayout";
import Body from "./Container/Body";
console.log(sum(2, 5));
console.log(map([1, 2], function (i) { return i + 1; }));
var MyApp = function () {
    return (React.createElement(App, null,
        React.createElement(Body, null),
        React.createElement(AppLayout, null)));
};
ReactDOM.render(React.createElement(MyApp, null), document.getElementById('root'));
console.log(process.env.NODE_ENV);
//# sourceMappingURL=index.js.map