import React, { Component } from 'react';
import Input from '../Input/Input';
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

const SIGNUP = gql`
    mutation Register($first_name:String!,$last_name:String!,$email:String!,
        $password:String!){
        signup(data:{first_name:$first_name,
            last_name:$last_name,
            email:$email,
            password:$password
        }){
            token
        }
    }
`;

class SignUp extends Component{

    constructor(props){
        super(props)
        this.state = {
            first_name:"",
            last_name:"",
            email:"",
            password:"",
            passConfirm:""

        }
    }

    setInput = (e)=>{
        const {id,value} = e.target
        this.setState(
            {[id]:value}
        )
    }
    
    catchData =  (data) => {
       const {token} =  data.signup;
       localStorage.setItem('netflixtoken',token);
       this.props.history.push('/')
    }

    handleSubmit = (e,signup) => {
        e.preventDefault();
        console.log(this.state)
        const {passConfirm,password} =  this.state;
        if(password === passConfirm){
            signup({variables:{...this.state}})
        }else{
            alert("Password does not match")
        }

    }

    renderForm = () => (
         <div className="col s12 offset-s1">
                <div className="row">
                    <div className="input-field col s6">
                    <Input name="First Name" id="first_name" type="text" 
                        placeholder="Your name" setInput={this.setInput}
                        value={this.state.first_name}
                        required
                    />
                    </div>
                    <div className="input-field col s6">
                    <Input name="Last Name" id="last_name" type="text" 
                            setInput={this.setInput}
                            value={this.state.last_name}

                    />
                    </div>
                </div>

                <div className="row">
                <div className="input-field col s12">
                    <Input name="Email" id="email" type="email" 
                         setInput={this.setInput}
                         value={this.state.email}

                         />
                </div>
                <div className="input-field col s12">
                    <Input name="Password" id="password" type="password" 
                         setInput={this.setInput}
                         value={this.state.password}

                         />
                </div>
                <div className="input-field col s12">
                    <Input name="Confirm Password" id="passConfirm" type="password" 
                         setInput={this.setInput}
                         value={this.state.passConfirm}

                         />
                </div>
             </div>
                <button className="waves-effect waves-ligth btn btn-primary">Enviar</button>
            </div>
       
    )


  render() {
        return (
            <Mutation  mutation={SIGNUP}>
            {
                (signup,{data,error}) => {
                    if (data) this.catchData(data)
                    if(error)(alert(error.message))
                   return (
                    <div className="container Signup">
                        <div className="row">
                            <form action="" onSubmit ={e =>  this.handleSubmit(e,signup)} >
                                {this.renderForm()}
                            </form>
                        </div>
                    </div> 
                   )
                }
            }
            </Mutation>
        
        );
    }


}


export default SignUp