import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import OnMenuClick from './OnMenuClick';
import AzureAPI from '../AzureAPI';


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
  const [currentPage, setCurrentPage] = React.useState('Background Information');

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
              <ListItem button className={classes.dividers} onClick={() => setCurrentPage("Background Information")}>
                <ListItemText primary="Background Information" className={classes.white}/>
              </ListItem>
              <Divider />
              <ListItem button divider className={classes.dividers} onClick={() => setCurrentPage("Protect Yourself")}>
                <ListItemText primary="Protect Yourself" className={classes.white} />
              </ListItem>
              <ListItem button className={classes.dividers} onClick={() => setCurrentPage("Myths")}>
                <ListItemText primary="Myths" className={classes.white} />
              </ListItem>
            </List>
            </CardContent>
          </Card>
      </Grid>
      <Grid item xs={9}>
        <Card className={classes.card}>
          <CardContent>
            <OnMenuClick pageToShow = {currentPage}/>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
    <AzureAPI/>
    </div>
  );
}
