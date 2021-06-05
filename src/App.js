import { Fragment } from "react";
import { Route } from "react-router-dom";
import SignUp from "../src/components/SignupPage/SignUp";
import Login from "../src/components/LoginPage/Login";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";

function App() {
  return (
    <Fragment>
      <Route exact path="/" component={Home} />

      <Route exact path="/signup" component={SignUp} />

      <Route exact path="/login" component={Login} />

      <Route exact path="/reset" component={ForgotPassword} />
    </Fragment>
  );
}
export default App;
