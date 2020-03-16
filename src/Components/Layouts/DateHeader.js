import React, {Component} from 'react'


let time = new Date();
let year = time.getFullYear();
let month = time.getMonth() +1;
let day =  time.getDate();

export class DateHeader extends Component{

  state={
    year:year,
    month:month,
    date:day
  }


  componentDidMount(){
    this.props.time(this.state)
  }

  render(){
    return(

        <h1>{this.state.month}/{this.state.date}/{this.state.year} </h1>
      )
  }
}


export default DateHeader;
