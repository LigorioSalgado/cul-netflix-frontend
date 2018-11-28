import React, { Component } from 'react'
import './home.scss'

class Home  extends Component{

    render(){
        return (
            <div className="Home">
                <div className="row">
                    <div className="col s6 offset-s3 Home-title">
                        <h2>Bienvenido a my Netflix</h2>
                        <a class="waves-effect waves-light btn btn-primary">Empezar Ahora</a>
                    </div>
                </div>
            </div>
        )
    }



}

export default Home;
