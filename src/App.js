import React from 'react'
import Login from './Auth/Login'
import Signin from './Auth/Signin'
import MainCart from './Components/Cart/MainCart'
import Sells from './Components/Profile/Sells/ProfileSells'
import Admin from './Components/Profile/Admin/ProfileAdmin'
import Catalogue from './Components/Profile/Catalogue/ProfileCatalogue'
import { BrowserRouter as Router , Switch, Route } from 'react-router-dom'




function App() {
  return (
    <Router>
      <Switch>
        <Route  exact path="/" component={Login}/>
        <Route  exact path="/signin" component={Signin}/>
        <Route  exact path="/profile/admin" component={Admin}/>
        <Route  exact path="/profile/sells" component={Sells}/>
        <Route  exact path="/profile/catalogue" component={Catalogue}/>
        <Route  exact path="/profile/demo" component={MainCart}/>
        <Route  exact path="/:id" component={MainCart}/>
      </Switch>
    </Router>
    
  );
}

export default App;
