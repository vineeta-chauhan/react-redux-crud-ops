import React from "react";
import { Route, BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import CreateAndEditUser from './components/CreateAndEditUser/CreateAndEditUser';
import UserList from './components/UserList';

import 'antd/dist/antd.css'


const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/create-user" component={CreateAndEditUser} />
        <Route path="/view-users" component={UserList} />
        <Route path="/edit-user" component={CreateAndEditUser} />
        <Redirect from="/" to="/create-user" />
      </Switch>

    </Router>
  );
}

export default App;