import React, { Component } from 'react';
import {Mutation} from 'react-apollo'
import gql from 'graphql-tag';
import {Input} from '../../common/Input'


const LOGIN = gql`

    mutation LOGIN($email:String!,$password:String!){
        login(email:$email,password:$password){
            token
        }
    }

`



class Login extends Component{


    constructor(props){
        super(props)
        this.state = {
            email:"",
            password:""
        }
    }

    handleInput = (e) => {
        const {id,value} = e.target

        this.setState({
            [id]:value
        })

    }

    handleForm = (e,login) => {
        console.log(this.state)
        e.preventDefault();
        login({variables:{...this.state}})
    }

    catchData = (data) =>{
        const {token} =  data.login
        localStorage.setItem("netflixToken",token);
        this.props.history.push('/')
    }

    catchError = (error) => {
        console.log(error)
    } 

    render(){
        return(
            <Mutation mutation={LOGIN}>
                {
                    (login,{data,error,loading}) => {
                        if(data) this.catchData(data)
                        if(error) this.catchError(error)
                        return(
                        <form onSubmit={e => this.handleForm(e,login)} >
                            <div className="container">
                                <div className="row">
                                    <div className="col s12 input-field">
                                        <Input type="email" 
                                        id="email" name="Email" 
                                        value={this.state.email}
                                        setInput={this.handleInput}
                                        required
                                        />
                                    </div>
                                    <div className="col s12 input-field">
                                        <Input type="password" 
                                            id="password" name="Password" 
                                            value={this.state.password}
                                            setInput={this.handleInput}
                                            required
                                            />
                                    </div>
                                    <button type="submit" 
                                    className="waves-effect waves-light btn btn-primary" >
                                        Enviar
                                    </button>
                                </div>    
                            </div>
                        </form>
                        )

                    }

                }
            </Mutation>
        )
    }


}

export  default Login;