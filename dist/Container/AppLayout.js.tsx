import React from 'react';
import useUiContext from '@groupefungo/react-apollo.core/ui/UseContext';
import SideBarMenu from './SideBarMenu';
export default (function () {
    var _a = useUiContext(), AppBar = _a.AppBar, Toolbar = _a.Toolbar, IconButton = _a.IconButton, Menu = _a.Menu, Typography = _a.Typography, DrawerState = _a.DrawerState;
    var toggleDrawer = DrawerState.toggleDrawer;
    return (React.createElement(React.Fragment, null,
        React.createElement(AppBar, { color: "default", position: "fixed", elevation: 4 },
            React.createElement(Toolbar, null,
                React.createElement(IconButton, { color: "primary", "aria-label": "open drawer", edge: "start", onClick: toggleDrawer(true) },
                    React.createElement(Menu, null)),
                React.createElement(Typography, { variant: "h4", noWrap: true, color: "secondary" }, "WECATOSKEYAKAN"))),
        React.createElement(Toolbar, null),
        React.createElement(SideBarMenu, null)));
});
//# sourceMappingURL=AppLayout.js.map