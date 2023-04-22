import React ,{useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Checkout from "./Pages/Checkout";
import Header from './Header';
import { auth } from './Firebase';
import { useStateValue } from './StateProvider';

function App() {


  const [{}, dispatch] = useStateValue();

  useEffect(() => { 
    
    auth.onAuthStateChanged((authUser) => { //get the user when it is Changed
      console.log("THE USER IS >>> ", authUser);

      if (authUser) { //if it is a valid user then set the action and the user

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else { // else set the user null
     
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);


  return (

    <Router>
      <div className="App">
        <Routes>
          <Route path = "/checkout" element = {[<Header/>,<Checkout/>]}/> 
            
          <Route path = "/login" element = {<Login/>}/> 
  
          <Route path="/" element = {[<Header/>,<Home/>]}/> 
          
        </Routes>
      </div>
    </Router>
   
  );
}

export default App;
