import React from 'react';
import Introduction from './components/Introduction';
import Donate from './components/Donate';
import Prepare from './components/Prepare';
import Test from './components/Test';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import {FormattedMessage} from 'react-intl';



const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    minWidth: 700,
    marginRight: "auto",
    marginLeft: "auto",
  },
});

function App() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = React.useState('');

  return (
    <div className="App">
      <div className="container">
          <Router>
            <BottomNavigation
              value={currentPage}
              onChange={e => setCurrentPage(e.target.value)}
              showLabels
              className={classes.root}
            >
              <BottomNavigationAction
                  component={Link}
                  to="/coronovirus/prepare"
                  label= <FormattedMessage id="app.prepare"
                            defaultMessage="Prepare"
                            description="prepare"/>
                  value='Prepare'
              />
              <BottomNavigationAction
                  component={Link}
                  to="/coronovirus/test"
                  label= <FormattedMessage id="app.testLocation"
                            defaultMessage="Test Location"
                            description="test Location"/>
                  value='Test'
              />
              <BottomNavigationAction
                  component={Link}
                  to="/coronovirus/donate"
                  label= <FormattedMessage id="app.donate"
                            defaultMessage="Donate"
                            description="Donate"/>
                  value='Donate'
              />
            </BottomNavigation>
            <Route exact path="/coronovirus" component={Introduction} />
            <Route path="/coronovirus/prepare" component={Prepare} />
            <Route path="/coronovirus/test" component={Test} />
            <Route path="/coronovirus/donate" component={Donate} />
          </Router>
      </div>
    </div>
  );
}

export default App;
