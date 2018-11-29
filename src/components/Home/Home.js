import React, { Component } from 'react';
import './Home.scss';


class Home extends Component {


    render(){
        return(
            <div className="Home">
                <div className="row">
                    <div className="col s6 offset-s3 Home-title">
                        <h2>¡Bienvenido a My Netflix</h2>
                        <a href="/signup" 
                        className="waves-effect waves-light btn btn-primary">
                            Empezar
                        </a> 
                    </div>
                </div>
            </div>
        )
    }

}

export default Home;