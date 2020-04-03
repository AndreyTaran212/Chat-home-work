import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ user, to, ...rest }) => {
  if (user) {
    return <Route { ...rest }/>;
  }
  return <Redirect to={ to }/>;

};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(PrivateRoute);
