import React, {Component} from 'react';
import PropTypes from 'prop-types';

class NbaList extends Component {
  getStyle = () =>{
    if(this.props.players.active){
      return {
        padding: '10px',
        borderBotom: '1px #ccc dotted',
        backgroundColor: '#f4f4f4'
      };
    }else{
      return {
        padding: '10px',
        borderBotom: '1px #ccc dotted',
        backgroundColor: 'blue'
      }
    }
  }


  render(){

    let {id, name }= this.props.players;
    return(
      <div style={this.getStyle()}>
        <p>
          <input type = "checkbox" onChange ={this.props.markActive.bind(this, id)}/> {' '}
          {name}
          <button style={btnStyle} onClick={this.props.delete.bind(this,id)}> X </button>
        </p>
      </div>
    )
  }
}
// PropTypes
NbaList.propTypes ={
  players: PropTypes.object.isRequired
}

let btnStyle = {
  background: 'red',
  color:'white',
  border:'none',
  padding:'5px 9px',
  borderRadius:'50%',
  cursor: 'pointer',
  float:'right'
}


export default NbaList;
