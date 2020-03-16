import React, {Component} from 'react';

export class AddPlayer extends Component{
  state={
    name: ''
  }

  handleChange = (e)=> {
    this.setState({name:e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addPlayer(this.state.name);
    this.setState({name:''});
  }
  render(){
    return(

      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr',
        justifyItems:'stretch',
        alignItems:'stretch',
        gridGap:'1em'
      }}>
        <input
          type="text"
          name="title"
          placeholder="add player"
          style ={{
            gridColumn:'1/4',
            padding:'5px',
            background:'transparent',
            borderRadius:'5px',
            border:'3px solid white'
          }}
          value={this.state.name}
          onChange = {this.handleChange}
        />
      <input
        type="submit"
        value="Submit"
        className="btn"
        style ={{
          background:'transparent',
          borderRadius:'5px',
          border:'3px solid white',
          color:'white',
          gridColumn:'4'
        }} />
  </div>

    )
  }
}

export default AddPlayer
