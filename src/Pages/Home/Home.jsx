import React, { Component,  } from "react";
import Background from '../../img/Home2.jpeg';
import './Home.css';
import Kopi from '../../img/kopi.png';
import Plug from '../../img/plug.png';
import Wifi from '../../img/wifi.png';





class Home extends Component {
    render(){
      return(
          
      <div className="content">
        
        <div className='title'>
          <p className='satu'>An Open Space</p>
          <p className='dua'>to Collaborate</p>
        </div>
        <div className='component'>
          <img src={Kopi} alt="" />
          <img src={Wifi} alt="" />
          <img src={Plug} alt="" />
        </div>
          
        <img src={Background} alt="" />
        
      </div>
        
      )
    }
  }

  export default Home ;