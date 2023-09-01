import React from "react";
import Signup from "../components/authentication/Signup"
import AuthProvider from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import Profile from "./authentication/Profile";
import Login from "../components/authentication/Login";
import PrivateRoute from "../components/authentication/PrivateRoute";
import ForgotPassword from "../components/authentication/ForgotPassword";
import UpdateProfile from "../components/authentication/UpdateProfile";
import Dashboard from "./google-drive/Dashboard";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          {/* Drive */}
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute exact path="/folders/:folderId" component={Dashboard} />


          {/* Profile */}
          <PrivateRoute path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          {/* Auth */}
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>
  )
}

export default App;

