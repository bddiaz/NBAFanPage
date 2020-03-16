import React, {Component} from 'react'
import axios from 'axios'

export class TopPlayers extends Component{
  constructor(props){
  super(props)
  this.state ={
    topPlayers:[],
    gotDate:false,
    gameIds:[]
  }
}



getStats =()=>{
  //console.log('hi')
  for (let i=0;i<this.state.gameIds.length; i++){
    let url= `https://www.balldontlie.io/api/v1/stats?game_ids[]=${this.state.gameIds[i]}`
    axios
      .get(url)
      .then(res => this.filterPlayer(res))
      .catch(error => console.log(error))
    }
  }


  filterPlayer = (res) =>{
      let copy = res.data.data;
      copy.forEach(player => {
        if(player.ast+ player.reb + player.pts*2>70){
          this.setState({topPlayers:[...this.state.topPlayers, player]})
          }
        });
      }

  filterId =(res) =>{
    let copy = res.data.data;
    let ids= copy.map(game => game.id)
    this.setState({gameIds: ids})
    this.getStats()
  }


    async componentDidUpdate(){
      //console.log(this.state.gotDate)
      if(this.props.date !== null & this.state.gotDate === false){
        this.setState({gotDate:true})
        let url = `https://www.balldontlie.io/api/v1/games?seasons[]=2019&dates[]=${this.props.date}`
        axios
        .get(url)
        .then(res=> this.filterId(res))
        .catch(error => console.log(error));
    }
  }


  render(){
    return(
      <div style={{background:'rgb(178, 207, 189)',borderRadius:'20px',border: '5px solid rgb(82, 122, 116)'}}>
        <h1 style ={headerStyle}> Top Performances</h1>
        <div style ={topPlayersStyling}>
          {this.state.topPlayers.map((players)=>(
            <div key ={players.player.id} style={{border:'#333 1px solid', padding:'1em'}}>
              <div>{players.player.first_name} {players.player.last_name}:</div>
              <p>{players.ast} assists, </p>
              <p>{players.reb} rebounds, </p>
              <p>{players.pts} points </p>

            </div>
        ))}
        </div>
      </div>
    )
  }
}


let topPlayersStyling={
  display:'grid',
  gridGap:'1px',
  padding:'1em',
  gridTemplateColumns:'1fr 1fr ',
  height:'400px',
  overflowY:'scroll'
}

let headerStyle ={
  border:'2px black',
  textAlign:'Center',
  padding:'20px'
}

export default TopPlayers
