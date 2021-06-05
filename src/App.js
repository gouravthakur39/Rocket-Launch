import { Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "../src/components/SignupPage/SignUp";
import Login from "../src/components/LoginPage/Login";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ErrorPage from "./components/ErrorPage/ErrorPage";

function App() {
  return (
    <Fragment>
      <Router>
        <AuthProvider>
          <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/signup" component={SignUp} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/reset" component={ForgotPassword} />

          <Route  path="/" component={ErrorPage} />

          </Switch>
        </AuthProvider>
      </Router>
    </Fragment>
  );
}
export default App;
