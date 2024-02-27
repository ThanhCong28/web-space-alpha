import React from "react";
import "./App.css";
import { Route, Switch, Router } from "react-router-dom";
import LoginScreen from "./features/login/LoginScreen";
import { createBrowserHistory } from "history";
import SettingScreen from "./features/setting/SettingScreen";
import MapViewScreen from "./features/mapview/MapViewScreen";

function App() {
  const history = createBrowserHistory();
  return (
      <Router history={history}>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route
          path="/setting"
          component={SettingScreen}
        />
        <Route
          path = '/mapview'
          component = {MapViewScreen}/>
          </Switch>
      </Router>
  );
}

export default App;
