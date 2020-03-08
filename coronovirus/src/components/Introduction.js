import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function Introduction() {
  return (
    <div>
      <Grid
        container
        spacing={0}
        direction="column"
        justify="center"
        alignItems="center"
        style={{ minHeight: '80vh' }}
        >
          <Grid item xs={12}>
            <Typography variant = 'h1' align = 'center'> Coro-No Virus </Typography>
            <Typography variant = 'h5' align = 'center'> Prepare yourself and help those affected by the 2019 Novel Coronavirus </Typography>
          </Grid>
        </Grid>
    </div>
  );
}

export default Introduction;
