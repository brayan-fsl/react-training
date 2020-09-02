import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import PostsPage from '../components/PostsPage';
import PostsNewPage from '../components/PostsNewPage';
import PostsEditPage from '../components/PostsEditPage';
import NotFoundPage from '../components/NotFoundPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={PostsPage} exact={true} />
        <PrivateRoute path="/posts" component={PostsPage} exact={true}/>
        <PrivateRoute path="/posts/new" component={PostsNewPage} />
        <PrivateRoute path="/posts/:id/edit" component={PostsEditPage} />

        <Route component={NotFoundPage} />

      </Switch>
    </div>
  </Router>
);

export default AppRouter;
