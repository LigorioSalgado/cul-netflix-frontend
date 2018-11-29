import React, { Component } from 'react';
import {Input} from '../../common/Input';

class SignUp extends Component{

    constructor(props){
        super(props)
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            confirmPass:""
        }
    }

    handleInput = (e) =>{
        const {id,value} =  e.target
        this.setState(
            {[id]:value}
        )
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }   

    renderForm(){
        return(
            <div className="container Signup">
                <div className="row">
                    <div className="col s12">
                        <div className="row">
                            <div className="col s6 input-field">
                                <Input id="first_name" name="First Name" 
                                type="text" value={this.state.first_name}
                                setInput={this.handleInput}
                                required
                                />
                            </div>
                            <div className="col s6 input-field">
                                <Input id="last_name" name="Last Name" 
                                    type="text" value={this.state.last_name}
                                    setInput={this.handleInput}
                                    required
                                />
                            </div>
                        </div>

                        <div className="row">
                            <div className="col s12 input-field">
                                <Input id="email" name="Email" 
                                    type="email" value={this.state.email}
                                    setInput={this.handleInput}
                                    required
                                />
                            </div>
                            <div className="col s12 input-field">
                                <Input id="password" name="Password" 
                                        type="password" value={this.state.password}
                                        setInput={this.handleInput}
                                        required
                                    />
                            </div>
                            <div className="col s12 input-field">
                                <Input id="confirmPass" name="Confirm Password" 
                                        type="password" value={this.state.confirmPass}
                                        setInput={this.handleInput}
                                        required
                                    />
                            </div>
                        </div>

                        <button type="submit"
                        className="waves-effect waves-light btn btn-primary">
                            Enviar
                        </button>
                    </div>
                </div>
            </div>
        )
    }

    render(){
        return(
            <form onSubmit={e => this.handleSubmit(e) }>
                {this.renderForm()}
            </form>
        )
    }

}

export default SignUp;