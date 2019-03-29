import React from 'react';
import { Route, Redirect } from 'react-router-dom'

import HomePage from './pages/home';
import PostsPage from './pages/posts';
import UsersPage from './pages/users';
import CommentsPage from './pages/comments';
import UserPage from './pages/user';

const Routes = ({currentPath}) =>
<section>
    { currentPath ===  "/" && <Redirect to={"/home"}/> }
    <Route exact path="/home" component={HomePage}/>
    <Route exact path="/posts" component={PostsPage}/>
    <Route exact path="/posts/:id/comments" component={CommentsPage}/>
    <Route exact path="/users" component={UsersPage}/>
    <Route exact path="/users/:id" component={UserPage}/>
</section>

export default Routes;