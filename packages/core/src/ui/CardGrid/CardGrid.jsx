import React from 'react';
import useUiContext from '../UseContext';
import useAppContext from '../../app/UseContext';
import CardControl from '../CardControl';

export default (props) => {
    const appContext = useAppContext();
    const {useRouter} = appContext;
    const router = useRouter();
    const {
        data,
        titleHandler,
        descriptionHandler,
        categoryHandler,
        deleteCardFunction,
        dateHandler,
        rowDisplay,
        disabledHandler,
        action,
        actionLabel,
    } = props;

    let {resourcesPath} = props;
    if (!resourcesPath) {
        const {match} = router;
        const {url} = match;
        resourcesPath = url;
    }

    let xs = 12;
    let sm = 6;
    let md = 4;
    let lg = 4;

    (rowDisplay) ? xs = sm = md = lg = 12 : null;

    const {Grid, Box} = useUiContext();

    return (
        <Grid container spacing={3} alignItems="stretch">
            {
                data.map((d) => (
                    <Grid key={d.id} item xs={xs} sm={sm} md={md} lg={lg}>
                        <CardControl
                            key={d.id}
                            id={d.id}
                            title={(titleHandler && titleHandler(d)) || d.title}
                            description={(descriptionHandler && descriptionHandler(d)) || d.description}
                            category={categoryHandler && categoryHandler(d)}
                            action={ action? action(d) : () => router.push(`${resourcesPath}/${d.id}`)}
                            actionLabel={actionLabel || "Détail"}
                            files={d.files}
                            date={(dateHandler && dateHandler(d)) || d.createdAt}
                            deleteCardFunction={deleteCardFunction}
                            disabled={(disabledHandler && disabledHandler(d))}
                        />
                    </Grid>
                ))
            }
        </Grid>
    );
};
