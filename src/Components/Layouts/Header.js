import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import DateHeader from './DateHeader';

export class Header extends Component{
  render(){
  return (
    <div>
    <header style= {dateHeaderStyle}>
      <DateHeader time = {this.props.time}/>
    </header>
    <header style = {headerStyle}>
      <h1 style = {titleStyle}> NBA Encyclopedia </h1>
      <Link style={linkStyle} to="/">Home</Link> | <Link style = {linkStyle} to="/About"> About </Link>
    </header>
    </div>
      )
    }
  }

let titleStyle = {
  position:'relative',
  top: '-40px',
  fontSize:'50px'

}

let dateHeaderStyle = {
  background:'transparent',
  color: 'white',
  textAlign:'left',
  margin: '0px',
  border:'0px',
  padding:'5px'
}

let linkStyle ={
  color: 'white',
  textDecoration: 'none'
}

let headerStyle ={
  background: 'transparent',
  color: 'white',
  //position:'absolute',
  //left: '75px',
  //top:'25px',
  textAlign:'center',
  padding:'75px'
}

export default Header;
