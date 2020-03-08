import React from "react";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import {FormattedMessage} from 'react-intl';

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
            <Typography variant = 'h1' align = 'center'>
              <FormattedMessage id="app.introduction.title"
                        defaultMessage="Coro-No Virus"
                        description="introduction title"/>
            </Typography>
            <Typography variant = 'h5' align = 'center'>
            <FormattedMessage id="app.introduction.subtitle"
                      defaultMessage="Prepare yourself and help those affected by the 2019 Novel Coronavirus"
                      description="introduction subtitle"/>
            </Typography>
          </Grid>
        </Grid>
    </div>
  );
}

export default Introduction;
