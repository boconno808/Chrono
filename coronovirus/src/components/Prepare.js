import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import BackgroundInfo from './BackgroundInfo'

const useStyles = makeStyles({
  root:{
    padding: 30,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'grey',
  },
  menu: {
    minWidth: "20%",
    height: '80vh',
    backgroundColor: 'grey',
  },
  card: {
    minWidth: "20%",
    height: '80vh',
    backgroundColor: 'white',
  },
  dividers:{
    paddingTop: "10%",
    paddingBottom: "20%",
  },
  cardPadding:
  {
    marginBottom: "40%",
    marginTop: "20%",
  },
  white:{
    color:'white',
  }
});

export default function Prepare() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
    <Grid
      container
      spacing={3}
      >
        <Grid item xs={3}>
          <Card className={classes.menu}>
            <CardContent className={classes.cardPadding}>
            <List component="nav" className={classes.list}>
              <ListItem button className={classes.dividers}>
                <ListItemText primary="Background Information" className={classes.white} />
              </ListItem>
              <Divider />
              <ListItem button divider className={classes.dividers} >
                <ListItemText primary="Protect Yourself" className={classes.white}/>
              </ListItem>
              <ListItem button className={classes.dividers}>
                <ListItemText primary="Myths" className={classes.white} />
              </ListItem>
            </List>
            </CardContent>
          </Card>
      </Grid>
      <Grid item xs={9}>
        <Card className={classes.card}>
          <CardContent>
            <BackgroundInfo/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    </div>
  );
}
