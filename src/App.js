import React from 'react'
import Login from './Auth/Login'
import Signin from './Auth/Signin'
import MainCart from './Components/Cart/MainCart'
import Profile from './Components/Profile/Profile'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'




function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path="/" component={Login}/>
        <Route  exact path="/signin" component={Signin}/>
        <Route  exact path="/profile" component={Profile}/>
        <Route  exact path="/:id" component={MainCart}/>
      </Switch>
    </Router>
    
  );
}

export default App;
