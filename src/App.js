import React, {useReducer, createContext} from 'react'
import { Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import "./App.css";
import Navbar from './Components/UserComponent/Navbar';
import Home from './Components/UserComponent/Home';
import Login from './Components/UserComponent/Login';
import Signup from './Components/UserComponent/Signup';
import TestEnroll from "./Components/TestEnrollComponent/enrolltable";
import ReadOnlyRow from './Components/TestEnrollComponent/readonlyrow';




  

const App = () => {
  
  return (
    <>

    <Navbar />
       <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/login">
        <Login />
      </Route>

      <Route path="/signup">
        <Signup />
      </Route>
      
      <Route path="/TestEnroll">
        <TestEnroll/>
      </Route>

       <Route path="/:tid">
        <ReadOnlyRow/>
      </Route> 
        
    </Switch>
    </>
  )
}



export default App;
