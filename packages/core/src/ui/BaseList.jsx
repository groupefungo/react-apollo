import React from 'react';

export const BaseList = ({ data, rowRender }) => (
  <>
    {
      data && (
        data.map((d) => (
          rowRender(d)
        ))
      )
    }
  </>
);
