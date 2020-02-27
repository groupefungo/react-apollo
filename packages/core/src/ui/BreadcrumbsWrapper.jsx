import React from 'react';
import useUiContext from './UseContext';
import useAppContext from '../app/Context';

export const BreadcrumbsWrapper = ({ data }) => {
  const appContext = useAppContext();

  const { Breadcrumbs, Typography } = useUiContext();
  const { Link } = appContext;

  return (
    <Breadcrumbs aria-label="breadcrumb">
      {
        data.map((breadcrumbData) => (
          breadcrumbData.path
            ? (
              <Link
                key={`breadcrumb-${breadcrumbData.path}`}
                color="inherit"
                to={breadcrumbData.path}
              >
                {breadcrumbData.label}
              </Link>
            )
            : (
              <Typography
                key="breakcrumb-last"
                color="textPrimary"
              >
                {breadcrumbData.label}
              </Typography>
            )
        ))
      }
    </Breadcrumbs>
  );
};
