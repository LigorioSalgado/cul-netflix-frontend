import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Input extends Component{

    constructor(props){
        super(props)
        this.state = {
            value:props.value
        }
    }

    componentDidUpdate(prevProps){
        if(prevProps.value !== this.props.value){
            this.setState({
                value:this.props.value
            })
        }


    }

    render(){
       
        return(
            <React.Fragment>
                 <input  id={this.props.id} 
                 type={this.props.type} className="validate" onChange={this.props.setInput}
                 value={this.state.value}
                 required={this.props.required}
                 />
                 <label htmlFor={this.props.id}>{this.props.name}</label>
            </React.Fragment>

        )
    }

}

Input.propTypes = {
    placeholder:PropTypes.string,
    id:PropTypes.string.isRequired,
    type:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    setInput:PropTypes.func.isRequired,
    value:PropTypes.any.isRequired,
    required:PropTypes.bool
}

Input.defaultProps = {
    required:false
}


export default Input;