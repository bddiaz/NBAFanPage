import React, {Component} from 'react'


export class LatestNews extends Component{


  render(){
    return(
      <div style={{background:'rgb(100, 127, 189)',borderRadius:'20px',border: '5px solid rgb(82, 122, 116)'}}>
        <h1 style={headerStyle}> LatestNews </h1>
      </div>
    )
  }
}
let headerStyle ={
  textAlign:'Center',
  padding:'20px'
}

export default LatestNews;
