import React, {Component} from 'react';
import { student, navbar } from './mock';
import picture from '../images/felix.png';
import pic2 from '../images/fluffykins.png';

import './state.css'







class Rendering extends Component {
    constructor(props) {
        super(props);

    this.state = { 
        active: 'Home', 
    }
}
   
    render() { 
        return (
            <div className='navbar'>
                {navbar.map(({id, title})=> (
                    <h1 onClick={()=> this.setState({active: title})} className={`nav-links ${this.state.active === title && 'active'}`}>{title}</h1> 
                ))}
                
            {/* <h1 onClick={()=> this.setState({active: 'home'})} className={`nav-links ${this.state.active === 'home' && 'active'}`}>Home</h1>  */}


            </div>
        )
        
    }
}
 
export default Rendering;






 


// return ( 
        //    <div>
        //        {
        //            this.state.active ? (
        //            <img src={picture} alt=""/>
        //            ) : (
        //                <img src={pic2} alt=""/>
        //            )
        //        }
        //        {
        //            this.state.active ? (
        //                  <h1>Welcome to Facebook</h1>   
        //            ) : (
        //             <h1>Please Login!</h1>
        //            )
        //        }
        //       <button onClick={() => this.setState({active: !this.state.active})}>
        //           {this.state.active ? 'Logout' :  'Login'}
        //       </button>  
        //    </div>
        //  );