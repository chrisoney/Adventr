import React from "react";
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, SplashRoute } from '../util/route_util';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';
import NavbarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import Modal2 from './modal/modal2';
import ExploreContainer from './explore/explore_container';
import SettingsContainer from './user/settings_container';
import GuildpageContainer from './user/guildpage_container';
import About from './about/about'
import LikesContainer from './likes/likes_list_container'

const App = () => (
  <div className="app">
    <Modal />
    <Modal2 />
    <Route path="/" component={NavbarContainer} />
    <Route exact path="/" component={Splash} />
    <Switch>
      <AuthRoute exact path="/signup" component={SignupFormContainer} />
      <AuthRoute exact path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/dashboard" component={DashboardContainer} />
      <ProtectedRoute path="/explore" component={ExploreContainer} />
      <ProtectedRoute
        path="/users/:userid/settings"
        component={SettingsContainer}
      />
      <ProtectedRoute path="/users/:userid/" component={GuildpageContainer} />
      <ProtectedRoute path="/likes" component={LikesContainer} />
      <ProtectedRoute path="/about" component={About} />
    </Switch>
  </div>
);

export default App;