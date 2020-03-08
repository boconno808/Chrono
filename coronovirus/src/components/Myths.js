import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Masks from '../illustration/masks.png'
import OnlyAsians from '../illustration/onlyAsians.png'
import SameAsFlu from '../illustration/sameAsFlu.png'
import OnlyOldPeople from '../illustration/onlyOldPeople.png'
//import {FormattedMessage} from 'react-intl';


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

export default function Myths() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper>
            <img src={OnlyAsians} alt={"OnlyAsians"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Because the coronavirus started in Wuhan China, many people think that only asians have the virus.
            Not only is this assumption wrong, it is also racist.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <img src={SameAsFlu} alt={"SameAsFlu"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Some people have been saying that coronavirus is no worse than the flu. Unlike the flu there’s no
            vaccinations for coronavirus yet, so the effects are worse than the flu.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <img src={OnlyOldPeople} alt={"OnlyOldPeople"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            Not only the elderly are susceptible to coronavirus, people of all ages can be infected.
            Though older people, and people with pre-existing medical conditions appear to be more
            vulnerable to becoming severely ill with the virus.
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper>
            <img src={Masks} alt={"Masks"} className ={classes.imgSize}/>
            <Typography color="textSecondary" className ={classes.pos}>
            It is not recommended that people who are well wear a mask to protect themselves from COVID-19 unless a healthcare professional advises it.
            Only those affected and those helping the affected need to wear a N95 mask.
            </Typography>
          </Paper>
        </Grid>
      </Grid>
      </div>
  );
}
