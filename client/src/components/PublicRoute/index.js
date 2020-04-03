import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PublicRoute = ({ user, to, ...rest }) => {
  if (user) {
    return <Redirect to={ to }/>;
  }
  return <Route { ...rest }/>;

};

const mapStateToProps = state => state.auth;
export default connect(mapStateToProps)(PublicRoute);
