import React from "react";
import { render } from "react-dom";
import { browserHistory, IndexRoute} from "react-router";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


import { Root } from "./components/Root";
import { Home } from "./components/Home";
import { User } from "./components/User";
 
class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
            <Root>
                <Switch>
                    <Route exact path="/" component={Home} />
                    {/* in order to be able to pass an id to the user component, tell user to expect an id parameter */}
                    <Route path="/user/:id" component={User} />
                    <Route path="/home" component={Home} />
                </Switch>
            </Root>
        </div>
      </Router>
    )
  }
}
 
render(<App/>, window.document.getElementById("app"));