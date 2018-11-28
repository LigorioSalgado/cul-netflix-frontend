import React from 'react';
import {Route} from 'react-router-dom';
import {Home} from './Components/Home';
import Signup from './Components/SignUp/SignUp';

export default[
    <Route exact path="/" component={Home}  key={0}/>,
    <Route exact path="/signup" component={Signup} key={1}/>


]