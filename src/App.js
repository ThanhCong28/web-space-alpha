import React from "react";
import "./App.css";
import { Route, Switch, Router, HashRouter } from "react-router-dom";
import LoginScreen from "./features/login/LoginScreen";
import { createBrowserHistory } from "history";
import SettingScreen from "./features/setting/SettingScreen";
import MapViewScreen from "./features/mapview/MapViewScreen";

function App() {
  const history = createBrowserHistory();
  return (
      <HashRouter history={history}>
      <Switch>
        <Route exact path="/" component={LoginScreen} />
        <Route path="/index.html" component={LoginScreen} />
        <Route
          path="/setting"
          component={SettingScreen}
        />
        <Route
          path = '/mapview'
          component = {MapViewScreen}/>
          </Switch>
      </HashRouter>
  );
}

export default App;
