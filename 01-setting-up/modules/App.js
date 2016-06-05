import React, {Component} from 'react';
import NavLink from './NavLink';
import {IndexLink} from 'react-router';
export default class App extends Component{
  render() {
    return (
    	<div>
    	   <h1>Hello, React Router!</h1>
    	   <ul role="nav">
            <li><NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink></li>
    	   	  <li><NavLink to="/about">About</NavLink></li>
    	   	  <li><NavLink to="/repos">Repos</NavLink></li>
    	   </ul> 
           {this.props.children} 
    	</div>
    )  
  }
}
