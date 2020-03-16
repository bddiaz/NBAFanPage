import React, {Component} from 'react';
import NbaList from './NbaList';
import PropTypes from 'prop-types';


class Nba extends Component {


  render(){
  return this.props.players.map((player) => (
    <NbaList key={player.id} players = {player} markActive={this.props.markActive} delete={this.props.delete}/>
  ));
  }
}

Nba.propTypes = {
  players: PropTypes.array.isRequired
}

export default Nba;
