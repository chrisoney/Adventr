import React from "react";
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, SplashRoute } from '../util/route_util';
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import Splash from './splash/splash';
import DashboardContainer from './dashboard/dashboard_container';
import NavbarContainer from './nav/navbar_container';
import Modal from './modal/modal';
import ExploreContainer from './explore/explore_container';
import SettingsContainer from './user/settings_container';
import GuildpageContainer from './user/guildpage_container';
import About from './about/about'
import LikesContainer from './pages/likes/likes_list_container';
import FollowsContainer from './pages/follows/follows_list_container';
import TagContainer from './explore/tag_container';

const App = () => (
  <>
    <Helmet>
      <title>Adventr</title>
    </Helmet>
    <div className="app">
      <Modal />
      <Route path="/" component={NavbarContainer} />
      <Route exact path="/" component={Splash} />
      <Switch>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <ProtectedRoute path="/dashboard" component={DashboardContainer} />
        <ProtectedRoute path="/explore" component={ExploreContainer} />
        <ProtectedRoute path="/settings" component={SettingsContainer} />
        <ProtectedRoute path="/guild/:guildname" component={GuildpageContainer} />
        <ProtectedRoute path='/tag/:tagId' component={TagContainer} />
        <ProtectedRoute path="/likes" component={LikesContainer} />
        <ProtectedRoute path="/follows" component={FollowsContainer} />
        <ProtectedRoute path="/about" component={About} />
      </Switch>
    </div>
  </>
);

export default App;