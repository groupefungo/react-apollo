import React from 'react';
import useUiContext from './UseContext';

export default ({createdAt = '', category = '', disabled = ''}) => {
    const {Grid, Typography, Box} = useUiContext();
    const options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};
    const date = new Date(createdAt);
    const backgroundColor = () => (disabled ? "text.disabled" : "secondary.main");


    return (
        <Grid container justify="space-between" spacing={2}>
            <Grid item>
                <Box bgcolor={backgroundColor()} py={0.5} px={1} borderRadius={8} color="background.paper">
                    {date.toLocaleDateString('fr', options)}
                </Box>
            </Grid>
            <Grid item>
                <Typography color="textSecondary">
                    {category}
                </Typography>
            </Grid>
        </Grid>
    );
};
