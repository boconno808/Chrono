import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import SpreadContact from '../illustration/spreadContact.png'
import SpreadMap from '../illustration/spreadMap.png'
import Divider from '@material-ui/core/Divider';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  imgSize: {
    maxWidth:200,
    maxHeight:150,
  },
  pos: {
    marginBottom: 12,
  },
  divider:{
    paddingTop:10,
  },
});

export default function BackgroundInfo() {
  const classes = useStyles();

  return (
    <div>
      <Typography variant = "h3" align="left">
        COVID-19
      </Typography>
      <Typography className={classes.pos} color="textSecondary">
      The virus has been named “SARS-CoV-2” and the disease it causes has been named “coronavirus disease 2019”
      (abbreviated “COVID-19”). The coronavirus was first detected in China and has now been detected in almost 90
      locations internationally, including in the United States. On January 30, 2020, the International Health Regulations
      Emergency Committee of the World Health Organization declared the outbreak a "Public health emergency of national concern"
      </Typography>
      <Divider />
      <Typography variant = "h5" align="left" className={classes.divider}>
        How it spreads
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <Paper>
            <img src={SpreadContact} alt={"spreadContact"} className ={classes.imgSize}/>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Typography color="textSecondary">
          Between people who are in close contact with one another (within about 6 feet).
          Through respiratory droplets produced when an infected person coughs or sneezes.
          People are thought to be most contagious when they are most symptomatic (the sickest).
          Some spread might be possible before people show symptoms; there have been reports of this occurring
          with this new coronavirus, but this is not thought to be the main way the virus spreads.
          </Typography>
        </Grid>
        <Grid item xs={8}>
        <Typography color="textSecondary">
        It may be possible that a person can get COVID-19 by touching a surface or object that has the virus
        on it and then touching their own mouth, nose, or possibly their eyes, but this is not thought to be
        the main way the virus spreads.
        Imported cases of COVID-19 in travelers have been detected in the U.S and other countries.
        </Typography>
        </Grid>
        <Grid item xs={4}>
          <Paper>
            <img src={SpreadMap} alt={"spreadMap"} className ={classes.imgSize}/>
          </Paper>
        </Grid>
      </Grid>
      </div>
  );
}
