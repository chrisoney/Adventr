import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, SplashRoute } from '../util/route_util';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';
import NavbarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import ExploreContainer from './explore/explore_container';

const App = () => (
  <div className="app">
    <Modal />
    <Route path="/" component={NavbarContainer} />
    <SplashRoute path="/" component={Splash} />
    <SplashRoute path="/register" component={Splash} />
    <AuthRoute exact path="/signup" component={SignupFormContainer} />
    <AuthRoute exact path="/login" component={LoginFormContainer} />
    <ProtectedRoute path="/dashboard" component={DashboardContainer} />
    <ProtectedRoute path="/explore" component={ExploreContainer} />
  </div>
);

export default App;