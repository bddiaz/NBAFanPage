import React, {Component} from 'react'

export class ScoresList extends Component{

  render(){
    return(
      <div>
         {this.props.scores.map((games)=>(
          <p key ={games.id} style={scoresStyle}> {games.home_team.abbreviation}  {games.home_team_score} - {' '}
              {games.visitor_team_score} {games.visitor_team.abbreviation}</p>
        ))}

        </div>
    )
  }
}


let scoresStyle={
  fontSize:'20px',
  borderBotom: '1px #ccc dotted',
  padding: '10px',
  color:'white',
  borderRadius:'20px',
  textAlign: 'center'
}
export default ScoresList
