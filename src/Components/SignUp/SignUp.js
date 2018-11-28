import React, { Component } from 'react';
import Input from '../Input/Input';

class SignUp extends Component{

    constructor(props){
        super(props)
    }

    setInput = (e)=>{
        console.log(e.target)
    }

  render() {
        return (
            <div className="container Signup">
                <div className="row">
                 <div className="col s10 offset-s4">
                    <div className="row">
                        <div className="input-field col s6">
                           <Input name="First Name" id="first_name" type="text" 
                            placeholder="Your name" setInput={this.setInput}
                           />
                        </div>
                        <div className="input-field col s6">
                            <input id="name" type="text" class="validate"/>
                            <label for="name">Password</label>
                        </div>
                    </div>

                    </div>
                </div>

                 <div className="row">
                    <div className="col s6 offset-s4">
                    <div className="row">
                        <div className="input-field col s6">
                           <Input name="Name" id="name1" type="text" 
                             setInput={this.setInput}
                           />
                        </div>
                    </div>

                    </div>
                </div>
            </div> 
        );
    }


}


export default SignUp