import React, { Component } from 'react';



class Navbar extends Component{


    render(){
        return(
            <nav>
                <div className="nav-wrapper bg-main">
                    <a href="#!" className="brand-logo">My Netflix</a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#">Login</a></li>
                        <li><a href="#">Sign Up</a></li>
                    </ul>
                </div>
            </nav>
        )
    }

}

export default Navbar;

