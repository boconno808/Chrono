import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import EyesNoseMouth from '../illustration/eyesNoseMouth.png'
import WashHands from '../illustration/washHands.png'
import SocialDistance from '../illustration/socialDistance.png'
import CoughManners from '../illustration/coughManners.png'


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  imgSize: {
    maxWidth:250,
    maxHeight:250,
  },
  pos: {
    paddingBottom: 12,
  },
});

export default function ProtectYourself() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <img src={WashHands} alt={"WashHands"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Regularly clean your hands with an alcohol-based hand rub or wash them with soap and water.
            Washing your hands rub kills viruses that may be on your hands.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <img src={EyesNoseMouth} alt={"EyesNoseMouth"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Avoid touching eyes, nose and mouth, hands touch many surfaces and can pick up viruses.
            Once contaminated, hands can transfer the virus to your eyes, nose or mouth.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <img src={SocialDistance} alt={"SocialDistance"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Maintain at least 1 metre (3 feet) distance between yourself and anyone who is coughing or sneezing.
            When someone coughs or sneezes they spray small droplets which may contain virus.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <img src={CoughManners} alt={"CoughManners"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Cover your mouth and nose with your bent elbow or tissue when you cough or sneeze.
            By following good respiratory hygiene you protect the people around you from viruses such as cold, flu and COVID-19
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </div>
  );
}
