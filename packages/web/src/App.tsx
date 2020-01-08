import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import { Theme } from "./theme";
import "./App.css";

const browserHistory = createBrowserHistory();

const App: React.FC = () => {
  return (
    <Theme className='App'>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </Theme>
  );
};

export default App;
