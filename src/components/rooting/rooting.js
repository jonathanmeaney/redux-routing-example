import React from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';

import Home from '../../views/home';
import NotFound from '../../views/not-found';

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => authenticated === true
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />}
    />
  );
}

const Rooting = (props) => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

Rooting.propTypes = {
  loggedIn: PropTypes.bool
};

PrivateRoute.propTypes = {
  authenticated: PropTypes.bool,
  component: PropTypes.func,
  location: PropTypes.object
};

function mapStateToProps() {
  return {
    loggedIn: sessionStorage.getItem('loggedInUser') != null
  };
}

export default withRouter(connect(
  mapStateToProps,
  null
)(Rooting));
