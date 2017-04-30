import React from 'react';
import ReactDOM from 'react-dom';
import DashboardAppContainer from './views/DashboardAppContainer';

// Custom styles.
import SiteWideStyles from '../css/style.scss';

// Add custom scripts that aren't relevant to React or the Flux pattern.
import FirebaseSetup from './other/FirebaseSetup';
import * as homePage from './other/homePage';
import * as utilityFunctions from './other/utilityFunctions';

const initFirebase = FirebaseSetup.initFirebase;

// Expose this method as a global method.
window.initFirebase = initFirebase;

class WrappedApp extends React.Component {
  render() {
    return (
      <div>
        <div className="col-lg-2 col-md-1 col-sm-0" />
        <DashboardAppContainer />
        <div className="col-lg-2 col-md-1 col-sm-0" />
      </div>
    );
  }
}

if (window.location.pathname === '/dashboard') {
  ReactDOM.render(<WrappedApp />, document.getElementById('wrapper'));
}
