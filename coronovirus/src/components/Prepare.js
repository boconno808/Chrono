import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { sizing } from '@material-ui/system';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root:{
    padding: 30,
  },
  list: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: 'grey',
  },
  card: {
    minWidth: 250,
    height: '80vh',
    backgroundColor: 'grey',
  },
  dividers:{
    paddingTop: "20%",
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
        <Grid item xs={6} sm={3}>
          <Card className={classes.card} variant="outlined">
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
    </Grid>
    </div>
  );
}
