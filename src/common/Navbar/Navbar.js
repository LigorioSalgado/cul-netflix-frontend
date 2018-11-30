import React, { Component } from 'react';
import payload from '../../payload';


//const isAuthenticated = localStorage.getItem("netflixToken") !==  null
class Navbar extends Component{
    constructor(){
        super();

        this.state = {
            authenticated:localStorage.getItem("netflixToken") !==  null
        }
    }



    authenticatedRender = () => {
        if(this.state.authenticated){
            return(
                <React.Fragment>
                            <li><a href="/me">Hola {payload().email}</a></li>
                            <li><a href="/movies">Peliculas</a></li>
                            <li><a href="/logout">Log out</a></li>
                </React.Fragment>
            )
        }else{
            return(
                <React.Fragment>
                <li><a href="/login">Login</a></li>
                <li><a href="/signup">Sign Up</a></li>
                </React.Fragment>
            )
        }
    }

    render(){
        return(
            <nav>
                <div className="nav-wrapper bg-main">
                    <a href="#" className="brand-logo">My Netflix</a>
                    <ul className="right hide-on-med-and-down">
                    {  
                        this.authenticatedRender()
                    }
                        
                    </ul>
                </div>
            </nav>

        )

    }

}

export default Navbar;