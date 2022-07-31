import { Component } from 'react'

class Card extends Component {
  render() {
    return this.props.monsters.map((monster) => (
      <div key={monster.id}>
        <h1>{monster.name}</h1>
      </div>
    ))
  }
}

export default Card
