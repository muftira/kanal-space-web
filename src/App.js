import React, {Component} from 'react';
import './App.css';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import logo from './img/kanal.jpeg';
import Location from './Pages/Location/Location';
import { BrowserRouter as Router, Route, Link, } from "react-router-dom";




class App extends Component {
  render(){
    return(
      <Router>

        <div>
          <div className='logo'>
            <div className='bg-logo'>
                <img src={logo} alt=''></img>
            </div> 
                <p>Kanal Space</p>
          </div>
          <div className='header'>
            
                <div className='navbar'>
                    <ul>
                      <li>
                        
                        <Link to=''>Home</Link>
                      </li>
                      <li>
                        
                        <Link to='/product'>Partners</Link>
                      </li>
                      <li>
                        
                        <Link to='/location'>Location</Link>
                      </li>
                    </ul>    
                </div>
      
          </div>
          
          
          <Route path='/location'>
            <Location/>
          </Route>
          <Route path='/product'>
            <Product/>
          </Route>
          <Route path=''>
            <Home/>
          </Route>
          
          
          
          
        </div>

        
      </Router>
    )
  }
}

export default App;
