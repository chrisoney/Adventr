import React, { Suspense } from "react";
import { Helmet } from 'react-helmet';
import { Route, Switch } from 'react-router-dom'
import { AuthRoute, ProtectedRoute, SplashRoute } from '../util/route_util';
import Loading from "./loading/loading"
const SignupFormContainer = React.lazy(() => import("./session/signup_form_container"));
const LoginFormContainer = React.lazy(() => import("./session/login_form_container"));
const Splash = React.lazy(() => import('./splash/splash'));
const DashboardContainer = React.lazy(() => import('./dashboard/dashboard_container'));
const NavbarContainer = React.lazy(() => import('./nav/navbar_container'));
const Modal = React.lazy(() => import('./modal/modal'));
const ExploreContainer = React.lazy(() => import('./explore/explore_container'));
const SettingsContainer = React.lazy(() => import('./user/settings_container'));
const GuildpageContainer = React.lazy(() => import('./user/guildpage_container'));
const About = React.lazy(() => import('./about/about'));
const LikesContainer = React.lazy(() => import('./pages/likes/likes_list_container'));
const FollowsContainer = React.lazy(() => import('./pages/follows/follows_list_container'));
const TagContainer = React.lazy(() => import('./explore/tag_container'));

const App = () => (
  <>
    <Helmet>
      <title>Adventr</title>
    </Helmet>
    <div className="app">
      <Suspense fallback={<Loading />} >
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
      </ Suspense>
    </div>
  </>
);

export default App;