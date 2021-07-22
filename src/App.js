import React,{Fragment} from "react"
import {BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Form from "./component/Form";
// import Nav from "./component/Nav"
import UserDetails from "./component/UserDetails";
import UserId from "./component/UserId";
import Home from "./component/Home";
  
function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path="/form" component={Form}/>
            <Route exact path="/userDetails" component={UserDetails}/>
            <Route path="/userDetails/:id" component={UserId}></Route>
            <Route path='/**' component={Home} />
          </Switch>
        </Fragment>
      </Router>
         
    </div>
  );
}

export default App;
