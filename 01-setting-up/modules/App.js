import React, {Component} from 'react';
import NavLink from './NavLink';
export default class App extends Component{
  render() {
    return (
    	<div>
    	   <h1>Hello, React Router!</h1>
    	   <ul role="nav">
    	   	  <li><NavLink to="/about">About</NavLink></li>
    	   	  <li><NavLink to="/repos">Repos</NavLink></li>
    	   </ul>  
    	</div>
    )  
  }
}
