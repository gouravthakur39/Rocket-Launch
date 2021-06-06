import { Fragment } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import SignUp from "../src/components/SignupPage/SignUp";
import Login from "../src/components/LoginPage/Login";
import Home from "./components/Home/Home";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ErrorPage from "./components/ErrorPage/ErrorPage";
import Dashboard from "./components/Dashboard/Dashboard"
import PrivateRoute from './components/PrivateRoute'
import UpcomingLaunch from "./components/UpcomingLaunch/UpcomingLaunch";
import Rockets from "./components/Rockets/Rockets";
import UpdateProfile from "./components/UpdateProfile/UpdateProfile";

function App() {
  return (
    <Fragment>
      <Router>
        <AuthProvider>
          <Switch>
          
          <PrivateRoute exact path="/dashboard" component={Dashboard} />

          <PrivateRoute exact path="/update-profile" component={UpdateProfile} />

          <Route exact path="/" component={Home} />

          <Route exact path="/upcoming-launch" component={UpcomingLaunch} />

          <Route exact path="/rockets" component={Rockets} />

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
