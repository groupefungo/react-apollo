import React from 'react';
import useUiContext from '../UseContext';
import useAppContext from '../../app/UseContext';
import CardControl from './CardControl';

export default (props) => {
  const appContext = useAppContext();

  const router = appContext.useRouter();
  const {
    data, titleHandler, descriptionHandler, categoryHandler, deleteCardFunction, dateHandler,
  } = props;
  const { match: { url: resourcesPath } } = router;

  const { Grid, Box } = useUiContext();

  return (
    <Box display="flex" flexGrow={1} mt={4}>
      <Grid container spacing={1} direction="row" alignItems="stretch">
        {
          data.map((d) => (
            <Grid key={d.id} container item xs={12} sm={6} md={4} lg={4}>
              <CardControl
                key={d.id}
                id={d.id}
                title={(titleHandler && titleHandler(d)) || d.title}
                description={(descriptionHandler && descriptionHandler(d)) || d.description}
                category={categoryHandler && categoryHandler(d)}
                action={() => router.push(`${resourcesPath}/${d.id}`)}
                actionLabel="Détail"
                files={d.files}
                date={(dateHandler && dateHandler(d)) || d.createdAt}
                deleteCardFunction={deleteCardFunction}
              />
            </Grid>
          ))
        }
      </Grid>
    </Box>
  );
};
