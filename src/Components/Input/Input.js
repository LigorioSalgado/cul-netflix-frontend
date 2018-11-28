import React, { Component } from 'react';
import PropTypes from 'prop-types'


class Input extends Component{

    constructor(props){
        super(props)
    }

    render(){
        return(
            <React.Fragment>
                 <input  id={this.props.id} 
                 type={this.props.type} className="validate" onChange={this.props.setInput}
                 
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
    setInput:PropTypes.func.isRequired
}

Input.defaultProps = {
    placeholder:""
}


export default Input;