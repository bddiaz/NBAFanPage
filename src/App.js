import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
//import Nba from './Components/Nba';
import Header from './Components/Layouts/Header';
import About from './Components/pages/About';
import LatestScores from './Components/Layouts/LatestScores'
import LatestNews from './Components/Layouts/LatestNews'
import TopPlayers from './Components/Layouts/TopPlayers'
import AddPlayer from './Components/AddPlayer'



class App extends Component {
  constructor(props){
  super(props);
  this.state = {
    players:[],
    date: null
  };
}
/*
  addPlayer = (name) =>{
    console.log(name);
    let newPlayer = {
      id:4,
      name,
      active: true
    }
    this.setState({players:[...this.state.players, newPlayer]})
  }
  */

  // receives time from date header and sets it to the state
  setTime = (time) =>{
    this.setState({date:`${time.year}-${time.month}-${time.date-1}`}, ()=>{
    });
  }


  render(){
    return (
      <Router>
        <div className="App">
          <div className = "container">
            <Header time={this.setTime}/>
            <Route exact path="/" render={props =>(
              <React.Fragment>
                <div style={compLayout}>
                  <div style={searchStyle}>
                  <AddPlayer  addPlayer = {this.addPlayer}/>
                  </div>
                  <LatestScores date={this.state.date}/>
                  <TopPlayers date ={this.state.date}/>
                  <LatestNews/>
                </div>
              </React.Fragment>
            )}/>
            <Route path="/about" component = {About}/>
          </div>
        </div>
      </Router>
    );
  }
}

let searchStyle={
  gridColumn:'1/4'
}

let compLayout= {
  display:'grid',
  gridTemplateColumns:'1fr 1fr 1fr',
  gridAutoRows: 'minmax(25px, auto)',
  gridGap:'1em',
  justifyItems:'stretch',
  alignItems:'stretch'

}


export default App;
