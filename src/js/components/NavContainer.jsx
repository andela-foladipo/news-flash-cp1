import React from 'react';
import getFirebaseApp from '../util/getFirebaseApp';
import FetchArticlesForm from './FetchArticlesForm';
import * as ArticlesActions from '../actions/ArticlesActions';

/**
 * This Component contains the elements that make up the navigation bar e.g
 * a button for signing out. It is only used on AuthenticatedRoutes i.e
 * Routes that a user can only access if she/he is logged in.
 * @return {ReactComponent|null|false} - A Component for DOM rendering.
 * Otherwise, return null or false to prevent the rendering of this Component.
 */
export default function NavContainer() {
  ArticlesActions.fetchSources();
  const firebaseApp = getFirebaseApp();

  const signOut = (event) => {
    event.preventDefault();
    firebaseApp.auth().signOut();
    document.cookie = 'idToken=null';
    window.location.replace('/');
  };

  return (
    <div id="nav-container" className="row">
      <div id="nav-controls" className="col-md-12">
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <ul className="nav navbar-nav navbar-left" />
            <ul className="nav navbar-nav navbar-right">
              <li>
                <button
                  id="sign-out-btn"
                  onClick={signOut}
                  className="btn btn-info navbar-btn"
                >
                  Sign out
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <FetchArticlesForm />
    </div>
  );
}
