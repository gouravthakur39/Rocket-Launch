import { Fragment } from "react";
import { Route } from "react-router-dom";
import {AuthProvider} from './contexts/AuthContext'
import SignUp from "../src/components/SignupPage/SignUp";
import Login from "../src/components/LoginPage/Login";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <AuthProvider>
      <Fragment>
        <Route exact path="/" component={Home} />

        <Route exact path="/signup" component={SignUp} />

        <Route exact path="/login" component={Login} />

        <Route exact path="/reset" component={ForgotPassword} />
      </Fragment>
    </AuthProvider>
  );
}
export default App;
