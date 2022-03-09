import React, {Component} from "react";
import MC from '../../img/Manusa-Coffee.png';
import Hulu from '../../img/HULU.png';






class Product extends Component {
    render(){
        



        return(
                <div className="main-container">
                    <div className="box-kiri">
                        
                        <img src={MC} alt="" />
                        <p className="text-satu">Manusa</p>
                        <p className="text-dua">Coffee</p>

                        
                        
                    </div>
                    <div className="box-kanan">
                        
                            <img src={Hulu} alt="" />
                            <p className="text-dua">HULU.Creative</p>
                            
                            
                            
                            
                            
                    </div>
                        
                   
                </div>
        )
    }
}

export default Product;