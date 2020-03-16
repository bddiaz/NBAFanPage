import React, {Component} from 'react'
import ScoresList from './ScoresList'
import axios from 'axios'

export class LatestScores extends Component{
      constructor(props){
      super(props)
      //console.log(this.props)
      this.state= {
        gotDate: false,
        teams:[],
        players:[],
        game:[],
        gameResults: []
      }
    }
    async componentDidMount(){
        let url="https://www.balldontlie.io/api/v1/teams"
        axios
        .get(url)
        .then(res=> this.filterTeam(res))
        .catch(error => console.log(error));
        //
        //console.log(this.props.date)
        //console.log(this.props.date)
    }

    async componentDidUpdate(){

      if (this.props.date !== null & this.state.gotDate ===false){
        this.setState({gotDate:true})
        let date = this.props.date;
        let url2 = `https://www.balldontlie.io/api/v1/games?seasons[]=2019&dates[]=${date}`
        axios
        .get(url2)
        .then(res=>this.setState({gameResults: res.data.data}))
        .catch(error => console.log(error));
      }
    }


    filterTeam = (res) => {
      let copy = res.data.data
      copy.forEach(function(team){
        delete team.conference;
        delete team.division;
      });
      this.setState({teams:copy})

    }


      render(){
        return(
          <div style={boxStyle} >
            <h1 style={titleStyle}> Latest Scores</h1>
            <div style={scoreBoxStyle}>
              <ScoresList scores = {this.state.gameResults}/>

            </div>

          </div>
        )
      }
    }

  let boxStyle ={
    background:'rgb(36, 46, 69)',
    borderRadius:'20px',
    border: '5px solid rgb(82, 122, 116)',
    gridColumn:'1/span 2',

    //overflow: 'hidden'

  }

    let scoreBoxStyle={
      display:'grid',
      gridTemplateRows: '1fr 1fr',
      height:'400px',
      overflowY:'scroll',
//      overflowY:'scroll'
    }


    let titleStyle={
      padding:'20px',
      textAlign:'center',
      color:'white'
    }

    export default LatestScores
