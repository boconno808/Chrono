import React from 'react';
//import Map from './components/Map';
import Introduction from './components/Introduction';
import Donate from './components/Donate';
import Prepare from './components/Prepare';
import Test from './components/Test';
import {  BrowserRouter as Router, Route, Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = React.useState('');

  return (
    <div className="App">
      <Router>
        <BottomNavigation
          value={currentPage}
          onChange={e => setCurrentPage(e.target.value)}
          showLabels
        >
          <BottomNavigationAction
              component={Link}
              to="/coronovirus/prepare"
              label='Prepare'
              value='Prepare'
          />
          <BottomNavigationAction
              component={Link}
              to="/coronovirus/test"
              label='Test'
              value='Test'
          />
          <BottomNavigationAction
              component={Link}
              to="/coronovirus/donate"
              label='Donate'
              value='Donate'
          />
        </BottomNavigation>
        <Route exact path="/coronovirus" component={Introduction} />
        <Route path="/coronovirus/prepare" component={Prepare} />
        <Route path="/coronovirus/test" component={Test} />
        <Route path="/coronovirus/donate" component={Donate} />
      </Router>
    </div>
  );
}

export default App;
