import React from 'react';
import {useAppContext} from "../UseContext/useAppContext";

// Hook
export const useRouter = () => {
  const {useParams, useLocation, useHistory, useRouteMatch} = useAppContext();

  const params = useParams();
  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const {push} = history;
  const pushPath = (path) => push(path);
  const pushedPath = (path) => () => pushPath(path);

  const useRouteParam = (paramName, matchUrl) => {
    const { useRouteMatch } = useAppContext();
    const urlRouteMatch = useRouteMatch(`${matchUrl}`);
    let value = null;
    if (urlRouteMatch) {
      const { params } = urlRouteMatch;
      value = params[paramName];
    }
    return value;
  };

  // Return our custom router object
  // Memoize so that a new object is only returned if something changes
  return React.useMemo(() => (
    {
      // For convenience add push(), replace(), pathname at top level
      push,
      replace: history.replace,
      pathname: location.pathname,
      // Merge params and parsed query string into single "query" object
      // so that they can be used interchangeably.
      // Example: /:topic?sort=popular -> { topic: "react", sort: "popular" }
      query: {...params},
      // Include match, location, history objects so we have
      // access to extra React Router functionality if needed.
      match,
      location,
      history,
      pushPath,
      pushedPath,
      useRouteParam
    }
  ), [params, match, location, history]);
}
