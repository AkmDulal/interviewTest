import React from 'react';
// Bootstrap Link
import 'bootstrap/dist/css/bootstrap.min.css';
// Css link
import './App.scss';
import './style/them.css';
// Router
import {Route, Switch} from 'react-router-dom';
// Pages Components
import Home from "./pages/Home";
import Join from "./pages/Join";
import Singin from "./pages/Singin";
import Error from "./pages/Error";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* Menu && Child Menu */}
          <Route exact path="/join" component={Join} />
          <Route exact path="/singin" component={Singin} />
        {/* Error PAges */}
          <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
