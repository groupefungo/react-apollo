import React from 'react';
import useAppContext from "@groupefungo/react-apollo.core/app/UseContext";
import RootComponent from "@groupefungo/react-apollo.core/app/examples/RootComponent";
import RouteComponent from "@groupefungo/react-apollo.core/app/examples/RouteComponent";
import FormComponent from "@groupefungo/react-apollo.core/app/examples/FormComponent";
import AppLayout from "./AppLayout";
export default (function () {
    var _a = useAppContext(), Route = _a.Route, Switch = _a.Switch;
    return (React.createElement(React.Fragment, null,
        React.createElement(AppLayout, null),
        React.createElement("div", null, "in body"),
        React.createElement(Switch, null,
            React.createElement(Route, { component: RootComponent, path: '/', exact: true }),
            React.createElement(Route, { component: RouteComponent, path: '/rc', exact: true }),
            React.createElement(Route, { component: FormComponent, path: '/form', exact: true }))));
});
//# sourceMappingURL=Body.js.map