import React from 'react';
import useUiContext from '@groupefungo/react-apollo.core/ui/UseContext';
import useAppContext from '@groupefungo/react-apollo.core/app/UseContext';
export default (function () {
    var appContext = useAppContext();
    var useRouter = appContext.useRouter;
    var router = useRouter();
    var _a = useUiContext(), ListItem = _a.ListItem, ListItemText = _a.ListItemText, ListItemIcon = _a.ListItemIcon, MailIcon = _a.MailIcon, Divider = _a.Divider, TemporaryDrawer = _a.TemporaryDrawer;
    var topItems = function () { return (React.createElement(React.Fragment, null,
        React.createElement(ListItem, { button: true, key: "0" },
            React.createElement(ListItemText, { primary: "Home", onClick: function () { return router.push('/'); } })),
        React.createElement(Divider, null),
        React.createElement(ListItem, { button: true, key: "1" },
            React.createElement(ListItemText, { primary: "Rc", onClick: function () { return router.push('/rc'); } })),
        React.createElement(Divider, null),
        React.createElement(ListItem, { button: true, key: "2" },
            React.createElement(ListItemIcon, null,
                React.createElement(MailIcon, null)),
            React.createElement(ListItemText, { primary: "Form", onClick: function () { return router.push('/form'); } })))); };
    return (React.createElement(TemporaryDrawer, { bottomItems: [], topItems: topItems() }));
});
//# sourceMappingURL=SideBarMenu.js.map