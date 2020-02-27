import React from 'react';

export default ({ data, rowRender }) => (
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
